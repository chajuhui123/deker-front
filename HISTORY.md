### HISTORY

### 2021. 12. 21. 차주희

전체 레이아웃 수정
-> 네브바, 콘텐츠, 푸터 구성으로 변경

### 2021.12.23. 김효진

modal.js 생성
● 사용법

1. import { useDispatch } from "react-redux";
2. const dispatch = useDispatch();
3. dispatch(modalAction.modalPopup({ id:'생략가능 or unique한 string', isOpen: false, cont: <Component /> }));

### 2021.12.24 차주희

MyPresent, MyReview Page 추가 및 컴포넌트 전략 작성
  -> Page.js 에서 Data 관리 (데이터를 몇 개 보여주어야 할지, 많아질 때의 경우 등 이야기해볼 필요 있음)
  -> 컴포넌트는 List/Item 로 분리
  -> List 에서 Item 을 mapping 하여 호출

