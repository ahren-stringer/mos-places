/*
* Основной функционал рендеринга
*/

import { CinemaType } from "../types/CinemaType"

export default abstract class Display {

    /*
        * Главная обертка
    */

    protected static main = document.querySelector('.main-row')

    /*
        * Функция отчистки перед отрисовкой
    */

    protected static clearPagePart(part: string  | HTMLElement): void {

        if (typeof part =='string'){
            document.querySelector(part).innerHTML = ''
        }else{
            part.innerHTML = ''
        }

    }

    // protected static print(cinema?: CinemaType): void;

}