#### power by ChatGPT

#### 提问话术
在Go语言高级技巧部分，可以向候选人提问下列的问题：
1. 熟悉Go语言的 Cocurrency 模型吗？采用过什么方法来保证线程安全和避免data race condition?
2. 使用过哪些Go Web Framework? 能说说他们之间的差异和优缺点吗? 使用过哪些ORM框架，第三方中间件，还是自研
3. 说说Go的垃圾回收模型，在内存管理方面遇到过什么问题，是如何解决的
4. Go Channel的数据结构
5. 如何进行单元测试和基准测试
6. io.Writer, io.Reader, Error是如何实现的, slice的底层原理
7. 在性能优化方面做过哪些工作
8. 命令行工具库：Cobra, cli等
9. Interfaces, Context, Goroutines, Channels, Buffer, Select, Mutex, Generic
10. 性能监测工具：pprof
11. 如何使用label跳出循环

#### 评分标准
1. 若候选人能够成功修复代码区中的 bug, 则说明候选人对这个知识点能达到了解的水平；
2. 若在讨论过程中候选人体现了对引用与借用深刻的理解，则说明候选人对这个知识点达到了基本掌握的水平。

#### interact with ChatGPT

    ChatGPT API endpoint:
        https://api.openai.com/v1/completions

1. Create an index of article chunks
2. Find the most relevant chunks
3. Ask our question to GPT-3 using the most relevant chunk

so our process is: 
1. 


