import MyOrderPrdtItem from "./myOrderPrdtItem";
import classes from "./myOrderPrdtList.module.css";

function MyOrderPrdtList(props) {
  return (
    <div>
      {props.orderedProductList?.length ? (
        <ul className={classes.orderProductDetail}>
          {props.orderedProductList.map((orderProduct) => (
            <li className={classes.productList}>
              <div className={classes.orderNumber}>
                <div>{orderProduct.orderId}</div>
                <div className={classes.d}>{` | `}</div>
                <div>{orderProduct.stringDt}</div>
              </div>
              <MyOrderPrdtItem
                key={orderProduct.productId}
                id={orderProduct.productId}
                productId={orderProduct.productId}
                productImg={orderProduct.productImg}
                productName={orderProduct.productName}
                productBrand={orderProduct.productBrand}
                orderId={orderProduct.orderId}
                orderPrice={orderProduct.orderPrice}
                stringDt={orderProduct.stringDt}
                orderState={orderProduct.orderState}
                orderStateNm={orderProduct.orderStateNm}
                orderQuantity={orderProduct.orderQuantity}
                departure={props.departure}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className={classes.noUploadText}>
          <text>주문한 이력이 없습니다.</text>
        </div>
      )}
    </div>
  );
}

export default MyOrderPrdtList;
