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
                "Authorization" : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MCIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2MTU5NzUyNTYsImV4cCI6MTYxNTk4MjQ1Nn0.8sp47JVbgX_cx2t-v3X1QhwBGyrfdowdmN3PB8aVqk4`
            },
            data : {
                "price" : parseInt(e.price) * e.count,
                "name" :  e.name,
                "count" : e.count,
                "option" : e.option,
                "url" : e.url
            }
        })  
    }
}
