import classes from "./payBy.module.css";

const PayBy = () => {
  return (
    <div className={classes.payByArea}>
      <div className={classes.paymentD}>카드</div>
      <div className={classes.paymentD}>무통장입금</div>
      <div className={classes.paymentD}>카카오페이</div>
      <div className={classes.paymentD}>네이버페이</div>
      <div className={classes.paymentD}>페이코</div>
      <div className={classes.paymentD}>토스</div>
    </div>
  );
};

export default PayBy;
