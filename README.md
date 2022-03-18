# 블로그 V2 코드 연습

### 1. 디비 및 사용자 생성
```sql
-- 모든 IP로 접근 가능한 유저 생성
CREATE USER 'green'@'%' IDENTIFIED BY 'green1234';

-- DB 생성
CREATE DATABASE greendb;

-- 모든 권한을 줌
GRANT ALL PRIVILEGES ON greendb.* TO 'green'@'%';
```

### 2. 프로젝트 세팅
- application.yml
- view 생성