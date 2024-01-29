export function debounce(callback, wait) {
    let timeoutId = null;
  
    return (...args) => {
      window.clearTimeout(timeoutId);
  
      timeoutId = window.setTimeout(() => {
        callback.apply(null, args);
      }, wait);
    };
}

export function downloadByUrl (url, filename) {
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

/**
 * @param {number} number Bytes to convert
 * @returns {string} Converted bytes
 * */
 export const ConvertBytes = (bytes) => {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (!bytes) return "n/a";
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1000)));
  return `${(bytes / Math.pow(1000, i)).toFixed(1)} ${sizes[i]}`;
 };
 
 /**
  * @param {number} number Number to convert
  * @returns {string} Converted number
  * */
 export const ConvertNumber = (number) => {
  return Intl.NumberFormat("en-US", {
   notation: "compact",
   style: "decimal",
   maximumFractionDigits: 2,
  }).format(number);
 };

 export const copyText = async text => {
  const readOnlyTextArea = document.createElement('textarea');
  readOnlyTextArea.value = text;

  readOnlyTextArea.setAttribute('readonly', true);
  readOnlyTextArea.style.position = 'absolute';
  readOnlyTextArea.style.left = '-9001px';

  document.body.appendChild(readOnlyTextArea);

  readOnlyTextArea.select();
  document.execCommand('copy');

  document.body.removeChild(readOnlyTextArea);
};