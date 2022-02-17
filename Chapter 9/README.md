# typescript로 React 시작하기

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

4. 리액트에 타입 적용하기

4.1 함수형 컴포넌트의 타입 정의
```
// export default function MyComponent({ name, age = 23 }: Props) {
//     return (
//         <div>
//             <p>{name}</p>
//             <p>{age}</p>
//         </div>
//     )
// }

// or 
import React from 'react';

interface Props {
    name: string;
    age?: number;
}

// export default function MyComponent({ name, age = 23 }: Props) {
//     return (
//         <div>
//             <p>{name}</p>
//             <p>{age}</p>
//         </div>
//     )
// }

// or 
const MyComponent: React.FunctionComponent<Props> = function({name, age = 23}) {
    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
        </div>
    )
}

export default MyComponent;
```

