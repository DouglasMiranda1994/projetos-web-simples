const galleryitems = document.querySelectorAll(".gallery-item");
const lightBox = document.querySelector(".lightbox");
const lightBoxImage = document.querySelector(".lightbox-image");
const lightBoxClose = document.querySelector(".lightbox-close");

galleryitems.forEach((item)=> {
    item.addEventListener("click", ()=> {
        const imagemUrl = item.querySelector(".gallery-image").getAttribute("data-src");
        lightBoxImage.setAttribute("src", imagemUrl);
        lightBox.style.display = "flex";
    })
});

lightBoxClose.addEventListener("click", () =>{
    lightBox.style.display = "none";
})