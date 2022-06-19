import classes from "./myShoppingCnt.module.css";

function MyShoppingCnt(props) {
  //   const deposit = countData.deposit;
  //   const payment = countData.payment;
  //   const preparation = countData.preparation;
  //   const delivery = countData.delivery;
  //   const complete = countData.complete;
  //   const finish = countData.finish;

  // console.log(props.countData);

  return (
    <div>
      <div className={classes.delivTrackCount}>
        {props.countData ? (
          <div className={classes.table}>
            <div className={classes.col}>
              <div className={classes.stateName}>입금대기</div>
              <div className={classes.countNum}>{props.countData.deposit}</div>
            </div>
            <div className={classes.deco}>{`>`}</div>
            <div className={classes.col}>
              <div className={classes.stateName}>결제완료</div>
              <div className={classes.countNum}>{props.countData.payment}</div>
            </div>
            <div className={classes.deco}>{`>`}</div>
            <div className={classes.col}>
              <div className={classes.stateName}>배송준비</div>
              <div className={classes.countNum}>
                {props.countData.preparation}
              </div>
            </div>
            <div className={classes.deco}>{`>`}</div>
            <div className={classes.col}>
              <div className={classes.stateName}>배송중</div>
              <div className={classes.countNum}>{props.countData.delivery}</div>
            </div>
            <div className={classes.deco}>{`>`}</div>
            <div className={classes.col}>
              <div className={classes.stateName}>배송완료</div>
              <div className={classes.countNum}>{props.countData.complete}</div>
            </div>
            <div className={classes.deco}>{`>`}</div>
            <div className={classes.col}>
              <div className={classes.stateName}>구매확정</div>
              <div className={classes.countNum}>{props.countData.finish}</div>
            </div>
          </div>
        ) : (
          <div className={classes.noUploadText}>
            <text>주문한 이력이 없습니다.</text>
          </div>
        )}
      </div>
    </div>
  );
}
export default MyShoppingCnt;
