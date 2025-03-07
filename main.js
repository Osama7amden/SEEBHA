// creating variables
let span = document.querySelector('.container .box .screen span');
let add = document.querySelector('.container .box .btn_con :first-child');
let clear = document.querySelector('.container .box .btn_con :last-child');

// adding event listener to the add button

add.addEventListener('click', function() {
    let currentValue = Number(span.innerHTML);
    let result = currentValue + 1;
    span.innerHTML = result;
    return result;
})

clear.addEventListener('click', function() {
    span.innerHTML = 0;
    return 0;
})