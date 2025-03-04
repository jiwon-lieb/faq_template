---
title: "MBTI Pep Talk API 문서"
slug: "api-doc"
category: "소개"
tags: ["API documentation", "API"]
---
## MBTI Pep Talk API 문서

### MBTI Pep Talk API를 만든 이유

MBTI Pep Talk API는 API 문서를 작성하는 것뿐만 아니라 백엔드 개발을 직접 경험하고 싶어 시작한 주말 프로젝트였습니다.
처음에는 간단한 기능만 구현했지만, 점점 발전하여 MBTI 성격 유형과 감정 상태에 맞춘 맞춤형 응원 메시지를 제공하는 API로 확장되었습니다.

현재는 다국어 지원과 체계적인 문서화까지 갖춘 완전한 API 서비스로 자리 잡았습니다.

### 프로젝트 시작: 어떻게 만들었을까?

기술문서 작성자로서 API를 단순히 문서화하는 것을 넘어 직접 다뤄보고 싶다는 생각이 들었습니다.
그래서 제로부터 API를 직접 만들어보기로 결정했죠.

#### 초기 구현 (Netlify Functions 활용)

처음에는 Netlify Functions를 사용해 단순한 GET 요청을 처리하는 방식으로 시작했습니다. 하지만 확장성과 구조적인 백엔드가 필요하다는 걸 깨닫고, Django REST Framework(DRF) 기반으로 다시 구축했습니다.

#### 기술 스택 & 주요 기능

- Django REST Framework(DRF) + SQL → API 개발 및 데이터베이스 관리
- CRUD 기능 지원 → 새로운 응원 메시지를 추가/수정/삭제 가능
- 다국어 지원 (영어 & 한국어) → 사용자들이 원하는 언어를 선택 가능
- 클라우드 서버에 배포 → 실제 서비스처럼 동작

#### API 문서화 (GitBook 활용)

API 개발 후, 가장 중요한 작업은 개발자가 쉽게 이해하고 활용할 수 있도록 문서를 작성하는 것이었습니다.
GitBook을 활용해 구조화된 API 문서 허브를 만들었습니다.

#### 문서의 핵심 요소
- 엔드포인트 & 파라미터 정리 → 요청/응답 형식 명확화
- 인증(Authentication) 방식 → API 키를 이용한 콘텐츠 수정 기능
- Postman 예제 요청 → 개발자가 쉽게 테스트 가능하도록 샘플 제공
- 사용 가이드 → API를 효과적으로 통합하는 모범 사례 포함

📌 API 문서 보러 가기 → <a href="https://techwriting-project.gitbook.io/mbti-peptalk-api-docs/mbti-api">GitBook</a>

> 주말마다 API 업데이트 중이라, 엄밀히 말하면 아직 작업 중인 점 양해 부탁드립니다.

### 프로젝트를 통해 배운 점 & GitHub 저장소

이 프로젝트를 통해 백엔드 개발에 대한 실무적인 이해를 높이고, 더 나은 API 문서 작성자가 되는 경험을 할 수 있었습니다.
API를 처음부터 직접 만들어 본 덕분에, 개발자의 관점에서 API 문서를 어떻게 작성해야 하는지 깊이 고민할 수 있었어요.

🔗 GitHub Repo (API) → <a href="https://github.com/jiwon-lieb/mbti_peptalk">GitHub</a>
