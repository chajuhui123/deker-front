import React, { useState } from "react";
import classes from "./CreateCommunity.module.css";
import { postApi, fileApi } from "api/fetch-api";
import { useDispatch, useSelector } from "react-redux";
import CommInput from "components/common/commInput";
import CommSelect from "components/common/CommSelect";
import { useEffect } from "react";
import CommBtn from "components/common/commBtn";
import ImageArea from "components/community/write/ImageArea";
import UserTagForm from "components/common/userTagForm";
import { communityAction } from "store/community-slice";

// TODO : 이미지

function CreateCommunity(props) {
  const dispatch = useDispatch();
  const communityData = useSelector((state) => state.community);
  const [jobArray, setJobArray] = useState([]); // 직업코드
  const [material, setMaterial] = useState([]); // 재질코드
  const [moodArray, setMoodArray] = useState([]); // 분위기코드
  const [title, setTitle] = useState(""); // 제목
  const [content, setContent] = useState(""); // 내용
  const [imageFile, setImageFile] = useState(null); // 이미지 파일
  // 직업코드조회콜백
  const fnJobCallback = (res) => {
    setJobArray(res.data);
  };
  // 재질코드조회콜백
  const fnMaterialCallback = (res) => {
    setMaterial(res.data);
  };
  // 분위기코드조회콜백
  const fnMoodCallback = (res) => {
    setMoodArray(res.data);
  };

  useEffect(() => {
    dispatch(
      postApi(
        "nmb/cmm/get/code",
        {
          codeId: "JOB",
        },
        fnJobCallback
      )
    );
    dispatch(
      postApi(
        "nmb/cmm/get/code",
        {
          codeId: "DKP",
        },
        fnMaterialCallback
      )
    );
    dispatch(
      postApi(
        "nmb/cmm/get/code",
        {
          codeId: "MOOD",
        },
        fnMoodCallback
      )
    );
  }, [dispatch]);
  // 직업코드선택핸들러
  const jobChangeHandler = (e) => {
    dispatch(communityAction.setJobCode({ jobCode: e.value }));
  };
  // 재질코드선택핸들러
  const materialChangeHandler = (e) => {
    dispatch(communityAction.setMaterialCode({ materialCode: e.value }));
  };
  // 분위기코드선택핸들러
  const moodChangeHandler = (e) => {
    dispatch(communityAction.setMoodCode({ moodCode: e.value }));
  };
  // 제목핸들러
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  // 내용핸들러
  const contentHandler = (e) => {
    setContent(e.target.value);
  };
  const tagOutHandler = (tagArry) => {
    dispatch(
      communityAction.setCommunity({
        communityTitle: title,
        communityContent: content,
        communityTags: tagArry,
        communityProducts: communityData.communityProducts,
      })
    );
  };
  // 저장후콜백메소드
  const fnCallback = (res) => {
    console.log("fnCallback :: ", res);
    // TODO : Main page로 이동
  };
  // 저장메소드
  const submit = () => {
    dispatch(
      communityAction.setCommunity({
        communityTitle: title,
        communityContent: content,
        communityTags: communityData.communityTags,
        communityProducts: communityData.communityProducts,
      })
    );
    const formData = new FormData();
    formData.append("img", imageFile); // 게시글 이미지
    formData.append("json", JSON.stringify(communityData)); // 게시글 제목, 내용
    dispatch(fileApi("", formData, fnCallback)); // TODO : 저장 url 정해지면 처리
  };

  return (
    <div className={classes.page}>
      <div className={classes.selectArea}>
        <CommSelect
          title="직업"
          options={jobArray}
          onChange={jobChangeHandler}
        />
        <CommSelect
          title="책상재질"
          options={material}
          onChange={materialChangeHandler}
        />
        <CommSelect
          title="분위기"
          options={moodArray}
          onChange={moodChangeHandler}
        />
      </div>
      <div className={classes.communityArea}>
        <div className={classes.leftArea}>
          <ImageArea setImageFile={setImageFile} margin="0 0 30px 0" />
          <UserTagForm tagOutHandler={tagOutHandler} />
        </div>
        <div className={classes.textArea}>
          <div className={classes.titleArea}>
            <CommInput value={title} onChange={titleHandler} />
          </div>
          <div className={classes.contArea}>
            <textarea value={content} onChange={contentHandler}></textarea>
          </div>
          <CommBtn btnText="저장" btnMargin="30px 0 0 0" fnClick={submit} />
        </div>
      </div>
    </div>
  );
}

export default CreateCommunity;
