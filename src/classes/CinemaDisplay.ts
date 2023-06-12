import yaMap from '../services/yaMap';
import {CinemaType} from '../types/CinemaType'
import Display from './Display'

export default class CinemaDisplay extends Display {

    /*
        * Список
    */

    public static dispalyList(list: Array<CinemaType>): void {

        let listElem = document.querySelector('.list-group');

        list.forEach((item) => {
            listElem.insertAdjacentHTML(
                'afterbegin',
                `
               <li class="list-group-item" data-id="${item.Number}">${item.Cells.CommonName}</li>
                 `
            );
        })

        listElem.addEventListener('click', function(event) {
            let target = event.target as HTMLElement
          
            if (target.tagName != 'LI') return; 
          
            if (listElem.querySelector('.active')) listElem.querySelector('.active').classList.remove('active')

            target.classList.add('active')
        })
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
            <div id="map" style="width: 100%; height: 400px"></div>
            `
        )
        yaMap(coord)
    }
    /*
        * Информационная страница
    */

    public static dispalyInfoPage(cinema: CinemaType): void {
        this.clearPagePart('.main-content')
        this.dispalyInfoProperty('', cinema.Cells.CommonName)
        this.dispalyInfoProperty('Адрес:', cinema.Cells.ObjectAddress[0].Address)
        this.dispalyInfoProperty('Телефон:', cinema.Cells.PublicPhone[0].PublicPhone)
        this.dispalyInfoProperty('Адрес электронной почты:', cinema.Cells.Email[0].Email)
        this.dispalyInfoProperty('График работы: ', '10:00-22:00 ежедневно')
        this.dispalyInfoProperty('Сайт: ', cinema.Cells.WebSite)
        this.dispalyInfoProperty('Количество залов: ', cinema.Cells.NumberOfHalls)
        this.dispalyInfoProperty('Количество мест:  ', cinema.Cells.TotalSeatsAmount)
        this.dispalyMap(cinema.Cells.geoData.coordinates[0])
    }

}