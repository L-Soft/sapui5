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

# XML Views

## 🍄주의사항
* index.html 파일에서 이 부분때문에 연결이 안될 수 있습니다. 
* `data-sap-ui-on-init`와 `data-sap-ui-resource-roots` 경로 확인 필요합니다.
```html
data-sap-ui-on-init="module:sap/ui/sap-04-xml_views/index"
data-sap-ui-resource-roots='{
    "sap.ui.sap-04-xml_views": "./"
}'
```

* `viewName` 부분이랑 XML이랑 연결되는 부분입니다.
* 경로 주소 주의가 필요합니다. 잘못 연결하면 화면에 안 나올 수 있습니다.
```js
sap.ui.define([
    'sap/ui/core/mvc/XMLView',
], (XMLView) => {
    'use strict';

    XMLView.create({
        viewName: 'sap.ui.sap-04-xml_views.view.App'
    }).then((oView) => {
        oView.placeAt("content")
    })
});
```
## 🦀규칙
* 모든 View는 view 폴더에 저장합니다.
* XML View 이름의 첫번째 글자는 대문자로 표기합니다.
* XML View 이름은 항상 *.view.xml로 끝납니다.
```bash
App.view.xml
List.view.xml
ListItems.view.xml
```

# Controller
## 🦀규칙
* controller 이름은 대문자로 표기됩니다.
* controller는 관련 view와 동일한 이름을 사용합니다 (1 : 1 관계가있는 경우)
* event handller 앞에는 "on" 이라는 접두어가 붙습니다.
* controller 파일 이름은 항상 * .controller.js 로 끝납니다.

## use strict
* 암묵적인 "느슨한 모드(sloppy mode)"를 해제하고, 명시적인 "엄격 모드(Strict Mode)"를 사용하는 방법입니다.


# Modules
* SAPUI5에서 라이브러리 또는 자원을 "모듈"이라고 합니다.

## 🦀규칙
* Global namespace를 정의하려면 컨트롤러 및 다른 모든 JavaScript 모듈에 sap.ui.define을 사용하십시오. 네임 스페이스를 사용하면 응용 프로그램 전체에서 객체를 처리 할 수 ​​있습니다.
* 비동기적 Loading 종속성(asynchronously loading dependencies)을 위하여 namespace 선언하지 않고 sap.ui.require를 사용하십시오. 예를 들어 실행만하면 되지만 다른 코드에서 호출 될 필요는 없습니다.
* 네임 스페이스가없는 function parameter의 이름을 로드하려면 artifact의 이름을 사용하십시오.

# Translatable Texts
## 🦀규칙
* 국제화를 위한 리소스 모델을 i18n모델이라고 한다.
* 기본 파일 이름은 i18n.properties.
* 리소스 번들 키는 (소문자) camelCase로 작성됩니다.
* 리소스 번들 값에는 {0}, {1}, {2}, … 와 같은 매개변수가 포함될 수 있습니다.
* 번역된 문자열을 연결하지 말고, 항상 플레이스홀더를 사용하세요.
* 특수 문자에는 유니코드 이스케이프 시퀀스를 사용하세요.

# Component Configuration
## 🦀규칙
* 가장 먼저 호출되는 자바스크립트 파일(Component.js)

# Descriptor for Applications
## 🦀규칙
* SAPUI5 1.30버전부터 manifest.json 파일에서 서비스 구성, 시작 뷰, 라우팅 설정합니다.

# 변경 사항
* https://openui5.hana.ondemand.com/resources/sap-ui-core.js에서 https://ui5.sap.com/1.130.0/resources/sap-ui-core.js로 변경