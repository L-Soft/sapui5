![UI5 logo](https://sap.github.io/ui5-tooling/stable/images/UI5_logo_wide.png)

# 😺SAP UI5😺

* `sap-21-expression-binding` 폴더는 `Step 21: Expression Binding`에서 `Step 26: Mock Server Configuration`까지 예제 소스 입니다.

## 📒학습 관련된 사이트
* [Walkthrough Tutorial (JavaScript)](https://sapui5.hana.ondemand.com/#/topic/3da5f4be63264db99f2e5b04c5e853db) 사이트 기준으로 예제 학습하고 있습니다.
* [UI5 Tooling](https://sap.github.io/ui5-tooling/stable/)
* [SAP UI5 ICON Explorer](https://sapui5.hana.ondemand.com/sdk/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#)

## 📒학습 아이템
* [MVC(모델-뷰-컨트롤러) 패턴](https://developer.mozilla.org/ko/docs/Glossary/MVC)
* Javascript
* Typescript
* nodejs
* [OData4](https://www.odata.org/)
* RIA(Rich Internet Application) 이면서 angular.js 비슷합니다.
* angular.js 프레임워크는 MVC 패턴으로 구현되어 있습니다.

## 🌍개발 환경 구축
### 🪜1. Node Install

* https://nodejs.org/en/download/package-manager 사이트에서 다운로드 설치

### 🪜2. 개발 툴 설치

> 맞는 개발 툴 설치하여 사용합니다. 툴은 상관 없습니다.

* Visual Studio Code: https://code.visualstudio.com/
* WebStorm: https://www.jetbrains.com/ko-kr/webstorm/
* 이클립스: https://www.eclipse.org/downloads/

### 🪜3. 프로젝트 만들기 및 실행

* 아래 명령어를 순차적으로 실행합니다. # 로 시작하는 글은 주석입니다.
* 프로젝트 경로는 다른 폴더로 해도 상관 없습니다. 다만 `<프로젝트 폴더>\webapp` 폴더가 없으면 오류가 발생합니다.
* 아래 명령어는 리눅스, 맥, 윈도우에서 동일하게 사용됩니다.
* `ui5 serve` 실행하면 http://localhost:8080 주소로 접속할 수 있습니다.

```bash
# 전역 설치, 최초 한번만 진행하면 됩니다.
npm install --global @ui5/cli 

# 프로젝트 폴더 생성
mkdir C:\dev\workspace_sapui5\sapui5\sap-01-helloworld\webapp
cd C:\dev\workspace_sapui5\sapui5\sap-01-helloworld

# npm 초기화, 프로젝트 시작할때 합니다.
npm init --yes

# ui5 init5 초기화, 프로젝트 시작할때 합니다.
ui5 init

# ui5 버전 설정, 프로젝트 시작할때 합니다.
ui5 use SAPUI5@1.130.0

# 프로젝트 빌드
ui5 build

# 프로젝트 실행
ui5 serve
Server started
URL: http://localhost:8080
```

# 💡참고 사항

## ❔OData Version 설정하는 부분

* ❕[Step 25: Remote OData Service](https://sapui5.hana.ondemand.com/#/topic/44062441f3bd4c67a4f665ae362d1109) 예제에서 아래 부분을 참조하여 버전을 설정하면 됩니다.

```json
"dataSources": {
  "invoiceRemote": {
    "uri": "V2/Northwind/Northwind.svc/",
    "type": "OData",
      "settings": {
        "odataVersion": "2.0"
    }
  }
}
```

