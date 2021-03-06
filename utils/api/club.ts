import request from '../axios/axios'

export default{
    follow(id : number){
        return request({
            url: `/club/${id}/follow`,
            method:'post',
            headers:{
                "access-token": window.localStorage.getItem('access-token')
            }
        })
    },

    unfollow(id : number){
        return request({
            url:`/club/${id}/follow`,
            method:'delete',
            headers:{
                "access-token": window.localStorage.getItem('access-token')
            }
        })
    },
    getClubList(){
        return request({
            url : `/club/list`,
            method : 'get'
        })
    },
    getClubPromotion(){
        return request({
            url : `/club/promotional`,
            method : `get`,
        })
    }
}
