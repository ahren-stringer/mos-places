let Displa = require('./Display.ts')
debugger
module.exports = class MainDisplay extends Displa {

    /*
        * Прелоадер
    */

    public static displayLoader(outerSelector: string): void {
        Displa.clearPagePart(outerSelector)
        document.querySelector(outerSelector).insertAdjacentHTML(
            'afterbegin',
            `
            <div class="d-flex justify-content-center align-items-center" style="height:70vh">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
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

        Displa.main.insertAdjacentHTML(
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
                <h1 class="display-4">Добро пожаловать на мой сйт</h1>
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