import CommBtn from "components/common/commBtn";
import CommInput from "components/common/commInput";
import { useState } from "react";
import Collapsible from "react-collapsible";
import classes from "./questionItem.module.css";

function QuestionItem(props) {
  const [answerText, setAnswerText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const isCloseHandler = () => {
    setIsOpen(false);
  };

  const isOpenHandler = () => {
    setIsOpen(true);
  };

  const answerSubmitBtnHandler = () => {
    console.log(answerText);
  };

  return (
    <div className={classes.Layout}>
      <div>{props.questionOption}</div>
      <Collapsible
        // onClose={isCloseHandler}
        // onOpen={isOpenHandler}
        trigger={props.questionTitle}
        className={classes.closedQuestionTitle}
        openedClassName={classes.openedQuestionTitle}
        // triggerClassName={classes.closedTitle}
        // triggerOpenedClassName={classes.openedTitle}
      >
        <div className={classes.questionContent}>{props.questionCntnts}</div>
        {props.departure === "admin" ? (
          <div className={classes.answerArea}>
            <CommInput
              title="답변하기"
              value={answerText}
              onChange={(e) => setAnswerText(e.target.value)}
            />
            <div className={classes.answerSubmitBtn}>
              {answerText?.length === 0 ? (
                <CommBtn
                  btnText="등록"
                  btnWidth="80px"
                  btnHeight="40px"
                  fontSize="20px"
                  border="1px solid rgb(51, 51, 51)"
                  bgColor="rgb(248, 248, 248)"
                  btnCursor="pointer"
                  txColor="rgb(78, 78, 78)"
                  fnClick={answerSubmitBtnHandler}
                />
              ) : (
                <CommBtn
                  btnText="등록"
                  btnWidth="80px"
                  btnHeight="40px"
                  fontSize="20px"
                  btnCursor="pointer"
                  fnClick={answerSubmitBtnHandler}
                />
              )}
            </div>
          </div>
        ) : (
          props.answerCntnts && (
            <div className={classes.answerCntntsArea}>
              안녕하세요 DEKER 입니다 :) {props.answerCntnts}
            </div>
          )
        )}
      </Collapsible>
    </div>
  );
}

export default QuestionItem;
