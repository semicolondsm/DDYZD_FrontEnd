import { useSampleDispatch } from '@/public/context/context'
import * as s from './styles'

export default function FeedModal(){
    const dispatch = useSampleDispatch();
    const close=()=>dispatch({type:"SET_MODAL",name:""})
    return(
        <s.FeedModalCover>
            <s.FeedModalContainer>
                <s.FeedModalMenu>
                    <s.Menu style={{color:"tomato"}}>팔로우 취소</s.Menu>
                    <s.Menu style={{color:"tomato"}}>게시글 신고</s.Menu>
                    <s.Menu>게시물 공유</s.Menu>
                    <s.Menu onClick={close}>취소</s.Menu>
                </s.FeedModalMenu>
            </s.FeedModalContainer>
        </s.FeedModalCover>
    )
}