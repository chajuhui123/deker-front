import CommBtn from "components/common/commBtn";
import { useState } from "react";
import classes from "./accntItem.module.css";

const AccntItem = (props) => {
  //   console.log(props.departure);
  const [isFollowing, setIsFollowing] = useState(true);
  // console.log(isFollowing);
  const [isDelete, setIsDelete] = useState(false);

  // 팔로잉, 언팔로잉 버튼 이벤트
  const followingChangeBtnHandler = () => {
    setIsFollowing(!isFollowing); // follow, unfollow toggle change

    const dataObject = {
      userId: props.userId,
      isFollowing: isFollowing,
    };

    props.isUnFollowBtnHandler(dataObject);
  };

  // 팔로워 삭제 버튼 이벤트
  const followerDltChangeBtnHandler = () => {
    setIsDelete(true); // 해당 계정 팔로워 취소, 한번하면 되돌릴 수 없어서 state 아님

    props.isDeleteBtnHandler(props.userId);
  };

  // 선물할 친구 선택 버튼 이벤트
  const presentSelectBtnHandler = () => {
    props.presentSelectHandler(props.userId);
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
          {props.departure === "following" &&
            (isFollowing ? (
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
            ))}
          {props.departure === "follower" &&
            (!isDelete ? (
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
            ) : (
              <CommBtn
                btnText="삭제"
                btnWidth="50px"
                btnHeight="30px"
                border="1px solid rgb(66, 66, 226)"
                bgColor="rgb(248, 248, 248)"
                radius="4px"
                txColor="rgb(78, 78, 78)"
                fontSize="13px"
              />
            ))}
          {props.departure === "present" && (
            <CommBtn
              btnText="선택"
              btnWidth="50px"
              btnHeight="30px"
              border="1px solid rgb(66, 66, 226)"
              bgColor="rgb(66, 66, 226)"
              radius="4px"
              txColor="rgb(245, 245, 245)"
              fontSize="13px"
              fnClick={presentSelectBtnHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AccntItem;
