

let searchForm = document.querySelector('.search-form');



console.log(document)

document.querySelector('#search-btn').onclick = () => {

    
    console.log('hello world')
    searchForm.classList.toggle('active');
}