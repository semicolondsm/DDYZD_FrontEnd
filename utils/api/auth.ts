import axios from 'axios'
import request from '../axios/axios'
export default{
    getToken(code : string){
        return request({
            url : `/users/token/code`,
            method : 'post',
            data:{
                code: code,
            }
        })
    },
    postToken(code : string){
        return axios({
            url : `https://developer-api.dsmkr.com/dsmauth/token`,
            method : 'post',
            data:{
                client_id : 'ab840667ddcd41dc81b29f8f128a0e66',
                client_secret : 'adbf21db93f240a8a2d1e4e3b446689c', 
                code: code,
            }
        })
    },
    getUsersToken(token : string){
        return request({
            url : `/users/token`,
            method :'get',
            headers : {
                'access-token' : `Bearer ${token}`
            }
        })
    },
    refreshToken(){
        return request({
            url : `/users/refresh`,
            method : 'get',
            headers : {
                "refresh-token" : `Bearer ${localStorage.refreshToken}`
            }
        })
    },
    getGCN(){
        return request({
            url: "/users/profile",
            method : 'get',
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`
            }
        })
    },
    getProfile(gcn : number){
        return request({
            url: `/users/${gcn}`,
            method : 'get',
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`
            }
        })
    }
}