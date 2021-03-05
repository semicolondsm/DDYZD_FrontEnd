import request from '../axios/axios'

export default{
    getList(page : number){
        return request({
            url : `/feed/list?page=${page}`,
            method : 'get'
        })
    }
}
