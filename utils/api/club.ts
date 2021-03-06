import request from '../axios/axios'

export default{
    getClubList(){
        return request({
            url : `/club/list`,
            method : 'get'
        })
    }
}
