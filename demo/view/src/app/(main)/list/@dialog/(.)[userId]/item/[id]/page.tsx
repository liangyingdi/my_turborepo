'use client';
import { useRouter } from "next/navigation";
import { getItemByIdAction } from "../../../../action";
import { useEffect, useState } from "react";

export default ({ params }: { params: { id: string, user_id: string } }) => {
    const router = useRouter();
    // const getItems = unstable_cache(async () => await getItemById(Number(params.id)), ["cache_item"], {
    //     tags: ["cache_item"],
    // });

    const [item, setItem] = useState<UserItem>();

    useEffect(() => {
        getItemById()
    }, [params])

    const getItemById = async() => {
        const {data} = await getItemByIdAction(Number(params.id));
        setItem(data);
    }
    return (
        <div
            style={{
                top: "0",
                position: "fixed",
                height: "100vh",
                width: "100vw",
                background: "rgba(0, 0, 0, 0.4)",
                left: "0",
                padding: "100px",
                zIndex: 999
            }}
        >
            <div style={{
                width: '400px',
                backgroundColor: 'white',
                maxWidth: '300px',
                minHeight: '200px',
                borderRadius: '10px',
                padding: '20px',
                margin: '0 auto'
            }}>
                <div style={{ borderBottom: '1px solid #000' }}>id: {params.id}</div>
                <div style={{ borderBottom: '1px solid #000' }}>user_id: {params.user_id}</div>
                <div style={{ borderBottom: '1px solid #000' }}>name: {item ? item.name: ""}</div>
                <button style={{
                    marginTop: '20px',
                    float: 'right',
                    border: '1px solid #333',
                    background: 'palevioletred',
                    width: '50px',
                    borderRadius: '5px'
                }}
                    onClick={() => router.back()}
                >
                    关闭
                </button>
            </div>
            <br />
        </div>
    )
}