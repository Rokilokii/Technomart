let writeus_popup = document.querySelector('.writeus-popup-container')
let btn_contact_company = document.querySelector('.btn-to-contact-company')
let writeus_popup_exit = document.querySelector('.writeus-popup-exit')
let location_map_popup = document.querySelector('.location-map-popup')
let location_minimap = document.querySelector('.location-minimap ')
let location_map_exit = document.querySelector('.location-map-exit')

let delivery = document.getElementById('delivery');
let guarantee = document.getElementById('guarantee');
let credit = document.getElementById('credit');

btn_contact_company.addEventListener("click", () => {
    writeus_popup.style.display = "flex"
})

writeus_popup_exit.addEventListener("click", () => {
    writeus_popup.style.display = "none"
})

location_minimap.addEventListener("click", () => {
    location_map_popup.style.display = "block"
})

location_map_exit.addEventListener("click", () => {
    location_map_popup.style.display = "none"
})


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

$("#slider-range").slider({
    range: true,
    orientation: "horizontal",
    min: 0,
    max: 30000,
    values: [0, 30000],
    step: 100,

    slide: function(event, ui) {
        if (ui.values[0] == ui.values[1]) {
            return false;
        }

        $("#min_price").val(ui.values[0]);
        $("#max_price").val(ui.values[1]);
    }
});