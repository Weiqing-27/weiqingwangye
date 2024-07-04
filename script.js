document.getElementById('showMore').addEventListener('click', function() {  
    var moreInfo = document.getElementById('moreInfo');  
    if (moreInfo.style.display === 'none') {  
        moreInfo.style.display = 'block';  
        this.textContent = '隐藏信息';  
    } else {  
        moreInfo.style.display = 'none';  
        this.textContent = '显示更多信息';  
    }  
});