# ai-webinar

AI 시대, 우리 아이 교육 — 학부모 무료 웨비나 랜딩 페이지.

- **일시**: 2026년 5월 7일 (목) 21:00 KST · 45분 + Q&A
- **장소**: Google Meet (온라인)
- **대상**: 초등 4~6학년 자녀를 둔 학부모
- **호스트**: IT 대기업 현직 개발자 아빠

## 배포

GitHub Pages로 배포: 저장소 `Settings → Pages → Source: main / root` 설정하면 `https://rihun-kim.github.io/ai-webinar/`에서 접속 가능.

## 구성

- `index.html` — 단일 파일. CSS/JS/Firebase 모두 인라인.
- 신청 폼은 Firebase Firestore의 `webinar_registrations` 컬렉션에 저장됩니다.
