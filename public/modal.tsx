import FeedModal from '@/components/Public/Modals/Menu/Feed';
import {useSampleState} from './context/context'

const ReturnModal=()=>{
    const state = useSampleState();
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