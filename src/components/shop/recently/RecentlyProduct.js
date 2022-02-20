import React, { useState } from "react";

const RecentlyProduct = (props) => {
  const storageKey = "recentlyProducts";
  const [recentlyProduct, setRecentlyProduct] = useState([]);
  const addCookieHandler = () => {
    let addCookies = localStorage.getItem(storageKey) || [];
    for (let i = 0; i < 10; i++) {
      const obj = {
        productId: i,
        productName: "TEST " + i,
        productImg:
          "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164447023503877747.jpeg?gif=1&w=320&h=320&c=c",
      };
      addCookies = addCookies.concat(obj);
    }
    localStorage.setItem(storageKey, JSON.stringify(addCookies));
  };
  const removeCookieHandler = () => {
    localStorage.removeItem(storageKey);
  };
  const changeStateHandler = () => {
    setRecentlyProduct(localStorage.getItem(storageKey));
  };
  const test = () => {
    const test = localStorage.getItem(storageKey);
    console.log(JSON.parse(test));
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
