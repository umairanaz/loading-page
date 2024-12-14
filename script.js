let count = 0;
let counter = setInterval(function () {
    count++;
    document.querySelector(".counter").textContent = count.toString();
    if (count === 100) {
        clearInterval(counter);
        $('.counter').addClass('hide')
        $('.container').addClass('active')
    }
}, 10);
