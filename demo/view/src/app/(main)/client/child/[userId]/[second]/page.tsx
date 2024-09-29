"use client"
import { getUserByIdAction } from "@view/src/app/login/action";
import { useEffect, useState } from "react";

export const User = () => {
    const [user, setUser] = useState<User>();
    const getUser = async () => {
        const {data} = await getUserByIdAction();
        setUser(data);
    }
    useEffect(() => {
        getUser();
    }, [])

    return <div>
        <div>id: {user?.id}</div>
        <div>username: {user?.username}</div> 
    </div>
};
export default User;

