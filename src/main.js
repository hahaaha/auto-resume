import Prism from 'prismjs'

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
let fn2 = () => {
    let paper = document.createElement('div')
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
        let clock = setInterval(() => {
            n += 1
            code.innerHTML = preResult + res.substring(0, n)
            code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)
            console.log(code.innerHTML)
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
            if (n > code.length) {
                window.clearInterval(clock)
                resolve('one')
            }
            console.log(1)
        }, 10)
    })
    return promise
}

writeCode('', res).then(() => {
    fn2()
    return fn3(res)
}).then((data) => {
    console.log('HI')
    writeCode(data,htmlCode)
})