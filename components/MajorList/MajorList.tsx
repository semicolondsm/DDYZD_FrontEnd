import * as S from './styles'
import MajorItem from './MajorItem'
import { MutableRefObject, useLayoutEffect, useRef } from 'react'

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

        }
    }, [])

    return (
        <S.BodyWrapper>
            <S.Wrapper>
                <MajorItem className="majoritem" max={8} now={0} />
                <MajorItem className="majoritem" max={8} now={1} />
                <MajorItem className="majoritem" max={8} now={2} />
                <MajorItem className="majoritem" max={8} now={3} />
                <MajorItem className="majoritem" max={8} now={4} />
                <MajorItem className="majoritem" max={8} now={5} />
                <MajorItem className="majoritem" max={8} now={6} />
                <MajorItem className="majoritem" max={8} now={7} />
            </S.Wrapper>
        </S.BodyWrapper>
    )
}

export default MajorList