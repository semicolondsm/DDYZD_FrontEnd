import * as S from "./styles";
import MajorItem from "./MajorItem";
import {
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import club from "@/utils/api/club";
import { RSA_NO_PADDING } from "constants";

interface paramsType {
  clubid: number;
  clubname: string;
  clubtag: string[];
  clubimage: string;
  clubdescription: string;
}

const MajorList = () => {
  const [majors, setMajors] = useState<paramsType[]>([]);
  const time: MutableRefObject<any> = useRef({});

  useLayoutEffect(() => {
    const items: any = document.querySelectorAll(".majoritem");

    for (let i = 0; i < items.length; i++) {
      if ((i + 1) % 4 === 0) {
        items[i].addEventListener("mouseover", () => {
          clearTimeout(time.current[i]);
          items[i - 1].parentNode.style.boxShadow = "none";
          items[i - 1].parentNode.style.zIndex = items.length - i - 1;
        });
        items[i].addEventListener("mouseout", () => {
          items[i - 1].parentNode.style.boxShadow =
            "0 5px 5px rgba(0, 0, 0, 0.29)";
          time.current[i] = setTimeout(() => {
            items[i - 1].parentNode.style.zIndex = items.length - i + 1;
          }, 150);
        });
      }
    }
  }, [majors]);

  useEffect(() => {
    club.getClubList().then((res) => setMajors(res.data));
  }, []);

  return (
    <S.BodyWrapper>
      <S.Wrapper>
        {majors.map((value, i) => {
          const { clubname, clubdescription, clubimage, clubtag } = value;
          return (
            <MajorItem
              className="majoritem"
              max={majors.length}
              now={i}
              header={clubname}
              description={clubdescription}
              imgSrc={clubimage}
              tags={clubtag}
            />
          );
        })}
      </S.Wrapper>
    </S.BodyWrapper>
  );
};

export default MajorList;
