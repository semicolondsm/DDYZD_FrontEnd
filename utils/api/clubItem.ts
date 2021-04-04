import request from '../axios/axios'

export default{
    getFeed(page : number){
        return request({
            url : `/feed/list?page=${page}`,
            method : 'get'
        })
    },
    applyItem(e : any,id : number){
        return request({
            url : `/club/19/supply`,
            method : 'post',
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`
            },
            data : {
                "price" : parseInt(e.price) * e.count,
                "name" :  e.name,
                "count" : e.count,
                "option" : e.option,
                "url" : e.url
            }
        })  
    },
    getItemList(id : number){
        return request({
            url : `/club/19/supply/list`,
            method : 'get',
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`
            }
        })
    }
}
