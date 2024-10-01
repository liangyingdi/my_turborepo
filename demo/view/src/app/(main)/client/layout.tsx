'use client';
import { memo, ReactNode, Suspense, useDeferredValue, useState } from "react";
import styles from "./index.module.css"

const Child1 = memo(({ obj }: { obj: any }) => {
    return new Array(10000).fill(1).map(_ => <Child2 key={Math.random()}></Child2>)
})

const Child2 = () => {
    new Array(100000).fill(1).map(item => item * 2);
    return null;
}

export default ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState('');
    const value = useDeferredValue(state);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setState(e.target.value)
    }

    return (
        <Suspense fallback={<div>fallback...</div>}>
            <input className={styles.input} onChange={onChange} />
            {/* <Child1 obj={value}></Child1> */}
            {children}
        </Suspense>
    )
};