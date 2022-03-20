import CommonPageTitle from "components/common/commPageTitle";
import AccntList from "../../components/account/myPage/accntList";
import classes from "./accountFollowing.module.css";

const AcctFllwngPage = (props) => {
  const { location } = props;
  // console.log(" following: " + location.state.follow);

  const DUMMY_DATA = [
    {
      id: 1,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164698562600101440.jpeg?gif=1&w=1280",
      nick_name: "april_.12",
      text: "instagram-april_.12",
    },
    {
      id: 2,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/164517258818757910.jpg?gif=1&w=480&h=320&c=c",
      nick_name: "Dazed_lily",
      text: "나만의 작업실에서 좋아하는 것들을 만들고 있습니다.",
    },
    {
      id: 3,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164760255716751290.jpeg?gif=1&w=1280",
      nick_name: "sshinsy(세영)",
      text: "Instagram @yayonine",
    },
    {
      id: 4,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      nick_name: "주아주아홈",
      text: "화이트 아치 하우스 주아주아홈입니다.",
    },
    {
      id: 1,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164698562600101440.jpeg?gif=1&w=1280",
      nick_name: "april_.12",
      text: "instagram-april_.12",
    },
    {
      id: 2,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/164517258818757910.jpg?gif=1&w=480&h=320&c=c",
      nick_name: "Dazed_lily",
      text: "나만의 작업실에서 좋아하는 것들을 만들고 있습니다.",
    },
    {
      id: 3,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164760255716751290.jpeg?gif=1&w=1280",
      nick_name: "sshinsy(세영)",
      text: "Instagram @yayonine",
    },
    {
      id: 4,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      nick_name: "주아주아홈",
      text: "화이트 아치 하우스 주아주아홈입니다.",
    },
    {
      id: 1,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164698562600101440.jpeg?gif=1&w=1280",
      nick_name: "april_.12",
      text: "instagram-april_.12",
    },
    {
      id: 2,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/164517258818757910.jpg?gif=1&w=480&h=320&c=c",
      nick_name: "Dazed_lily",
      text: "나만의 작업실에서 좋아하는 것들을 만들고 있습니다.",
    },
    {
      id: 3,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164760255716751290.jpeg?gif=1&w=1280",
      nick_name: "sshinsy(세영)",
      text: "Instagram @yayonine",
    },
    {
      id: 4,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      nick_name: "주아주아홈",
      text: "화이트 아치 하우스 주아주아홈입니다.",
    },
    {
      id: 1,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164698562600101440.jpeg?gif=1&w=1280",
      nick_name: "april_.12",
      text: "instagram-april_.12",
    },
    {
      id: 2,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/164517258818757910.jpg?gif=1&w=480&h=320&c=c",
      nick_name: "Dazed_lily",
      text: "나만의 작업실에서 좋아하는 것들을 만들고 있습니다.",
    },
    {
      id: 3,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164760255716751290.jpeg?gif=1&w=1280",
      nick_name: "sshinsy(세영)",
      text: "Instagram @yayonine",
    },
    {
      id: 4,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      nick_name: "주아주아홈",
      text: "화이트 아치 하우스 주아주아홈입니다.",
    },
  ];
  return (
    <div className={classes.layout}>
      <div className={classes.title}>
        {location.state.follow === "following" ? (
          <CommonPageTitle title="팔로잉" />
        ) : (
          <CommonPageTitle title="팔로워" />
        )}
      </div>
      <AccntList accntLists={DUMMY_DATA} departure={location.state.follow} />
    </div>
  );
};

export default AcctFllwngPage;
