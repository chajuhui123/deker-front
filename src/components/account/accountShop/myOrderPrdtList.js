import MyOrderPrdtItem from "./myOrderPrdtItem";
import classes from "./myOrderPrdtList.module.css";

function MyOrderPrdtList(props) {
  return (
    <div>
      {props.orderedProductList?.length ? (
        <ul className={classes.orderProductDetail}>
          {props.orderedProductList.map((orderProduct) => (
            <li className={classes.productList}>
              {props.departure !== "productListToPay" && (
                <div className={classes.orderNumber}>
                  <div>{orderProduct.orderId}</div>
                  <div className={classes.d}>{` | `}</div>
                  <div>{orderProduct.stringDt}</div>
                </div>
              )}
              <MyOrderPrdtItem
                key={orderProduct.myOrderId}
                id={orderProduct.myOrderId}
                productId={orderProduct.productId}
                productImg={orderProduct.productImg}
                productName={orderProduct.productName}
                productBrand={orderProduct.productBrand}
                orderId={orderProduct.orderId}
                orderPrice={
                  orderProduct.orderPrice || orderProduct.productPrice
                }
                stringDt={orderProduct.stringDt}
                orderState={orderProduct.orderState}
                orderStateNm={orderProduct.orderStateNm}
                option1Nm={orderProduct.option1Nm || orderProduct.option1}
                option2Nm={orderProduct.option2Nm || orderProduct.option2}
                option1DataNm={
                  orderProduct.option1DataNm || orderProduct.option1Data
                }
                option2DataNm={
                  orderProduct.option2DataNm || orderProduct.option2Data
                }
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
