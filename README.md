# AutoBlog · Astro

Astro 기반 블로그입니다. Markdown 원고를 Git에서 관리하고 Cloudflare Pages에서 정적 사이트로 빌드합니다.

## 폴더

- `shared-content/posts/`: 백업과 게시의 기준이 되는 Markdown 원고
- `astro-demo/site/`: Astro 사이트 코드와 페이지 템플릿
- `scripts/sync-content.mjs`: Markdown 원고를 Astro 콘텐츠 컬렉션에 복사
- `scripts/build-pages.mjs`: 콘텐츠 동기화 후 Astro 사이트 빌드

## 빌드

```powershell
node scripts/build-pages.mjs
```

Cloudflare Pages 설정:

- Root directory: 저장소 루트
- Build command: `node scripts/build-pages.mjs`
- Build output directory: `astro-demo/site/dist`
- Environment variable: `NODE_VERSION=22.23.4`
