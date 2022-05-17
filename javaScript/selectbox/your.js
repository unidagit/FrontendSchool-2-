const dropdown = document.querySelector('.dropdown');
const toggleButton = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');
const options = document.querySelectorAll('.dropdown-option');
const nextButton = document.querySelector('.next-button');

//메뉴 max-height:0
//메뉴.show -> 해지

//토글버튼이 클릭 -> 메뉴를 보인다
toggleButton.addEventListener('click', function () {
    menu.classList.toggle('show');
})

//토글버튼이벤트 추가
toggleButton.addEventListener('blur', function () {
    menu.classList.toggle('show');
})

//
options.forEach(function (item) {
    item.addEventListener('click', function (e){
        const value = e.currentTarget.textContent.trim();
        console.log(e.currentTarget)
        toggleButton.textContent = value
        toggleButton.classList.add('selected');
        nextButton.removeAttribute('disabled')
    })
})

    