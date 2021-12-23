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
    if (e.keyCode === 32) {
      const copyItem = tag.concat({
        id: nextId,
        text: inputText,
      });

      setNextId(nextId + 1);
      setTag(copyItem);
      setInputText("");
    }
    // enter 누르면 리스트 삭제하고 '완료(메인페이지)'로 이동함 왜??
  };

  const onClickRemove = (id) => {
    const copyItem = tag.filter((tagTg) => tagTg.id !== id);
    setTag(copyItem);
  };
  const tagList = tag.map((tagElement) => (
    <div className="userTagForm_TagArea">
      <li className="userTagForm_TagList" key={tagElement.id}>
        {tagElement.text}
        <button
          className="userTagForm_TagRmvBtn"
          onClick={() => onClickRemove(tagElement.id)}
        >
          X
        </button>
      </li>
    </div>
  ));

  return (
    <form>
      <div>
        <input
          className="userTagForm_TagInput"
          type="text"
          onChange={TagInputHandler}
          onKeyDown={enterSearch}
          value={inputText}
        ></input>
        <ul>{tagList}</ul>
      </div>
    </form>
  );
}

export default UserTagForm;
