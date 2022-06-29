import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { modalAction } from "store/modal-slice";

function OneToOneAnswerPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const productClickHandler = () => {
    // modal close
    dispatch(modalAction.modalPopup({ isOpen: false }));
  };

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

export default OneToOneAnswerPage;
