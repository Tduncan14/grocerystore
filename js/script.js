

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


document.querySelector('#login-btn').onclick = () => {

    loginForm.classList.toggle('active');
}




let navbar = document.querySelector('.navbar');


document.querySelector('#menu-btn').onclick  = () => {

    navbar.classList.toggle('active');

}



window.onscroll=() => {

    cart.classList.remove('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active')
    loginForm.classList.remove('active');



}