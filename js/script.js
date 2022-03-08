

let searchForm = document.querySelector('.search-form');



console.log(document)

document.querySelector('#search-btn').onclick = () => {

    
    console.log('hello world')
    searchForm.classList.toggle('active');
}



let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {

    cart.classList.toggle('active')
}



let loginForm = document.querySelector('.login-form');