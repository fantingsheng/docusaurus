export default function debounce(callback, wait) {
    let timeoutId = null;
  
    return (...args) => {
      window.clearTimeout(timeoutId);
  
      timeoutId = window.setTimeout(() => {
        callback.apply(null, args);
      }, wait);
    };
}

export default function downloadByUrl (url, filename) {
    if (!url) throw new Error('当前没有下载链接');
  
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = filename;
    // 使用 target="_blank"时，添加 rel="noopener noreferrer" 堵住钓鱼安全漏洞 防止新页面 window 指向之前的页面
    a.rel = "noopener noreferrer";
    document.body.append(a);
    a.click();
  
    setTimeout(() => {
        a.remove();
    }, 1000);
};
