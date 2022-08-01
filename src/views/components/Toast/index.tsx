import React from "react";

import { ToastInterface } from "./Toast.interface";

const Toast = (props: ToastInterface) => {
    const { text, title, listOfErrors } = props;
    return (
        <div>
            <div className={"flex flex-col justify-center text-center "}>
            {title !== "" && <div>{title}</div>}
            <div>{text}</div>
    {listOfErrors &&
    listOfErrors.length > 0 &&
    listOfErrors.map((m: string, key: number) => (
        <div key={key}>• {m}</div>
    ))}
    </div>
    </div>
);
};

    export default Toast;
