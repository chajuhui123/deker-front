import React from "react";

/**
 * 체크박스에 들어갈 TEXT component
 * @param {String} label            어떤 체크박스인지 전달
 * @param {Boolean} outerProductYN  외부 상품인지 여부 전달
 * @returns
 */

function CommChckbx(props) {
  const label = props.label;
  const outerProductYN = props.outerProductYN;
  // const [outerProductYN, setOuterProductYN] = useState(false); // 처음엔 false

  const outerProductIsCheckedHandler = (e) => {
    // 체크 한번하면 반대로(F->T) 바뀜
    // setOuterProductYN(!outerProductYN);
    console.log("here is checkbox outerProductYN value : " + outerProductYN);
    props.onChange(!outerProductYN); // 선택된 값을 상위 컴포넌트로 보냄
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={!outerProductYN}
        onChange={outerProductIsCheckedHandler}
      />
      <label>{label}</label>
    </div>
  );
}

export default CommChckbx;

// <CheckBoxContainer className={className}>
//   {" "}
//   <HiddenCheckBox type={"checkbox"} checked={checked} {...props} />{" "}
//   <StyledCheckBox checked={checked}>
//     {" "}
//     <Icon viewBox="0 0 24 24">
//       {" "}
//       <polyline points="19 7 10 17 5 12" />{" "}
//     </Icon>{" "}
//   </StyledCheckBox>{" "}
// </CheckBoxContainer>
