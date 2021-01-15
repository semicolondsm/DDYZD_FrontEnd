import * as S from "./styles"
import { FeedData } from "../../interfaces"
import { useEffect, useRef, useState } from "react";
function FeedCard({props} : {props: FeedData}){
    const [page, setPage] = useState(0);
    const slideRef = useRef<HTMLDivElement>(null);
    function prev(){
        if(page>0) setPage(page-1);
        
    }
    function next(){
       if(page<props.src.length-1) setPage(page+1);
    }
    useEffect(()=>{
        if(slideRef.current) slideRef.current.style.transform=`translateX(${100/props.src.length*-page}%)`;
    },[page])
    return(
        <li>
            <S.CardHeader>
                <img src={props.profile}></img>
                <S.CardHeaderContent>
                    <div>
                        <div><strong>{props.name}</strong></div>
                        <div></div>
                    </div>
                    <S.CreatedAt>{props.created_at}</S.CreatedAt>
                </S.CardHeaderContent>
                <div></div>
            </S.CardHeader>
            <S.CardSection>
                <S.Content>{props.content}</S.Content>
                <S.Slider>
                    <S.SliderImages ref={slideRef} style={{width: `${props.src.length*100}%`}}>
                        {
                            props.src.map((i)=>(<img style={{width: `calc( 100% / ${props.src.length} )`}} src={i}></img>))
                        }
                    </S.SliderImages>
                    <S.Prev onClick={prev}>prev</S.Prev>
                    <S.Next onClick={next}>next</S.Next>
                </S.Slider>
            </S.CardSection>
            <S.CardBottom>
                <S.CardUtil>
                    <div></div>
                    <S.SliderState>
                    {
                        props.src.map((_i,index)=>(<S.StateButton style={page==index ? {background: "#713EFF"} : undefined}></S.StateButton>))
                        
                    }
                    </S.SliderState>
                    <div></div>
                </S.CardUtil>
                <S.CardState>
                    <div>FLAGS {props.flag}개</div>
                    <div>D-{props.dday}</div>
                </S.CardState>
            </S.CardBottom>
        </li>
    )
}
export default FeedCard;