import { useEffect } from "react";
import React from 'react'

type Toastprops = {
    message: string,
    type: "SUCESS" | "ERROR",
    onClose: () => void;
}

const Toast = ({ message, type, onClose }: Toastprops) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [onClose]);

    const style = type === "SUCESS" ? "toast success" : "toast error";

    return (
        <div className={style}>
            <div className="content">
                <span className="message">{message}</span>
            </div>
        </div>
    );
}

export default Toast;