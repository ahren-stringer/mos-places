import { CinemaType } from '../types/CinemaType'
import Cinema from './Cinema';
import CinemaDisplay from './CinemaDisplay';
import Display from './Display'
import MainDisplay from './MainDisplay';

export default class CatagoriesDisplay extends Display {

    /*
        * Список
    */

    print(): void {

        let listElem = document.querySelector('.sidemenu__list');

        // list.forEach((item) => {
        listElem.insertAdjacentHTML(
            'afterbegin',
            `
               <li class="sidemenu__item list-group-item">
                <span class="sidemenu__item-link" data-id="495">
                    Кинотеатры
                </span>
               </li>
               <li class="sidemenu__item list-group-item" >
                <span class="sidemenu__item-link" data-id="531">
                    Театры
                </span>
               </li>
                 `
        );
        // })

        listElem.addEventListener('click', function (event) {

            let target = event.target as HTMLElement;

            if (target.closest(".sidemenu__list--submenu")) return

            console.log(target)

            let li = target.closest('li');

            let submenu: HTMLElement = li.querySelector('.sidemenu__list');

            if (!submenu) {
                submenu = document.createElement('ul');
                submenu.classList.add('sidemenu__list')
                submenu.classList.add('sidemenu__list--submenu')
                li.append(submenu)
            } else {
                submenu.remove()
                return
            }

            MainDisplay.displayLoader(submenu)

            Cinema.getAll(target.dataset.id)
                .then((data: Array<CinemaType>) => {

                    let cat_id = target.dataset.id;

                    CinemaDisplay.dispalyList(submenu, data)

                    submenu.addEventListener('click', function (event: MouseEvent) {

                        // MainDisplay.displayLoader('.main-content')
            
                        let target = event.target as HTMLElement;
                        if (target.tagName != 'SPAN') return
            
                        CinemaDisplay.clearPagePart('.main-content')
                        MainDisplay.displayLoader('.main-content')
            
                        Cinema.getOne(+cat_id,+target.dataset.id)
                            .then((cinema: Array<CinemaType>) => {
                                let CD = new CinemaDisplay()
            
                                CD.print(cinema[0])
                            })
                            .catch(() => {
                                MainDisplay.displayError(
                                    '.main-content',
                                    'Ошибка загрузки данных',
                                    'Иногда, портал открытых данных Москвы не выслает данные',
                                    'Выберите место* еще раз'
                                )
                            })
                    })

                    console.log(data)
                })
                .catch((e) => {
                    console.log(e)
                    MainDisplay.displayError(
                        '.main-row',
                        'Ошибка загрузки данных',
                        'Иногда, портал открытых данных Москвы не выслает данные',
                        'Обновите страницу'
                    )
                })


            if (listElem.querySelector('.active')) listElem.querySelector('.active').classList.remove('active')

            target.classList.add('active')
        })
    }
}