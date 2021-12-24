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
