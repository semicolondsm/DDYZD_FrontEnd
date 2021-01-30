import axios from 'axios'

 export default{
     getAuthToken(code:string|string[]){
         return axios({
             url:"http://54.180.98.91:8080/dsmauth/token",
             method: "post",
             data:{
                client_id: "2866a041a4594f3fba25f62126e49557",
                client_secret: "b1012e6e2af944d28850d0901e86374e",
                code: code
             }
         })
     }
 }