import CommInput from "components/common/commInput";
import { useState } from "react";
import Collapsible from "react-collapsible";
import classes from "./questionItem.module.css";

function QuestionItem(props) {
  const [isOpen, setIsOpen] = useState(false);
  const isCloseHandler = () => {
    setIsOpen(false);
  };

  const isOpenHandler = () => {
    setIsOpen(true);
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
        <CommInput
          title="답변하기"
          // value={addNickname}
          // onChange={addNicknameHandler}
        />
      </Collapsible>
    </div>
  );
}

export default QuestionItem;
