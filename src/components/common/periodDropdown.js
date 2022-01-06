import React, { useMemo } from "react";
import Select from "react-select";

/******커스터마이징을 못하겠음 *****/

function PeriodDropdown(props) {
  // 기간 select option
  const PeriodOptions = useMemo(
    () => [
      { value: "none", label: "기간" },
      { value: "day", label: "하루" },
      { value: "week", label: "1주일 전" },
      { value: "month", label: "1개월 전" },
      { value: "half_year", label: "6개월 전" },
      { value: "year", label: "1년 전" },
      { value: "all", label: "전체조회" },
    ],
    []
  );

  const periodDropdownStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? "red" : "blue",
        color: "red",
        cursor: isDisabled ? "not-allowed" : "default",
      };
    },
  };
  return (
    <div>
      <Select
        styles={periodDropdownStyles}
        options={PeriodOptions}
        defaultValue={PeriodOptions[0]}
      />
    </div>
  );
}

export default PeriodDropdown;
