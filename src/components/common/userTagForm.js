import React, { useState } from "react";
import "./userTagForm.css";

function UserTagForm(props) {
  const [tag, setTag] = useState([]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState("1"); // 다음 index, 1번부터 시작하니까 '1'로 세팅

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

      setNextId(nextId + 1);
      setTag(copyItem);
      setInputText("");
    }
  };

  const onClickRemove = (id) => {
    const copyItem = tag.filter((tagTg) => tagTg.id !== id);
    setTag(copyItem);
  };
  const tagList = tag.map((tagElement) => (
    <li className="userTagForm_TagList" key={tagElement.id}>
      {tagElement.text}
      <button
        className="userTagForm_TagRmvBtn"
        onClick={() => onClickRemove(tagElement.id)}
      >
        X
      </button>
    </li>
  ));

  return (
    <div>
      <input
        className="userTagForm_TagInput"
        type="text"
        onChange={TagInputHandler}
        onKeyDown={enterSearch}
        value={inputText}
        maxLength={20}
      ></input>
      <div className="userTagForm_TagListArea">
        <ul>{tagList}</ul>
      </div>
    </div>
  );
}

export default UserTagForm;
