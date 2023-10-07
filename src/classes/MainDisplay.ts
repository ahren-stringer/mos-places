import Display from './Display'

const ELEMENTS_SELECTOR = {
    sidebar: '[data-sidebar]',
    sidebarOpen: '[data-sidebar-open]',
    sidebarClose: '[data-sidebar-close]',
    blure: '[data-page-blure]',
    page: '[data-page]',
};


export default class MainDisplay extends Display {

    /*
        * Прелоадер
    */

    public static displayLoader(outer: string | HTMLElement): void {

        if (typeof outer == 'string') {
            this.clearPagePart(outer)

            document.querySelector(outer).insertAdjacentHTML(
                'afterbegin',
                `
                <div class="preloader d-flex justify-content-center align-items-center" style="padding: 25px 0;">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                 `
            );
        } else {
            this.clearPagePart(outer)

            outer.insertAdjacentHTML(
                'afterbegin',
                `
                <div class="preloader d-flex justify-content-center align-items-center" style="padding: 25px 0;">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                 `
            );
        }

    }

    /*
    * Ошибка
    */

    public static displayError(outerSelector: string, errorTitle: string, errorMessage?: string, errorAdvice?: string): void {
        this.clearPagePart(outerSelector)
        document.querySelector(outerSelector).insertAdjacentHTML(
            'afterbegin',
            `
            <div class="d-flex justify-content-center align-items-center" style="height:70vh">
                <div class="alert text-center w-100" role="alert">
                    <h3 class="alert-heading text-danger mb-4">
                        ${errorTitle}
                    </h3>
                    <p>
                        ${errorMessage}
                    </p>
                    <hr>
                    <p class="mb-0">
                        ${errorAdvice}
                    </p>
                </div>
            </div>
             `
        );
    }

    /*
        * Шаблон !!!
    */

    print(): void {

        MainDisplay.clearPagePart('.main-row')
        Display.main.insertAdjacentHTML(
            'afterbegin',
            `
            <div class="col-xl-3 col-lg-0 aside">

            <div class="sidemenu">

            <div class="sidemenu__page-blure" data-page-blure>
                <div class="sidemenu__page-blure-overlay"></div>
                <div class="sidemenu__page-blure-effect">
                    <div class="sidemenu__page-blure-effect-layer"></div>
                </div>
            </div>

            <div class="sidemenu__wrapper" data-sidebar>

                <div class="sidemenu__title">
                    <div class="sidemenu__title-text">
                        Список мест
                    </div>
                    <div class="sidemenu__close-btn" data-sidebar-close>
                        <!-- <svg class="icon sidemenu__close-btn-img">
                            <use xlink:href="./public/images/icons/sprite.svg#icon-close"></use>
                        </svg> -->
                        X
                    </div>
                </div>

                <nav class="sidemenu__nav">
                    <ul class="sidemenu__list">
                       
                    </ul>
                </nav>

            </div>

        </div>

            </div>


            <div class="col-xl-9 col-lg-12 main-content">
            </div>
             `
        );

        // Мобильное меню

        document.querySelector(ELEMENTS_SELECTOR.sidebarOpen).addEventListener('click', MainDisplay.open);

        document.querySelector(ELEMENTS_SELECTOR.sidebarClose).addEventListener('click', MainDisplay.close);

        document.querySelector(ELEMENTS_SELECTOR.blure).addEventListener('click', MainDisplay.close);

    }

    /*
        * Заглавная страница
    */

    public static dispalyJumbotron(): void {
        document.querySelector('.main-content').insertAdjacentHTML(
            'afterbegin',
            `
                <div class="jumbotron">
                <h1 class="display-4">Добро пожаловать на мой сайт</h1>
                <p class="lead">
                    Здесь представлена информация о всех кинотеатрах и театрах Москвы
                </p>
                <hr class="my-4">
                <p>
                    Выберите нужное вам заведение из списка 
                </p>
              </div> 
                 `
        );
    }

    public static close() {
        document.querySelector(ELEMENTS_SELECTOR.sidebar).classList.remove('sidemenu__wrapper--active')
        document.querySelector(ELEMENTS_SELECTOR.blure).classList.remove('sidemenu__page-blure--active')
        document.querySelector(ELEMENTS_SELECTOR.page).classList.remove('page--not-scrolable')
    }

    public static open() {
        document.querySelector(ELEMENTS_SELECTOR.sidebar).classList.add('sidemenu__wrapper--active')
        document.querySelector(ELEMENTS_SELECTOR.blure).classList.add('sidemenu__page-blure--active')
        document.querySelector(ELEMENTS_SELECTOR.page).classList.add('page--not-scrolable')
    }

}