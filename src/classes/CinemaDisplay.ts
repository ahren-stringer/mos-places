import yaMap from '../services/yaMap';
import { CinemaType } from '../types/CinemaType'
import Display from './Display'
import MainDisplay from './MainDisplay';

export default class CinemaDisplay extends Display {

    /*
        * Список
    */

    public static dispalyList(outer: HTMLElement, list: Array<CinemaType>): void {

        
        // let listElem = document.querySelector('.palces__list'); <!--li class="place__item list-group-item" data-id="${item.Number}">${item.Cells.CommonName}</li-->
        this.clearPagePart(outer)

        list.forEach((item) => {
            outer.insertAdjacentHTML(
                'afterbegin',
                `
               <li class="sidemenu__item"><span class="sidemenu__item-link" data-id="${item.Number}"> ${item.Cells.CommonName}</span> </li>
                 `
            );
        })

        outer.addEventListener('click', function (event) {
            let target = event.target as HTMLElement

            if (target.tagName != 'LI') return;

            if (outer.querySelector('.active')) outer.querySelector('.active').classList.remove('active')

            target.classList.add('active')
        })

        let submenu_items = document.querySelectorAll('.sidemenu__list--submenu .sidemenu__item-link')
        console.log(submenu_items)
        for (var i = 0; i < submenu_items.length; i++) {
            submenu_items[i].addEventListener('click', MainDisplay.close);
        }

    }

    /*
        * Пункт информации
    */

    private static dispalyInfoProperty(propTitle: string, propValue: string | number): void {
        document.querySelector('.main-content').insertAdjacentHTML(
            'beforeend',
            `
            <div class="mb-4">
                <div class="prop-title text-secondary">
                    ${propTitle}
                </div>
                <div>
                    ${propValue}
                </div>   
            </div>`
        )
    }

    /*
        * Карта
    */

    private static dispalyMap(coord: Array<number>): void {
        document.querySelector('.main-content').insertAdjacentHTML(
            'beforeend',
            `
            <div id="map" class="mb-5" style="width: 100%; height: 400px"></div>
            `
        )
        yaMap(coord)
    }
    /*
        * Информационная страница
    */

    print(cinema: CinemaType): void {
        CinemaDisplay.clearPagePart('.main-content')
        CinemaDisplay.dispalyInfoProperty('', cinema.Cells.CommonName)
        CinemaDisplay.dispalyInfoProperty('Адрес:', cinema.Cells.ObjectAddress[0].Address)
        CinemaDisplay.dispalyInfoProperty('Телефон:', cinema.Cells.PublicPhone[0].PublicPhone)
        CinemaDisplay.dispalyInfoProperty('Адрес электронной почты:', cinema.Cells.Email[0].Email)
        CinemaDisplay.dispalyInfoProperty('График работы: ', '10:00-22:00 ежедневно')
        CinemaDisplay.dispalyInfoProperty('Сайт: ', cinema.Cells.WebSite)
        CinemaDisplay.dispalyInfoProperty('Количество залов: ', cinema.Cells.NumberOfHalls)
        CinemaDisplay.dispalyInfoProperty('Количество мест:  ', cinema.Cells.TotalSeatsAmount)
        CinemaDisplay.dispalyMap(cinema.Cells.geoData.coordinates[0])

    }

}