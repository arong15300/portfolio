function fnToWork() {
  window.scrollTo({
    top: 700,
    behavior: "smooth"
  });
}

function fnToAbout() {
  window.scrollTo({
    top: 1850, behavior: "smooth"
  });
}

function fnGoTop() {
  window.scrollTo({
    top: 0, behavior: "smooth"
  });
}



$(window).scroll(function () {
  if ($(window).scrollTop() >= $(window).height()) {
    document.getElementById('goTop').style.opacity = '1';
    document.getElementById('goMail').classList.add('move');
  } else {
    document.getElementById('goTop').style.opacity = '0';
    document.getElementById('goMail').classList.remove('move');
  }
})


//iframe Response design
function changeFrameHeight(){
  var ifm= document.getElementById("myiframe"); 
  ifm.height=document.documentElement.clientHeight-100
}

window.onresize=function(){  
   changeFrameHeight();  
} 

//switch language
console.log("Function called");
function switchLanguage(lang) {
  // 根據所選語言構造新 URL
  var currentUrl = window.location.href;
  var newUrl = '';

  if (currentUrl.includes('/en/')) {
    // 如果當前頁面是英語版，則轉換為中文版
    newUrl = currentUrl.replace('/en/', '/' + lang + '/');
  } else if (currentUrl.includes('/zh-TW/')) {
    // 如果當前頁面是中文版，則轉換為英語版
    newUrl = currentUrl.replace('/zh-TW/', '/' + lang + '/');
  } else {
    // 如果當前頁面的語言未知，則假定轉換為英語版
    newUrl = currentUrl.replace('/' + lang + '/', '/en/');
  }

  // 重定向到新 URL
  window.location.href = newUrl;
}
