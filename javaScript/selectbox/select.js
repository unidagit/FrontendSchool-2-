        const btn = document.querySelector('.btn-select');
        const list = document.querySelector(".list-member");

        //버튼을 클릭했을때 on이 붙였다 떨어졌다
        btn.addEventListener('click', () => {
            btn.classList.toggle('on');
        });

        //이벤트 발생
        list.addEventListener('click', (event) => {
            if (event.target.nodeName === 'BUTTON') {
                btn.textContent = event.target.textContent;
                btn.classList.remove('on');
            }
        });



//자바스크립트에서 요소 만들어서 만들기
const btn = document.querySelector('.btn-select');
const list = document.querySelector(".list-member");

const arrLang = ['Python', 'Java', 'JavaScript', 'C#', 'C/C++'];

arrLang.forEach((item) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');

    btn.setAttribute('type', 'button');
    // <button type="button"></button>
    btn.textContent = item;
    list.appendChild(li);
    li.appendChild(btn);

});

btn.addEventListener('click', () => {
    btn.classList.toggle('on');
});

list.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
        btn.textContent = event.target.textContent;
        btn.classList.remove('on');
    }
});




