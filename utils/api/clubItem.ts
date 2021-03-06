import request from '../axios/axios'

export default{
    getFeed(page : number){
        return request({
            url : `/feed/list?page=${page}`,
            method : 'get'
        })
    }
}
