const dropdown = document.querySelector('.dropdown')
const toggleButton = document.querySelector('.dropdown-toggle')
const menu = document.querySelector('.dropdown-menu')
const options = document.querySelectorAll('.dropdown-option')
const nextButton = document.querySelector('.next-button')

//토글버튼이 클릭 -> 메뉴를 보인다
//메뉴 max-height:0
//메뉴.show -> 해지

toggleButton.addEventListener('click', function () {
    menu.classList.toggle('show')
})