const FIREBASE_DOMAIN = `${process.env.REACT_APP_BACKEND_ENDPOINT}`;

export function postApi(action, data, callback) {
  const url = `${FIREBASE_DOMAIN}${action}`;

  fetch(url, {
    // method: "GET",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    res.json().then((data) => {
      callback(data);
    });
  });
}

export function getApi(action, callback) {
  const url = `${FIREBASE_DOMAIN}${action}`;

  fetch(url, {
    method: "GET",
  }).then((res) => {
    console.log(res);
    res.json().then((data) => {
      callback(data);
    });
  });
}

export function testApi(action, data, callback) {
  const DUMMY_DATA = {
    product_id: "P0001",
    product_name: "모먼트 썬라이즈 조명 16컬러+리모컨 (어댑터 증정)",
    product_brand: "이이공브이샵",
    product_img:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162338893220943458.jpg?gif=1&w=640&h=640&c=c",
    product_option: "단일옵션",
    rec_user_name: "홍길동",
    rec_user_addr: "서울시 동작구 한강대로1길 한강아파트 101동 202호",
    rec_deli_comp: "CJ택배",
    rec_deli_no: "123123123",
    deli_arry: [
      {
        deli_date: "2022년 01월 01일 09시 00분 00초",
        deli_status: "접수 완료",
        deli_tel: "02-1234-5678",
      },
      {
        deli_date: "2022년 01월 02일 13시 13분 13초",
        deli_status: "출고 완료",
        deli_tel: "02-1234-5678",
      },
      {
        deli_date: "2022년 01월 03일 23시 23분 23초",
        deli_status: "배송 중",
        deli_tel: "02-1234-5678",
      },
    ],
  };

  callback(DUMMY_DATA);
}
