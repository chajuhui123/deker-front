import CommPageSemiTitle from "components/common/commPageSemiTitle";
import classes from "./CommunityMain.module.css";

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
          <li>아이템1</li>
          <li>아이템2</li>
          <li>아이템3</li>
          <li>아이템4</li>
          <li>아이템5</li>
          <li>아이템6</li>
          <li>아이템7</li>
          <li>아이템8</li>
        </ul>
      </section>
      <section>
        <header>
          <CommPageSemiTitle semiTitle="팔로윙" />
          <a className={classes.link} href="community/following">
            더보기
          </a>
        </header>
        <ul>
          <li>아이템1</li>
          <li>아이템2</li>
          <li>아이템3</li>
          <li>아이템4</li>
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
          <li>아이템1</li>
          <li>아이템2</li>
          <li>아이템3</li>
          <li>아이템4</li>
        </ul>
      </section>
    </div>
  );
};

export default CommunityMain;
