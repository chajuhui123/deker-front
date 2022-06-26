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
                title={myQuestion.title}
                content={myQuestion.content}
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
