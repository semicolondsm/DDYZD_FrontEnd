import { useState, useRef, useEffect } from 'react'
import * as S from './styles'
import feedId from '@/src/utils/api/feedId';

const FeedSlider = (props: {id: number}) => {
    const [page, setPage] = useState<number>(0);
    const [start,setStart] = useState<number>(0);
    const [end, setEnd] = useState<number>(0);
    const [media, setMedia] = useState<string[]>([]);
    const slideRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const { id } = props;
        if(!id) return
        console.log(id)
        // 사진 불러오기
        feedId.getFeed(id)
        .then((res) => {
            setMedia(res.data.media);
        })
        .catch(err => {
            console.log(err)
        })
    }, [props.id])
    function prev(){
        if(page>0) setPage(page-1);
        
    }
    function next(){
       if(page<media.length-1) setPage(page+1);
    }
    function Swipe(e : React.TouchEvent){
        setStart(e.touches[0].clientX);
    }
    function TouchEnd(){
        let temp = start-end;
        console.log(temp);
        if(temp>60 && end!=0) next();
        else if(temp<-60 && end!=0) prev();
        setStart(0);
        setEnd(0);
    }
    function TouchMove(e: React.TouchEvent){
        setEnd(e.touches[0].clientX);
    }
    useEffect(()=>{
        if(media.length!==0) slideRef.current!.style.transform=`translateX(${100/media.length*-page}%)`;
    },[page])
    return (
        <li style={{background: "white"}}>
            <S.CardSection>
                {
                    media.length!==0 ? 
                    <S.Slider>
                        <S.SliderImages onTouchStart={Swipe} onTouchMove={TouchMove} onTouchEnd={TouchEnd} ref={slideRef} style={{width: `${media.length*100}%`}}>
                            {
                                media.map((i,index)=>(<img key={index} style={{width: `calc( 100% / ${media.length} )`, transform: `translateX(${100*index}%)`}} src={`${process.env.NEXT_PUBLIC_URL}/file/${i}`} />))
                            }
                        </S.SliderImages>
                    </S.Slider>
                    : null
                }
            </S.CardSection>
            <S.CardBottom>
                <S.CardUtil>
                    <S.SliderState>
                    {
                        media.map((_i,index)=>(<S.StateButton key={index} style={page==index ? {background: "#713EFF"} : undefined}></S.StateButton>))
                        
                    }
                    </S.SliderState>
                </S.CardUtil>
            </S.CardBottom>
        </li>
    )
}

export default FeedSlider