'use client';
import { useEffect, useState } from "react";
import { getItemByIdAction } from "../../../action";

export default ({ params }: { params: { userId: string, id: string } }) => {
    const [item, setItem] = useState<UserItem>();

    useEffect(() => {
        getItemById()
    }, [params])

    const getItemById = async() => {
        const {data} = await getItemByIdAction(Number(params.id));
        setItem(data);
    }
    
    return <div>
        id: {params.id}<br/>
        user_id: {params.userId}<br/>
        name: {item ? item.name : ""}
    </div>
}