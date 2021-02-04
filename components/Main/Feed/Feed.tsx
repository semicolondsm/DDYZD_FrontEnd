import { useEffect, useState } from "react"
import feed from "@/utils/api/feed"
import FeedCard from "./FeedCard"
import * as S from "./styles"
import { FeedData } from "@/interfaces";
import FeedModal from "@/components/Public/Modals/Menu/Feed";

/*const data = [
    {
        feedId : 0,
        clubName : "semicolone",
        profileImage : "https://avatars1.githubusercontent.com/u/74494938?s=200&v=4",
        isFollow : false,
        uploadAt : "2021년 01월 13일",
        pin : true,
        content : "안녕하세요! 팀 SEMICOLON;입니다. 1월13일부터 1월31일까지 새로운 팀원을 모집합니다.",
        media : [
            "https://scontent.xx.fbcdn.net/v/t1.15752-9/138512756_235059784854577_7452307084218051470_n.jpg?_nc_cat=103&ccb=2&_nc_sid=58c789&_nc_eui2=AeGrnNGpfNeJRT9NBAFoSTK6ZMJBIzlX1bFkwkEjOVfVsa4eijhgMHzG5XiRV62EN9mce-4psrbDlJsjmfE7TTJk&_nc_ohc=l9eDl0FDNQkAX93Vsk1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=50cea55969a4fbd3544893ec5aa096a5&oe=60250936",
            "https://scontent.xx.fbcdn.net/v/t1.15752-9/138512756_235059784854577_7452307084218051470_n.jpg?_nc_cat=103&ccb=2&_nc_sid=58c789&_nc_eui2=AeGrnNGpfNeJRT9NBAFoSTK6ZMJBIzlX1bFkwkEjOVfVsa4eijhgMHzG5XiRV62EN9mce-4psrbDlJsjmfE7TTJk&_nc_ohc=l9eDl0FDNQkAX93Vsk1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=50cea55969a4fbd3544893ec5aa096a5&oe=60250936",
            "https://scontent.xx.fbcdn.net/v/t1.15752-9/138512756_235059784854577_7452307084218051470_n.jpg?_nc_cat=103&ccb=2&_nc_sid=58c789&_nc_eui2=AeGrnNGpfNeJRT9NBAFoSTK6ZMJBIzlX1bFkwkEjOVfVsa4eijhgMHzG5XiRV62EN9mce-4psrbDlJsjmfE7TTJk&_nc_ohc=l9eDl0FDNQkAX93Vsk1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=50cea55969a4fbd3544893ec5aa096a5&oe=60250936",
            "https://scontent.xx.fbcdn.net/v/t1.15752-9/138512756_235059784854577_7452307084218051470_n.jpg?_nc_cat=103&ccb=2&_nc_sid=58c789&_nc_eui2=AeGrnNGpfNeJRT9NBAFoSTK6ZMJBIzlX1bFkwkEjOVfVsa4eijhgMHzG5XiRV62EN9mce-4psrbDlJsjmfE7TTJk&_nc_ohc=l9eDl0FDNQkAX93Vsk1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=50cea55969a4fbd3544893ec5aa096a5&oe=60250936",
            "https://scontent.xx.fbcdn.net/v/t1.15752-9/138512756_235059784854577_7452307084218051470_n.jpg?_nc_cat=103&ccb=2&_nc_sid=58c789&_nc_eui2=AeGrnNGpfNeJRT9NBAFoSTK6ZMJBIzlX1bFkwkEjOVfVsa4eijhgMHzG5XiRV62EN9mce-4psrbDlJsjmfE7TTJk&_nc_ohc=l9eDl0FDNQkAX93Vsk1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=50cea55969a4fbd3544893ec5aa096a5&oe=60250936"
        ], 
        isFlag : false,
        flags : 30,
    },
]*/

  
function Feed(){
    const [data, setData] = useState<FeedData[]>([]);
    const [page, setPage] = useState(0);
    const [last, setLast] = useState(false);
    function infiniteScroll(){
        let scrollHeight = Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight  
        );
        let scrollTop = Math.max(
          document.documentElement.scrollTop,
          document.body.scrollTop
        );
        let clientHeight = document.documentElement.clientHeight;
      
        if (scrollTop + clientHeight >= scrollHeight-200) {  
          feed.getFeed(page+1)
          .then((res)=>{
            setPage(page+1);
            setData([...data , ...res.data]);
            if(res.data.length===0){
              setLast(true)
            }
          })
          window.onscroll=null;
          
        }
      }
    useEffect(()=>{
        feed.getFeed(page)
        .then((res)=>setData(res.data))
        .catch((e)=>console.log(e))
    },[])
    useEffect(()=>{
      if(!last) window.onscroll=infiniteScroll;
    },[data])
    return(
        <S.FeedList>
          <FeedModal></FeedModal>
          {
              data.map((i)=>(<FeedCard key={i["feedId"]} props={i}></FeedCard>))
          }
            
        </S.FeedList>
    )
}
export default Feed;