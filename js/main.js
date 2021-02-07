let bars = document.querySelectorAll('.statis__content-bar'),
    burgerMenu = document.querySelector('.burger_menu');
    burgerMenuList = document.querySelector('.burger_menu-list'),
    spanDate = document.querySelectorAll('.date');

for(let i = 0; i < bars.length; i++){
    bars[i].style = `width: ${90 + i * 5}%;`;
}

burgerMenu.addEventListener('click', function () {
    burgerMenuList.classList.toggle('visibility');
})


let time = new Date(), day = time.getDate(), month = time.getMonth(), year = time.getFullYear();
monthes = {0 : 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun', 6: 'Jul', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec'};

let literalMonth;

for(let key in monthes){
    if(month == key){
        literalMonth = monthes[key];
     }
}

for(let i = 0; i < spanDate.length; i++){
    currentDate = day.toString() + ' ' + literalMonth + ' ' + year.toString();
    spanDate[i].innerHTML = currentDate;
}


console.log(spanDate);
