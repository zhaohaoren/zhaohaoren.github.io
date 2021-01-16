if (/mobile/i.test(navigator.userAgent) || /android/i.test(navigator.userAgent)) {
  document.body.classList.add('mobile')
}
// 代码高亮
document.querySelectorAll('pre code').forEach((block) => {
  hljs.highlightBlock(block);
});