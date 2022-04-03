import React from "react";
import classes from "./CommSelect.module.css";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

/**
 * 공통 select component
 * @param {String} title 제목 (생략시 영역 hidden)
 * @param {String} width 넓이 (String "100px")
 * @param {String} height 높이 (String "20px")
 * @param {Array} options select에 들어갈 선택 사항들
 * @param {String} value 값
 * @param {Function} onChange 선택 사항 변화 시 포인트 메소드
 * @returns
 */
function CommSelect({ title, width, height, options, value, onChange }) {
  const onChangeHandler = (e) => {
    onChange(e.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      {title && <p className={classes.selectTitle}>{title}</p>}
      <FormControl fullWidth>
        <Select
          labelId="common-label"
          id="common-select"
          value={value}
          onChange={onChangeHandler}
          style={{
            width: width || "150px",
            height: height || "40px",
            marginRight: "30px",
          }}
        >
          {options?.map((option) => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {/* <Select
        styles={customStyles}
        options={options}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder={placeholder || "선택"}
      /> */}
    </Box>
  );
}

export default CommSelect;
