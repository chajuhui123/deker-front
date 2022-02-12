import CommPageSemiTitle from "components/common/commPageSemiTitle";
import classes from "./CommunityMain.module.css";
import noImg from "img/noImg.png";

const DUMMY_RANK = [
  {
    communityId: "1", // 글번호
    communityTitle: "글제목 글제목 글제목 글제목", // 글제목
    userId: "test1", // 작성자ID
    userNick: "테스트1 테스트1 테스트1 테스트1", // 작성자닉네임
    userProfileImg: "", // 작성자프로필사진
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164447023503877747.jpeg?gif=1&w=320&h=320&c=c", // 글이미지
  },
  {
    communityId: "2",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164446224883159444.jpeg?gif=1&w=320&h=320&c=c", // 글이미지
  },
  {
    communityId: "3",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164448649057424245.jpeg?gif=1&w=320&h=320&c=c", // 글이미지
  },
  {
    communityId: "4",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164442021987517897.jpeg?gif=1&w=320&h=320&c=c", // 글이미지
  },
  {
    communityId: "5",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164449311181595696.jpeg?gif=1&w=320&h=320&c=c",
  },
  {
    communityId: "6",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    communityImage:
      "https://image.ohou.se/i/video-service-prd-s3-bucket-thumbnail/6204cf22d7b3b914fbe45715/6204cf22d7b3b914fbe45715.0000001.jpg?gif=1&w=320&h=320&c=c",
  },
  {
    communityId: "7",
    communityTitle: "글제목 글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164449560788958935.jpeg?gif=1&w=320&h=320&c=c",
  },
  {
    communityId: "8",
    communityTitle: "글제목글제목 글제목 글제목",
    userId: "test1",
    userNick: "테스트1 테스트1 테스트1 테스트1",
    userProfileImg: "",
    communityImage:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164442006712025856.jpeg?gif=1&w=320&h=320&c=c",
  },
];

const CommunityMain = (props) => {
  return (
    <div className={classes.main}>
      <section>
        <header>
          <CommPageSemiTitle semiTitle="오늘의 인기 사진" />
          <a className={classes.link} href="community/rank">
            더보기
          </a>
        </header>
        <ul>
          {DUMMY_RANK &&
            DUMMY_RANK.map((data) => {
              return (
                <li>
                  <div className={classes.mainCard}>
                    <img alt="글첨부이미지" src={data.communityImage} />
                    <div className={classes.commInfo}>
                      <div className={classes.communityTitle}>
                        {data.communityTitle.length > 5
                          ? data.communityTitle.slice(0, 5).replace(" ", "") +
                            "..."
                          : data.communityTitle}
                      </div>
                      <div className={classes.userInfo}>
                        <img
                          alt="작성자프로필이미지"
                          src={data.userProfileImg || noImg}
                        />
                        <p>
                          {data.userNick.length > 5
                            ? data.userNick.slice(0, 5).replace(" ", "") + "..."
                            : data.userNick}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </section>
      <section>
        <header>
          <CommPageSemiTitle semiTitle="팔로윙" />
          <a className={classes.link} href="community/follow">
            더보기
          </a>
        </header>
        <ul>
          {DUMMY_RANK &&
            DUMMY_RANK.map((data) => {
              return (
                <li>
                  <div className={classes.mainCard}>
                    <img alt="글첨부이미지" src={data.communityImage} />
                    <div className={classes.commInfo}>
                      <div className={classes.communityTitle}>
                        {data.communityTitle.length > 5
                          ? data.communityTitle.slice(0, 5).replace(" ", "") +
                            "..."
                          : data.communityTitle}
                      </div>
                      <div className={classes.userInfo}>
                        <img
                          alt="작성자프로필이미지"
                          src={data.userProfileImg || noImg}
                        />
                        <p>
                          {data.userNick.length > 5
                            ? data.userNick.slice(0, 5).replace(" ", "") + "..."
                            : data.userNick}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </section>
      <section>
        <header>
          <CommPageSemiTitle semiTitle="맞춤" />
          <a className={classes.link} href="community/custom">
            더보기
          </a>
        </header>
        <ul>
          {DUMMY_RANK &&
            DUMMY_RANK.map((data) => {
              return (
                <li>
                  <div className={classes.mainCard}>
                    <img alt="글첨부이미지" src={data.communityImage} />
                    <div className={classes.commInfo}>
                      <div className={classes.communityTitle}>
                        {data.communityTitle.length > 5
                          ? data.communityTitle.slice(0, 5).replace(" ", "") +
                            "..."
                          : data.communityTitle}
                      </div>
                      <div className={classes.userInfo}>
                        <img
                          alt="작성자프로필이미지"
                          src={data.userProfileImg || noImg}
                        />
                        <p>
                          {data.userNick.length > 5
                            ? data.userNick.slice(0, 5).replace(" ", "") + "..."
                            : data.userNick}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </section>
    </div>
  );
};

export default CommunityMain;
