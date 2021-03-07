import { useEffect } from "react";

const Oauthurl="https://developer.dsmkr.com/external/login?redirect_url=https://ddyzd.dsmkr.com/callback&client_id=ab840667ddcd41dc81b29f8f128a0e66"
function Login(){
    useEffect(()=>{
        window.location.href=Oauthurl;
    },[])
    return(
        <div></div>
    )
}
export default Login;