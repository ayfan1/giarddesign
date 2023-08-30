//Popup galaria
const thumbnails = document.querySelectorAll(".thumbnail");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const popupImg = document.querySelector(".popup__img");
const arrowLeft = document.querySelector(".popup__arrow--left");
const arrowRight = document.querySelector(".popup__arrow--right");

let currentImgIndex;

// Button show more & Heddin & Expand

const btnShowMore = document.getElementById('btn-show-more')
const hidden = document.getElementById('hidden')
const expand = document.getElementById('expand')

// Search Bar & Toggle
const toggleSearch = document.getElementById('toggle-search');
const searchBar = document.getElementById('search-bar');


toggleSearch.addEventListener('click', () => {
    console.log('click')
    searchBar.classList.toggle('d-none')


}
)



const showNextImg = () => {
    if (currentImgIndex === thumbnails.length - 1) {
        currentImgIndex = 0;
    } else {
        currentImgIndex++;
    }
    popupImg.src = thumbnails[currentImgIndex].src;
};

const showPreviousImg = () => {
    if (currentImgIndex === 0) {
        currentImgIndex = thumbnails.length - 1;
    } else {
        currentImgIndex--;
    }
    popupImg.src = thumbnails[currentImgIndex].src;
};

const closePopup = () => {
    popup.classList.add("fade-out");
    setTimeout(() => {
        popup.classList.add("hidden");
        popup.classList.remove("fade-out");
        thumbnails.forEach((element) => {
            element.setAttribute("tabindex", 1);
        });
    }, 300);
};

thumbnails.forEach((thumbnail, index) => {
    const showPopup = (e) => {
        popup.classList.remove("hidden");
        popupImg.src = e.target.src;
        currentImgIndex = index;
        thumbnails.forEach((element) => {
            element.setAttribute("tabindex", -1);
        });
    };

    thumbnail.addEventListener("click", showPopup);

    thumbnail.addEventListener("keydown", (e) => {
        if (e.code === "Enter" || e.keyCode === 13) {
            showPopup(e);
        }
    });
});

popupClose.addEventListener("click", closePopup);

arrowRight.addEventListener("click", showNextImg);

arrowLeft.addEventListener("click", showPreviousImg);

document.addEventListener("keydown", (e) => {
    if (!popup.classList.contains("hidden")) {
        if (e.code === "ArrowRight" || e.keyCode === 39) {
            showNextImg();
        }

        if (e.code === "ArrowLeft" || e.keyCode === 37) {
            showPreviousImg();
        }

        if (e.code === "Escape" || e.keyCode === 27) {
            closePopup();
        }
    }
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        closePopup();
    }
});


btnShowMore.addEventListener('click', () => {
    hidden.classList.remove('hidden')
    setTimeout(() => {
        expand.classList.remove('expand')
        btnShowMore.classList.remove('btn-show-more')
    }, 500)
})



