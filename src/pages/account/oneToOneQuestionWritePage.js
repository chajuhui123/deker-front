import CommAlert from "components/common/commAlert";
import CommBtn from "components/common/commBtn";
import CommInput from "components/common/commInput";
import CommPageSemiTitle from "components/common/commPageSemiTitle";
import CommonPageTitle from "components/common/commPageTitle";
import CommSelect from "components/common/CommSelect";
import { useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { modalAction } from "store/modal-slice";
import classes from "./oneToOneQuestionWritePage.module.css";

function OneToOneQuestionWritePage(props) {
  // 문의유형 Select Option
  const questionOption = [
    { value: "0", label: "상품문의" },
    { value: "1", label: "배송문의" },
    { value: "2", label: "회원정보문의" },
    { value: "3", label: "기타문의" },
  ];

  const [question, setQuestion] = useState("");
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionCntnts, setQuestionCntnts] = useState("");
  const [isFileSelected, setIsFileSelected] = useState(false);
  const photoInputRef = useRef();
  const dispatch = useDispatch();
  const [questionImg, setQuestionImg] = useState(null);
  const [prevImage, setPrevImage] = useState(null); // 미리보기 이미지
  // const [isVaildEmail, setIsVaildEmail] = useState(true);
  // const [isVaildPass, setIsVaildPass] = useState(true);
  const history = useHistory();

  const questionSelectHandler = (e) => {
    setQuestion(e);
  };

  // 문의 제목 입력 핸들러
  const questionTitleInputHandler = (e) => {
    setQuestionTitle(e.target.value);
  };

  // 문의 내용 입력 핸들러
  const questionCntntsInputHandler = (e) => {
    setQuestionCntnts(e.target.value);
  };

  // 이미지 파일 선택 버튼 핸들러
  const fileSelectHandler = (e) => {
    photoInputRef.current.click();
  };

  // 선택한 이미지 파일 출력 핸들러
  const imageHandler = (e) => {
    if (e.target.files.length > 0) {
      setPrevImage(URL.createObjectURL(e.target.files[0]));
      setQuestionImg(e.target.files[0]);
      setIsFileSelected(true);
    }
  };

  // '보내기' 버튼 핸들러
  const submitBtnHandler = () => {
    if (question?.length === 0) {
      console.log("문의 유형을 선택해주세요.");
      dispatch(
        modalAction.modalPopup({
          isOpen: true,
          cont: <CommAlert title="오류" message="문의 유형을 선택해주세요." />,
        })
      );
    } else if (questionTitle?.length === 0) {
      console.log("제목을 입력해주세요.");
      dispatch(
        modalAction.modalPopup({
          isOpen: true,
          cont: <CommAlert title="오류" message="제목을 입력해주세요." />,
        })
      );
    } else if (questionCntnts?.length === 0) {
      console.log("문의 내용을 입력해주세요.");
      dispatch(
        modalAction.modalPopup({
          isOpen: true,
          cont: <CommAlert title="오류" message="문의 내용을 입력해주세요." />,
        })
      );
    } else {
      //   dispatch(modalAction.modalPopup({ isOpen: false }));
      history.push("/question");
    }
  };

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
        <CommPageSemiTitle semiTitle="파일첨부 [선택]" />
        <input
          className={classes.profileImgInput}
          id="input_file"
          name="imgUpload"
          type="file"
          accept="image/*"
          ref={photoInputRef}
          onChange={imageHandler}
        />
        <img
          className={classes.profilePic}
          src={prevImage}
          alt={prevImage}
          // onClick={imageInputHandler}
        />
        <CommBtn
          btnText="파일선택"
          btnCursor="pointer"
          border="1px solid rgb(51, 51, 51)"
          bgColor="rgb(248, 248, 248)"
          radius="4px"
          txColor="rgb(78, 78, 78)"
          fnClick={fileSelectHandler}
          for="input_file"
        />
        {!isFileSelected ? (
          <div className={classes.noFileSelectedArea}>선택된 파일 없음</div>
        ) : (
          <div className={classes.noFileSelectedArea}>{questionImg.name}</div>
        )}
        <div className={classes.noFileSelectedArea}>
          5MB 이하의 이미지 파일 형식
        </div>
      </div>
      <div className={classes.submitBtn}>
        <CommBtn
          btnText="보내기"
          btnCursor="pointer"
          fnClick={submitBtnHandler}
        />
        {/* <div className={classes.signin_valid}>
          {!isVaildEmail && isVaildPass && (
            <textarea>올바른 이메일 형태를 입력해주세요.</textarea>
          )}
          {isVaildEmail && !isVaildPass && (
            <textarea>
              영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
            </textarea>
          )}
        </div> */}
      </div>
    </div>
  );
}

export default OneToOneQuestionWritePage;
