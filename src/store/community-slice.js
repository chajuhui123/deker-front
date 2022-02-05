import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  communityTitle: "", // 글제목
  communityContent: "", // 글내용
  communityImage: "", // 첨부 이미지
  jobCode: "", // 직업코드
  materialCode: "", // 재질코드
  moodCode: "", // 분위기코드
  communityTags: [], // 태그
  communityProducts: [
    // 상품정보
    {
      id: "", // 상품정보아이디
      offsetX: "", // 상품정보X좌표
      offsetY: "", // 상품정보Y좌표
      productId: "", // 상품아이디
      productDescription: "", // 상품설명
    },
  ],
};

const communitySlice = createSlice({
  name: "community",
  initialState: initialModalState,
  reducers: {
    setCommunity: (state, action) => {
      state.communityTitle = action.payload.communityTitle;
      state.communityContent = action.payload.communityContent;
      state.communityImage = action.payload.communityImage;
      state.communityTags = action.payload.communityTags;
      state.communityProducts = action.payload.communityProducts;
    },
    setJobCode: (state, action) => {
      state.jobCode = action.payload.jobCode;
    },
    setMaterialCode: (state, action) => {
      state.materialCode = action.payload.materialCode;
    },
    setMoodCode: (state, action) => {
      state.moodCode = action.payload.moodCode;
    },
  },
});

export const communityAction = communitySlice.actions;

export default communitySlice;
