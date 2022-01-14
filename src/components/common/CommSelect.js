import React from "react";
import classes from "./CommSelect.module.css";
import Select from "react-select";

/**
 * 공통 select component
 * @param {String} title 제목 (생략시 영역 hidden)
 * @param {Array} options select에 들어갈 선택 사항들
 * @param {Object} defaultValue 최초 로딩 시 기본선택 될 옵션 {value: "", lable: ""}
 * @param {Function} onChange 선택 사항 변화 시 포인트 메소드
 * @param {String} placeholder 미선택시 보여줄 문구
 * @returns
 */
function CommSelect({ title, options, defaultValue, onChange, placeholder }) {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: 300,
      margin: "0 30px 0 0",
      isDisabled: state.isSelected ? true : false,
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#000000" : "#000000",
      fontWeight: state.isSelected ? "bolder" : "normal",
      backgroundColor: state.isSelected ? "#0014ff20" : "#ffffff",
      height: 50,
      padding: 20,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };
  return (
    <div>
      {title && <p className={classes.selectTitle}>{title}</p>}
      <Select
        name="commSelect"
        styles={customStyles}
        options={options}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder={placeholder || "선택"}
      />
    </div>
  );
}

export default CommSelect;
