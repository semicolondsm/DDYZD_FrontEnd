import * as S from "./styles"
import { useEffect, useRef, useState } from "react";

function Slide(){
    const [page, setPage] = useState<number>(0);
    const [start,setStart] = useState<number>(0);
    const [end, setEnd] = useState<number>(0);
    const slideRef = useRef<HTMLDivElement>(null);
    function prev(){
        if(page>0) setPage(page-1);
        
    }
    function next(){
       if(page<3) setPage(page+1);
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
        slideRef.current!.style.transform=`translateX(${100/4*-page}%)`;
    },[page])
    const data:any=[
        {
            img: "/images/슬라이드1.PNG"
        },
        {
            img: "/images/슬라이드2.PNG"
        },
        {
            img: "/images/슬라이드3.PNG"
        },
        {
            img: "/images/슬라이드4.PNG"
        }
    ]
    return(
        <li>
            <S.CardSection>
                    <S.Slider>
                        <S.SliderImages onTouchStart={Swipe} onTouchMove={TouchMove} onTouchEnd={TouchEnd} ref={slideRef} style={{width: `${4*100}%`}}>
                            {
                               data.map((i:any,index:any)=>(<img key={index} style={{width: `calc( 100% / ${4} )`, transform: `translateX(${100*index}%)`}} src={i.img}></img>))
                            }
                        </S.SliderImages>
                    </S.Slider>
            </S.CardSection>
            <S.CardBottom>
                <S.CardUtil>
                    <S.SliderState>
                    {
                        data.map((_i:any,index:any)=>(<S.StateButton key={index} style={page==index ? {background: "#713EFF"} : undefined}></S.StateButton>))
    
                    }
                    </S.SliderState>
                </S.CardUtil>
            </S.CardBottom>
        </li>
    )
}
export default Slide;