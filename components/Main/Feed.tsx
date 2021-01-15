import FeedCard from "./FeedCard"
import * as S from "./styles"
const data = [
    {
        profile : "https://avatars1.githubusercontent.com/u/74494938?s=200&v=4",
        name: "test",
        content : "안녕하세요! 팀 SEMICOLON;입니다. 1월13일부터 1월31일까지 새로운 팀원을 모집합니다.",
        src : [
            "https://scontent.xx.fbcdn.net/v/t1.15752-9/138512756_235059784854577_7452307084218051470_n.jpg?_nc_cat=103&ccb=2&_nc_sid=58c789&_nc_eui2=AeGrnNGpfNeJRT9NBAFoSTK6ZMJBIzlX1bFkwkEjOVfVsa4eijhgMHzG5XiRV62EN9mce-4psrbDlJsjmfE7TTJk&_nc_ohc=l9eDl0FDNQkAX93Vsk1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=50cea55969a4fbd3544893ec5aa096a5&oe=60250936",
            "https://scontent.xx.fbcdn.net/v/t1.15752-9/138512756_235059784854577_7452307084218051470_n.jpg?_nc_cat=103&ccb=2&_nc_sid=58c789&_nc_eui2=AeGrnNGpfNeJRT9NBAFoSTK6ZMJBIzlX1bFkwkEjOVfVsa4eijhgMHzG5XiRV62EN9mce-4psrbDlJsjmfE7TTJk&_nc_ohc=l9eDl0FDNQkAX93Vsk1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=50cea55969a4fbd3544893ec5aa096a5&oe=60250936",
            "https://scontent.xx.fbcdn.net/v/t1.15752-9/138512756_235059784854577_7452307084218051470_n.jpg?_nc_cat=103&ccb=2&_nc_sid=58c789&_nc_eui2=AeGrnNGpfNeJRT9NBAFoSTK6ZMJBIzlX1bFkwkEjOVfVsa4eijhgMHzG5XiRV62EN9mce-4psrbDlJsjmfE7TTJk&_nc_ohc=l9eDl0FDNQkAX93Vsk1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=50cea55969a4fbd3544893ec5aa096a5&oe=60250936"
        ],
        dday: 18,
        flag : 3,
        created_at : "2021년 01월 13일"

        
    },
    {
        profile : "https://avatars1.githubusercontent.com/u/74494938?s=200&v=4",
        name: "test",
        content : "안녕하세요! 팀 SEMICOLON;입니다. 1월13일부터 1월31일까지 새로운 팀원을 모집합니다.",
        src : [
            "https://scontent.xx.fbcdn.net/v/t1.15752-9/138512756_235059784854577_7452307084218051470_n.jpg?_nc_cat=103&ccb=2&_nc_sid=58c789&_nc_eui2=AeGrnNGpfNeJRT9NBAFoSTK6ZMJBIzlX1bFkwkEjOVfVsa4eijhgMHzG5XiRV62EN9mce-4psrbDlJsjmfE7TTJk&_nc_ohc=l9eDl0FDNQkAX93Vsk1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=50cea55969a4fbd3544893ec5aa096a5&oe=60250936",
            "https://scontent.xx.fbcdn.net/v/t1.15752-9/138512756_235059784854577_7452307084218051470_n.jpg?_nc_cat=103&ccb=2&_nc_sid=58c789&_nc_eui2=AeGrnNGpfNeJRT9NBAFoSTK6ZMJBIzlX1bFkwkEjOVfVsa4eijhgMHzG5XiRV62EN9mce-4psrbDlJsjmfE7TTJk&_nc_ohc=l9eDl0FDNQkAX93Vsk1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=50cea55969a4fbd3544893ec5aa096a5&oe=60250936",
            "https://scontent.xx.fbcdn.net/v/t1.15752-9/138512756_235059784854577_7452307084218051470_n.jpg?_nc_cat=103&ccb=2&_nc_sid=58c789&_nc_eui2=AeGrnNGpfNeJRT9NBAFoSTK6ZMJBIzlX1bFkwkEjOVfVsa4eijhgMHzG5XiRV62EN9mce-4psrbDlJsjmfE7TTJk&_nc_ohc=l9eDl0FDNQkAX93Vsk1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=50cea55969a4fbd3544893ec5aa096a5&oe=60250936"
        ],
        dday: 18,
        flag : 3,
        created_at : "2021년 01월 13일"

        
    }
]
function Feed(){
    return(
        <S.FeedList>
            {
                data.map((i,index)=>(<FeedCard key={index} props={i}></FeedCard>))
            }
            
        </S.FeedList>
    )
}
export default Feed;