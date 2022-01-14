import { postApi } from "api/fetch-api";
import CommInput from "components/common/commInput";
import CommSelect from "components/common/CommSelect";
import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./CreateCommunity.module.css";

function CreateCommunity(props) {
  const dispatch = useDispatch();
  const [jobArray, setJobArray] = useState([]);

  const fnCallback = useCallback((res) => {
    console.log(res);
    setJobArray(res.data);
  }, []);

  useEffect(() => {
    dispatch(postApi("nmb/cmm/post/code"), fnCallback);
  }, [dispatch, fnCallback]);

  const jobChangeHandler = (e) => {
    console.log(e);
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
          options={jobArray}
          onChange={jobChangeHandler}
        />
        <CommSelect
          title="분위기"
          options={jobArray}
          onChange={jobChangeHandler}
        />
      </div>
      <div className={classes.communityArea}>
        <div className={classes.imgArea}>이미지</div>
        <div className={classes.textArea}>
          <div className={classes.titleArea}>
            <CommInput title="제목" />
          </div>
          <div className={classes.contArea}>내용</div>
        </div>
      </div>
    </div>
  );
}

export default CreateCommunity;
