# AutoBlog · Astro / MkDocs 비교

Astro와 MkDocs에 같은 Markdown 원고를 넣어 화면과 작성 방식을 비교합니다. 최종 생성기를 고르기 전까지 Cloudflare Pages에서 두 버전을 함께 볼 수 있습니다.

## 폴더

- `shared-content/posts/`: 두 사이트가 함께 사용하는 Markdown 원고 원본
- `astro-demo/site/`: Astro 사이트 코드와 페이지 템플릿
- `mkdocs-demo/`: MkDocs 비교용 테마와 설정
- `scripts/sync-content.mjs`: 원고를 두 사이트의 콘텐츠 폴더로 복사
- `scripts/build-pages.mjs`: Astro와 MkDocs를 빌드해 한 Pages 사이트에 배치

## 빌드

```powershell
node scripts/build-pages.mjs
```

Cloudflare Pages 설정:

- Root directory: 저장소 루트
- Build command: `node scripts/build-pages.mjs`
- Build output directory: `astro-demo/site/dist`
- Environment variable: `NODE_VERSION=22.23.4`

현재 비교 주소는 Astro `/themes/shortlist/as-folio/`, MkDocs `/mkdocs/theme-preview/`입니다. 기본 `/` 경로에는 기존 Astro 샘플이 남아 있습니다. 최종 선택 후 운영 블로그를 루트 주소에 적용하고 선택하지 않은 비교 구성을 정리합니다.
