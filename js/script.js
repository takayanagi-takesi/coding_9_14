

// const modalWindow = () => {
//   const open = document.getElementById('open');
//   const close = document.getElementById('close');
//   const modal = document.getElementById('modal');
//   const mask = document.getElementById('mask');

//   open.addEventListener('click', function () {
//     modal.classList.remove('hidden');
//     mask.classList.remove('hidden');
//   });
//   close.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     mask.classList.add('hidden');
//   });
//   mask.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     mask.classList.add('hidden');
//   });
// }




// スムーススクロール関数
const smoothScroll = () => {
  /* works_list aを除くa="#"をセレクト　*/
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]:not(.works_lists a)');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault(); // デフォルトのイベントをキャンセル
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const header = document.getElementById('header');
      const h = header.offsetHeight; // fixedヘッダーの高さを取得
      const target = rect + offset - h; // offsetTop()　fiexdヘッダー以外は、-hはなし

      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }
};//ここまでスムーススクロール関数






// スクロールでPageTopボタン表示関数
const pageTopVisi = () => {
  const pageTopBtn = document.getElementById('page_top');
  window.addEventListener("scroll", () => {
    const y = window.pageYOffset;
    if ( y > 100){
      setTimeout(function(){
        pageTopBtn.style.opacity = 1;
      }, 100);
    } else {
      setTimeout(function(){
        pageTopBtn.style.opacity = 0;
      }, 100);
    }
  });
};// ここまでスクロールでPageTopボタン表示関数








///////////////////////////////// 
// DOMツリーの構築が完了したら実行(ready状態)
///////////////////////////////// 

$(function(){
  //htmlロード時の処理
  // #page-topをクリックした際の設定
  $('#page_top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
  });
});






///////////////////////////////// 
// 画像、動画などの関連データの全ての読み込みが完了したら実行
///////////////////////////////// 

$(window).on('load',function(){

  $(".loading").delay(5800).fadeOut('slow');//ロゴを5.8秒でフェードアウトする記述
  // smoothScroll();
  pageTopVisi();

});// ここまで






///////////////////////////////// 
//  スクロールをした場合に実行
/////////////////////////////////

$(window).scroll(function () {
  // smoothScroll();
  pageTopVisi();
});






/* hamburger menu  */
$('.hamburger_menu').on('click', function() {
  $(this).toggleClass('active');
  $('#gnav').toggleClass('open');
  return false;
});
$('#gnav a').on('click', function() {
  $('.hamburger_menu').removeClass('active');
  $('#gnav').removeClass('open');
});