import { useEffect } from "react"
import Feed from "./Feed/Feed"
import MainSlide from "./MainSlide/MainSlide"
import user from '@/utils/api/user'
import { useRouter } from "next/dist/client/router"
import token from '@/utils/api/token'

const Main = () => {
    const {query={}} = useRouter();
    const {code} = query
    useEffect(()=>{
        if(typeof code!=="undefined"){
            user.getAuthToken(code) 
            .then((res)=>{
                // auth 토큰 받았으면 대동여지도 토큰 넘겨주기
                console.log(res.data['access-token'])
                token.getToken("token",res.data['access-token'])
                .then((res)=>{
                    console.log(res)
                }).catch((err)=>{
                    console.log(err)
                })
                
            }).catch((err)=>{
                console.log(err)
            })
        }
    },[query]) 
    return (
        <>
            <MainSlide></MainSlide>
            <Feed></Feed>
        </>
    )
}

export default Main