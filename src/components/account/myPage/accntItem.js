import CommBtn from "components/common/commBtn";
import { useState } from "react";
import classes from "./accntItem.module.css";

const AccntItem = (props) => {
  //   console.log(props.departure);
  const [isFollowing, setIsFollowing] = useState(true);

  // 팔로잉, 언팔로잉 버튼 이벤트
  const followingChangeBtnHandler = () => {
    setIsFollowing(!isFollowing);
  };

  // 팔로워 삭제 버튼 이벤트
  const followerDltChangeBtnHandler = () => {
    // 팝업: 정말 삭제하시겠습니까? 상대방은 내가 팔로워 취소한 사실을 알 수 없습니다.
  };

  return (
    <div>
      <div className={classes.accntDtl}>
        <div>
          {/* <Link
          to={{
            pathname: `/market/detail/${productId}`,
            state: { productId: props.id },
          }}
        > */}
          <img
            className={classes.profileImg}
            alt={props.profile_img}
            //   src={`${BASE_URL}${props.productImg}` || noImg}
            src={props.profile_img}
          />
          {/* </Link> */}
          <div className={classes.nickname}>{props.nick_name}</div>
        </div>
        <div className={classes.isFollowBtn}>
          {props.departure === "following" ? (
            isFollowing ? (
              <CommBtn
                btnText="팔로잉"
                btnWidth="50px"
                btnHeight="30px"
                border="1px solid rgb(51, 51, 51)"
                bgColor="rgb(248, 248, 248)"
                radius="4px"
                txColor="rgb(78, 78, 78)"
                fontSize="13px"
                fnClick={followingChangeBtnHandler}
              />
            ) : (
              <CommBtn
                btnText="팔로우"
                btnWidth="50px"
                btnHeight="30px"
                border="1px solid rgb(66, 66, 226)"
                bgColor="rgb(66, 66, 226)"
                radius="4px"
                txColor="rgb(245, 245, 245)"
                fontSize="13px"
                fnClick={followingChangeBtnHandler}
              />
            )
          ) : (
            props.departure === "follower" && (
              <CommBtn
                btnText="삭제"
                btnWidth="50px"
                btnHeight="30px"
                border="1px solid rgb(66, 66, 226)"
                bgColor="rgb(66, 66, 226)"
                radius="4px"
                txColor="rgb(245, 245, 245)"
                fontSize="13px"
                fnClick={followerDltChangeBtnHandler}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AccntItem;
