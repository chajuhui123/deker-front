import classes from "./CommunityMain.module.css";
import CommunitySection from "../semi/section/CommunitySection";

const DUMMY_RANK = [
  {
    communityId: "1", // 글번호
    communityTitle: "글제목 글제목 글제목 글제목", // 글제목
    userId: "test1", // 작성자ID
    userNick: "테스트1 테스트1 테스트1 테스트1", // 작성자닉네임
    userProfileImg: "", // 작성자프로필사진
    likeCount: 123,
    commentCount: 13,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164447023503877747.jpeg?gif=1&w=320&h=320&c=c", // 글이미지
  },
  {
    communityId: "2",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트2",
    userProfileImg: "",
    likeCount: 115,
    commentCount: 22,
    following: true,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164446224883159444.jpeg?gif=1&w=320&h=320&c=c", // 글이미지
  },
  {
    communityId: "3",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트3",
    userProfileImg: "",
    likeCount: 110,
    commentCount: 5,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164448649057424245.jpeg?gif=1&w=320&h=320&c=c", // 글이미지
  },
  {
    communityId: "4",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트4",
    userProfileImg: "",
    likeCount: 95,
    commentCount: 18,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164442021987517897.jpeg?gif=1&w=320&h=320&c=c", // 글이미지
  },
  {
    communityId: "5",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트5",
    userProfileImg: "",
    likeCount: 45,
    commentCount: 0,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164449311181595696.jpeg?gif=1&w=320&h=320&c=c",
  },
  {
    communityId: "6",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트6",
    userProfileImg: "",
    likeCount: 30,
    commentCount: 0,
    following: false,
    communityImage:
      "https://image.ohou.se/i/video-service-prd-s3-bucket-thumbnail/6204cf22d7b3b914fbe45715/6204cf22d7b3b914fbe45715.0000001.jpg?gif=1&w=320&h=320&c=c",
  },
  {
    communityId: "7",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트7",
    userProfileImg: "",
    likeCount: 27,
    commentCount: 2,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164449560788958935.jpeg?gif=1&w=320&h=320&c=c",
  },
  {
    communityId: "8",
    communityTitle: "글제목글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트8",
    userProfileImg: "",
    likeCount: 3,
    commentCount: 1,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164442006712025856.jpeg?gif=1&w=320&h=320&c=c",
  },
];

const CommunityMain = (props) => {
  return (
    <div className={classes.main}>
      <CommunitySection type="rank" page="main" data={DUMMY_RANK} />
      <CommunitySection
        type="follow"
        page="main"
        data={DUMMY_RANK.slice(0, 4)}
      />
      <CommunitySection
        type="custom"
        page="main"
        data={DUMMY_RANK.slice(4, 8)}
      />
    </div>
  );
};

export default CommunityMain;
