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
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function CreateCommunity(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const communityData = useSelector((state) => state.community.community);
  const productData = useSelector(
    (state) => state.community.product.communityProducts
  );
  const [jobArray, setJobArray] = useState([]); // 직업코드
  const [material, setMaterial] = useState([]); // 재질코드
  const [moodArray, setMoodArray] = useState([]); // 분위기코드
  const [imageFile, setImageFile] = useState(null); // 이미지 파일
  // 직업코드조회콜백
  const fnJobCallback = (res) => {
    if (!!res) {
      setJobArray(res.data);
    }
  };
  // 재질코드조회콜백
  const fnMaterialCallback = (res) => {
    if (!!res) {
      setMaterial(res.data);
    }
  };
  // 분위기코드조회콜백
  const fnMoodCallback = (res) => {
    if (!!res) {
      setMoodArray(res.data);
    }
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
    dispatch(communityAction.clearData());
  }, [dispatch]);
  // 직업코드선택핸들러
  const jobChangeHandler = (value) => {
    dispatch(communityAction.setJobCode({ jobCode: value }));
  };
  // 재질코드선택핸들러
  const materialChangeHandler = (value) => {
    dispatch(communityAction.setMaterialCode({ materialCode: value }));
  };
  // 분위기코드선택핸들러
  const moodChangeHandler = (value) => {
    dispatch(communityAction.setMoodCode({ moodCode: value }));
  };
  // 제목핸들러
  const titleHandler = (e) => {
    dispatch(
      communityAction.setCommunity({
        communityTitle: e.target.value,
        communityContent: communityData.communityContent,
        communityTags: communityData.communityTags,
      })
    );
  };
  // 내용핸들러
  const contentHandler = (e) => {
    dispatch(
      communityAction.setCommunity({
        communityTitle: communityData.communityTitle,
        communityContent: e.target.value,
        communityTags: communityData.communityTags,
      })
    );
  };
  const tagOutHandler = (tagArry) => {
    dispatch(
      communityAction.setCommunity({
        communityTitle: communityData.communityTitle,
        communityContent: communityData.communityContent,
        communityTags: tagArry,
      })
    );
  };
  // 저장후콜백메소드
  const fnCallback = (res) => {
    if (!!res) {
      history.push("/community");
    }
  };
  // 저장메소드
  const submit = () => {
    const community = {
      communityTitle: communityData.communityTitle,
      communityContent: communityData.communityContent,
      communityTags: communityData.communityTags.map((tag) => tag.text),
      jobCode: communityData.jobCode,
      materialCode: communityData.materialCode,
      moodCode: communityData.moodCode,
    };
    console.log(communityData);
    const formData = new FormData();
    formData.append("img", imageFile); // 게시글 이미지
    formData.append(
      "community",
      new Blob([JSON.stringify(community)], { type: "application/json" })
    ); // 게시글 제목, 내용
    formData.append(
      "product",
      new Blob([JSON.stringify(productData)], { type: "application/json" })
    ); // 게시글 상품목록
    dispatch(fileApi("mb/post/reg/write-post", formData, fnCallback));
  };

  return (
    <div className={classes.page}>
      <div className={classes.selectArea}>
        <CommSelect
          title="직업"
          width="250px"
          options={jobArray}
          onChange={jobChangeHandler}
        />
        <CommSelect
          title="책상재질"
          width="250px"
          options={material}
          onChange={materialChangeHandler}
        />
        <CommSelect
          title="분위기"
          width="250px"
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
            <CommInput
              value={communityData.communityTitle}
              onChange={titleHandler}
            />
          </div>
          <div className={classes.contArea}>
            <textarea
              value={communityData.communityContent}
              onChange={contentHandler}
            ></textarea>
          </div>
          <CommBtn btnText="저장" btnMargin="30px 0 0 0" fnClick={submit} />
        </div>
      </div>
    </div>
  );
}

export default CreateCommunity;
