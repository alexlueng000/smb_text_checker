import axios from "axios"

export function findAdjacentChineseAndEnglish(str: string): string {

    let result = ""
    for (let i = 0; i < str.length; i++) {
        const currentChar = str.charAt(i)
        const nextChar = str.charAt(i+1)

        result += currentChar


        if (/[a-zA-Z]/.test(currentChar) && /[\u4e00-\u9fa5]/.test(nextChar)) {
            result += " "
        }

        if (/[a-zA-Z]/.test(nextChar) && /[\u4e00-\u9fa5]/.test(currentChar)) {
            result += " "
        }
    } 

    return result
} 

const keywords = ['了解', '掌握']

export function highlightKeywords(str: string): string {
    let result = str

    keywords.forEach(keyword => {
        const regex = new RegExp(`(${keyword})`, 'g')
        result = result.replace(regex, '**$1**')
    })

    return result
}


const API_KEY = ""


export const fetchData = async (input: string) => {
    const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
            prompt: `Complete this sentence: "${input}"`,
            model: 'text-davinci-002',
            max_tokens: 50,
            n: 1,
            stop: ".",
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
            },
        }
    )

    return response.data.choices[0].text 
}