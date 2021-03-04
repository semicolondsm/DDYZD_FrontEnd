import FeedSlider from '@/components/Main/Feed/FeedSlider';
import { useRouter } from 'next/router';

const feedSlide = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <FeedSlider id={Number(id)} />
    )
}

export default feedSlide