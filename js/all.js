function fnToWork() {
  window.scrollTo({
    top: 630,
    behavior: "smooth"
  });
}

function fnToAbout() {
  window.scrollTo({
    top: 2200, behavior: "smooth"
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
  } else {
    document.getElementById('goTop').style.opacity = '0';
  }
})
