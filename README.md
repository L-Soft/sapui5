![UI5 logo](https://sap.github.io/ui5-tooling/stable/images/UI5_logo_wide.png)

# SAPUI5

* [Step 1: Hello World! - sap-01-helloworld](https://sapui5.hana.ondemand.com/sdk/#/topic/2680aa9b16c14a00b01261d04babbb39)

# 학습 아이템

* [UI5 Demo Kit](https://sapui5.hana.ondemand.com/sdk/#/topic/2680aa9b16c14a00b01261d04babbb39)
* [UI5 Tooling](https://sap.github.io/ui5-tooling/stable/)
* [MVC(모델-뷰-컨트롤러) 패턴](https://developer.mozilla.org/ko/docs/Glossary/MVC)
* Javascript 또는 Typescript
* nodejs
* [OData4](https://www.odata.org/)

# 설치 방법
1. https://nodejs.org/en/download/package-manager, node-v22.12.0-x64.msi 다운로드 후 설치
1. ui5 cli 전역 설치
1. 프로젝트 폴더 생성
1. npm 초기화
1. UI5 초기화
1. webapp\manifest.json 파일 생성, 아래 주소의 Example 복사 후 붙여넣기
   1. https://sapui5.hana.ondemand.com/sdk/#/topic/74038a52dcd7404e82b38be6d5fb1458

1. UI5 버전 설정
1. UI5 build - 빌드
1. UI5 serve - 프론트엔드 서버 시작

```bash
# 전역 설치
npm install --global @ui5/cli

# 프로젝트 폴더 생성
mkdir C:\dev\workspace_sapui5\sapui5\sap-01-helloworld\webapp
cd C:\dev\workspace_sapui5\sapui5\sap-01-helloworld

# npm 초기화
npm init --yes

# UI 5 init
ui5 init
Wrote ui5.yaml to C:\dev\workspace_sapui5\sap-01-helloworld\ui5.yaml:
specVersion: "4.0"
metadata:
  name: sap-01-helloworld
type: application

# UI5
ui5 use SAPUI5@1.130.0
ui5 build
ui5 serve
```