import CommBtn from "components/common/commBtn";
import CommInput from "components/common/commInput";
import CommPageSemiTitle from "components/common/commPageSemiTitle";
import CommonPageTitle from "components/common/commPageTitle";
import CommSelect from "components/common/CommSelect";
import { useMemo, useState } from "react";
import classes from "./oneToOneQuestion.module.css";

function OneToOneQuestion(props) {
  // 문의유형 Select Option
  const questionOption = useMemo(
    () => [
      //   { value: "none", label: "문의유형" },
      { value: "0", label: "상품문의" },
      { value: "1", label: "배송문의" },
      { value: "2", label: "회원정보문의" },
      { value: "3", label: "기타문의" },
    ],
    []
  );

  const [question, setQuestion] = useState("");
  const [questionTitle, setQuestionTitle] = useState(null);
  const [questionCntnts, setQuestionCntnts] = useState(null);

  const questionSelectHandler = (e) => {
    setQuestion(e);
  };

  const questionTitleInputHandler = (e) => {
    setQuestionTitle(e.target.value);
  };

  const questionCntntsInputHandler = (e) => {
    setQuestionCntnts(e.target.value);
  };

  const fileSelectHandler = () => {};

  return (
    <div className={classes.Layout}>
      <CommonPageTitle title="1:1문의하기" />
      <div className={classes.questionOptionArea}>
        <CommPageSemiTitle semiTitle="문의유형" />
        <CommSelect
          width="100%"
          // title="문의유형"
          options={questionOption}
          defaultValue={question}
          value={question}
          onChange={questionSelectHandler}
        />
        <div className={classes.questionArea}>
          <CommPageSemiTitle semiTitle="문의내용" />
          <CommInput
            type="text"
            value={questionTitle}
            placeholder={"제목을 입력해주세요."}
            onChange={questionTitleInputHandler}
          />
          <textarea
            type="text"
            value={questionCntnts}
            maxLength="400"
            placeholder="문의하실 내용을 입력해주세요. (최대 400자)"
            onChange={questionCntntsInputHandler}
            className={classes.questionCntntsArea}
          />
        </div>
      </div>
      <div className={classes.fileSelectArea}>
        <CommPageSemiTitle semiTitle="파일첨부" />
        <CommBtn
          btnText="파일선택"
          btnCursor="pointer"
          fnClick={fileSelectHandler}
        />
        <div className={classes.noFileSelectedArea}>선택된 파일 없음</div>
        <div className={classes.noFileSelectedArea}>
          5MB 이하의 이미지 파일 형식
        </div>
      </div>
    </div>
  );
}

export default OneToOneQuestion;
