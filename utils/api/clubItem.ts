import request from '../axios/axios'

export default{
    getFeed(page : number){
        return request({
            url : `/feed/list?page=${page}`,
            method : 'get'
        })
    },
    applyItem(e : any){
        // 나중에 코드 수정해야됨
        return request({
            url : `/club/19/supply`,
            method : 'post',
            headers : {
                "Authorization" : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MCIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2MTYwNDY2NDMsImV4cCI6MTYxNjA1Mzg0M30.EfYjaNVRk10wSpsBubpoYZaGSJqkQVH5jCDyOxxdOzk`
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
    getItemList(_id : number){
        return request({
            url : `/club/19/supply/list`,
            method : 'get',
            headers : {
                "Authorization" : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MCIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2MTYwNDY2NDMsImV4cCI6MTYxNjA1Mzg0M30.EfYjaNVRk10wSpsBubpoYZaGSJqkQVH5jCDyOxxdOzk`
            }
        })
    }
}
