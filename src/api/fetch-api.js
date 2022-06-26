import CommAlert from "components/common/commAlert";
import { modalAction } from "store/modal-slice";
import { spinnerAction } from "store/spinner-slice";
import { fetchEventSource } from "@microsoft/fetch-event-source";

const BASE_URL = `${process.env.REACT_APP_BACKEND_ENDPOINT}`;

/**
 * post api
 * @param {String} action : url
 * @param {Object} data : data
 * @param {Function} callback : 콜백 메소드
 * @returns
 */
export function postApi(action, data, callback, spinner) {
  const url = `${BASE_URL}/${action}`;
  const token = "Bearer " + localStorage.getItem("token");

  return (dispatch) => {
    if (!!spinner) {
      dispatch(spinnerAction.loading());
    }
    fetch(url, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(data),
      credentials: "include",
    })
      .then((res) => {
        dispatch(spinnerAction.complete());
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("오류가 발생 했습니다.");
        }
      })
      .then((data) => {
        console.debug("postApi :: data :: ", data);
        if (data.responseCode !== "200") {
          throw new Error(data.message || "오류가 발생 했습니다.");
        }
        callback(data);
      })
      .catch((err) => {
        dispatch(
          modalAction.modalPopup({
            isOpen: true,
            cont: <CommAlert title="오류" message={err.message} />,
          })
        );
        callback(null);
      });
  };
}

export function getApi(action, callback) {
  const url = `${BASE_URL}/${action}`;

  return (dispatch) => {
    dispatch(spinnerAction.loading());
    fetch(url, {
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        } else {
          throw new Error("오류가 발생 했습니다.");
        }
      })
      .then((data) => {
        dispatch(spinnerAction.complete());
        if (data.responseCode !== "200") {
          throw new Error(data.message || "오류가 발생 했습니다.");
        }
        callback(data);
      })
      .catch((err) => {
        dispatch(
          modalAction.modalPopup({
            isOpen: true,
            cont: <CommAlert title="오류" message={err.message} />,
          })
        );
      });
  };
}

export function fileApi(action, data, callback) {
  const url = `${BASE_URL}/${action}`;
  const token = "Bearer " + localStorage.getItem("token");

  return (dispatch) => {
    dispatch(spinnerAction.loading());
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: token,
        "X-AUTH-TOKEN": token,
      },
      body: data,
    })
      .then((res) => {
        dispatch(spinnerAction.complete());
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("오류가 발생 했습니다.");
        }
      })
      .then((data) => {
        console.debug("fileApi :: data :: ", data);
        if (data.responseCode !== "200") {
          throw new Error(data.message || "오류가 발생 했습니다.");
        }
        callback(data);
      })
      .catch((err) => {
        dispatch(
          modalAction.modalPopup({
            isOpen: true,
            cont: <CommAlert title="오류" message={err.message} />,
          })
        );
      });
  };
}

export function sseApi() {
  const url = `${BASE_URL}/mb/sse-start`;
  const token = "Bearer " + localStorage.getItem("token");
  return (dispatch) => {
    fetchEventSource(url, {
      method: "POST",
      headers: {
        Accept: "text/event-stream",
        Authorization: token,
      },
      onopen(res) {
        if (res.ok && res.status === 200) {
          console.log("Connection made ", res);
        } else if (
          res.status >= 400 &&
          res.status < 500 &&
          res.status !== 429
        ) {
          console.log("Client side error ", res);
        }
      },
      onmessage(event) {
        const parsedData = JSON.parse(event.data);
        console.log(parsedData);
      },
      onclose(e) {
        console.log("Connection closed by the server");
      },
      onerror(err) {
        console.log("There was an error from server", err);
        dispatch(
          modalAction.modalPopup({
            isOpen: true,
            cont: <CommAlert title="오류" message={err} />,
          })
        );
      },
    });
  };
}
