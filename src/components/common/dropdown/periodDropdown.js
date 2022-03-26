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

  // 기간이 선택되면 상위 컴포넌트(accountMyShopping)으로 보냄
  const periodDropdownSelectedHandler = (e) => {
    const valueoption = e.label;
    props.inqPeriodChgHandler(valueoption);
  };

  return (
    <div>
      <Select
        options={PeriodOptions}
        defaultValue={PeriodOptions[6]}
        onChange={periodDropdownSelectedHandler}
      />
    </div>
  );
}

export default PeriodDropdown;
