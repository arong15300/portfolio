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


