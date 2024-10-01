import React from "react";
import { InputForm } from "./components/InputForm";

export const dynamic = 'force-dynamic';

export const getChildInfo = () => fetch('http://localhost:8080/api/time?time=3');

export default async () => {
    await fetch('http://localhost:8080/api/time?time=3');

    return <div>
        <InputForm />
    </div>
}