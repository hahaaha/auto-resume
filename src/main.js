import Prism from 'prismjs'
import Mark from 'marked'

let res = `/*你好，我是不远，一名前端工程师。
请允许我做一个简单的自我介绍，但是文字太单调，所以我想来点特别的。
首先我准备一下样式。*/
*{
    transition: all 1s;
}
/* 调整下背景*/
html{
    background:#363636;
    color:#fff;
    font-size:16px;
}
/* 添加边框 */
#code {
    border: 2px solid #00FF1B;
    padding: 20px;
}
.token.selector{
    color: #a6e22e;
}
.token.property{
    color: #f92672;
}
.token.punctuation{
    color: #f8f8f2;
}
#code{
    animation: breath 4s linear infinite;
}
/*现在开始写简历吧*/
/*首先我需要一张纸*/
`
var htmlCode = `
#paper{
    width:200px;
    height:400px;
    background:#F1E2C3;
}
#code{
    display: inline-block;
    position: fixed;
    right: 0;
    width: 50%;
    height: 80%;
    margin-right: 20px;
}
#paper{
    position: fixed;
    left: 0;
    width: 45%;
    height: 80%;
    background: linear-gradient(to bottom, #f4f39e, #f5da41); 
    padding: 20px;
    margin-left: 20px;
    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.8);
    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.8);
    text-shadow: 0 1px 0 #F6EF97;
    margin-top: 30%;
    
}
/*掉下去了！怎么办？*/
/*没关系，再用胶带粘住它*/
#paper:after {
    width: 25%;
    height: 5%;
    content: " ";
    margin-left: -90px;
    border: 1px solid rgba(200, 200, 200, .8);
    background: rgba(254, 254, 254, .6);
    box-shadow: 0px 0 3px rgba(0, 0, 0, 0.1);
    transform: rotate(-5deg);
    position: absolute;
    left: 50%;
    top:-15px;
}
#paper{
    margin-top: 0;
}`
var markdown = `
# 个人简历
## 基本资料
 - 性别：男
- 姓名：不远
- 所在城市：杭州
- 出生日期：1995-01-08
- TEL：17557290656
- QQ：152927520
## 个人经历
### 教育经历
- 2014年毕业于安徽大学江淮学院
### 工作经历
- 2014-2018:电子商务行业
- 2018至今：自学前端知识
### 职业技能
- 熟练运用html/css/JavaScript
- jQuery
- Vue
- React
- 了解MVC的封装思想，了解ajax
- 了解HTTP的基本原理
## 其他介绍
### 个人项目代码
- https://github.com/
### 个人博客
- 简书：https://www.jianshu.com/u/5362a3ed6b43
- 掘金：https://juejin.im/user/5b9d2782e51d450e4006a485/posts
`
    var changeCode = window.changeCode = `
/*这样看起来很不舒服？让我们把markdown转换成更易读的显示方式吧*/
`
    var conclusion = window.conclusion = `
/*好了，这个就是我的简历了。如果您对我还算满意或者想要更多了解的话，请联系我哦*/
`
let fn2 = () => {
    let paper = document.createElement('pre')
    paper.id = 'paper'
    document.getElementById('box').appendChild(paper)
}

let fn3 = (preResult) => {
    let res = `
#paper{
    width:200px;
    height:400px;
    background:#F1E2C3;
}`

    let n = 0
    let p = new Promise((resolve) => {
        let domCode = document.getElementById('code')
        let clock = setInterval(() => {
            n += 1
            domCode.innerHTML = preResult + res.substring(0, n)
            domCode.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)
            mystyle.innerHTML = preResult + res.substring(0, n)
            
            if (n >= res.length) {
                window.clearInterval(clock)
                resolve(mystyle.innerHTML)
            }
        }, 10)
    })

    return p
    
}

var writeCode = (prefix, code) => {
    let domCode = document.getElementById('code')
    let n = 0
    let promise = new Promise((resolve) => {
        let clock = setInterval(() => {
            n++
            domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
            mystyle.innerHTML = prefix + code.substring(0, n)
            domCode.scrollIntoView({behavior: "instant", block: "end", inline: "nearest"})
            if (n > code.length) {
                window.clearInterval(clock)
                resolve('one')
            }
            console.log(1)
        }, 10)
    })
    return promise
}

function writeMarkdown(markdown) {
    let domPaper = document.getElementById('paper')
    console.log(domPaper)
    let n = 0
    var clock = setInterval(() => {
        n += 1
        domPaper.innerHTML = Prism.highlight(markdown.substring(0, n),Prism.languages.css)
        // domPaper.scrollIntoView({behavior: "instant", block: "end", inline: "nearest"})
        if (n >= markdown.length) {
            window.clearInterval(clock)
        }
    }, 10)
}

writeCode('', res).then(() => {
    fn2()
    return fn3(res)
}).then((data) => {
    console.log('HI')
    writeCode(data,htmlCode)
}).then(() => {
    writeMarkdown(markdown)
})