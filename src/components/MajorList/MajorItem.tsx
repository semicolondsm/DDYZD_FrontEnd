import * as S from "./styles";
import earthIc from "@/public/images/earth";
import phonoeIc from "@/public/images/phone";
import brainIc from "@/public/images/brain";
import etcIc from "@/public/images/etc";
import shieldIc from "@/public/images/shield";
import embedIc from "@/public/images/embed";
import Link from "next/link";
import { CreateRoomAndGetRoomId } from "@/src/utils/function/chat";
import { color } from "@/src/style";
import { useRouter } from "next/router";
interface propsType {
    max: number;
    now: number;
    className: string;
    imgSrc?: string;
    header: string;
    tag: string[];
    description: string;
    banner: string;
    id: number;
    clubrecruitment: boolean;
}

const MajorItem = (props: propsType) => {
    const router = useRouter();
    const {
        imgSrc,
        header,
        description,
        tag,
        banner,
        id,
        clubrecruitment,
    } = props;
    const convertIdLinkChat = async () => {
        const chat_id: number = await CreateRoomAndGetRoomId(id);
        router.push(`/chat/${chat_id}`);
    };
    return (
        <Link href={`/club/${id}`}>
            <S.ItemWrapper
                max={props.max}
                now={props.now}
                style={
                    clubrecruitment
                        ? { border: `3px solid ${color.purple400}` }
                        : {}
                }
            >
                <div className={props.className}>
                    <S.PurpleBack />
                    {/* 핀 버튼 추가 */}
                    <S.PointButton></S.PointButton>
                    <S.ItemImgWrap>
                        <S.ItemImg
                            src={`${process.env.NEXT_PUBLIC_URL}/file/${banner}`}
                        />
                    </S.ItemImgWrap>
                    <S.ItemFontWrapper>
                        <S.ItemHeader>{header}</S.ItemHeader>
                        <S.ItemSubHeader>{description}</S.ItemSubHeader>
                    </S.ItemFontWrapper>
                    <S.ButtonsWrapper>
                        <a onClick={convertIdLinkChat}>
                            <S.RadiusButton active={true}>
                                신청하기
                            </S.RadiusButton>
                        </a>
                    </S.ButtonsWrapper>
                    <S.IconWrapper>
                        <S.Icon
                            src={`${process.env.NEXT_PUBLIC_URL}/file/${imgSrc}`}
                        />
                    </S.IconWrapper>
                    <S.IntroWrapper>
                        <p>{description}</p>
                        <S.IntroIcon>
                            <S.FieldIconWrapper>
                                {tag.map((val) => {
                                    switch (val) {
                                        case "인공지능":
                                            return brainIc;
                                        case "웹":
                                            return earthIc;
                                        case "앱":
                                            return phonoeIc;
                                        case "정보보안":
                                            return shieldIc;
                                        case "임베디드":
                                            return embedIc;
                                        default:
                                            return etcIc;
                                    }
                                })}
                            </S.FieldIconWrapper>
                        </S.IntroIcon>
                    </S.IntroWrapper>
                </div>
            </S.ItemWrapper>
        </Link>
    );
};

export default MajorItem;
