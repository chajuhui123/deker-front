import classes from "./CommunitySemiPage.module.css";
import CommunitySection from "./section/CommunitySection";

const DUMMY_RANK = [
  {
    communityId: "1", // 글번호
    communityTitle: "글제목 글제목 글제목 글제목", // 글제목
    userId: "test1", // 작성자ID
    userNick: "테스트1 테스트1 테스트1 테스트1", // 작성자닉네임
    userProfileImg: "", // 작성자프로필사진
    likeCount: 100,
    commentCount: 123,
    following: true,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164447023503877747.jpeg?gif=1&w=320&h=320&c=c", // 글이미지
  },
  {
    communityId: "2",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    likeCount: 90,
    commentCount: 123,
    following: true,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164446224883159444.jpeg?gif=1&w=320&h=320&c=c", // 글이미지
  },
  {
    communityId: "3",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    likeCount: 88,
    commentCount: 123,
    following: true,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164448649057424245.jpeg?gif=1&w=320&h=320&c=c", // 글이미지
  },
  {
    communityId: "4",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    likeCount: 50,
    commentCount: 123,
    following: true,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164442021987517897.jpeg?gif=1&w=320&h=320&c=c", // 글이미지
  },
  {
    communityId: "5",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    likeCount: 100,
    commentCount: 123,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164449311181595696.jpeg?gif=1&w=320&h=320&c=c",
  },
  {
    communityId: "6",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    likeCount: 100,
    commentCount: 123,
    following: false,
    communityImage:
      "https://image.ohou.se/i/video-service-prd-s3-bucket-thumbnail/6204cf22d7b3b914fbe45715/6204cf22d7b3b914fbe45715.0000001.jpg?gif=1&w=320&h=320&c=c",
  },
  {
    communityId: "7",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    likeCount: 100,
    commentCount: 123,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164449560788958935.jpeg?gif=1&w=320&h=320&c=c",
  },
  {
    communityId: "8",
    communityTitle: "글제목글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    likeCount: 100,
    commentCount: 123,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164442006712025856.jpeg?gif=1&w=320&h=320&c=c",
  },
  {
    communityId: "9", // 글번호
    communityTitle: "글제목 글제목 글제목 글제목", // 글제목
    userId: "test1", // 작성자ID
    userNick: "테스트1 테스트1 테스트1 테스트1", // 작성자닉네임
    userProfileImg: "", // 작성자프로필사진
    likeCount: 100,
    commentCount: 123,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164447023503877747.jpeg?gif=1&w=320&h=320&c=c", // 글이미지
  },
  {
    communityId: "10",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    likeCount: 100,
    commentCount: 123,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164446224883159444.jpeg?gif=1&w=320&h=320&c=c", // 글이미지
  },
  {
    communityId: "11",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    likeCount: 100,
    commentCount: 123,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164448649057424245.jpeg?gif=1&w=320&h=320&c=c", // 글이미지
  },
  {
    communityId: "12",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    likeCount: 100,
    commentCount: 123,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164442021987517897.jpeg?gif=1&w=320&h=320&c=c", // 글이미지
  },
  {
    communityId: "13",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    likeCount: 100,
    commentCount: 123,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164449311181595696.jpeg?gif=1&w=320&h=320&c=c",
  },
  {
    communityId: "14",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    likeCount: 100,
    commentCount: 123,
    following: false,
    communityImage:
      "https://image.ohou.se/i/video-service-prd-s3-bucket-thumbnail/6204cf22d7b3b914fbe45715/6204cf22d7b3b914fbe45715.0000001.jpg?gif=1&w=320&h=320&c=c",
  },
  {
    communityId: "15",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    likeCount: 100,
    commentCount: 123,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164449560788958935.jpeg?gif=1&w=320&h=320&c=c",
  },
  {
    communityId: "16",
    communityTitle: "글제목글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    likeCount: 100,
    commentCount: 123,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164442006712025856.jpeg?gif=1&w=320&h=320&c=c",
  },
  {
    communityId: "17", // 글번호
    communityTitle: "글제목 글제목 글제목 글제목", // 글제목
    userId: "test1", // 작성자ID
    userNick: "테스트1 테스트1 테스트1 테스트1", // 작성자닉네임
    userProfileImg: "", // 작성자프로필사진
    likeCount: 100,
    commentCount: 123,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164447023503877747.jpeg?gif=1&w=320&h=320&c=c", // 글이미지
  },
  {
    communityId: "18",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    likeCount: 100,
    commentCount: 123,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164446224883159444.jpeg?gif=1&w=320&h=320&c=c", // 글이미지
  },
  {
    communityId: "19",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    likeCount: 100,
    commentCount: 123,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164448649057424245.jpeg?gif=1&w=320&h=320&c=c", // 글이미지
  },
  {
    communityId: "20",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    likeCount: 100,
    commentCount: 123,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164442021987517897.jpeg?gif=1&w=320&h=320&c=c", // 글이미지
  },
  {
    communityId: "21",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    likeCount: 100,
    commentCount: 123,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164449311181595696.jpeg?gif=1&w=320&h=320&c=c",
  },
  {
    communityId: "22",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    likeCount: 100,
    commentCount: 123,
    following: false,
    communityImage:
      "https://image.ohou.se/i/video-service-prd-s3-bucket-thumbnail/6204cf22d7b3b914fbe45715/6204cf22d7b3b914fbe45715.0000001.jpg?gif=1&w=320&h=320&c=c",
  },
  {
    communityId: "23",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    likeCount: 100,
    commentCount: 123,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164449560788958935.jpeg?gif=1&w=320&h=320&c=c",
  },
  {
    communityId: "24",
    communityTitle: "글제목글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    likeCount: 100,
    commentCount: 123,
    following: false,
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164442006712025856.jpeg?gif=1&w=320&h=320&c=c",
  },
];

const CommunitySemiPage = (props) => {
  const { params } = props.match;
  const type = params.type;
  return (
    <div className={classes.main}>
      <CommunitySection type={type} data={DUMMY_RANK} />
    </div>
  );
};

export default CommunitySemiPage;
