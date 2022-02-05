import React from "react";
import { useDispatch } from "react-redux";
import { modalAction } from "store/modal-slice";
import classes from "./PlusBtn.module.css";
import ProductSalesLink from "./productSalesLinkPage";

/**
 * 상품 정보 입력 플러스 버튼
 * @param {String} id : id 값
 * @param {String} top : top 위치값
 * @param {String} left : left 위치값
 * @returns
 */
function PlusBtn(props) {
  const dispatch = useDispatch();

  const stylePosition = {
    top: props.top,
    left: props.left,
  };

  // const [productInfo, setProductInfo] = useState({
  //   id: props.id,
  //   offsetX: props.left,
  //   offsetY: props.top,
  //   productId: "",
  //   productDescription: "",
  // });

  const productInfoHandler = (data) => {
    console.log(data);
  };

  const plusHandler = (e) => {
    dispatch(
      modalAction.modalPopup({
        isOpen: true,
        top: props.top,
        left: props.left,
        cont: (
          <ProductSalesLink
            id={props.id}
            productInfoHandler={productInfoHandler}
          />
        ),
      })
    );
  };

  return (
    <div
      className={classes.plusBtnArea}
      style={stylePosition}
      onClick={plusHandler}
    >
      <button>
        <span></span>
        <svg width="1em" height="1em" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="currentColor"></circle>
          <path
            stroke="#FFF"
            strokeLinecap="square"
            strokeWidth="2"
            d="M12 16V8m-4 4h8"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default PlusBtn;
