import AccntItem from "./accntItem";
import classes from "./accntList.module.css";

const AccntList = (props) => {
  var departure = props.departure;

  return (
    <div>
      {props.accntLists?.length ? (
        <ul>
          {props.accntLists.map((accntList) => (
            <li className={classes.accntList}>
              <AccntItem
                key={accntList.id}
                id={accntList.id}
                profile_img={accntList.profile_img}
                nick_name={accntList.nick_name}
                departure={props.departure}
                userId={accntList.userId}
                isUnFollowBtnHandler={props.isUnFollowBtnHandler}
                isDeleteBtnHandler={props.isDeleteBtnHandler}
                presentSelectHandler={props.presentSelectHandler}
              />
            </li>
          ))}
        </ul>
      ) : departure === "following" || departure === "present" ? (
        <div className={classes.noFollowText}>
          <text>팔로잉하는 유저가 없습니다.</text>
        </div>
      ) : (
        <div className={classes.noFollowText}>
          <text>팔로워하는 유저가 없습니다.</text>
        </div>
      )}
    </div>
  );
};
export default AccntList;
