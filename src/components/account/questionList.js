import QuestionItem from "./questionItem";
import classes from "./questionList.module.css";

function QuestionList(props) {
  return (
    <div>
      {props.questionList?.length ? (
        <ul>
          {props.questionList.map((myQuestion) => (
            <li>
              <QuestionItem
                questionOption={myQuestion.questionOption}
                questionTitle={myQuestion.questionTitle}
                questionCntnts={myQuestion.questionCntnts}
                questionImg={myQuestion.questionImg}
                answerCntnts={myQuestion.answerCntnts}
                departure={props.departure}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className={classes.noUploadText}>
          <text>문의 이력이 없습니다.</text>
        </div>
      )}
    </div>
  );
}

export default QuestionList;
