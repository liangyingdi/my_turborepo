import React from "react";
export const dynamic = 'force-dynamic';
import { InputForm } from "./components/InputForm";

export const getChildInfo = () => fetch('http://localhost:3001/api?time=3');

export default async () => {
    await fetch('http://localhost:3001/api?time=3');

    return <div>
        <InputForm />
    </div>
}