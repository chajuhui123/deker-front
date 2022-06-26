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
      <Collapsible
        // onClose={isCloseHandler}
        // onOpen={isOpenHandler}
        trigger={props.title}
        className={classes.closedQuestionTitle}
        openedClassName={classes.openedQuestionTitle}
        // triggerClassName={classes.closedTitle}
        // triggerOpenedClassName={classes.openedTitle}
      >
        <div className={classes.questionContent}>{props.content}</div>
      </Collapsible>
    </div>
  );
}

export default QuestionItem;
