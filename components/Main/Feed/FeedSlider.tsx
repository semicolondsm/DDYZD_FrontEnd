import { useState, useRef, useEffect } from 'react'
import * as S from './styles'
import feedId from '@/utils/api/feedId';
import { FeedData } from '@/interfaces'

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
        <li>
            <S.CardSection>
                {
                    media.length!==0 ? 
                    <S.Slider>
                        <S.SliderImages onTouchStart={Swipe} onTouchMove={TouchMove} onTouchEnd={TouchEnd} ref={slideRef} style={{width: `${media.length*100}%`}}>
                            {
                                media.map((i,index)=>(<img key={index} style={{width: `calc( 100% / ${media.length} )`, transform: `translateX(${100*index}%)`}} src={`${process.env.NEXT_PUBLIC_URL}/file/${i}`}></img>))
                            }
                        </S.SliderImages>
                        <S.Prev onClick={prev}>
                            <svg id="버튼" xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 40 41">
                            <ellipse id="타원_106" data-name="타원 106" cx="20" cy="20.5" rx="20" ry="20.5" fill="#c8c8c8" opacity="0.5"/>
                            <rect id="사각형_628" data-name="사각형 628" width="2" height="18" rx="1" transform="translate(13.199 21.339) rotate(-135)" fill="#fff"/>
                            <rect id="사각형_629" data-name="사각형 629" width="2" height="18" rx="1" transform="translate(25.927 31.663) rotate(135)" fill="#fff"/>
                            </svg>
                        </S.Prev>
                        <S.Next onClick={next}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 40 41">
                        <g id="버튼" transform="translate(-1050 -1554)">
                            <ellipse id="타원_106" data-name="타원 106" cx="20" cy="20.5" rx="20" ry="20.5" transform="translate(1050 1554)" fill="#c8c8c8" opacity="0.5"/>
                            <rect id="사각형_628" data-name="사각형 628" width="2" height="18" rx="1" transform="translate(1064.073 1562.611) rotate(-45)" fill="#fff"/>
                            <rect id="사각형_629" data-name="사각형 629" width="2" height="18" rx="1" transform="translate(1076.801 1572.935) rotate(45)" fill="#fff"/>
                        </g>
                        </svg>


                        </S.Next>
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