import React from "react";
import classes from "./DeliveryInfo.module.css";

function DeliveryInfo(props) {
  return (
    <>
      <div className={classes.deliTitle}>
        <p>배송 상태</p>
      </div>
      <table className={classes.deliTable}>
        <thead>
          <tr>
            <th>날짜</th>
            <th>배송 상태</th>
            <th>위치</th>
            <th>연락처</th>
          </tr>
        </thead>
        <tbody>
          {props.trackingList &&
            props.trackingList.map((tracking, index) => (
              <tr key={index}>
                <td>{tracking.timeFormat}</td>
                <td>{tracking.levelNm}</td>
                <td>{tracking.where}</td>
                <td>{tracking.telno}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default DeliveryInfo;
