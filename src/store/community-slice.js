import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  communityTitle: "", // 글제목
  communityContent: "", // 글내용
  jobCode: "", // 직업코드
  materialCode: "", // 재질코드
  moodCode: "", // 분위기코드
  communityTags: [], // 태그
  communityProducts: [], // 상품정보
};

const communitySlice = createSlice({
  name: "community",
  initialState: initialModalState,
  reducers: {
    setCommunity: (state, action) => {
      state.communityTitle = action.payload.communityTitle;
      state.communityContent = action.payload.communityContent;
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
