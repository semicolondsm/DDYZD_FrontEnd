import * as S from "./styles"
import { useEffect, useRef, useState } from "react";
import FlagToggle from './FlagToggle';
const fileURL="https://api.semicolon.live"
function FeedCard({props} : {props: any}){

    const [page, setPage] = useState<number>(0);
    const [start,setStart] = useState<number>(0);
    const [end, setEnd] = useState<number>(0);
    const [flags, setFlags] = useState<number>(props.flags); 
    const slideRef = useRef<HTMLDivElement>(null);
    function prev(){
        if(page>0) setPage(page-1);
    }
    function next(){
       if(page<props.media.length-1) setPage(page+1);
    }
    function Swipe(e : React.TouchEvent){
        setStart(e.touches[0].clientX);
    }
    function TouchEnd(){
        let temp = start-end;
        if(temp>60 && end!=0) next();
        else if(temp<-60 && end!=0) prev();
        setStart(0);
        setEnd(0);
    }
    function TouchMove(e: React.TouchEvent){
        setEnd(e.touches[0].clientX);
    }
    useEffect(()=>{
        if(props.media.length!==0) slideRef.current!.style.transform=`translateX(${100/props.media.length*-page}%)`;
    },[page])
    function date(params : Date){
        let date = new Date(params);
        let diff = (((new Date()).getTime() - date.getTime()) / 1000),
        day_diff = Math.floor(diff / 86400);
        if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 )
            return `${date.getFullYear()}년 ${date.getDay()}월 ${date.getDate()}일`;
        return day_diff == 0 && (
                diff < 60 && "방금" ||
                diff < 120 && "1분 전" ||
                diff < 3600 && Math.floor( diff / 60 ) + "분 전" ||
                diff < 7200 && "1시간 전" ||
                diff < 86400 && Math.floor( diff / 3600 ) + "시간 전") ||
            day_diff == 1 && "어제" ||
            day_diff < 7 && day_diff + "일 전" ||
            day_diff < 31 && Math.ceil( day_diff / 7 ) + "주 전";
    }
    return(
        <li>
            <S.CardHeader>
                <img src={`${fileURL}/file/${props.profileImage}`}></img>
                <S.CardHeaderContent>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <div><strong>{props.clubName}</strong></div>
                    </div>
                    <S.CreatedAt>{date(props.uploadAt)}</S.CreatedAt>
                </S.CardHeaderContent>
            </S.CardHeader>
            <S.CardSection>
                <S.Content>{props.content}</S.Content>
                {
                    props.media.length!==0 ? 
                    <S.Slider>
                        <S.SliderImages onTouchStart={Swipe} onTouchMove={TouchMove} onTouchEnd={TouchEnd} ref={slideRef} style={{width: `${props.media.length*100}%`}}>
                            {
                                props.media.map((i: any,index : number)=>(<img key={index} style={{width: `calc( 100% / ${props.media.length} )`, transform: `translateX(${100*index}%)`}} src={`${fileURL}/file/${i}`}></img>))
                            }
                        </S.SliderImages>
                        <S.Prev onClick={prev}>
                        </S.Prev>
                        <S.Next onClick={next}>
                        </S.Next>
                    </S.Slider>
                    : null
                }
            </S.CardSection>
            <S.CardBottom>
                <S.CardUtil>
                    <FlagToggle setFlags={setFlags} flags={flags} feed_id={props.feedId} state={props.flag}></FlagToggle>
                    <S.SliderState>
                    {
                        props.media.map((_i:any,index:any)=>(<S.StateButton key={index} style={page==index ? {background: "#713EFF"} : undefined}></S.StateButton>))
                        
                    }
                    </S.SliderState>
                </S.CardUtil>
                <S.CardState>
                    <div>FLAGS {flags}개</div>
                </S.CardState>
            </S.CardBottom>
        </li>
    )
}
export default FeedCard;