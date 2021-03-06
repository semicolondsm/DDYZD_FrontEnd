import request from '../axios/axios'

export default{
    getFeed(id : number){
        return request({
            url : `/feed/${id}`,
            method : 'get'
        })
    }
}
