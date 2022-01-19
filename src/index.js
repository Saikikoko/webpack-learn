import './index.scss'
import './font/iconfont.css'
console.log('111')
// import image from './21135012_p0.jpg'
const alertName = (name) => {
  alert(name)
}

alertName('123')
const ele = document.createElement('div')
ele.innerHTML = `<span class="iconfont icon-aixin">hello</span>`;
document.body.appendChild(ele)

// const img = document.createElement('img')
// img.src = image
// // img.src = './21135012_p0.jpg'
// img.onload = function() {
//   document.body.appendChild(img)
// }