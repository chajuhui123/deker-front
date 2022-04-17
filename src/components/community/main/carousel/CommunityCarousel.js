import { useCallback, useEffect, useState } from "react";
import classes from "./CommunityCarousel.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// TODO : 이미지 슬라이드 시 마지막 영역에서 처음 영역으로 이동하는 부분이 어색함
// 이미지 처음과 끝에 이미지 추가 해놨으므로 처음으로 돌아갈 때
// 가장 마지막영역 보여주고 순간적으로 처음 인덱스로 돌아가는 식으로 추가 개발 해야함
// (3, 0, 1, 2, 3, 0) 이런식으로 화면에 보여줌
// 3 > 0으로 갈 때 0 > 3으로 갈 때 처리 해야함
const CommunityCrousel = (props) => {
  const items = props.items || [];
  const speed = props.speed || 5000;
  const autoPlay = props.autoPlay || false;
  const compWidth = 1200;
  const [index, setIndex] = useState(0);
  const [styleObject, setStyleObject] = useState({
    transform: "translate(-" + compWidth + "px)",
  });

  const prevSlideHandler = useCallback(() => {
    setIndex((prev) => (prev - 1 < 0 ? items.length - 1 : prev - 1));
  }, [items.length]);

  const nextSlideHandler = useCallback(() => {
    setIndex((prev) => (prev + 1 >= items.length ? 0 : prev + 1));
  }, [items.length]);

  useEffect(() => {
    const style = {
      transform: "translate(-" + (index + 1) * compWidth + "px)",
    };
    setStyleObject(style);
  }, [index]);

  useEffect(() => {
    if (autoPlay) {
      setInterval(nextSlideHandler, speed);
    }
  }, [autoPlay, nextSlideHandler, speed]);

  return (
    <div className={classes.main}>
      <div className={classes.prevBtn} onClick={prevSlideHandler}>
        <ArrowBackIosNewIcon />
      </div>
      <div className={classes.contents} style={styleObject}>
        <div className={classes.item}>
          <img
            key={items.length}
            alt={`이미지`}
            src={items[items.length - 1]}
          />
        </div>
        {items.map((item, i) => {
          return (
            <div className={classes.item}>
              <img key={i + 1} alt={`이미지`} src={item} />
            </div>
          );
        })}
        <div className={classes.item}>
          <img key={items.length + 2} alt={`이미지`} src={items[0]} />
        </div>
      </div>
      <div className={classes.nextBtn} onClick={nextSlideHandler}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
};

export default CommunityCrousel;
