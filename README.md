# typescript로 React 시작하기

> 본 리포지토리는 create-react-app 명령어를 사용하지 않고 typescript을 통해 react 환경을 구축하는 과정입니다. `실전 리액트 프로그래밍 개정판` 책을 통해 진행되었습니다.

1. 환경구축
```
npm init -y
npm install typescript react react-dom
npm install @types/react @types/react-dom
npx tsc --init
```

2. tsconfig.json 파일 수정
```
"jsx": "react",
"outDir": "./dist",
"allowJS": true
"compilerOptions": {
    "lib": ["dom", "es5", "scripthost", "es2017"]
}
```
- jsx: JSX 문법으로 작성된 코드가 React.createElement 함수 호출로 변환된다.
- outDir: 컴파일된 결과를 dist 폴더 내에 위치 시킨다.
- 자바스크립트 최신 문법을 사용하기 위해서는 위와같이 수정한다.

3. 자바스크립트가 아닌 모듈 및 window 객체 사용
```
interface Window {
    myValue: number;
}

declare module '*.png' {
    const content: string;
    export default content;
}
```
- types.ts 파일을 추가해 타입스크립트에 타입 정의를 정의했다.

## 참고문헌
1. 실전 리액트 프로그래밍 개정판, 이재승