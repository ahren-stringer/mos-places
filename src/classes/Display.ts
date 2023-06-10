module.exports = class Display {

    /*
        * Главная обертка
    */

    protected static main = document.querySelector('.main-row')

    /*
        * Функция отчистки перед отрисовкой
    */

    protected static clearPagePart(partSelector: string): void {
        document.querySelector(partSelector).innerHTML = ''
    }

}