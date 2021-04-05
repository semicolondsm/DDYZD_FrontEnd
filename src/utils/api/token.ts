import request from '../axios/axios'

export default{
    getToken(token:string){
        return request({
            url:"/users/token",
            method:"get",
            headers:{
                "access-token": "Bearer " + token
            }
        })
    }
}