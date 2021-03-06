import FeedSlider from '@/components/Main/Feed/FeedSlider';
import { useRouter } from 'next/router';

const feedSlide = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log(id);

    return (
        <FeedSlider id={Number(id)} />
    )
}

export default feedSlide