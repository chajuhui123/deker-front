import CommBtn from "components/common/commBtn";
import CommonPageTitle from "components/common/commPageTitle";
import QuestionList from "components/account/questionList";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./oneToOneAnswerPage.module.css";

function OneToOneAnswerPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const goWritePage = () => {
    history.push("/question/write");
    // dispatch(
    //   modalAction.modalPopup({
    //     isOpen: true,
    //     cont: <OneToOneQuestionWritePage />,
    //   })
    // );
  };

  const dummy_question = [
    {
      questionOption: "상품문의",
      questionTitle: "이것은 제목",
      questionCntnts:
        "이것은 내용 이것은 내용 이것은 내용 이것은 내용 이것은 내용 이것은 내용",
      questionImg: "img",
    },
    {
      questionOption: "상품문의",
      questionTitle: "저것은 제목",
      questionCntnts:
        "저것은 내용 저것은 내용 저것은 내용 저것은 내용 저것은 내용 저것은 내용 저것은 내용",
      questionImg: "img",
    },
    {
      questionOption: "배송문의",
      questionTitle: "이것은 제목",
      questionCntnts:
        "이것은 내용 이것은 내용 이것은 내용 이것은 내용 이것은 내용 이것은 내용",
    },
    {
      questionOption: "상품문의",
      questionTitle: "저것은 제목",
      questionCntnts:
        "저것은 내용 저것은 내용 저것은 내용 저것은 내용 저것은 내용 저것은 내용 저것은 내용",
      questionImg: "img",
    },
    {
      questionOption: "배송문의",
      questionTitle: "이것은 제목",
      questionCntnts:
        "이것은 내용 이것은 내용 이것은 내용 이것은 내용 이것은 내용 이것은 내용",
    },
    {
      questionOption: "상품문의",
      questionTitle: "저것은 제목",
      questionCntnts:
        "저것은 내용 저것은 내용 저것은 내용 저것은 내용 저것은 내용 저것은 내용 저것은 내용",
      questionImg: "img",
    },
    {
      questionOption: "배송문의",
      questionTitle: "이것은 제목",
      questionCntnts:
        "이것은 내용 이것은 내용 이것은 내용 이것은 내용 이것은 내용 이것은 내용",
    },
    {
      questionOption: "상품문의",
      questionTitle: "저것은 제목",
      questionCntnts:
        "저것은 내용 저것은 내용 저것은 내용 저것은 내용 저것은 내용 저것은 내용 저것은 내용",
      questionImg: "img",
    },
  ];

  return (
    <div className={classes.Layout}>
      <CommonPageTitle title="문의목록" />
      <QuestionList questionList={dummy_question} departure={"admin"} />
      <div className={classes.newQuestionBtn}>
        {/* <CommBtn
          btnText="새로 문의하기"
          btnWidth="200px"
          btnHeight="50px"
          fontSize="20px"
          btnCursor="pointer"
          fnClick={goWritePage}
        /> */}
      </div>
    </div>
  );
}

export default OneToOneAnswerPage;
