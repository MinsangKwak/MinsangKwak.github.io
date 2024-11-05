# minsangKwak.github.io

**React**와 **Tailwind CSS**로 제작된 개인 블로그 프로젝트입니다. <br/>
이 프로젝트는 왼쪽에 고정된 사이드 네비게이션 메뉴를 갖춘 블로그 레이아웃을 구현하였습니다. <br/>
사이트는 [GitHub Pages](https://minsangkwak.github.io/)에 호스팅됩니다.

## 프로젝트 개요

주요 기능에 따라 아래 기능을 분리하였습니다:

-   **고정된 사이드바 메뉴**: 왼쪽에 고정된 네비게이션 메뉴로 쉽게 이동할 수 있습니다.
-   **메인 콘텐츠 영역**: 선택된 블로그 포스트가 오른쪽에 표시됩니다.
-   **반응형 디자인**: 다양한 화면 크기에 적응하여 데스크탑과 모바일 기기에서 모두 좋은 사용자 경험을 제공합니다.
-   **코드 미리보기 기능**: 각 포스트는 코드 편집기와 실제 코드가 실행되는 미리보기를 제공합니다.

## 사용된 기술

-   **React** (v18.3.1): 재사용 가능한 컴포넌트를 만들고 애플리케이션 상태를 관리하는 데 사용되었습니다.
-   **Tailwind CSS** (v3.4.14): 빠르고 반응형 디자인을 위한 유틸리티 기반 CSS 프레임워크입니다.
-   **GitHub Pages**: 웹사이트 호스팅 및 배포에 사용되었습니다.

## 프로젝트 구조

프로젝트 구조는 다음과 같습니다:

```plaintext
.
├── .github              # GitHub 설정 파일
├── build                # 프로덕션 빌드 파일
├── node_modules         # Node.js 의존성
├── public               # index.html 등 퍼블릭 파일
└── src                  # 소스 파일
    ├── data
    │   └── posts.json   # 블로그 포스트 데이터 파일 (JSON 형식)
    ├── App.js           # 메인 컴포넌트
    ├── CodePost.js      # 코드 포스트 컴포넌트 (코드 편집기 및 미리보기)
    ├── Home.js          # 홈 화면 컴포넌트
    ├── index.js         # 진입 파일
    ├── index.css        # Tailwind CSS 설정 파일
    └── PostDetail.js    # 포스트 상세 페이지 컴포넌트
```

### 주요 파일 설명

-   **App.js**: 전체 레이아웃과 네비게이션을 담당하는 메인 컴포넌트입니다.
-   **CodePost.js**: 포스트 제목과 내용을 표시하고 코드 미리보기를 제공하는 컴포넌트입니다.
-   **Home.js**: 블로그의 메인 홈 페이지로, 초기 안내 문구가 표시됩니다.
-   **posts.json**: JSON 형식으로 저장된 포스트 데이터 파일입니다. 각 포스트의 제목, ID, 내용 등이 포함됩니다.
-   **index.js**: React 애플리케이션의 진입 파일입니다.
-   **index.css**: Tailwind CSS 기본 스타일을 불러오는 파일입니다.

### 설치 및 실행 방법

1. **리포지토리 클론**:

    ```bash
    git clone https://github.com/minsangKwak/minsangKwak.github.io.git
    ```

2. **프로젝트 디렉토리로 이동**:

    ```bash
    cd minsangKwak.github.io
    ```

3. **의존성 설치**:

    ```bash
    npm install
    ```

4. **로컬 서버 시작**:

```bash
npm start
```

5. **애플리케이션 확인**

-   브라우저에서 http://localhost:3000으로 이동하여 애플리케이션을 확인합니다.

### 배포

-   이 프로젝트는 GitHub Pages에 배포할 수 있도록 설정되어 있습니다. 배포는 다음 단계를 통해 수행됩니다:

1. **프로덕션 빌드 생성**:

    ```bash
    npm run build
    ```

2. **GitHub Pages에 배포**:

    ```bash
    npm run deploy
    ```

### 추가 정보

-   posts.json 파일에 새로운 포스트를 추가하면 사이드바에 자동으로 반영되므로, 확장성이 뛰어나며 관리가 쉽습니다.
-   코드 미리보기 기능은 각 포스트의 코드를 iframe으로 렌더링하여 실제로 실행되는 결과를 보여줍니다.
