import FeedModal from '@/components/Public/Modals/Feed';
import {getState} from '../../../context/context'

const ReturnModal=()=>{
    const state = getState();
    const name = state.modalName;
    return(
        <>
        {
            name == "" ? <></>
            :name == "feed" ? <FeedModal></FeedModal>
            : <></>
        }
        </>
    )
}

export default ReturnModal;