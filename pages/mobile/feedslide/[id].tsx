import FeedSlider from '@/components/Main/Feed/FeedSlider';
import user from '@/utils/api/user';
import { useRouter } from 'next/router';

const feedSlide = () => {
    const router = useRouter();

    return (
        <FeedSlider id={Number(router.query.id)}></FeedSlider>
    )
}

export default feedSlide