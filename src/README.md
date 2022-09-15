# Nomad Link BackEnd

[:ballot_box_with_check: README FrontEnd](https://github.com/Nomad-Link/Nomad-Link/tree/master/src/main/client)

## 개요

* Nomad Link 프로젝트 백엔드
* 비동기 처리를 위해 MVC 아키텍쳐를 이용한 SSR이 아닌 REST API를 이용해 프론트엔드와 통신
* CRUD 구현
  * Rest API 방식으로, DB에서 개발자 리스트, 기업 리스트 등을 응답데이터로 프론트엔드 단에 전송
  * 일대일 연관관계, 일대다 연관관계 엔티티를 불러오는 경우 성능 최적화 수행
  * 검색 기능 구현
* 로그인
  * 서버단에서 세션 저장소를 이용하여 Http의 stateless 특성을 극복
  * 유효성 검사하여 에러 메시지를 출력
* 회원가입
  * 유효성 검사하여 에러 메시지를 출력
* 엔티티와 DTO를 분리
  * API 스펙을 깨뜨리지 않기 위해 엔티티와 Data Transfer Object를 분리하여 관리
* API
  * GET
    * /api/enterprise/recruit/developers (기업용 서비스의 개발자 목록에서 모든 개발자들의 정보와 개발자의 기술 스택까지 전송)
    * /api/enterprise/recruit/complete (대리 구인 폼 작성 후 리다이렉트 되는 페이지에 4명의 개발자만 표시)
    * /api/enterprise/recruit/developers?nation=VIETNAM&recruitType=PARTTIME&techStack=Html (특정 국가, 근무형태, 기술스택 스펙을 가지고있는 개발자를 검색)
    * /api/private/employ/enterprises (기업 정보와 구인 정보 일부를 표시)
    * /api/mypage/resume/get/{memberId} (특정 이력서 데이터 받아오기)
    * /api/member/mypage (마이페이지 조회 - 지원한 공고 확인)
    * /api/notice/{id} (특정 구인 공고 조회)
  * POST 
    * /api/enterprise/recruit/form (기업이 개발자를 직접 뽑지 않을 때, 폼을 작성하고 전송)
    * /api/login (로그인)
    * /api/logout (로그아웃)
    * /api/mypage/resume (이력서 등록(저장))
    * /api/register (회원가입)
    * /api/notice/{noticeId} (특정 공고에 지원)

## BackEnd 디렉터리 구조

* api
  * dto
    * enterprise (기업용 서비스 관련 dto 구현)
    * member (맴버 서비스 관련 dto 구현)
  * enterprise (기업용 서비스 관련 API 구현)
  * member (맴버 서비스 관련 API)
* domain
  * enterprise (기업용 서비스 관련 엔티티 구현)
  * member (맴버 서비스 관련 엔티티 구현)
* login (로그인 관련 컨트롤러 및 서비스 구현)
* repository
  * enterprise (기업용 서비스 관련 DAO 구현)
  * member (맴버 서비스 관련 DAO 구현)
* service
  * enterprise (기업용 서비스 관련 비즈니스 로직 구현)
  * member (맴버 서비스 관련 비즈니스 로직 구현)
* session (세션 상수 구현)
* testData (테스트 데이터 구현)

## BackEnd 주요 사용 패키지

* Lombok
  * 코드 다이어트 기능을 위해 사용
* H2
  * 데이터 베이스 기능을 위해 사용
* Modelmapper
  * 객체 타입 변경을 위해 사용
* Spring web
  * 전체적인 스프링 기능을 이용하기 위해 사용
* Spring validation
  * 유효성 검증 기능을 위해 사용
* Spring data jpa
  * ORM 기술을 이용하기 위해 사용
* Devtools
  * 코드 변경시마다 서버 재시작을 하지 않기 위해 사용

## 참조

* Custom valid message
  * https://jj-yi.tistory.com/23
* Content-type 
  * https://way-be-developer.tistory.com/242
