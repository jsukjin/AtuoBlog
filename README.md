# Cloudflare 블로그 빌드 비교

이 저장소는 하나의 Markdown 원본을 Astro와 MkDocs로 각각 빌드하고 Cloudflare Pages에서 비교하기 위한 시험 프로젝트입니다.

## 폴더

- `shared-content/posts/`: 두 생성기에 공급하는 공통 Markdown 원본
- `astro-demo/site/`: Astro 블로그 시험 사이트
- `mkdocs-demo/`: MkDocs 시험 사이트
- `scripts/sync-content.mjs`: 공통 원고를 각 사이트의 콘텐츠 폴더로 복사

## 로컬 빌드

```powershell
node scripts/sync-content.mjs
npm --prefix astro-demo/site install
npm --prefix astro-demo/site run build
```

MkDocs는 저장소 루트에서 실행합니다.

```powershell
python -m pip install -r mkdocs-demo/requirements.txt
python -m mkdocs build --config-file mkdocs-demo/mkdocs.yml
```

Cloudflare Pages 프로젝트 연결 후 시험 빌드 설정:

- Astro: Root directory 저장소 루트, build command `node scripts/sync-content.mjs && npm --prefix astro-demo/site ci && npm --prefix astro-demo/site run build`, output directory `astro-demo/site/dist`
- MkDocs: Root directory 저장소 루트, build command `python -m pip install -r mkdocs-demo/requirements.txt && node scripts/sync-content.mjs && python -m mkdocs build --config-file mkdocs-demo/mkdocs.yml`, output directory `mkdocs-demo/site`

두 Pages 프로젝트는 같은 저장소를 사용하지만 서로 다른 빌드 설정과 출력 디렉터리를 지정합니다.

