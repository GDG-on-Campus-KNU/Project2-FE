## Vote Web

![header](https://user-images.githubusercontent.com/88179771/170947693-ce96e061-3c1c-440b-996e-782405352472.png)

### Description

- 투표기반 SNS 웹프로젝트
- 개발 인원 6명 : FE 3명 + BE 3명
- 프로젝트 기간 : 2022.02.10 ~ 2022.05.30
- React + TypeScript

**영감을 준 레퍼런스**

![refer](https://user-images.githubusercontent.com/88179771/170951974-923a230b-8619-45fa-9c0b-42b97d51ded4.png)

- Youtube의 투표 기능
- Youtube나 Twitter의 투표 시스템에 영감을 받아 개발함

**로그인**

![vote-login-page](https://user-images.githubusercontent.com/88179771/170947763-b658a892-bb8e-47bd-8ba9-e8061ea6d271.png)

**회원가입**

![vote-signup-page](https://user-images.githubusercontent.com/88179771/170947745-ccaeb7fd-721a-4da3-9da5-49e07055fc1c.png)

**메인**

![vote-main-page](https://user-images.githubusercontent.com/88179771/170948555-6ec3cc9a-8b3c-4fab-9f8f-329f2f8611cf.png)

**게시글 조회**

<img width="1414" alt="vote-board-popup-page" src="https://user-images.githubusercontent.com/88179771/170947709-a824ddfc-ef21-43e7-aba9-da6804871242.png">

**게시글 쓰기**

![vote-write-popup-page](https://user-images.githubusercontent.com/88179771/170948996-f9c69bc0-2d61-45e3-9980-f1424fae3bd9.png)

### Feature

**User**

- 로그인 & 로그아웃
- 회원가입 & 회원탈퇴

**Main**

- 무한스크롤 실시간 게시글 조회
- 카테고리별 게시글 작성 & 조회
- 게시글 작성 시 사진 첨부, 투표항목 최대 4개
- 팝업을 통해 게시글 자세히 보기
- 팝업에서 댓글 작성 & 조회
- 게시글 검색
- 투표수기반 Trend 제공

**Sub**

- 내가 쓴 게시글 목록 조회
- 최근 투표한 게시글 조회
- PC/태블릿/모바일 반응형웹 지원

### project Structure

```jsx
|   index.tsx
|   react-app-env.d.ts
|   reportWebVitals.ts
|   setupTests.ts
|   
+---assets
|       images.ts
|       
+---components
|   |   App.tsx
|   |   
|   +---common
|   |   \---PopUp
|   |       |   PopUp.tsx
|   |       |   
|   |       \---css
|   |               popUp.css
|   |               popUp.css.map
|   |               popUp.scss
|   |               
|   +---Header
|   |   |   Header.tsx
|   |   |   logo.jpg
|   |   |   logo.svg
|   |   |   
|   |   +---components
|   |   |       UserBoard.tsx
|   |   |       UserInfo.tsx
|   |   |       
|   |   +---containers
|   |   |       HeaderContainer.tsx
|   |   |       UserBoardContainer.tsx
|   |   |       UserInfoContainer.tsx
|   |   |       
|   |   \---css
|   |           header.css
|   |           header.css.map
|   |           header.scss
|   |           userBoard.css
|   |           userBoard.css.map
|   |           userBoard.scss
|   |           userInfo.css
|   |           userInfo.css.map
|   |           userInfo.scss
|   |           
|   +---Loader
|   |   |   Loader.tsx
|   |   |   
|   |   \---css
|   |           loader.css
|   |           loader.css.map
|   |           loader.scss
|   |           
|   +---Login
|   |   |   Login.tsx
|   |   |   
|   |   +---containers
|   |   |       LoginContainer.tsx
|   |   |       
|   |   \---css
|   |           login.css
|   |           login.css.map
|   |           login.scss
|   |           
|   +---ScrollView
|   |   |   ScrollView.tsx
|   |   |   
|   |   +---components
|   |   |   |   Block.tsx
|   |   |   |   BlockPopUp.tsx
|   |   |   |   CommentScrollView.tsx
|   |   |   |   ImagePopUp.tsx
|   |   |   |   ProgressBar.tsx
|   |   |   |   VoteView.tsx
|   |   |   |   WritePopUp.tsx
|   |   |   |   
|   |   |   \---css
|   |   |           Block.css
|   |   |           Block.css.map
|   |   |           Block.scss
|   |   |           BlockPopUp.css
|   |   |           BlockPopUp.css.map
|   |   |           BlockPopUp.scss
|   |   |           CommentScrollView.css
|   |   |           CommentScrollView.css.map
|   |   |           CommentScrollView.scss
|   |   |           imagePopUp.css
|   |   |           imagePopUp.css.map
|   |   |           imagePopUp.scss
|   |   |           VoteView.css
|   |   |           VoteView.css.map
|   |   |           VoteView.scss
|   |   |           WritePopUp.css
|   |   |           WritePopUp.css.map
|   |   |           WritePopUp.scss
|   |   |           
|   |   +---containers
|   |   |       BlockContainer.tsx
|   |   |       BlockPopUpContainer.tsx
|   |   |       CommentScrollViewContainer.tsx
|   |   |       ImagePopUpContainer.tsx
|   |   |       PopUpVoteViewContainer.tsx
|   |   |       ScrollViewContainer.tsx
|   |   |       VoteViewContainer.tsx
|   |   |       WritePopUpContainer.tsx
|   |   |       
|   |   \---css
|   |           scrollView.css
|   |           scrollView.css.map
|   |           scrollView.scss
|   |           
|   +---SideBoard
|   |   |   SideBoard.tsx
|   |   |   
|   |   +---components
|   |   |       LastBoard.tsx
|   |   |       TopBoard.tsx
|   |   |       
|   |   +---containers
|   |   |       LastBoardContainer.tsx
|   |   |       SideBoardContainer.tsx
|   |   |       TopBoardContainer.tsx
|   |   |       
|   |   \---css
|   |           sideBoard.css
|   |           sideBoard.css.map
|   |           sideBoard.scss
|   |           
|   +---SideNavigation
|   |   |   SideNavigation.tsx
|   |   |   
|   |   +---containers
|   |   |       SideNavigationContainer.tsx
|   |   |       
|   |   \---css
|   |           sideNavigation.css
|   |           sideNavigation.css.map
|   |           sideNavigation.scss
|   |           
|   +---SignUp
|   |   |   SignUp.tsx
|   |   |   
|   |   +---containers
|   |   |       SignUpContainer.tsx
|   |   |       
|   |   \---css
|   |           signUp.css
|   |           signUp.css.map
|   |           signUp.scss
|   |           
|   \---Test
|       |   Test.tsx
|       |   
|       \---containers
|               TestContainer.tsx
|               
+---hooks
|   |   usePopUp.ts
|   |   useRootRoute.ts
|   |   
|   \---Auth
|           useAuth.ts
|           
+---lib
|   \---api
|           api.ts
|           
+---routes
|   |   RootNavigation.tsx
|   |   
|   +---components
|   |       LoginNavigation.tsx
|   |       MainNavigation.tsx
|   |       
|   \---containers
|           LoginNavigationContainer.tsx
|           MainNavigationContainer.tsx
|           RootNavigationContainer.tsx
|           
+---store
|   |   rootReducer.ts
|   |   
|   +---popUp
|   |   |   actions.ts
|   |   |   reducers.ts
|   |   |   
|   |   \---modules
|   |           actionsTypes.ts
|   |           
|   \---routes
|       \---rootRoute
|           |   actions.ts
|           |   reducers.ts
|           |   
|           \---modules
|                   actionTypes.ts
|                   
+---styles
|   \---css
|           core.css
|           core.css.map
|           core.scss
|           
\---typedef
    \---common
            common.types.ts
```

### Requirments

**Library**

```jsx
"@testing-library/jest-dom": "^5.16.2",
"@testing-library/react": "^12.1.3",
"@testing-library/user-event": "^13.5.0",
"@types/jest": "^27.4.1",
"@types/node": "^16.11.26",
"@types/react": "^17.0.39",
"@types/react-dom": "^17.0.11",
"@types/react-redux": "^7.1.22",
"@types/react-router-dom": "^5.3.3",
"axios": "^0.26.1",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-redux": "^7.2.6",
"react-router-dom": "^6.2.1",
"react-scripts": "5.0.0",
"redux": "^4.1.2",
"redux-devtools-extension": "^2.13.9",
"redux-persist": "^6.0.0",
"typescript": "^4.5.5",
"web-vitals": "^2.1.4"
```

### Contributors

**박희연**
(https://github.com/abrightkite)

**이장훈**
(https://github.com/bh2980)

**엄지영**
(https://github.com/thumbzzero)

### Backend Repository

[https://github.com/GDSC-KNU/Project2](https://github.com/GDSC-KNU/Project2)

### 기술스택

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=CC6699&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-4272ba?style=flat-square&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/> 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
