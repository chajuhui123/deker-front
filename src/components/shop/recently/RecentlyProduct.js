import { useCookies } from "react-cookie";
import React, { useState } from "react";

const RecentlyProduct = (props) => {
  const [recentlyProduct, setRecentlyProduct] = useState([]);
  const [cookies, setCookie, removeCookies] = useCookies(["productArray"]);
  const addCookieHandler = () => {
    let addCookies = !!cookies.productArray
      ? cookies.productArray.concat()
      : [];
    for (let i = 0; i < 10; i++) {
      const obj = {
        productId: i,
        productName: "TEST " + i,
        productImg:
          "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164447023503877747.jpeg?gif=1&w=320&h=320&c=c",
      };
      addCookies = addCookies.concat(obj);
    }
    console.log(addCookies);
    setCookie("productArray", addCookies);
  };
  const removeCookieHandler = () => {
    removeCookies("productArray");
  };
  const changeStateHandler = () => {
    setRecentlyProduct(cookies.productArray);
  };
  const test = () => {
    console.log(cookies);
  };
  return (
    <div>
      <button onClick={addCookieHandler}>ADD COOKIE</button>
      <button onClick={removeCookieHandler}>REMOVE COOKIE</button>
      <button onClick={changeStateHandler}>CHANGE STATE</button>
      <button onClick={test}>TEST</button>
      {recentlyProduct &&
        recentlyProduct.map((p, i) => {
          return (
            <div key={i}>
              <div>
                {p.productId} {i}
              </div>
              <div>{p.productName}</div>
              <img alt="상품이미지" src={p.productImg} />
            </div>
          );
        })}
    </div>
  );
};

export default RecentlyProduct;
