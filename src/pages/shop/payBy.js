import classes from "./payBy.module.css";

const PayBy = () => {
  return (
    <div className={classes.payByArea}>
      <div className={classes.paymentD}>
        <img src="https://cdn-icons-png.flaticon.com/512/60/60378.png" />
        <div>카드</div>
      </div>
      <div className={classes.paymentD}>
        <img
          clasName={classes.img}
          src="https://st3.depositphotos.com/1393072/36795/v/600/depositphotos_367955912-stock-illustration-banknotes-and-coins-stack-thin.jpg"
        />
        <div>무통장입금</div>
      </div>
      <div className={classes.paymentD}>
        <img src="https://play-lh.googleusercontent.com/W43xj43ErMIs5BQgCdMKEa0NXCoUUW8DjQc5SxcDfLrC26H8sHDmoFIUWLYmsQahpo0" />
        <div>카카오페이</div>
      </div>
      <div className={classes.paymentD}>
        <img src="https://img.pay.naver.net/static/images/customer/og/naverpay.png" />
        <div>네이버페이</div>
      </div>
      <div className={classes.paymentD}>
        <img src="https://image.toast.com/aaaaac/paycoNoti/payco_com.jpg" />
        <div>페이코</div>
      </div>
      <div className={classes.paymentD}>
        <img src="https://play-lh.googleusercontent.com/W607uSRreW4h6Ar4reYPYCtYXID0_AIsd9m2fgWwdAN7JyZGG3WVM782wa5CfCvKZVM" />
        <div>토스</div>
      </div>
    </div>
  );
};

export default PayBy;
