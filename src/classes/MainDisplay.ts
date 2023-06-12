import Display from './Display'

export default class MainDisplay extends Display {

    /*
        * Прелоадер
    */

    public static displayLoader(outerSelector: string): void {
        this.clearPagePart(outerSelector)
        document.querySelector(outerSelector).insertAdjacentHTML(
            'afterbegin',
            `
            <div class="d-flex justify-content-center align-items-center" style="height:70vh">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading..</span>
                </div>
            </div>
             `
        );
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

    public static displayTemplate(): void {

        this.clearPagePart('.main-row')
        Display.main.insertAdjacentHTML(
            'afterbegin',
            `
            <div class="col-3 aside">
                <ul class="list-group">
                </ul>
            </div>
            <div class="col-9 main-content">
            </div>
             `
        );

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
                    Здесь представлена информация о всех кинотеатрах Москвы
                </p>
                <hr class="my-4">
                <p>
                    Выберите нужный вам кинотеатр из списка 
                </p>
              </div> 
                 `
        );
    }

}