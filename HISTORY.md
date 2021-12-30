### HISTORY

### 2021. 12. 21. 차주희

전체 레이아웃 수정
-> 네브바, 콘텐츠, 푸터 구성으로 변경

### 2021.12.23. 김효진

modal.js 생성
● 사용법

1. import { useDispatch } from "react-redux";
2. const dispatch = useDispatch();
3. import { modalAction } from "modal-slice"; 경로는 알아서 설정 (상대경로)
4. dispatch(modalAction.modalPopup({ id:'생략가능 or unique한 string', isOpen: false, cont: <Component /> }));

### 2021.12.24. 권예림
1) account-마이페이지 프로필 페이지 생성
2) 저번주 페이지 수정사항 반영
    - Layout 뒤틀리는거 className 유니크하게 지어서 수정
    - 태그 입력 기능 추가(스페이스바를 누르면 아래에 태그 추가, x버튼 누르면 태그 삭제)
    - 표준 정의 △ <- 나중에 다시 손봐야함


### 2021.12.24 차주희

NavBar css 변경 
MyPresent, MyReview Page 추가 및 컴포넌트 전략 작성
  -> Page.js 에서 Data 관리 (데이터를 몇 개 보여주어야 할지, 많아질 때의 경우 등 이야기해볼 필요 있음)
  -> 컴포넌트는 List/Item 로 분리
  -> List 에서 Item 을 mapping 하여 호출

### 2021.12.30. 권예림
1) 저번주 페이지 수정사항 반영
    - module.css로 바꾸기
    - 회원정보 변경, 추가정보 입력 페이지에 분위기 빼기
    - 마이페이지_프로필(accountMyPage)에 내가 올린 사진(myUploadPic) 더미 파일 만들기
    - 페이지 컴포넌트화
    - Dropdown default 선택값으로 "~을 선택하세요" 세팅
2) Account My Shopping Page 생성



