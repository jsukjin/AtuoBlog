# Cloudflare 블로그 빌드 비교

이 저장소는 하나의 Markdown 원본을 Astro와 MkDocs로 각각 빌드하고 Cloudflare Pages의 한 사이트에서 비교하기 위한 시험 프로젝트입니다. Astro는 `/`, MkDocs는 `/mkdocs/` 경로에 배포합니다.

## 폴더

- `shared-content/posts/`: 두 생성기에 공급하는 공통 Markdown 원본
- `astro-demo/site/`: Astro 블로그 시험 사이트
- `mkdocs-demo/`: MkDocs 시험 사이트
- `scripts/sync-content.mjs`: 공통 원고를 각 사이트의 콘텐츠 폴더로 복사

## 로컬 빌드

```powershell
node scripts/sync-content.mjs
node scripts/build-pages.mjs
```

`build-pages.mjs`는 Astro와 MkDocs를 순서대로 빌드하고 MkDocs 결과를 Astro의 출력 폴더 아래 `mkdocs/`로 복사합니다. Windows에서는 `mkdocs-demo/.venv`가 있으면 그 가상 환경을 사용합니다. Cloudflare 빌드 환경에서는 Python 패키지를 설치한 뒤 MkDocs를 빌드합니다.

Cloudflare Pages 프로젝트 연결 후 시험 빌드 설정:

- Root directory 저장소 루트
- Build command `node scripts/build-pages.mjs`
- Build output directory `astro-demo/site/dist`
- Environment variable `NODE_VERSION=22.23.4`

같은 저장소를 두 Pages 프로젝트에 중복 연결할 수 없어 하나의 프로젝트가 두 정적 사이트를 함께 빌드하도록 구성합니다. 실제 블로그 생성기를 고른 뒤에는 선택한 생성기만 배포하도록 빌드 구성을 단순화합니다.

