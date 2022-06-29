import QuestionList from "components/account/questionList";
import CommBtn from "components/common/commBtn";
import CommonPageTitle from "components/common/commPageTitle";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./oneToOneQuestionPage.module.css";

function OneToOneQuestionPage(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const goWritePage = () => {
    history.push("/question/write");
  };

  const dummy_question = [
    {
      title: "이것 문의",
      content:
        "이것은 내용 이것은 내용 이것은 내용 이것은 내용 이것은 내용 이것은 내용",
    },
    {
      title: "저것 문의",
      content:
        "저것은 내용 저것은 내용 저것은 내용 저것은 내용 저것은 내용 저것은 내용 저것은 내용",
    },
    {
      title: "이것 문의",
      content:
        "이것은 내용 이것은 내용 이것은 내용 이것은 내용 이것은 내용 이것은 내용",
    },
    {
      title: "저것 문의",
      content:
        "저것은 내용 저것은 내용 저것은 내용 저것은 내용 저것은 내용 저것은 내용 저것은 내용",
    },
    {
      title: "이것 문의",
      content:
        "이것은 내용 이것은 내용 이것은 내용 이것은 내용 이것은 내용 이것은 내용",
    },
    {
      title: "저것 문의",
      content:
        "저것은 내용 저것은 내용 저것은 내용 저것은 내용 저것은 내용 저것은 내용 저것은 내용",
    },
  ];

  return (
    <div className={classes.Layout}>
      <CommonPageTitle title="나의 문의하기" />
      <QuestionList questionList={dummy_question} />
      <div className={classes.newQuestionBtn}>
        <CommBtn
          btnText="새로 문의하기"
          btnWidth="200px"
          btnHeight="50px"
          fontSize="20px"
          btnCursor="pointer"
          fnClick={goWritePage}
        />
      </div>
    </div>
  );
}

export default OneToOneQuestionPage;
