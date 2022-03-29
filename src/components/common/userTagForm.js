import React, { useEffect, useState, useCallback } from "react";
import classes from "./userTagForm.module.css";

/**
 * 공통 태그 컴포넌트
 * @param {Function} tagOutHandler
 * @returns
 */
function UserTagForm(props) {
  const [tag, setTag] = useState([]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(1); // 다음 index, 1번부터 시작하니까 1로 세팅
  const [isLoad, setIsLoad] = useState(false);

  // 태그 Input Handler
  const TagInputHandler = (e) => {
    setInputText(e.target.value);
  };

  // space bar 누르면 값 배열에 넣고, reset input area *keyCode == 32: space bar
  const enterSearch = (e) => {
    //e.preventDefault(); // enter 누르면 리스트 삭제하고 '완료(메인페이지)'로 이동함 왜?? 뭔가 모르겠으면 다 해보기
    if (e.keyCode === 32) {
      const copyItem = tag.concat({
        id: nextId,
        text: inputText,
      });
      console.log(nextId);
      console.log(copyItem);

      setNextId(nextId + 1);
      setTag(copyItem);
      setInputText("");
      tagOutHandler(copyItem);
    }
  };

  const onClickRemove = (id) => {
    const copyItem = tag.filter((tagTg) => tagTg.id !== id);
    setTag(copyItem);
    tagOutHandler(copyItem);
  };

  const tagOutHandler = (tagArry) => {
    if (!!props.tagOutHandler) {
      props.tagOutHandler(tagArry);
    }
  };

  const restoreTags = useCallback(() => {
    console.log("userTagForm :: restoreTags :: props.tags :: ", props.tags);
    console.log("userTagForm :: restoreTags :: tag :: ", tag);
    console.log("userTagForm :: restoreTags :: isLoad :: ", isLoad);
    const tagArry = props.tags || null;
    if (tagArry.length > 0) {
      if (!isLoad) {
        const arry = tagArry.map((t) => {
          setNextId((prev) => prev + 1);
          return {
            id: nextId,
            text: t,
          };
        });
        console.log(arry);
        setTag(arry);
        setIsLoad(true);
      }
    }
  }, [isLoad, nextId, props.tags, tag]);

  useEffect(() => {
    console.log("userTagForm :: useEffect()");
    restoreTags();
  }, [restoreTags]);

  return (
    <div>
      <input
        className={classes.userTagForm_TagInput}
        type="text"
        onChange={TagInputHandler}
        onKeyDown={enterSearch}
        value={inputText}
        maxLength={20}
      ></input>
      <div className={classes.userTagForm_TagListArea}>
        <ul>
          {tag &&
            tag.map((tagElement) => (
              <li className={classes.userTagForm_TagList} key={tagElement.id}>
                <div className={classes.sharpArea}>#</div>
                <div className={classes.userTagTextArea}>{tagElement.text}</div>
                <button
                  className={classes.userTagForm_TagRmvBtn}
                  onClick={() => onClickRemove(tagElement.id)}
                >
                  X
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default UserTagForm;
