import CommonPageTitle from "components/common/commPageTitle";
import QuestionList from "components/account/questionList";
import classes from "./oneToOneAnswerPage.module.css";

function OneToOneAnswerPage() {
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
    </div>
  );
}

export default OneToOneAnswerPage;
