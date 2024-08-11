var tl = gsap.timeline({scrollTrigger:{
    trigger: ".main",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#B",{
    top: "115%",
    right: "45%"
}, 'M','W')

tl.to("#M",{
    top:"140%",
    left: "40.5%"
}, 'M','W')

tl.to("#W",{
    top:"165%",
    left: "39.5%"
}, 'M','W')

tl.from("#BMW-img",{
    rotate: "-360deg",
    top: "110%",
    left: "-100%",
}, 'M','W')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".models",
    start: "0% 95%",
    end: "70% 100%",
    scrub: true,
    // markers: true,
}})

tl2.from("#bmw-logo",{
    rotate: "-110deg",
    top: "250%",
    right: "-110%",
})
tl2.from("#car-1",{
    top: "250%",
    left: "-90%",
})




// ------------------------- Java Script ----------------------------

let information = document.querySelector(".information")
let car1 = document.querySelector("#car-1")
let carSelectImg_1 = document.querySelector("#car-select-img-1");
let carSelectImg_2 = document.querySelector("#car-select-img-2");
let carSelectImg_3 = document.querySelector("#car-select-img-3");
let carSelectImg_4 = document.querySelector("#car-select-img-4");



carSelectImg_1.addEventListener("click", function() {
    car1.src = "https://www.bmw.in/content/dam/bmw/common/all-models/m-series/m2-coupe/2022/Navigation/bmw-m-series-m2-coupe-lci-modelfinder.png"
    information.children[0].lastElementChild.innerHTML = "M2 Competition"
    information.children[1].lastElementChild.innerHTML = "405 hp"
    information.children[2].lastElementChild.innerHTML = "3.0 L"
    information.children[3].lastElementChild.innerHTML = "1575 KG"
    information.children[4].lastElementChild.innerHTML = "550 Nm"
    information.children[5].lastElementChild.innerHTML = "250 KM/H"
    information.children[6].lastElementChild.innerHTML = "4.2S"
});


carSelectImg_2.addEventListener("click", function() {
    car1.src = "https://www.bmw.co.uk/content/dam/bmw/marketGB/bmw_co_uk/bmw-cars/8-series/coupe/2022/navigation/bmw-8series-coupe-modellfinder.png"
    information.children[0].lastElementChild.innerHTML = "M3 (G80)"
    information.children[1].lastElementChild.innerHTML = "473 hp"
    information.children[2].lastElementChild.innerHTML = "3.0 L"
    information.children[3].lastElementChild.innerHTML = "1805 KG"
    information.children[4].lastElementChild.innerHTML = "550 Nm"
    information.children[5].lastElementChild.innerHTML = "250 KM/H"
    information.children[6].lastElementChild.innerHTML = "4.2S"
});


carSelectImg_3.addEventListener("click", function() {
    car1.src = "https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/i-series/i4/2021/bmw-i4-edrive-40-modelfinder-890x501.png"
    information.children[0].lastElementChild.innerHTML = "M4 (G82)"
    information.children[1].lastElementChild.innerHTML = "473 hp"
    information.children[2].lastElementChild.innerHTML = "3.0 L"
    information.children[3].lastElementChild.innerHTML = "1725 KG"
    information.children[4].lastElementChild.innerHTML = "550 Nm"
    information.children[5].lastElementChild.innerHTML = "250 KM/H"
    information.children[6].lastElementChild.innerHTML = "4.1S"
});

carSelectImg_4.addEventListener("click", function() {
    car1.src = "https://www.bmw-me.com/content/dam/bmw/common/all-models/m-series/xm/2023/navigation/bmw_x-series_xm_modelcard_50.png"
    information.children[0].lastElementChild.innerHTML = "M5 (F90)"
    information.children[1].lastElementChild.innerHTML = "600 hp"
    information.children[2].lastElementChild.innerHTML = "4.4 L"
    information.children[3].lastElementChild.innerHTML = "1945 KG"
    information.children[4].lastElementChild.innerHTML = "750 Nm"
    information.children[5].lastElementChild.innerHTML = "250 KM/H"
    information.children[6].lastElementChild.innerHTML = "3.4S"
});
    