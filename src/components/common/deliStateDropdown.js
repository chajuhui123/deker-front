import React, { useMemo } from "react";
import Select from "react-select";

/******커스터마이징을 못하겠음 *****/

function DeliStateDropdown(props) {
  // 기간 select option
  const DeliStateOptions = useMemo(
    () => [
      { value: "none", label: "주문상태" },
      { value: "입금대기", label: "입금대기" },
      { value: "결제완료", label: "결제완료" },
      { value: "배송준비", label: "배송준비" },
      { value: "배송중", label: "배송중" },
      { value: "배송완료", label: "배송완료" },
      { value: "구매확정", label: "구매확정" },
    ],
    []
  );

  // 기간이 선택되면 상위 컴포넌트(accountMyShopping)으로 보냄
  const deliStateDropdownSelectedHandler = (e) => {
    const valueoption = e.label;
    props.onCreate(valueoption);
  };

  return (
    <div>
      <Select
        options={DeliStateOptions}
        defaultValue={DeliStateOptions[0]}
        onChange={deliStateDropdownSelectedHandler}
      />
    </div>
  );
}

export default DeliStateDropdown;
