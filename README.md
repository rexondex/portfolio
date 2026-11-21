# REXONDEX Portfolio

빌드 도구나 서버 없이 GitHub Pages에 배포할 수 있는 정적 포트폴리오 템플릿입니다. `index.html`을 브라우저에서 열어 확인하세요.

## 수정하기

- `index.html`: 이름, 소개 문구, 연락처(`hello@example.com`)와 프로젝트 카드 제목을 수정합니다.
- `script.js`: `projects` 배열에서 프로젝트 상세 제목, 분류, 설명을 수정합니다. 카드 순서와 배열 순서를 맞춰 주세요.
- `style.css`: 색상, 레이아웃, 애니메이션과 예시 프로젝트 그래픽을 수정합니다. 실제 프로젝트 이미지는 카드의 `.project-art` 영역에 추가할 수 있습니다.
- Google Fonts를 사용하며, 네트워크 연결이 없으면 시스템 글꼴로 표시됩니다.

## GitHub Pages 배포

저장소에 파일을 푸시한 뒤 GitHub 저장소의 **Settings → Pages**에서 배포 소스를 **Deploy from a branch**, 브랜치를 원하는 브랜치와 `/ (root)`로 선택합니다. GitHub Actions 워크플로 파일이나 빌드 과정은 필요하지 않습니다.
