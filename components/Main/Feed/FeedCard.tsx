import * as S from "./styles";
import { FeedData } from "@/interfaces";
import { useEffect, useRef, useState } from "react";
import FlagToggle from "./FlagToggle";
import { setState } from "@/context/context";
import Link from "next/link";
function FeedCard({ props }: { props: FeedData }) {
    const [page, setPage] = useState<number>(0);
    const [start, setStart] = useState<number>(0);
    const [end, setEnd] = useState<number>(0);
    const [flags, setFlags] = useState<number>(props.flags);
    const [state, setState1] = useState<boolean>(props.flag);
    const slideRef = useRef<HTMLDivElement>(null);
    const [originState, setOriginState] = useState<boolean>(props.flag);
    function prev() {
        if (page > 0) setPage(page - 1);
    }
    function next() {
        if (page < props.media.length - 1) setPage(page + 1);
    }
    function Swipe(e: React.TouchEvent) {
        setStart(e.touches[0].clientX);
    }
    function TouchEnd() {
        let temp = start - end;
        if (temp > 60 && end != 0) next();
        else if (temp < -60 && end != 0) prev();
        setStart(0);
        setEnd(0);
    }
    function TouchMove(e: React.TouchEvent) {
        setEnd(e.touches[0].clientX);
    }
    useEffect(() => {
        if (props.media.length !== 0)
            slideRef.current!.style.transform = `translateX(${
                (100 / props.media.length) * -page
            }%)`;
    }, [page]);
    function date(params: Date) {
        let date = new Date(params);
        let diff = (new Date().getTime() - date.getTime()) / 1000,
            day_diff = Math.floor(diff / 86400);
        if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
            return `${date.getFullYear()}년 ${date.getDay()}월 ${date.getDate()}일`;
        return (
            (day_diff == 0 &&
                ((diff < 60 && "방금") ||
                    (diff < 120 && "1분 전") ||
                    (diff < 3600 && Math.floor(diff / 60) + "분 전") ||
                    (diff < 7200 && "1시간 전") ||
                    (diff < 86400 && Math.floor(diff / 3600) + "시간 전"))) ||
            (day_diff == 1 && "어제") ||
            (day_diff < 7 && day_diff + "일 전") ||
            (day_diff < 31 && Math.ceil(day_diff / 7) + "주 전")
        );
    }
    const dispatch = setState();
    const ModalOn = () => {
        dispatch({ type: "SET_MODAL", name: "feed" });
    };
    return (
        <li>
            <S.CardHeader>
                <Link href={`clubinfo?id=${props.clubId}`}>
                    <a>
                        <img
                            src={`${process.env.NEXT_PUBLIC_URL}/file/${props.profileImage}`}
                        ></img>
                    </a>
                </Link>
                <S.CardHeaderContent>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div>
                            <strong>{props.clubName}</strong>
                        </div>
                        <svg
                            style={{ marginLeft: "2px" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                        >
                            <g
                                id="그룹_550"
                                data-name="그룹 550"
                                transform="translate(-1283 -160)"
                            >
                                <circle
                                    id="타원_133"
                                    data-name="타원 133"
                                    cx="8"
                                    cy="8"
                                    r="8"
                                    transform="translate(1283 160)"
                                    fill="#c8c8c8"
                                />
                                <g id="pin" transform="translate(1286.801 162)">
                                    <g id="그룹_414" data-name="그룹 414">
                                        <path
                                            id="패스_85"
                                            data-name="패스 85"
                                            d="M89.533,0a4.108,4.108,0,0,0-4.2,4,3.857,3.857,0,0,0,.5,1.9l3.466,5.97a.269.269,0,0,0,.459,0L93.23,5.9a3.857,3.857,0,0,0,.5-1.9A4.108,4.108,0,0,0,89.533,0Zm0,6a2.054,2.054,0,0,1-2.1-2,2.1,2.1,0,0,1,4.2,0A2.054,2.054,0,0,1,89.533,6Z"
                                            transform="translate(-85.333)"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="1"
                                        />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <S.CreatedAt>{date(props.uploadAt)}</S.CreatedAt>
                </S.CardHeaderContent>
                <svg
                    style={{ padding: "15px 10px", cursor: "pointer" }}
                    onClick={ModalOn}
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="35"
                    viewBox="0 0 25 5"
                >
                    <g
                        id="그룹_511"
                        data-name="그룹 511"
                        transform="translate(-1065 -1035)"
                    >
                        <circle
                            id="타원_91"
                            data-name="타원 91"
                            cx="2.5"
                            cy="2.5"
                            r="2.5"
                            transform="translate(1065 1035)"
                            fill="#3d3d3d"
                        />
                        <circle
                            id="타원_92"
                            data-name="타원 92"
                            cx="2.5"
                            cy="2.5"
                            r="2.5"
                            transform="translate(1075 1035)"
                            fill="#3d3d3d"
                        />
                        <circle
                            id="타원_93"
                            data-name="타원 93"
                            cx="2.5"
                            cy="2.5"
                            r="2.5"
                            transform="translate(1085 1035)"
                            fill="#3d3d3d"
                        />
                    </g>
                </svg>
            </S.CardHeader>
            <S.CardSection>
                {/* 바꿀 곳 */}
                <S.Content style={{ whiteSpace: "pre-wrap" }}>
                    {props.content.split(/( |\n)/).map((val: string) => {
                        const regex = /^(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\/a-z0-9-%#?&=\w]+)*)*/gi;
                        if (regex.exec(val) !== null)
                            return (
                                <a target="blank" href={val}>
                                    {val}
                                </a>
                            );
                        else return `${val}`;
                    })}
                </S.Content>
                {props.media.length !== 0 ? (
                    <S.Slider>
                        <S.SliderImages
                            onTouchStart={Swipe}
                            onTouchMove={TouchMove}
                            onTouchEnd={TouchEnd}
                            ref={slideRef}
                            style={{ width: `${props.media.length * 100}%` }}
                        >
                            {props.media.map((i, index) => (
                                <img
                                    key={index}
                                    style={{
                                        width: `calc( 100% / ${props.media.length} )`,
                                        transform: `translateX(${
                                            100 * index
                                        }%)`,
                                    }}
                                    src={`${process.env.NEXT_PUBLIC_URL}/file/${i}`}
                                ></img>
                            ))}
                        </S.SliderImages>
                        <S.Prev onClick={prev}>
                            <svg
                                id="버튼"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="26"
                                viewBox="0 0 40 41"
                            >
                                <ellipse
                                    id="타원_106"
                                    data-name="타원 106"
                                    cx="20"
                                    cy="20.5"
                                    rx="20"
                                    ry="20.5"
                                    fill="#c8c8c8"
                                    opacity="0.5"
                                />
                                <rect
                                    id="사각형_628"
                                    data-name="사각형 628"
                                    width="2"
                                    height="18"
                                    rx="1"
                                    transform="translate(13.199 21.339) rotate(-135)"
                                    fill="#fff"
                                />
                                <rect
                                    id="사각형_629"
                                    data-name="사각형 629"
                                    width="2"
                                    height="18"
                                    rx="1"
                                    transform="translate(25.927 31.663) rotate(135)"
                                    fill="#fff"
                                />
                            </svg>
                        </S.Prev>
                        <S.Next onClick={next}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="26"
                                viewBox="0 0 40 41"
                            >
                                <g id="버튼" transform="translate(-1050 -1554)">
                                    <ellipse
                                        id="타원_106"
                                        data-name="타원 106"
                                        cx="20"
                                        cy="20.5"
                                        rx="20"
                                        ry="20.5"
                                        transform="translate(1050 1554)"
                                        fill="#c8c8c8"
                                        opacity="0.5"
                                    />
                                    <rect
                                        id="사각형_628"
                                        data-name="사각형 628"
                                        width="2"
                                        height="18"
                                        rx="1"
                                        transform="translate(1064.073 1562.611) rotate(-45)"
                                        fill="#fff"
                                    />
                                    <rect
                                        id="사각형_629"
                                        data-name="사각형 629"
                                        width="2"
                                        height="18"
                                        rx="1"
                                        transform="translate(1076.801 1572.935) rotate(45)"
                                        fill="#fff"
                                    />
                                </g>
                            </svg>
                        </S.Next>
                    </S.Slider>
                ) : null}
            </S.CardSection>
            <S.CardBottom>
                <S.CardUtil>
                    <FlagToggle
                        setFlags={setFlags}
                        flags={flags}
                        feed_id={props.feedId}
                        state={state}
                        setState={setState1}
                        originState={originState}
                        setOriginState={setOriginState}
                    ></FlagToggle>
                    <S.SliderState>
                        {props.media.map((_i, index) => (
                            <S.StateButton
                                key={index}
                                style={
                                    page == index
                                        ? { background: "#713EFF" }
                                        : undefined
                                }
                            ></S.StateButton>
                        ))}
                    </S.SliderState>
                </S.CardUtil>
                <S.CardState>
                    <div>FLAGS {flags}개</div>
                </S.CardState>
            </S.CardBottom>
        </li>
    );
}
export default FeedCard;
