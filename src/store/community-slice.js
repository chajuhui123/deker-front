import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  community: {
    communityTitle: "", // 글제목
    communityContent: "", // 글내용
    jobCode: "", // 직업코드
    materialCode: "", // 재질코드
    moodCode: "", // 분위기코드
    communityTags: [], // 태그
  },
  product: {
    communityProducts: [], // 상품정보
  },
};

const communitySlice = createSlice({
  name: "community",
  initialState: initialModalState,
  reducers: {
    setCommunity: (state, action) => {
      state.community.communityTitle = action.payload.communityTitle;
      state.community.communityContent = action.payload.communityContent;
      state.community.communityTags = action.payload.communityTags;
    },
    setProduct: (state, action) => {
      state.product.communityProducts = action.payload.communityProducts;
    },
    setJobCode: (state, action) => {
      state.community.jobCode = action.payload.jobCode;
    },
    setMaterialCode: (state, action) => {
      state.community.materialCode = action.payload.materialCode;
    },
    setMoodCode: (state, action) => {
      state.community.moodCode = action.payload.moodCode;
    },
  },
});

export const communityAction = communitySlice.actions;

export default communitySlice;
