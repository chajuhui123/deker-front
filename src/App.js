import { useEffect, useCallback } from "react";
import classes from "./App.module.css";
import NavigationBar from "components/main/navigation/NavigationBar";
import Footer from "components/main/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { modalAction } from "./store/modal-slice";
import ModalPopup from "components/common/modal";
import { calculateRemainingTime } from "api/check";
import { userAction } from "store/user-slice";
import LoadingSpinner from "components/common/LoadingSpinner";
import { spinnerAction } from "store/spinner-slice";
import RouteComponent from "Route";

function App() {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const modalId = useSelector((state) => state.modal.id);
  const modalCont = useSelector((state) => state.modal.cont);
  const isLoading = useSelector((state) => state.spinner.isLoading);
  const top = useSelector((state) => state.modal.top);
  const left = useSelector((state) => state.modal.left);
  const dispatch = useDispatch();

  const spinnerStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "auto",
      height: "auto",
      maxWidth: "100%",
      maxHeight: "100%",
      margin: "0px",
      padding: "0px",
      transform: "translate(-50%, -50%)",
      border: "none",
      background: "translate!important",
      zIndex: "1000",
    },

    overlay: {
      backgroundColor: "rgb(0 0 0 / 50%)",
    },
  };

  const closeModalEventHandler = () => {
    dispatch(modalAction.modalPopup({ isOpen: false }));
  };
  const closeSpinnerHandler = () => {
    dispatch(spinnerAction.complete());
  };

  const retrieveStoredToken = useCallback(() => {
    const storedExpirationTime = localStorage.getItem("extTokenTime");
    if (!!storedExpirationTime) {
      const remainingTime = calculateRemainingTime(storedExpirationTime);
      if (remainingTime <= 60000) {
        localStorage.removeItem("token");
        localStorage.removeItem("extTokenTime");
        dispatch(userAction.logout());
      } else {
        const jwtToken = localStorage.getItem("token");
        dispatch(userAction.login({ jwtToken }));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    retrieveStoredToken();
  }, [retrieveStoredToken]);

  return (
    <div className={classes.normalView}>
      <ModalPopup
        id={modalId}
        isOpen={isOpen}
        top={top}
        left={left}
        onRequestClose={closeModalEventHandler}
      >
        {modalCont}
      </ModalPopup>
      <ModalPopup
        id="spinner"
        isOpen={isLoading}
        spinnerStyle={spinnerStyle}
        onRequestClose={closeSpinnerHandler} // TODO : 삭제 해야함
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <LoadingSpinner />
        </div>
      </ModalPopup>
      <NavigationBar />
      <div className={classes.content}>
        <RouteComponent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
