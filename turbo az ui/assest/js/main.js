const chooses = document.querySelectorAll('.heart-empty');
const chooseList = document.querySelector('.choosen');
const postWrapper = document.querySelector('.choosen-products');
const mainSection = document.querySelector('.bottom-main');
const mainPostWrapper = document.querySelector('.main');
console.log(mainSection);
chooses.forEach((choose) => {
    choose.addEventListener('click',function(e){
        e.preventDefault();
        choose.classList.toggle('bi-heart');
        choose.classList.toggle('bi-heart-fill');
        choose.classList.toggle('red');
        const heartA = choose.parentElement;
        const postImg = heartA.previousElementSibling;
        const price = heartA.nextElementSibling;
        const imgWrapper = heartA.parentElement;
        const dataWrapper = imgWrapper.nextElementSibling;
        const carName = dataWrapper.firstElementChild;
        const carData = carName.nextElementSibling;
        const carDate = carData.nextElementSibling;
        const post = imgWrapper.parentElement;
        

        const element = document.createElement('div');
        element.innerHTML = `${post.outerHTML}`
        console.log(element);
        // console.log(element);
        // const elem = document.querySelector(`#${postId}`);
        // const stringEelem = JSON.stringify(elem);
        // console.log(elem);
        // element.innerHTML = `${}`
        // console.log(element);
        postWrapper.appendChild(element);
    })
});
chooseList.addEventListener('click',function(e){
    e.preventDefault();
    mainPostWrapper.classList.toggle('d-none');
    mainSection.classList.toggle('d-none');
})