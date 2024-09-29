'use client';
import { ReactNode} from "react"

export default ({ children, rightChild }: { children: ReactNode, rightChild: ReactNode }) => {

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: "row", height: "calc(100vh - 105px)" }}>
                <div style={{ flex: 1, borderRight: "1px solid #333"}}>{children}</div>
                <div style={{ flex: 1 }}>{rightChild}</div>
            </div>
        </div>
    )
}