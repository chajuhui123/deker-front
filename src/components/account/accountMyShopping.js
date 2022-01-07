import React from "react";
import DeliStateDropdown from "../common/deliStateDropdown";
import PeriodDropdown from "../common/periodDropdown";
import classes from "./accountMyShopping.module.css";
import MyReviewList from "./myReviewList"; // request My review 말고 my product 같은걸로 바꿔서 props로 배송상태 주고 상태에 따라 띄우는거 어떤가

function AccountMyShopping(props) {
  const DUMMY_DATA_UNREVIEWED = [
    {
      id: 1,
      product_image:
        "http://imagescdn.gettyimagesbank.com/500/21/378/818/0/1326923672.jpg",
      product_brand: "시디즈",
      product_name: "T20 TAB+ TNA200HF 메쉬의자 2types",
      product_option: "블랙",
    },
    {
      id: 1,
      product_image:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      product_brand: "시디즈",
      product_name: "T20 TAB+ TNA200HF 메쉬의자 2types",
      product_option: "블랙",
    },
  ];

  return (
    <div className={classes.accountMyShopping_Layout}>
      <div className={classes.acctMyShopping_Inner}>
        <p className={classes.acctMyShopping_Title}>나의쇼핑</p>
        <hr className={classes.acctMyShopping_LineD} />
        <div className={classes.acctMyShopping_Main}>
          <p className={classes.acctMyShopping_SemiTitle}>주문배송내역 조회</p>
          <div className={classes.acctMyShopping_DelivTrack}></div>
          <div className={classes.acctMyShopping_DelivTrackCondition}>
            <PeriodDropdown />
            <DeliStateDropdown />
          </div>
          <p className={classes.acctMyShopping_SemiTitle}>주문상품</p>
          <div className={classes.acctMyShopping_orderProductDetail}>
            <p>000000000 | 2022.01.01.</p> {/* qestion 00000000 이거 뭐지??? */}
            <p className={classes.accountMyShopping_showDetail}>
              상세보기 {">"}
            </p>
            {/** qestion 상세보기는 페이지?? 모달?? */}
          </div>
          <MyReviewList reviews={DUMMY_DATA_UNREVIEWED} />
          <p className={classes.acctMyShopping_SemiTitle}>배송상태</p>
          {/* request 컴포넌트화 해주세요 */}
          <div className={classes.deliTableArea}>
            <table className={classes.deliTable}>
              <thead>
                <tr>
                  <th>날짜</th>
                  <th>배송상태</th>
                  <th>담당자/연락처</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>when</td>
                  <td>state</td>
                  <td>man</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountMyShopping;
