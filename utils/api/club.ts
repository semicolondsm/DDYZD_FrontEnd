import request from '../axios/axios'

export default{
    getClubs(){
        return request({
            url : `/club/list`,
            method : 'get'
        })
    }
}
