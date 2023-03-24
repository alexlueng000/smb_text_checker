import React, { forwardRef, useRef } from "react";

const TextOutputContainer = forwardRef<
    HTMLTextAreaElement,
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => {
    const { children, ...restProps } = props;



    return (
    <textarea  {...restProps} ref={ref} rows={20} className="flex-grow p-2 focus:outline-none">
        {children}
    </textarea>
    );
})



export default TextOutputContainer