---
title: "Cloudflare Pages로 블로그를 자동 배포하는 기본 흐름"
description: "Markdown 원고를 정적 사이트로 빌드하고 Cloudflare Pages에 배포하는 과정을 살펴봅니다."
pubDate: "2026-11-20"
category: "블로그 구축"
tags:
  - Cloudflare Pages
  - Markdown
---

## Markdown 원고에서 웹 페이지까지

블로그 원고를 Markdown 파일로 관리하면 글과 디자인을 분리할 수 있습니다. 사이트 생성기는 Markdown을 HTML 페이지로 바꾸고, Cloudflare Pages는 빌드된 파일을 방문자에게 전달합니다.

## 자동 배포 흐름

1. 글이나 템플릿을 Git 저장소에 반영합니다.
2. Cloudflare Pages가 저장소 변경을 감지합니다.
3. Astro 또는 MkDocs가 정적 HTML 파일을 생성합니다.
4. Pages가 새 버전을 배포합니다.

## 이미지와 콘텐츠

이미지는 R2에 저장하고 Markdown에서 공개 이미지 주소를 참조할 수 있습니다. 원고에는 이미지 설명을 위한 대체 텍스트도 함께 기록합니다.

> 이 문서는 Astro와 MkDocs의 동일한 샘플 빌드 및 화면 비교에 사용합니다.

