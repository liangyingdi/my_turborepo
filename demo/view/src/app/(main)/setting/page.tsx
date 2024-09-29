import React, { Suspense } from "react";
import Child, { getChildInfo } from "./child";

export const dynamic = 'force-dynamic';

export default async () => {
    getChildInfo();
    await fetch('http://localhost:3001/api?time=5');

    return (
        <div>
            <Suspense fallback={<div>loading...for 5</div>}>
                <Child />
            </Suspense>
        </div>
    )
}

