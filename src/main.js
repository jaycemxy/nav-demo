//1、初始化数据
var hashA = init()
var keys = hashA['keys']
var hash = hashA['hash']

//2、生成键盘
//遍历 keys， 生成 kbd标签
generateKeyboard(keys, hash)

//3、监听用户动作
listenToUser(hash)

// 4、当输入框聚焦的时候取消事件监听，失焦时候重新监听
blockKeyboardEventsWhenEntering();

// 5、绑定【百度一下】与【谷歌一下】的事件
bindSearchEvent();

// 6、增加用户点击事件
addKeyPressEvent();


//下面是工具函数
function getFromLocalStorage(name) {
return JSON.parse(localStorage.getItem('name') || 'null')
}

function tag(tagName) {
return document.createElement(tagName)
}

function createSpan(textContent) {
var span = tag('span')
span.textContent = textContent
span.className = "text"
return span
}

function createButton(id) {
var button = tag('button')
button.textContent = '编辑'
button.id = id
button.onclick = function (xzkjcnxlkcjlk) {
    // xzkjcnxlkcjlk['target'] 就是用户点击的元素
    var button2 = xzkjcnxlkcjlk['target']
    var img2 = button2.previousSibling
    var key = button2['id'] //q w e r t 
    var x = prompt('给我一个网址') //qq.com
    hash[key] = x //hash 变更
    img2.src = 'http://' + x + '/favicon.ico'
    img2.onerror = function (xxx) {
        // xxx.target.src = './Oval.png'
    }
    localStorage.setItem('zzz', JSON.stringify(hash))
}
return button
}

function createImage(domain) {
var img = tag('img')
if (domain) {
    img.src = 'http://' + domain + '/favicon.ico'
} else {
    // img.src = './Oval.png'
}
img.onerror = function (xxx) {
    // xxx.target.src = './Oval.png'
}
return img
}




function init() {
var keys = {
    '0': {
        0: 'q',
        1: 'w',
        2: 'e',
        3: 'r',
        4: 't',
        5: 'y',
        6: 'u',
        7: 'i',
        8: 'o',
        9: 'p',
        length: 10
    },
    '1': {
        0: 'a',
        1: 's',
        2: 'd',
        3: 'f',
        4: 'g',
        5: 'h',
        6: 'j',
        7: 'k',
        8: 'l',
        length: 9
    },
    '2': {
        0: 'z',
        1: 'x',
        2: 'c',
        3: 'v',
        4: 'b',
        5: 'n',
        6: 'm',
        length: 7
    },
    'length': 3
}
var hash = {
    'q': 'qq.com',
    'w': 'weibo.com',
    'e': 'ele.me',
    'r': 'renren.com',
    't': 'taobao.com',
    'y': 'youtube.com',
    'u': 'uc.com',
    'i': 'iqiyi.com',
    'o': 'opera.com',
    'p': 'undefined',
    'a': 'amazon.cn',
    'b': 'baidu.com',
    'd': 'douban.com',
    'g': 'google.com',
    'j': 'jingdong.com',
    's': 'sohu.com',
    'z': 'zhihu.com',
    'm': 'developer.mozilla.org'
}
//取出 localStorage 中的 zzz 对应的hash
var hashInLocalStorage = getFromLocalStorage('zzz')
if (hashInLocalStorage) {
    hash = hashInLocalStorage
}
return {
    "keys": keys,
    "hash": hash
}
}




function generateKeyboard(keys, hash) {
for (var index = 0; index < keys['length']; index = index + 1) {
    var div = tag('div')
    div.className = 'row'

    main.appendChild(div)

    var row = keys[index] //第一个数组 第二个数组 第三个数组
    for (var index2 = 0; index2 < row['length']; index2 = index2 + 1) {
        var span = createSpan(row[index2])

        var button = createButton(row[index2])

        var img = createImage(hash[row[index2]])

        var kbd = tag('kbd')
        kbd.className = 'key'

        kbd.appendChild(span)
        kbd.appendChild(img)
        kbd.appendChild(button)

        div.appendChild(kbd)
    }
}
}



function listenToUser(hash) {
document.onkeypress = function (xzkjcnxlkcjlk) {
    var key = xzkjcnxlkcjlk['key']
    var website = hash[key]
    console.log(website)
    //location.href = 'http://'+website
    window.open('http://' + website, '_blank')
}
}

function blockKeyboardEventsWhenEntering() {
const input = document.querySelector('.arguments');
input.addEventListener('focus', (e) => {
    document.onkeypress = null;
});
input.addEventListener('blur', (e) => {
    listenToUser(hash);
})
}

function bindSearchEvent() {
const baidu = document.querySelector('.baidu');
const google = document.querySelector('.google');
const input = document.querySelector('.arguments');

baidu.addEventListener('click', (e) => {
    if (!input.value) {
        alert('请输入内容后点击');
        return;
    }

    window.open(`https://www.baidu.com/s?wd=${input.value}`, '_blank')
});

google.addEventListener('click', (e) => {
    if (!input.value) {
        alert('请输入内容后点击');
        return;
    }

    window.open(`https://www.google.com/search?q=${input.value}`, '_blank')
})
}

function addKeyPressEvent() {}

