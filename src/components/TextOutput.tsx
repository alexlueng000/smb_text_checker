import React, { useEffect, useState, useRef } from "react"
import TextOutputContainer from "./TextOutputContainer";

import { findAdjacentChineseAndEnglish, highlightKeywords } from "../utils/utils";

// 对text进行处理
// 1. 英文单词前后需要空格 [done]
// 2. 英文单词前后带标点的不用空格 [done]
// 3. 关键字加粗 [done]
// 4. 一键复制

//  2. 找出提问话术部分进行优化 3. useCallback, useMemo优化性能


interface TextOutputProps {
    outputText?: string;
}

const TextOutput: React.FC<TextOutputProps> = ({ outputText}) => {

    const text = outputText || ""
    const [result, setResult] = useState('')
    const [copy, setCopy] = useState(false)
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleClick = () => {
        
        if (textAreaRef.current) {
            setCopy(true)
            navigator.clipboard.writeText(textAreaRef.current.value.trim())
        }
    }

    useEffect(() => {
        let res = ''
        const lines = text.split('\n')
        for (let i = 0;  i < lines.length; i++) {
            let str = findAdjacentChineseAndEnglish(lines[i]) 
            // str = highlightKeywords(str)
            res += str + '\n'
        }

        setResult(res)

        if (copy) {
            setCopy(false)
        }
    }, [outputText])

    return (
        <div className="textOutput">
            <div className="textAreaHeader">
                <h2>输出文本</h2>
                <button onClick={handleClick}>{copy ? "已复制" : "复制" }</button>
            </div>
            
            <TextOutputContainer ref={textAreaRef} readOnly value={result} rows={10} cols={100}>
                {outputText?.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </TextOutputContainer>
        </div>
    )
}

export default TextOutput