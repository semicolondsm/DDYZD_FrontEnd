import * as S from './styles'
import MajorItem from './MajorItem'
import { MutableRefObject, useLayoutEffect, useRef } from 'react'

interface dummyType {
    imgSrc: string;
    header: string;
    subHeader: string;
    description: string;
}

const url: string = "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE" 

const dummy: dummyType[] = Array(12)

dummy.fill({
        imgSrc: url,
        header: "PANG",
        subHeader: "웹 프로젝트 진행을 위한 웹 개발 동아리",
        description: "프로젝트 위주의 운영으로 자유롭고 친한 분위기 속에 진행을 하고 있습니다"})

const MajorList = () => {
    const time: MutableRefObject<any> = useRef({})

    useLayoutEffect(() => {
        const items: any = document.querySelectorAll('.majoritem')

        for(let i = 0; i < items.length; i++) {
            if((i+1) % 4 === 0) {
                items[i].addEventListener('mouseover', () => {
                    clearTimeout(time.current[i])
                    items[i-1].parentNode.style.boxShadow = "none"
                    items[i-1].parentNode.style.zIndex = items.length - i - 1
                })
                items[i].addEventListener('mouseout', () => {
                    items[i-1].parentNode.style.boxShadow = "0 5px 5px rgba(0, 0, 0, 0.29)"
                    time.current[i] = setTimeout(() => {
                        items[i-1].parentNode.style.zIndex = items.length - i + 1
                    }, 150)
                })
            }
``
        }
    }, [])

    return (
        <S.BodyWrapper>
            <S.Wrapper>
                {
                    dummy.map((value, i) => {
                        const { header, subHeader, description, imgSrc } = value
                        return <MajorItem className="majoritem" 
                                max={dummy.length} 
                                now={i} 
                                header={header} 
                                subHeader={subHeader} 
                                description={description} 
                                imgSrc={imgSrc} />
                    })
                }
            </S.Wrapper>
        </S.BodyWrapper>
    )
}

export default MajorList