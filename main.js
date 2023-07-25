const menu = [
    {
      id: 1,
      category: "breakfast",
      img: "breakfast1.jpg",
      title: 'breakfast',
    },
    {
      id: 2,
      category: "lunch",
      img: "lunch1.jpg",
      title: 'lunch',
    },
    {
      id: 3,
      category: "shakes",
      img: "shake1.jpg",
      title: 'shake',
    },
    {
      id: 4,
      category: "breakfast",
      img: "breakfast2.jpg",
      title: 'breakfast',
    },
    {
      id: 5,
      category: "lunch",
      img: "lunch2.jpg",
      title: 'lunch',
    },
    {
      id: 6,
      category: "shakes",
      img: "shake2.jpg",
      title: 'shake',
    },
    {
      id: 7,
      category: "breakfast",
      img: "breakfast3.jpg",
      title: 'breakfast',
    },
    {
      id: 8,
      category: "lunch",
      img: "lunch3.jpeg",
      title: 'lunch',
    },
    {
      id: 9,
      category: "shakes",
      img: "shake3.jpg",
      title: 'shake',
    },
];



const main = document.querySelector('.main');
const breakfast = document.getElementById('breakfast');
const lunch = document.getElementById('lunch');
const shakes = document.getElementById('shake');
const all = document.getElementById('all');
const search = document.getElementById('search');
const btn = document.getElementById('search-btn');
const select = document.getElementById('select');

window.addEventListener('DOMContentLoaded', function() {
    let displayMenu = menu.map((item) => {
        return `
        <ul class="list">
                <li class="item">
                    <img src="${item.img}" alt="">
                </li>
                <li>
                    <p>${item.title}</p>                
                </li>
            </ul>
        `
    })
    displayMenu = displayMenu.join(" ")
    main.innerHTML = displayMenu;
})

breakfast.addEventListener('click', () => {
    let displayMenu = menu.map((item) => {
        if(item.category === 'breakfast'){
            return `
            <ul class="list">
                    <li class="item">
                        <img src="${item.img}" alt="">
                    </li>
                    <li>
                        <p>${item.title}</p>                
                    </li>
                </ul>
            `
        }
    })
    displayMenu = displayMenu.join(" ")
    main.innerHTML = displayMenu;
})

lunch.addEventListener('click', () => {
    let displayMenu = menu.map((item) => {
        if(item.category === 'lunch'){
            return `
            <ul class="list">
                    <li class="item">
                        <img src="${item.img}" alt="">
                    </li>
                    <li>
                        <p>${item.title}</p>                
                    </li>
                </ul>
            `
        }
    })
    displayMenu = displayMenu.join(" ")
    main.innerHTML = displayMenu;
})

shakes.addEventListener('click', () => {
    let displayMenu = menu.map((item) => {
        if(item.category === 'shakes'){
            return `
            <ul class="list">
                    <li class="item">
                        <img src="${item.img}" alt="">
                    </li>
                    <li>
                        <p>${item.title}</p>                
                    </li>
                </ul>
            `
        }
    })
    displayMenu = displayMenu.join(" ")
    main.innerHTML = displayMenu;
})

all.addEventListener('click', () => {
    let displayMenu = menu.map((item) => {
        return `
        <ul class="list">
                <li class="item">
                    <img src="${item.img}" alt="">
                </li>
                <li>
                    <p>${item.title}</p>                
                </li>
            </ul>
        `
    })
    displayMenu = displayMenu.join(" ")
    main.innerHTML = displayMenu;
})


select.addEventListener('change', () => {
    let displayMenu = menu.map((item) => {
        if(select.value === item.category) {
            return `
            <ul class="list">
                    <li class="item">
                        <img src="${item.img}" alt="">
                    </li>
                    <li>
                        <p>${item.title}</p>                
                    </li>
                </ul>
            `
        }
    })
    displayMenu = displayMenu.join(" ")
    main.innerHTML = displayMenu;
})


btn.addEventListener('click', () => {
    let displayMenu = menu.map((item) => {
        if(search.value === item.category) {
            return `
            <ul class="list">
                    <li class="item">
                        <img src="${item.img}" alt="">
                    </li>
                    <li>
                        <p>${item.title}</p>                
                    </li>
                </ul>
            `
        }
    })
    displayMenu = displayMenu.join(" ")
    main.innerHTML = displayMenu;
})












// Homework

// const text = document.getElementById('text');
// const inp = document.getElementById('input');
// const btn = document.getElementById('btn');

// btn.addEventListener('click', () => {
//   localStorage.setItem('name', inp.value);
//   console.log(localStorage.getItem('name'));
//   text.textContent = 'Welcome'  +  localStorage.getItem('name');
//   alert('Welcome' + localStorage.getItem('name'));
// })





