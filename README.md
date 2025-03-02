# Rebellions Customer Support Site

<img width="1000" alt="image" src="https://github.com/user-attachments/assets/23c124b0-3425-4c3e-a776-fbd6e202c790"/>
<br>
Eleventy를 사용한 고객지원 FAQ 웹사이트 입니다. 아래의 가이드라인에 따라 Markdown 파일을 작성하고, 링크 및 명령어 사용 규칙을 준수해 주세요.

## 1. 레포지토리 클론

1. GitHub에서 레포지토리를 클론합니다.
    
    ```bash
    git clone https://github.com/your-username/faq_page.git
    ```
    
2. 클론한 폴더로 이동합니다.
    
    ```bash
    cd faq_page
    ```
    
2. **Yarn 설치**

    macOS에서는 Homebrew를 사용해서 설치할 수 있습니다.
   
    ```bash
    brew install yarn
    ```
    Node.js를 설치하셨다면 npm을 사용해도 됩니다.

    ```bash
    npm install -g yarn
    ```
    
4. **의존성**
       
    프로젝트 루트에서 아래 명령어를 실행하여 의존성을 설치합니다.
    
    ```bash
    yarn install
    ```
    
## 3. Eleventy 설치 및 로컬 서버 실행

1. **Eleventy 설치**
    
    프로젝트 루트에서 아래 명령어를 실행하여 Eleventy를 설치합니다.
    
    ```bash
    yarn add @11ty/eleventy
    ```
    
2. **gray-matter 설치**
    
    Markdown 파일을 JSON으로 변환하는 `generate_faq.js`를 실행하려면 `gray-matter`가 필요합니다.
    
    ```bash
    yarn add gray-matter
    ```
    
3. **Eleventy 실행**
    
   아래 명령어를 사용하면 로컬 서버에서 정적 사이트를 미리 볼 수 있습니다.
    
    ```bash
    yarn exec eleventy -- --serve
    ```
    
    - 기본적으로 빌드된 결과는 `_site` 폴더에 생성됩니다.
    - 브라우저에서 [http://localhost:8080](http://localhost:8080/)으로 접속하여 확인할 수 있습니다.

## 4. Markdown 파일 업로드 및 FAQ 업데이트

> 💡 Markdown으로 작성한 파일이 gray-matter를 통해 (명령어: `node generate_faq.js`) json으로 자동 변환되면, search.html과 faq/index.html에서 불러오는 구조입니다.
<br>

**1. Markdown 파일 작성/업로드**

    - `faq` 폴더에 Markdown 형식의 FAQ 파일을 작성합니다. faq_x.md 형식으로 명명됩니다.
    - **템플릿 가이드라인**
    
    ```bash
    ---
    title: "RBLN SDK를 어떻게 사용하나요?"
    ---
    
    RBLN SDK를 사용하기 위해서는...
    ```
    
    - 아래와 같이 헤더에 제목을 반드시 추가합니다.
    - 링크는 `<a href="..." class="underline">링크 텍스트</a>` 형식으로 작성합니다.
    - Mailto는 `<a href="mailto:support@rebellions.ai" class="underline">Technical Support Team</a>` 형식으로 작성합니다.

**2. FAQ JSON 업데이트**

- Markdown 파일을 수정하거나 새로 추가한 후, 아래 명령어를 실행하여 FAQ 데이터를 업데이트합니다.

    ```bash
    node generate_faq.js
    ```

- 성공 시 터미널에 아래 메시지가 표시됩니다.
    
    ```
    ✅ (๑•᎑•๑)♬* 성공이에요
    ```
    
## 폴더 구조

```
프로젝트 루트
├── assets/                # 이미지 등 정적 파일
├── faq/                   # Markdown 형식의 FAQ 파일들 (반드시 MD 템플릿에 따라 작성)
├── index.html             # 메인 랜딩 페이지
├── faq.json               # faq에 저장된 md 파일이 자동 json으로 저장되는 곳
├── search.html            # 검색 결과 페이지
├── generate_faq.js        # Markdown 파일을 JSON으로 변환하는 스크립트
└── .eleventy.js           # Eleventy 설정 파일 (필요 시 수정)

```

## 작업 시 참고 사항

- _site 디렉토리는 건드리지 않습니다.
- 새로운 FAQ를 추가할 때는 **faq** 폴더 내에 MD 템플릿을 따르는 파일을 생성하세요.
- FAQ Markdown 파일을 수정한 후에는 반드시 `node generate_faq.js` 명령어를 실행하여 `faq.json`을 최신 상태로 업데이트해 주세요.
- 스타일이나 레이아웃 변경 시, Tailwind CSS 유틸리티 클래스와 함께 프로젝트 내 기존 스타일을 참고해 주세요.
