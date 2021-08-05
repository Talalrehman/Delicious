var nave = document.querySelector(".tgl")
var show = document.querySelector(".gallery-show")
var wrap = document.querySelectorAll(".wrap-img")
var trash = document.querySelector(".fa-times")
var showimg = document.querySelector(".show")

window.addEventListener("scroll", () => {
    nave.classList.toggle("scrollnav", window.scrollY > 20)
})
wrap.forEach((e, i) => {
    e.addEventListener("click", () => {
        show.style.visibility = "visible"
        console.log(e, i)
        showimg.innerHTML = `<img src=${e.src}>`
    })
})
trash.addEventListener("click", () => {
    show.style.visibility = "hidden"
})
let specialData = [{
        id: 1,
        title: 'Architecto ut aperiam autem id',
        para: `Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka
    Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero`,
        img: `specials-1.jpg`
    },
    {
        id: 2,
        title: 'Et blanditiis nemo veritatis excepturi',
        para: `Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka
    Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero`,
        img: `specials-2.jpg`
    },
    {
        id: 3,
        title: 'Impedit facilis occaecati odio neque aperiam sit',
        para: `Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka
    Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero`,
        img: `specials-3.jpg`
    },
    {
        id: 4,
        title: 'Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore',
        para: `Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka
    Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero`,
        img: `specials-4.jpg`
    },
    {
        id: 5,
        title: 'Est eveniet ipsam sindera pad rone matrelat sando reda',
        para: `Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka
    Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero`,
        img: `specials-5.jpg`
    }
]

let specialBtns = document.querySelectorAll('.special-data-link');
console.log(specialBtns);

let specialTxtTemp = '';
let specialImgTemp = '';
specialBtns.forEach((e, ind) => {
    e.addEventListener('click', () => {
        specialData.forEach(data => {
            if (ind + 1 == data.id) {
                specialTxtTemp = `
                <p class="h4 py-2">${data.title}</p>
                <p>${data.para}</p>
            `
                specialImgTemp = `
                <img src="./img/${data.img}" alt="">
            `
            }
        })
        let specialTxt = document.querySelector('.special-txt');
        let specialImg = document.querySelector('.special-img');
        console.log(specialImg);
        specialTxt.innerHTML = specialTxtTemp
        specialImg.innerHTML = specialImgTemp
    })
})