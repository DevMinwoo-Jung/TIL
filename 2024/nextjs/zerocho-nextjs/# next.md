# next.js rehab

- layout
    
    ```jsx
    import {ReactNode} from "react";
    import styles from '@/app/(beforeLogin)/_component/main.module.css';
    
    type Props = { children: ReactNode, modal: ReactNode };
    export default function Layout({ children, modal }: Props) {
      return (
        <div className={styles.container}>
          {children}
          {modal}
        </div>
      )
    }
    
    layout은 공통으로 사용되는 컴포넌트 children이 page에 들어간당
    
    // 주소가 localhost:3001일 때는 children->page.tsx, modal->@modal/default.tsx
    // 주소가 localhost:3001/i/flow/login 때는 chldren->i/flow/login/page.tsx, modal->@modal/i/flow/login/page.tsx
    ```
    
- public 폴더?
    
    static assests들 넣는 곳 baseURL은 ‘/’ 이다
    
    ```jsx
    import Image from 'next/image'
     
    export function Avatar() {
      return <Image src="/me.png" alt="me" width="64" height="64" />
    }
    ```
    
    그리고 자동적으로 캐싱된다
    
- bundle analyzer
    
    nextjs 플러그인인데 자바스크립트 모듈 사이즈를 관리하는데 도움을 줌, 시각적으로 확인 할 수 있는 리포트도 만들어준다.
    
    사용법은 아래 링크 확인
    
    https://nextjs.org/docs/app/building-your-application/optimizing/bundle-analyzer
    
- ****Lazy Loading****
    
    렌더링 하는데 필요한 js 코드?를 줄여 초기 렌더링 속도를 높여줌
    
    client component만 됨
    
    1. next/dynamic을 임포트 하던가
    2. suspense랑 React.lazy()를 쓰던
    
    서버 컴포넌트는 자동적으로 코드를 쪼개서 이걸 서버에서 클라이언트로 보낼 수 있
    
    이걸쓰면 미리 렌더링(ssr)이 되는데 만약에 싫으면 option으로 제어 가능
    
    라이브러리를 사용하고자 하는 시점에 import 가능함, 아래 코드는 타이핑 하는 시점에 라이브러리를 import함 진짜 신
    
    ```jsx
    'use client'
     
    import { useState } from 'react'
     
    const names = ['Tim', 'Joe', 'Bel', 'Lee']
     
    export default function Page() {
      const [results, setResults] = useState()
     
      return (
        <div>
          <input
            type="text"
            placeholder="Search"
            onChange={async (e) => {
              const { value } = e.currentTarget
              // Dynamically load fuse.js
              **const Fuse = (await import('fuse.js')).default
              const fuse = new Fuse(names)**
     
              setResults(fuse.search(value))
            }}
          />
          <pre>Results: {JSON.stringify(results, null, 2)}</pre>
        </div>
      )
    }
    ```
    
- routeGroup
    
    app/(afterLogin)/home
    
    주소창에는 관여를 안함 근데 group을 만들 수 있음 
    
    브라우저에서는 /home 임
    
- layout vs template
    
    둘다 구조를 잡는 html이지만 후자는 계속 리렌더링이 됨, 쓸 이유가 있나?? 서버에 로그같은 거 찍을 때 기록하기 위해서 냄겨둔다함..
    
- 뒤에 화면은 떠있고 모달을 위에 띄우고 싶다?
    
    parallel route!, intercepting route!
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/878af7cc-3a54-4363-8783-2a6b5546ad17/a6cb1fb8-fecc-4890-a8ca-5a1e2e25a7ca/Untitled.png)
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/878af7cc-3a54-4363-8783-2a6b5546ad17/883fb573-0d07-4423-986a-082855881a4c/Untitled.png)
    
    @modal의 i/flow/login의 page와 (beforelogin)/page,layout이 동시에 보임
    
- 공통되는 component를 따로 뺴고 싶다??
    
    private folder (_folderName)
    
- 주소창에 안뜨는 3개!
    
    private folder - 공통 컴포넌트
    
    group folder - layout
    
    parallel router - 한 화면에 두개의 페이지
    
- default.tsx
    
    pararel route할 때 modal을 안 보여줄 경우에 쓰는 것
    
    ```tsx
    // 주소가 localhost:3001일 때는 children->page.tsx, **modal->@modal/default.tsx**
    // 주소가 localhost:3001/i/flow/login 때는 chldren->i/flow/login/page.tsx, modal->@modal/i/flow/login/page.tsx
    ```
    
- server component can import client componet but client component can’t import server component
- server에서 redirect하면 제대로 인터셉팅이 안된다, 클라이언트에서 해줘야한다
- replace, push?
    
    The router history works like a `stack` of `routes`. When you use the `router.replace`, you're overwritting the top of the the stack. When using the `router.push`, it adds a new route to the top of the `stack`.
    
    The router history allows you to go back to the last page. For example, when the user navigates to a invalid route, you can use the `router.replace` to prevent the user to navigate back to the invalid route.