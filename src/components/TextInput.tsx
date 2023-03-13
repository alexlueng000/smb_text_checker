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
        <div className='textInput'>
            <h2>输入文本</h2>
            <div className='textareaWrapper'>
                <textarea onChange={handleInputChange} value={value} />
            </div>
        </div>
    )
}

export default TextInput