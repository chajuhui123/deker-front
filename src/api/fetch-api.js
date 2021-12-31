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
