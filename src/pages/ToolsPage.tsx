import React, {ChangeEventHandler, useState } from 'react'
import TextInput from '../components/TextInput'
import TextOutput from '../components/TextOutput';
import Spinner from '../components/Spinner';

const options = ['Golang', 'Deep Learning', 'Python', 'C', 'C++', 'Java', 'JavaScript', 'Swift', 'Kotlin', 'Rust', 'Go', 'SQL', 'TypeScript']

function ToolsPage() {

  const [activeTab, setActiveTab] = useState('tab1')
  const [inputText, setInputText] = useState("");
  const [selectOption, setSelectOption] = useState(options[0]);

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<string>("");

  const handleInputChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const { value = "" } = event.target || {}
    console.log(value)
    setInputText(value)
  }

  const handleGenerate = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    const question_type = {
      question_type: selectOption
    }

    try {
      const response = await fetch('http://127.0.0.1:8080/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(question_type)
      })
      const data = await response.json()
      console.log(data)
      setQuestions(data.result)
      
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }


  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <svg className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
              <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
              <defs>
              <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#9089FC" />
                  <stop offset="1" stop-color="#FF80B5" />
              </linearGradient>
              </defs>
          </svg>
      </div>
      <div className=''>
        <h1>Tools</h1>
      </div>
      
      
      <div className="flex">
        <nav className="flex flex-col sm:flex-row">
          <button className={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${activeTab === "tab1" ? "text-blue-500 border-b-2 font-medium border-blue-500" : ""}`}
          onClick={() => setActiveTab("tab1")}
          >
              面试问题集
          </button>
          <button className={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${activeTab === "tab2" ? "text-blue-500 border-b-2 font-medium border-blue-500" : ""}`}
          onClick={() => setActiveTab("tab2")}
          >
              选择题
          </button>
          <button className={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${activeTab === "tab3" ? "text-blue-500 border-b-2 font-medium border-blue-500" : ""}`}
          onClick={() => setActiveTab("tab3")}
          
          >
              QuestionGPT
          </button>
        </nav>
      </div>

      {activeTab === "tab1" && (
        <div className="bg-gray-100 py-4 px-2 flex flex-row h-screen">
          <div className='w-1/2 mr-2'>
            <TextInput onInputChange={handleInputChange} value={inputText} />
          </div>
          <div className='w-1/2 ml-2'>
            <TextOutput outputText={inputText} />
          </div>
        </div>
      )}

      {activeTab === "tab2" && (
        <div className="bg-gray-100 py-4 px-2">
          <h2 className="text-lg font-bold mb-2">Tab 2 Content</h2>
          <p>Here's some content for tab 2.</p>
        </div>
      )}

      {activeTab === "tab3" && (
        <div className="bg-gray-100 py-4 px-2 h-screen">
          <div  className='flex items-center justify-center'>
            <label className='text-gray-700 text-sm font-bold mr-2' htmlFor='question'>题目类型:</label>
            <select
              value={selectOption}
              onChange={(e) => setSelectOption(e.target.value)}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button className='text-gray-700 text-sm font-bold ml-2' onClick={handleGenerate}>生成题目</button>
            {loading && <Spinner />}
          </div>

          <div className='flex items-center justify-center mt-2 h-full w-full'>
                
                <textarea 
                  className='w-full h-full p-4 focus: outline-none' 
                  readOnly 
                  value={questions} onChange={(e) => setQuestions(e.target.value)}
                > 
                </textarea>
          </div>
        </div>
        
      )}


    </div>
    
  )
}

export default ToolsPage
