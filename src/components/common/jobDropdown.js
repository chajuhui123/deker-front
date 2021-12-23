import React, { useMemo } from "react";
import Select from "react-select";

function JobDropdown(props) {
  // 직군 select option
  const jopGroupOptions = useMemo(
    () => [
      { value: "경영사무", label: "경영사무" },
      { value: "미디어", label: "미디어" },
      { value: "전문특수직", label: "전문특수직" },
      { value: "영업고객상담", label: "영업고객상담" },
      { value: "IT인터넷", label: "IT인터넷" },
      { value: "연구개발설계", label: "연구개발설계" },
      { value: "건설", label: "건설" },
      { value: "마케팅광고홍보", label: "마케팅광고홍보" },
      { value: "생산제조", label: "생산제조" },
      { value: "의료", label: "의료" },
      { value: "무역유통", label: "무역유통" },
      { value: "디자인", label: "디자인" },
      { value: "교육", label: "교육" },
      { value: "서비스", label: "서비스" },
    ],
    []
  );

  return (
    <div>
      <Select
        options={jopGroupOptions}
        //defaultValue={jopGroupOptions[0]} <- 이거 SELECT... 인게 낫나?
      />
    </div>
  );
}

export default JobDropdown;
