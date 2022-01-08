import React, { useMemo } from "react";
import Select from "react-select";

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

  /******커스터마이징을 못하겠음 *****/
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

  // 기간이 선택되면 상위 컴포넌트(accountMyShopping)으로 보냄
  const periodDropdownSelectedHandler = (e) => {
    const valueoption = e.label;
    props.onCreate(valueoption);
  };

  return (
    <div>
      <Select
        styles={periodDropdownStyles}
        options={PeriodOptions}
        defaultValue={PeriodOptions[0]}
        onChange={periodDropdownSelectedHandler}
      />
    </div>
  );
}

export default PeriodDropdown;
