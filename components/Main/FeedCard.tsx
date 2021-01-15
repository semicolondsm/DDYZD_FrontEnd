import * as S from "./styles"
import { FeedData } from "../../interfaces"
import { useEffect, useRef, useState } from "react";
import FlagToggle from "./FlagToggle";
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
                    <div style={{display: "flex", alignItems: "center"}}>
                        <div><strong>{props.name}</strong></div>
                        <svg style={{marginLeft: "2px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <g id="그룹_550" data-name="그룹 550" transform="translate(-1283 -160)">
                            <circle id="타원_133" data-name="타원 133" cx="8" cy="8" r="8" transform="translate(1283 160)" fill="#c8c8c8"/>
                            <g id="pin" transform="translate(1286.801 162)">
                            <g id="그룹_414" data-name="그룹 414">
                                <path id="패스_85" data-name="패스 85" d="M89.533,0a4.108,4.108,0,0,0-4.2,4,3.857,3.857,0,0,0,.5,1.9l3.466,5.97a.269.269,0,0,0,.459,0L93.23,5.9a3.857,3.857,0,0,0,.5-1.9A4.108,4.108,0,0,0,89.533,0Zm0,6a2.054,2.054,0,0,1-2.1-2,2.1,2.1,0,0,1,4.2,0A2.054,2.054,0,0,1,89.533,6Z" transform="translate(-85.333)" fill="none" stroke="#fff" strokeWidth="1"/>
                            </g>
                            </g>
                        </g>
                        </svg>
                    </div>
                    <S.CreatedAt>{props.created_at}</S.CreatedAt>
                </S.CardHeaderContent>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="5" viewBox="0 0 25 5">
                <g id="그룹_511" data-name="그룹 511" transform="translate(-1065 -1035)">
                    <circle id="타원_91" data-name="타원 91" cx="2.5" cy="2.5" r="2.5" transform="translate(1065 1035)" fill="#3d3d3d"/>
                    <circle id="타원_92" data-name="타원 92" cx="2.5" cy="2.5" r="2.5" transform="translate(1075 1035)" fill="#3d3d3d"/>
                    <circle id="타원_93" data-name="타원 93" cx="2.5" cy="2.5" r="2.5" transform="translate(1085 1035)" fill="#3d3d3d"/>
                </g>
                </svg>

            </S.CardHeader>
            <S.CardSection>
                <S.Content>{props.content}</S.Content>
                <S.Slider>
                    <S.SliderImages ref={slideRef} style={{width: `${props.src.length*100}%`}}>
                        {
                            props.src.map((i,index)=>(<img key={index} style={{width: `calc( 100% / ${props.src.length} )`}} src={i}></img>))
                        }
                    </S.SliderImages>
                    <S.Prev onClick={prev}>
                        <svg id="버튼" xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41">
                        <ellipse id="타원_106" data-name="타원 106" cx="20" cy="20.5" rx="20" ry="20.5" fill="#c8c8c8" opacity="0.5"/>
                        <rect id="사각형_628" data-name="사각형 628" width="2" height="18" rx="1" transform="translate(13.199 21.339) rotate(-135)" fill="#fff"/>
                        <rect id="사각형_629" data-name="사각형 629" width="2" height="18" rx="1" transform="translate(25.927 31.663) rotate(135)" fill="#fff"/>
                        </svg>
                    </S.Prev>
                    <S.Next onClick={next}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41">
                    <g id="버튼" transform="translate(-1050 -1554)">
                        <ellipse id="타원_106" data-name="타원 106" cx="20" cy="20.5" rx="20" ry="20.5" transform="translate(1050 1554)" fill="#c8c8c8" opacity="0.5"/>
                        <rect id="사각형_628" data-name="사각형 628" width="2" height="18" rx="1" transform="translate(1064.073 1562.611) rotate(-45)" fill="#fff"/>
                        <rect id="사각형_629" data-name="사각형 629" width="2" height="18" rx="1" transform="translate(1076.801 1572.935) rotate(45)" fill="#fff"/>
                    </g>
                    </svg>


                    </S.Next>
                </S.Slider>
            </S.CardSection>
            <S.CardBottom>
                <S.CardUtil>
                    <FlagToggle state={false}></FlagToggle>
                    <S.SliderState>
                    {
                        props.src.map((_i,index)=>(<S.StateButton key={index} style={page==index ? {background: "#713EFF"} : undefined}></S.StateButton>))
                        
                    }
                    </S.SliderState>
                    <svg id="clock" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                    <g id="그룹_515" data-name="그룹 515" transform="translate(13.838 6.96)">
                        <g id="그룹_514" data-name="그룹 514">
                        <path id="패스_117" data-name="패스 117" d="M242.676,129.468l-4.183-3.137v-6.39a1.162,1.162,0,1,0-2.324,0v6.971a1.16,1.16,0,0,0,.465.93l4.647,3.486a1.162,1.162,0,0,0,1.395-1.859Z" transform="translate(-236.169 -118.779)" fill="#350871"/>
                        </g>
                    </g>
                    <g id="그룹_517" data-name="그룹 517">
                        <g id="그룹_516" data-name="그룹 516">
                        <path id="패스_118" data-name="패스 118" d="M15,0A15,15,0,1,0,30,15,15.016,15.016,0,0,0,15,0Zm0,27.676A12.676,12.676,0,1,1,27.676,15,12.692,12.692,0,0,1,15,27.676Z" fill="#350871"/>
                        </g>
                    </g>
                    </svg>
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