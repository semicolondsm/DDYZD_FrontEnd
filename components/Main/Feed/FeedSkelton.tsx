import Skeleton from "react-loading-skeleton"
import * as S from "./styles"

function FeedSkeleton(){
    return(
        <li>
            <S.CardHeader>
                <Skeleton height={40} width={40} circle></Skeleton>
                <S.CardHeaderContent>
                    <Skeleton height={30} width={80}></Skeleton>
                </S.CardHeaderContent>
            </S.CardHeader>
            <S.CardSection>
                <Skeleton height={500} width={"100%"}></Skeleton>
            </S.CardSection>
            <S.CardBottom>
                <S.CardUtil>
                    <Skeleton height={30} width={30}></Skeleton>
                </S.CardUtil>
                <S.CardState>
                    <Skeleton height={10} width={50}></Skeleton>
                </S.CardState>
            </S.CardBottom>
        </li>
    )
}   
export default FeedSkeleton