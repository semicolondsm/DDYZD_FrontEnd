import { useEffect, useState } from "react";
import club from "../../../../utils/api/club";
import { FeedData } from "@/interfaces/index";
import FeedCard from "./FeedCard/FeedCard";
import * as S from "./styles"
function ClubFeed({club_id} : {club_id : number}){
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
        
          if(scrollTop + clientHeight >= scrollHeight-200){
              club.getFeed(club_id, page+1)
              .then((res)=>{
                  setPage(page+1);
                  setData([...data, ...res.data]);
                  if(res.data.lenght===0){
                      setLast(true)
                  }
              })
              window.onscroll=null;
          }
    }
    
    useEffect(()=>{
        club.getFeed(club_id, page)
       .then((res)=>{
        setData(res.data);
       })
       .catch((e)=>console.log(e))
    },[])

    useEffect(()=>{
        if(!last) {
            window.onscroll=infiniteScroll;
        }

    }, [data])

    return(
        <S.FeedList>
            {
                data?.map((i : FeedData)=>(<FeedCard key={i.feedId} props={i}></FeedCard>))
            }
        </S.FeedList>
    )
}
export default ClubFeed;