## HISTORY

### 2022.02.13. 권예림

1. 결제페이지(paymentPage.js) 생성
2. 선물하기팝업(presentFriendPopup.js) 생성

### 2022.02.12. 권예림

1. 결제완료페이지(paymentCmpltPage.js) 생성

### 2022.02.12 김효진
1. 커뮤니티 메인, 인기, 팔로윙, 맞춤 화면개발
2. 공통 alert 생성
3. warning 오류 잡히는것 주석처리
4. modalTest css 살짝 줌


### 2022.02.07. 권예림

1. 스토어-카테고리 → 인기로 정렬한 페이지(StoreSortPage.js) 생성

- 페이지별 라우터 변경 가능

### 2022.02.06 차주희

1. 서브메뉴 컴포넌트 생성
2. 소셜로그인 연결
3. 상품 디테일 라우터 변경
4. 상품 디테일 백엔드 연결 (아직 백엔드 미완성. 대체로 더미 데이터 넣어둠)

### 2022.02.06. 권예림

1. StoreMain - category 생성
2. Store 인기상품 페이지(StoreHotSortPage.js) 생성
3. 회원정보변경(modifyUserInfo) - 닉네임 변경가능(UI는 더 수정해야함)

### 2022.02.05. 권예림

1. Store Main Page price 000,000 Format 맞춰서 출력
2. 외부상품 모달 UI 수정
3. 커뮤니티 글쓰기 - 상품정보등록 완료

### 2022.01.31 김효진

1. 커뮤니티 글 동록 (이미지삭제, 상품추가, 백에 전송) 제외 개발 완료

### 2022.01.27 김효진

1. 배송추적 개발 완료
2. Router url parameter 받는 방식 console.log로 찍어봄 추후 개발 시 참조

### 2022.01.25 김효진

1. 로그인만료시간
2. 공통스피너 적용 (modalTest 테스트 가능)
3. 이메일 인증 오류 해결

# INPORTANT

- postApi 오류 발생 시 catch 부분에서 modal을 띄워주고 callback(null) 로 메소드를 호출 함
- 각 callback method에서 null에 대한 처리를 해야함
- ex)
  const fnCallback = (res) => {
  if (!!res) {
  정상처리 로직
  } else {
  비정상처리 로직
  }
  }

### 2022.01.24. 권예림

1. 외부상품조회 UI 수정중
2. 마이페이지 백 통신

### 2022.01.22. 차주희

1. 이번주 로그인 로직 구현
2. 상세보기 레이아웃 구현
   - 특정 상품 상세보기 라우터는 상품 id로 지정 : `/productDetail/${id}`
   - 이슈 : 가운데 정렬 어려움
3. `isLoggedIn` 상태값에 따른 navbar 수정...
   - 이슈 : 로그인 정보가 2번 요청되는 상황?, 적용 안됨...

### 2022.01.20. 권예림

1. 저번주 페이지 수정사항 반영
   - productSalesLinkPage 외부상품 처리 : 외부상품인지 아닌지 체크박스 여부에 따라 입력 UI 달라짐
2. commChckbx.js 생성
   - 공통 체크박스 컴포넌트 생성

### 2022.01.19. 권예림

1. 스토어 메인 Page (StoreMainPage.js) 생성

### 2022.01.18 김효진

1. 공통 스피터 생성 components/common/CommSpinner
   공통버튼에 isLoading을 true로 하면 버튼에 Spinner 적용됨
   http://localhost:3000/modalTest 로 가면 화면에 보여짐

### 2022.01.15 김효진

1. components/common/CommSelect : 공통 select 생성
   (기존 dropdown 통합버전임)

### 2022.01.13 차주희

1. 네비게이션 회원 관련 아이템 컴포넌트로 분리
   - 그 외는 시도하다가 일단 보류 ㅠ
2. (/myReview) 파일 업로드시 이미지 미리보기 기능 추가
   - input css 요소 추가로 꾸며야 함
3. 카드 CSS 디자인 변경해봄

### 2022.01.12 차주희

1. subNavigation 컴포넌트 작성 중
2. components/main 에 존재했던 footer, navigation 폴더 분리
   - components/main/footer 와 components/main/navigation 으로 분리

### 2022.01.13. 권예림

1. 저번주 페이지 수정사항 반영
   - 모달 테스트(http://localhost:3000/modaltest)에 'product sales link' 버튼 만들어서 올리기
   - 기간, 배송상태 dropdown 밑에 띄워주는 기능 없애기
   - 상세보기, 배송상태 부분 없애기
2. 공통 컴포넌트 'Common Page Title' 생성 및 페이지 적용

   - 각 페이지 Main Title 공통 컴포넌트
   - 기존 코드는 주석처리 해뒀음
   - App.js에 있는 페이지만 확인하고 바꾼거라 그 외 페이지는 필요하면 알아서!

   <적용 페이지> (+각 페이지 css파일)

   - signup.js
   - accountMyShopping.js
   - accountMyPage.js
   - signupAdditional.js
   - MyPresentPage.js

3. 공통 컴포넌트 'Common Page Semi Title' 생성 및 페이지 적용
   <적용 페이지> (+각 페이지 css파일)
   - accountMyShopping.js
   - signupAdditional.js

### 2022.01.09 김효진

1. fetch 공통 변경 (공통 에러창 개발 해야함)
   - import { postApi } from "../../api/fetch-api";
   - import { useDispatch } from "react-redux";
   - dispatch(postApi("nmb/acct/reg/member", signupData, fnCallback));
   - const fnCallback = (res) => { history.push("/signupAdd"); };

### 2022.01.10. 권예림

1. 폴더 정리
   정리내용 너무 길어서 'DEKER 공유 페이지 > 프론트 TODO LIST > 폴더정리'
   페이지 따로 만들어서 정리해뒀습니다. 내가 작업한 파일이 어딨는지 모르겠다! 하면 저 페이지에서 ctrl + F 해서 찾아보세요

https://www.notion.so/4d30da6440024490a69f6bdcc621dad8

### 2022.01.09. 차주희

1. 리액트 절대 경로 지정 (jsconfig.json)
   - 절대 경로 루트 : src
   - VSCode 재시작하면 적용됩니다!
   - 사용 예시
   ```
    import 컴포넌트명 from 'components/store/storeBox';
    import noImg from "img/noImg.png";
    import from "api/api.js";
   ```

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
