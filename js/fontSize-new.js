/**
 *   Created by Administrator on 2017/5/10.
 */
window.addEventListener('orientationchange', setRem);
window.addEventListener('resize', setRem);
setRem();
function setRem() {
    var html = document.querySelector('html');
    var width = html.getBoundingClientRect().width;
    html.style.fontSize = width / 15 + 'px';
};