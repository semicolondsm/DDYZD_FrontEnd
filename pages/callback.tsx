import { logout } from "@/components/Public/Header/Header";
import { AxiosError } from "axios";
import { useEffect } from "react";
import auth from "../utils/api/auth";
interface Clubs {
    club_id: number;
    club_name: string;
}

interface UserData {
    clubs: Clubs[];
    email: string;
    gcn: string;
    github_url: string;
    image_path: string;
    name: string;
    user_id: number;
}

export const onSilentRefresh = () => {
    auth.refreshToken()
        .then(OnLoginSuccess)
        .catch((e: AxiosError) => {
            e.response?.status === 401 && logout();
        });
};

export const OnLoginSuccess = async (res: any) => {
    localStorage.setItem("accessToken", res.data.access_token);
    localStorage.setItem("refreshToken", res.data.refresh_token);
    setTimeout(onSilentRefresh, 72000000);
    const gcn: any = await auth.getGCN();
    const { data }: { data: UserData } = await auth.getProfile(gcn.data.gcn);
    localStorage.setItem("userCache", JSON.stringify(data));
};
function Callback() {
    const onLogin = () => {
        const code = window.location.href.split("?code=")[1];
        auth.postToken(code).then((res) =>
            auth.getUsersToken(res.data["access-token"]).then(async (res) => {
                await OnLoginSuccess(res);
                window.location.href = "/";
            })
        );
        /*auth.getToken(code.split("?code=")[1].split("&state=")[0])
        .then(async (res)=>{ await OnLoginSuccess(res); window.location.href="/"})
        .catch((e)=>console.error(e))*/
    };
    useEffect(() => {
        onLogin();
    }, []);
    return <div>이동중...</div>;
}
export default Callback;
