$(function () {

    // СТРАНИЦА "РАБОТЫ"
    $('.portfolio__text').on('click', function () {
        // ПРОВЕРКА. ЕСЛИ В ДАННЫЙ МОМЕНТ ОТКРЫТА СТРАНИЦА "ОБО МНЕ" ТО ВМЕСТО "РАБОТЫ" БУДЕТ КНОПКА "НАЗАД", КОТОРАЯ ВЕРНЕТ В ГЛАВНОЕ МЕНЮ.
        if ($('.about').hasClass('about__active')) {
            //$('.container-content').addClass('animation-out');
            $('.cube').addClass('cube--active')
            setTimeout(() => $('.about').removeAttr('id'), 400)
            setTimeout(() => $('.about__content').remove(), 1700)
            $('.about').removeClass('about__active')
            $('.about__content').removeClass('about__content--active')
            $('.portfolio__text').removeClass('visible')
            $('.about__text').addClass('visible')
            setTimeout(() => $('.portfolio__text').addClass('visible').text('РАБОТЫ'), 800)
            // ИНАЧЕ ОТКРЫВАЕТСЯ СТРАНИЦА "РАБОТЫ", КНОПКА "ОБО МНЕ" ЗАМЕНЯТСЯ НА "НАЗАД"
        } else {
            $('.about__text').removeClass('visible')
            $('.portfolio__text').removeClass('visible')
            setTimeout(() => $('.about__text').addClass('visible').text('НАЗАД'), 800)

            $('.portfolio').attr('id', 'portfolio__active').addClass('portfolio__active')
            $('.cube').removeClass('cube--active')
            // .delay(5800).queue(function () {$('.preview-site').addClass('preview-site--open-addScroll').clearQueue()
            $('.portfolio__active').prepend(`
                <div class="portfolio__cards" id="scroll_container">
                    <div class="cards">
                        <div class="cards__item" id="site1" style="background-image: url(images/1.webp); background-size: cover; background-position: center">
                            <div class="cards__item-box">
                                <img class="cards__item-img" src="images/2.webp" alt="image">
                                <h2 class="cards__item-text">Forest Plaza</h2>
                            </div>
                        </div>
                        <div class="cards__item" id="site2" style="background-image: url(images/3.webp); background-size: cover; background-position: center">
                            <div class="cards__item-box">
                                <img class="cards__item-img" src="images/4.webp" alt="image">
                                <h2 class="cards__item-text">VANOVA | SUPER</h2>
                            </div>
                        </div>
                        <div class="cards__item" id="site3" style="background-image: url(images/5.webp); background-size: cover; background-position: center">
                            <div class="cards__item-box">
                                <img class="cards__item-img" src="images/6.webp" alt="image">
                                <h2 class="cards__item-text">Fanova Candles</h2>
                            </div>
                        </div>
                        <div class="cards__item" id="site4" style="background-image: url(images/7.webp); background-size: cover; background-position: center">
                            <div class="cards__item-box">
                                <img class="cards__item-img" src="images/8.webp" alt="image">
                                <h2 class="cards__item-text">EASE</h2>
                            </div>
                        </div>
                    </div>
                </div>
            `)
        }
    });

    // СТРАНИЦА ОБО МНЕ
    $('.about__text').on('click', function () {
        // ПРОВЕРКА. ЕСЛИ В ДАННЫЙ МОМЕНТ ОТКРЫТА СТРАНИЦА "РАБОТЫ" ТО ВМЕСТО "ОБО МНЕ" БУДЕТ КНОПКА "НАЗАД", КОТОРАЯ ВЕРНЕТ В ГЛАВНОЕ МЕНЮ.
        if ($('.portfolio').hasClass('portfolio__active')) {
            $('.portfolio__text').addClass('visible');
            $('.portfolio__cards').addClass('animation-out');
            $('.cube').addClass('cube--active')
            setTimeout(() => $('.portfolio').removeAttr('id'), 400);
            setTimeout(() => $('.portfolio__cards').remove(), 1700);
            $('.portfolio').removeClass('portfolio__active')
            $('.about__text').removeClass('visible')
            setTimeout(() => $('.about__text').addClass('visible').text('ОБО МНЕ'), 800);
            // ИНАЧЕ ОТКРЫВАЕТСЯ СТРАНИЦА "ОБО МНЕ", КНОПКА "РАБОТЫ" ЗАМЕНЯЕТСЯ НА "НАЗАД"
        } else {
            $('.portfolio__text').removeClass('visible')
            $('.about__text').removeClass('visible')
            setTimeout(() => $('.portfolio__text').addClass('visible').text('НАЗАД'), 800);
            $('.about').attr('id', 'about__active').addClass('about__active').removeClass('')
            $('.cube').removeClass('cube--active')

            $('.about__active').prepend(`
                <div class="about__content">
                    <section class="hello">              
                        <div class="about__wrap">
                            <div class="hello__inner">
                                <div class="hello__textbox">
                                    <h2 class="hello__title">Привет</h2>
                                    <h2 class="hello__subtitle">Я Front-End</h2>
                                    <h2 class="hello__subtitle">Разработчик</h2>
                                </div>
                                <ul class="social">                                                                                          
                                    <li class="social__img"><a href="https://t.me/COLDF1RE" class=""><img src="./images/telegram.webp" alt="" class=""></a></li>
                                    <!--<li class="social__img"><a href="https://www.instagram.com/coldfire0" class=""><img src="./images/instagram.webp" alt="" class=""></a></li>-->
                                    <li class="social__img"><a href="https://github.com/COLDF1RE" class=""><img src="./images/github.webp" alt="" class=""></a></li>
                                    <li class="social__img"><a href="mailto:v.boiarkin.gmail.com"><img src="./images/mail.webp" alt="" class=""></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section class="info">
                        <div class="about__wrap">
                            <div class="info__textbox">
                                <h2 class="info__title">Обо мне</h2>
                                <p class="info__text">Меня зовут Владимир. Я начинаю свой путь во front-end разработке / верстке сайтов. 
                                Проживаю в Санкт-Петербурге, но готов рассмотреть переезд в случае интересного предложения.
                                </p>
                                <p class="info__text">Как и для любого творческого человека мне важно реализовать свой потенциал, при 
                                этом помня о первостепенной задаче – наиболее полно удовлетворить запрос клиента. Я уверен, 
                                что именно в балансе между двумя этими составляющими кроется секрет создания удобного, эффективного и 
                                запоминающегося интерфейса.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section class="skills">
                        <div class="about__wrap">
                            <div class="skills__inner">
                                <div class="skills__textbox">
                                    <h2 class="skills__title">Гибкие навыки</h2>
                                    <ul class="skills__text">
                                        <li>◌ Коммуникабельность</li>
                                        <li>◌ Стрессоустойчивость</li>
                                        <li>◌ Высокий уровень самоорганизованности</li>
                                        <li>◌ Нацелен на долгосрочную перспективу</li>
                                        <li>◌ Готов и рад обучаться</li>
                                        <li>◌ Легко адаптируюсь к изменениям</li> 
                                        <li>◌ Усерден и внимателен к деталям</li> 
                                        <li>◌ Открыт для конструктивной критики</li>                             
                                    </ul>
                                </div>
                                <div class="skills__textbox">
                                    <h2 class="skills__title">Технические навыки</h2>
                                    <ul class="skills__text">
                                        <li>◌ Создание эскизов, каркасов, прототипов</li>
                                        <li>◌ Редактирование фотографий и видео</li>
                                        <li>◌ Звукозапись и сэмплирование</li>
                                    </ul>
                                </div>
                                <div class="skills__textbox">
                                    <h2 class="skills__title">Применяемый стек</h2>
                                    <ul class="skills__text">
                                        <li>◌ HTML</li>
                                        <li>◌ CSS, CSS3</li>
                                        <li>◌ SCSS</li>                                    
                                        <li>◌ BEM</li>                                    
                                        <li>◌ Gulp</li>                                    
                                        <li>◌ jQuery</li>                                    
                                        <li>◌ JavaScript</li>
                                        <li>◌ React</li>
                                        <li>◌ MobX</li>
                                        <li>◌ Vue</li>
                                        <li>◌ Vuex</li>
                                        <li>◌ Git, github</li>
                                    </ul>
                                </div>
                                <div class="skills__textbox">
                                    <h2 class="skills__title">Программное обеспечение</h2>
                                    <ul class="skills__text">
                                        <li>◌ Adobe Photoshop</li>
                                        <li>◌ Adobe Lightroom</li>
                                        <li>◌ Figma</li>
                                        <li>◌ CorelDRAW</li>
                                        <li>◌ FileZilla</li>
                                        <li>◌ Ableton Live</li>
                                        <li>◌ VSCode</li>
                                        <li>◌ Webstorm</li>
                                        <li>◌ GitCra</li>
                                        <li>◌ Webstorm</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="hobby">
                        <div class="about__wrap">
                            <div class="hobby__inner">
                                <div class="hobby__textbox">
                                    <div class="hobby__title">Вещи, которые я люблю</div>
                                    <ul class="hobby__text">
                                        <li>◌ Путешествия, приключения и изучение новых культур</li>
                                        <li>◌ Активное времяпрепровождение на свежем воздухе</li>
                                        <li>◌ Играть на гитаре и писать музыку</li>
                                        <li>◌ Фантастическую литературу</li>
                                        <li>◌ Фотографировать</li>
                                    </ul>
                                </div>
                                <div class="hobby__textbox">
                                    <div class="hobby__title">Слабости</div>
                                    <ul class="hobby__text">                                                                                                      
                                        <li>◌ Публичные выступления или презентации перед большой группой людей</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="hobby__photo">
                                <img class="hobby__photo-img" src="./images/hobby-1.webp" alt="">
                                <img class="hobby__photo-img" src="./images/hobby-2.webp" alt="">
                                <img class="hobby__photo-img" src="./images/hobby-3.webp" alt="">
                                <img class="hobby__photo-img" src="./images/hobby-4.webp" alt="">
                                <img class="hobby__photo-img" src="./images/hobby-6.webp" alt="">
                            </div>                
                        </div>
                    </section>
                    <div class="contacts">
                        <div class="about__wrap">                  
                            <div class="contacts__inner">
                                <div class="contacts__textbox">
                                    <h2 class="contacts__title">Контакты</h2>
                                    <p class="contacts__text">                              
                                        С нетерпением жду Ваших предложений!
                                    </p>
                                    <ul class="contacts__text">
                                        <li><a class="" href=""></a>+7 (952) 352-43-17</li>
                                        <li><a class="" href="mailto:v.boiarkin.gmail.com">v.boiarkin.gmail.com</a></li>
                                        <li><a class="" href="https://t.me/COLDF1RE">Telegram</a></li>
                                        <li><a class="" href="https://www.instagram.com/coldfire0/">Instagram</a></li>
                                        <li><a class="" href="https://github.com/COLDF1RE">GitHub</a></li>                                     
                                    </ul>
                                </div>
<!--                                <form class="form">-->
<!--                                    <input type="hidden" name="project_name" value="Site Name">-->
<!--                                    <input type="hidden" name="admin_email" value="admin@mail.com">-->
<!--                                    <input type="hidden" name="form_subject" value="Form Subject">-->

<!--                                    <input class="form__input" type="text" name="Name" placeholder="Имя..." required><br>-->
<!--                                    <input class="form__input" type="text" name="E-mail" placeholder="E-mail..." required><br>-->
<!--                                    <input class="form__input" type="text" name="Phone" placeholder="Номер телефона..."><br>-->
<!--                                    <textarea class="form__input message"  name="Message"-->
<!--                                    placeholder="Сообщение для отправки..."></textarea><br>-->
<!--                                    <button class="form__button">Отправить</button>-->
<!--                                </form>-->
                            </div>
                        </div>
                    </div>
                </div>
            `)
            setTimeout(() => $('.about__content').addClass('about__content--active'), 1400);
        }
    });

    // ПОРТФОЛИО КАРТОЧКИ
    // ЭФФЕКТЫ ОТКРЫТИЯ КАРТОЧКИ
    $('body').on('click', '.cards__item ', function () {
        $('.preview-site').addClass('preview-site--open').removeClass('preview-site--close').delay(4300).queue(function () {
            $('.preview-site').addClass('preview-site--open-addScroll').clearQueue()
        });

        // ДОБАВЛЯЕТ ПРЕВЬЮ САЙТА ПО ИНДЕКСУ КАРТОЧКИ
        let i = $('.cards__item').index(this);
        $('.preview-site').prepend(`
            <div class="preview-site__main" style="background-image: url(images/site${i}-1.webp)">
                <button id="up" class="preview-site__x"></button>
                <a href="${href(i)}" class="preview-site__link">ОТКРЫТЬ САЙТ</a>
                <div class="preview-site__pages">
                    <img class="preview-site__pages-img" src="images/site${i}-2.webp">
                    <img class="preview-site__pages-img" src="images/site${i}-3.webp">
                    <img class="preview-site__pages-img" src="images/site${i}-4.webp">
                    <img class="preview-site__pages-img" src="images/site${i}-5.webp">
                    <img class="preview-site__pages-img" src="images/site${i}-6.webp">
                    <img class="preview-site__pages-img" src="images/site${i}-7.webp">
                    <img class="preview-site__pages-img" src="images/site${i}-8.webp" onerror="this.style.display='none'">
                    <a href="#up" class="preview-site__up"><img src="images/up.webp" alt="up"></a>                                      
                </div>
            </div>
            <h2 class="preview-site__title">${titleText(i)}<br><span>${subtitleText(i)}</span></h2>                                                             
        `);

        //НАЗВАНИЕ САЙТА ПО ИНДЕКСУ КАРТОЧКИ
        function titleText(i) {
            switch (i) {
                case 0: return "Forest Plaza"
                case 1: return "VANOVA | SUPER"
                case 2: return "Fanova Candles"
                case 3: return "Ease"
                case 4: return "Coming soon"
                default: return "Nothing"
            }
        }

        // ОПИСАНИЕ САЙТА ПО ИНДЕКСУ КАРТОЧКИ
        function subtitleText(i) {
            switch (i) {
                case 0: return "Разработка сайта аренды коттеджей на HTML/SCSS/jQuery"
                case 1: return "Разработка сайта модной одежды на HTML/CSS/JavaScript"
                case 2: return "Разработка сайта ароматических свечей на HTML/SCSS/jQuery"
                case 3: return "Разработка сайта фитнес-приложения на HTML/SCSS/jQuery"
                case 4: return "Разработка сайта  на HTML/CSS/JavaScript/jQuery/React"
                default: return "Разработка сайта  на HTML/CSS/JavaScript/jQuery/React"
            }
        }

        // АДРЕС САЙТА ПО ИНДЕКСУ КАРТОЧКИ
        function href(i) {
            switch (i) {
                case 0: return "http://boiarkin.ffox.site/forest_plaza/"
                case 1: return "http://boiarkin.ffox.site/vanova_super/"
                case 2: return "http://boiarkin.ffox.site/fanova_candles/"
                case 3: return "http://boiarkin.ffox.site/ease/"
                case 4: return "#"
                default: return "#"
            }
        }

        // ЗАКРЫВАЕТ ПРЕВЬЮ САЙТА И УДАЛЯЕТ ЕГО ДОМ ЭЛЕМЕНТЫ
        $('.preview-site__x').on('click', function () {
            $('.preview-site').removeClass('preview-site--open').removeClass('preview-site--open-addScroll').addClass('preview-site--close')

            setTimeout(() => {
                $('.preview-site').children().remove()
            }, 1500)
        })


        $('.preview-site__x').on('click', block)
    });

    // Предотвращает одновременный запуск нескольких страниц/анимаций
    function block() {
        document.body.style.pointerEvents = "none"
        setTimeout(() => document.body.style.pointerEvents = "auto", 1500)
    }

    $('.portfolio__text').on('click', block)
    $('.about__text').on('click', block)
    $('body').on('click', '.cards__item ', block)
})


//ГОРИЗОНТАЛЬНЫЙ СКРОЛЛ
document.addEventListener('wheel', (e) => {
    document.getElementById('scroll_container').scrollLeft += e.deltaY;
})



