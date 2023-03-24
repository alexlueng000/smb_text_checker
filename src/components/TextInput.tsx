import React, { ChangeEventHandler } from 'react'

interface TextInputProps {
    onInputChange: ChangeEventHandler<HTMLTextAreaElement>;
    value: string
}


const TextInput = ({ onInputChange, value }: TextInputProps) => {

    const handleInputChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        onInputChange(event)
    }

    return (
        <div className="flex flex-col h-full">
            <h2 className="text-lg font-bold mb-2">输入文本</h2>
            <textarea
                className="flex-grow focus:outline-none p-2"
                onChange={handleInputChange}
                value={value}
                rows={20}
            />
        </div>
    )
}

export default TextInput


