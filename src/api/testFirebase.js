const FIREBASE_DOMAIN = `${process.env.REACT_APP_BACKEND_ENDPOINT}`;

export default function api(action, data, callback) {
  const url = `${FIREBASE_DOMAIN}/${action}`;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    const resData = res.json();
    if (!res.ok) {
      throw new Error(
        resData.message || "오류가 발생했습니다. 관리자에게 문의해주세요."
      );
    } else {
      if (callback !== undefined && callback !== null) {
        callback(resData);
      }
    }
  });
}
