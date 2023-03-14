import React, { forwardRef, useRef } from "react";

const TextOutputContainer = forwardRef<
    HTMLTextAreaElement,
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => {
    const { children, ...restProps } = props;

    const styles = {
        width: '100%',
        height: '100%',
        border: '0px solid gray',
    };

    return (
    <textarea style={styles} {...restProps} ref={ref}>
        {children}
    </textarea>
    );
})



export default TextOutputContainer