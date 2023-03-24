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
            navigator.clipboard.writeText(textAreaRef.current.value)
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
        <div className="flex flex-col h-full">
            <div className="flex items-center">
                <h2 className="text-lg font-bold mb-2 pr-4">输出文本</h2>
                <button className="relative mb-2  rounded-md shadow-xl group flex items-center text-white justify-center bg-gradient-to-r from-cyan-500 to-blue-500 px-5 " onClick={handleClick}>
                    <div className="absolute  inset-0 w-0 bg-white opacity-10 transition-all duration-[0.3s] ease-out group-hover:w-full"></div>
                    {/* <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg> */}
                    <span>{copy ? "已复制" : "复制" }</span>
                </button>
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
