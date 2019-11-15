function CountingSpan() {
    let span = document.getElementById('c-counter__number');
    span.innerHTML = +span.innerHTML + 1;
}



function stopwatch() {
    setInterval(function () {
        CountingSpan();
    }, 1000);
}
window.onload = stopwatch;




function experienceCounter() {
    let span = document.querySelector('.counter_1'),
        span_2 = document.querySelector('.counter_2'),
        idInterval_1,
        ai,
        idInterval_2;

    function experienceCounterIterate() {
        span.innerHTML = +span.innerHTML + 1;

        function projectsCounterIterate() {
            span_2.innerHTML = +span_2.innerHTML + 1;
            if (span_2.innerHTML == 99) {
                clearInterval(idInterval_2);
            }
        }

        if (span.innerHTML == 27) {
            idInterval_2 = setInterval(projectsCounterIterate, 40);
            clearInterval(idInterval_1);

        }
    }
    idInterval_1 = setInterval(experienceCounterIterate, 80);
};




function counting() {
    if (window.pageYOffset > 3100) {
        experienceCounter();
        window.removeEventListener('scroll', counting);
    }
}
window.addEventListener('scroll', counting);