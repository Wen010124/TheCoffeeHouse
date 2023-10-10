// const listImages = document.querySelector('list-images')
// // console.log(listImages)
// const imgs = document.getElementsByClassName('img')
// const length = imgs.length
// let current = 0
// // 4s chuyển 1 lần
// setInterval(() => {
//     if (current == length - 1) {
//         current = 0
//         let width = imgs[0].offsetwidth
//         listImages.style.transform = `translateX(0px)`
//     } else {
//         current++
//         let width = imgs[0].offsetwidth
//         // console.log(width)
//         // xét về bên trái nên âm
//         listImages.style.transform = `translateX(${width * -1 * current}px)`
//     }
// }, 4000)
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("item-image");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Thay đổi hình ảnh sau mỗi 4 giây
}