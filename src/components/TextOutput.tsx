import React from "react"
import styled from 'styled-components'

const TextOutputContainer = styled.textarea`
    width: 50%;
    height: 100%;
    border: 1px solid gray;
`;

interface TextOutputProps {
    outputText?: string;
}

const TextOutput = ({ outputText} : TextOutputProps) => {

    const text = outputText || "";

    // 对text进行处理

    return (
        <div className="textOutput">
            <h2>输出文本</h2>
            <div className="textareaWrapper">
                <textarea value={text} readOnly />
            </div>
        </div>
    )
}

export default TextOutput