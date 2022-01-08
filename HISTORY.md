### HISTORY


### 2022.01.08. 권예림
1. Account My Shopping Page 작업중
   - 기간(period) Dropdown, 배송상태(delivery state) Dropdown 선택값 바로 밑에 띠우는 기능 추가

### 2022.01.08 김효진

1. src > pages > modalTest Page (http://localhost:3000/modalTest)
2. components > common > commBtn (import 후 mouseover 하면 document가 뜰거임)
3. components > common > deliveryCard (import 후 mouseover 하면 document가 뜰거임)
4. components > common > modal-title (import 후 mouseover 하면 document가 뜰거임)
5. components > account > shop > delivery-select.js 배송지선택 팝업 작성 완료
6. redux non-serialized 처리

### 2022.01.07. 권예림

1. Product Sales Link Popup Page 생성
   - Layout 완성
   - 기능 작업 중

### 2022.01.06. 권예림

1. Account My Shopping Page 작업중
   - 기간(period) Dropdown 생성**\*\*\*\***\_**\*\*\*\***커스터마이징 중
   - 배송상태(delivery state) Dropdown 생성**\_**커스터마이징 중
   - Layout 완성
   - Dropdown 선택값 화면출력 기능 추가

### 2022.01.04 차주희

1. InfoProduct 컴포넌트 props 연결
   ({prop변수명}) 으로 넘겨 받으면, 기존에 사용했던 방식 {props.prop변수명}이 아닌, 바로 {prop변수명} 으로 사용할 수 있다고 합니다! InfoProduct 컴포넌트를 참고해주세요.

### 2022.01.03 차주희

1. 리뷰 작성 및 수정 컴포넌트 작성 완료 (modalContUploadUpdateReview)

### 2022.01.02 차주희

1. account/Review/Review 수정 및 작성 모달 컴포넌트 생성
   - 모달 내 콘텐츠 최대한 컴포넌트로 분리함
     : 모달 내에 들어가는 상품 정보/평점/사진추가/리뷰작성 -> 모두 컴포넌트로 분리함
2. "react-simple-star-rating" 라이브러리 활용 (for Star Rating)  
   `npm install` 하고 시작!

### 2022.01.01 김효진

1. babel 오류 나는 부분 해결
   node_modules > react-naver-login > index.js > 36 line을 아래로 변경 (naver login 에서는 sdk를 babel polyfill 옛날버전을 사용해서 오류남)
   var NAVER_ID_SDK_URL = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2-nopolyfill.js";

### 2021.12.31 김효진

1. components/common/input-with-title.js (공통 input component)
2. import CommInput from "../common/input-with-title";
3. props :
   title : 제목
   noti : 제목 하단에 작게 설명 문구 넣어줌
   type : input type (text, password, date 등)
   value : 값
   onChange : onChange 이벤트 핸들러
   refer : useRef

### 2021.12.31 김효진

1. import { getApi, postApi } from "../../api/fetch-api";
2. import { useDispatch } from "react-redux";
3. import { modalAction } from "../store/modal-slice";
4. const dispatch = useDispatch();
5. postApi("nmb/acct/reg/member", signupData, fnCallback);
6. const fnCallback = (res) => {
   if (!res.ok) {
   성공시 실행
   } else {
   dispatch(modalAction.modalPopup({ id:'생략가능 or unique한 string', isOpen: false, cont: <Component /> }));
   }
   };

### 2021.12.30. 권예림

1. 저번주 페이지 수정사항 반영
   - module.css로 바꾸기
   - 회원정보 변경, 추가정보 입력 페이지에 분위기 빼기
   - 마이페이지\_프로필(accountMyPage)에 내가 올린 사진(myUploadPic) 더미 파일 만들기
   - 페이지 컴포넌트화
   - Dropdown default 선택값으로 "~을 선택하세요" 세팅
2. Account My Shopping Page 생성

### 2021.12.24 차주희

NavBar css 변경
MyPresent, MyReview Page 추가 및 컴포넌트 전략 작성
-> Page.js 에서 Data 관리 (데이터를 몇 개 보여주어야 할지, 많아질 때의 경우 등 이야기해볼 필요 있음)
-> 컴포넌트는 List/Item 로 분리
-> List 에서 Item 을 mapping 하여 호출

### 2021.12.24. 권예림

1. account-마이페이지 프로필 페이지 생성
2. 저번주 페이지 수정사항 반영
   - Layout 뒤틀리는거 className 유니크하게 지어서 수정
   - 태그 입력 기능 추가(스페이스바를 누르면 아래에 태그 추가, x버튼 누르면 태그 삭제)
   - 표준 정의 △ <- 나중에 다시 손봐야함

### 2021.12.23. 김효진

modal.js 생성
● 사용법

1. import { useDispatch } from "react-redux";
2. const dispatch = useDispatch();
3. import { modalAction } from "modal-slice"; 경로는 알아서 설정 (상대경로)
4. dispatch(modalAction.modalPopup({ id:'생략가능 or unique한 string', isOpen: false, cont: <Component /> }));

### 2021. 12. 21. 차주희

전체 레이아웃 수정
-> 네브바, 콘텐츠, 푸터 구성으로 변경
