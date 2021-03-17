import * as S from "./styles";

import DesContainer from "./desContainer";

import { useState } from "react";

import ClubItem from "@/utils/api/clubItem";

function ClubItemApply() {
  const [cnt, setCnt] = useState<number>(1);
  const [IData, setIData] = useState<any>({
    price: 0,
    count: cnt,
    name: "",
    option: "",
    url: "",
  });
  const wrtData = (e: any) => {
    if (e.target.name === "price" && e.target.value < 0) {
      return;
    }
    setIData({
      ...IData,
      [e.target.name]: e.target.value,
    });
    console.log(IData);
  };
  const subData = () => {
    var a:any = new RegExp("https://");
    var test = a.exec(IData.url);
    if (IData.name === "") {
      alert("물품명을 입력하세요.");
      return;
    }
    if (IData.option === "") {
      alert("옵션을 입력하세요.");
      return;
    }
    if (IData.url === "") {
      alert("url을 입력하세요.");
      return;
    }
    if(test === null || test === "null"){
        alert('올바른 url을 입력하세요.');
        return;
    }
    if (IData.price === 0) {
      alert("가격을 입력하세요.");
      return;
    }
    ClubItem.applyItem(IData).then((e) => {
      alert("정상적으로 신청되었습니다.");
      console.log(e);
      setCnt(1);
      setIData({
        price: 0,
        count: cnt,
        name: "",
        option: "",
        url: "",
      })
    });
  };
  const cntDown = () => {
    if (cnt === 1) {
      return;
    }
    setCnt(cnt - 1);
    setIData({
      ...IData,
      count: cnt - 1,
    });
  };
  const cntUp = () => {
    setCnt(cnt + 1);
    setIData({
      ...IData,
      count: cnt + 1,
    });
  };
  return (
    <S.BoxCover>
      <S.Container>
        <S.DesCont>
          <S.ApplyItem>물품 신청하기</S.ApplyItem>
          <S.Tip>TIP</S.Tip>
        </S.DesCont>
        <S.line></S.line>
        <DesContainer ment="물품 URL" />
        <S.ItemInput
          type="text"
          onChange={wrtData}
          name="url"
          placeholder="물품 url을 입력하세요."
          id=""
          value={IData.url}
        />
        <DesContainer ment="물품명" />
        <S.ItemInput
          type="text"
          onChange={wrtData}
          name="name"
          placeholder="물품명을 입력하세요."
          id=""
          value={IData.name}
        />
        <DesContainer ment="옵션" />
        <S.ItemInput
          type="text"
          onChange={wrtData}
          name="option"
          placeholder="물품 옵션을 입력하세요."
          id=""
          value={IData.option}
        />
        <DesContainer ment="물품가격" />
        <S.ItemInput
          type="number"
          value={IData.price}
          onChange={wrtData}
          name="price"
          placeholder="물품 옵션을 입력하세요."
          id=""
        />
        <S.SmallDesCont>
          <S.Ment>수량 선택</S.Ment>
        </S.SmallDesCont>
        <S.ItemCount>
          <S.ConutDiv>
            <S.StatusBtn onClick={cntDown}>-</S.StatusBtn>
            <S.Status>{cnt}</S.Status>
            <S.StatusBtn onClick={cntUp}>+</S.StatusBtn>
          </S.ConutDiv>
          <h4>총 {cnt}개</h4>
          <h3>{cnt * IData.price} 원</h3>
        </S.ItemCount>
        <S.ApplyButton onClick={subData}>신청하기</S.ApplyButton>
      </S.Container>
    </S.BoxCover>
  );
}

export default ClubItemApply;
