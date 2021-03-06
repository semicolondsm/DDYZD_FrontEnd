import request from '../axios/axios'

export default{
    getFeed(page : number){
        return request({
            url : `/feed/list?page=${page}`,
            method : 'get',
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`
            }
        })
    },
    putFlag(id : number){
        return request({
            url : `/feed/${id}/flag`,
            method : 'put',
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`
            }
        })
    }
}
