$(function () {

    // $('.start__text-container--showFirst div:eq(0)').show(80, function () {
    //     $(this).next().show(80, arguments.callee);
    // });
    //
    // setTimeout(() => $('.start__text-container--showSecond div:eq(0)').show(40, function () {
    //     $(this).next().show(40, arguments.callee);
    // }), 2000)



    const showFirst = document.querySelectorAll('.showFirst')
    const showSecond = document.querySelectorAll('.showSecond')

    const timer = ms => new Promise(res => setTimeout(res, ms))

    async function first () {
        for (let i = 0; i < showFirst.length; i++) {
            showFirst[i].style.display = "block"
            await timer(80);
        }
    }
    first()

    async function second () {
        for (let i = 0; i < showSecond.length; i++) {
            showSecond[i].style.display = "block"
            await timer(60);
        }
    }
    setTimeout(() => {
        second ()
    }, 1800)


    const slides = document.querySelectorAll('.shop__categories')

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('shop__categories--active')
        })

        function clearActiveClasses() {
            slides.forEach((slide) => {
                slide.classList.remove('shop__categories--active')
            })
        }
    }

})