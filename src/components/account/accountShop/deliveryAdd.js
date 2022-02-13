import CommBtn from "components/common/commBtn";
import { useDispatch } from "react-redux";
import { modalAction } from "store/modal-slice";
import classes from "./deliveryAdd.module.css";
import DeliverySelect from "./deliverySelect";

const DeliveryAdd = (props) => {
  // API 써야할듯
  const dispatch = useDispatch();

  const AddrAddCnclHandler = () => {
    dispatch(
      modalAction.modalPopup({
        isOpen: true,
        cont: <DeliverySelect />,
      })
    );
  };
  const AddrAddRegHandler = () => {
    dispatch(
      modalAction.modalPopup({
        isOpen: true,
        cont: <DeliverySelect />,
      })
    );
  };
  return (
    <div className={classes.btnArea}>
      <div>
        <CommBtn
          btnText="취소"
          btnWidth="88px"
          btnHeight="33px"
          border="3px solid rgb(66, 66, 226)"
          bgColor="rgb(248, 248, 248)"
          radius="4px"
          txColor="rgb(78, 78, 78)"
          fontSize="17px"
          fnClick={AddrAddCnclHandler}
        />
      </div>
      <div className={classes.submitBtn}>
        <CommBtn
          btnText="등록"
          btnWidth="92px"
          btnHeight="38px"
          border="1px solid rgb(66, 66, 226)"
          bgColor="rgb(66, 66, 226)"
          radius="4px"
          txColor="rgb(245, 245, 245)"
          fontSize="17px"
          fnClick={AddrAddRegHandler}
        />
      </div>
    </div>
  );
};

export default DeliveryAdd;
