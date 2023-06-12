import { CinemaType } from './types/CinemaType'
import MainDisplay from './classes/MainDisplay'
import Cinema from "./classes/Cinema";
import CinemaDisplay from './classes/CinemaDisplay'

async function init() {
    try {
        MainDisplay.displayLoader('.main-row')
        Cinema.getAll()
            // .finally(() =>
            //     MainDisplay.displayLoader('.main-row')
            // )
            .then((data: Array<CinemaType>) => {
                MainDisplay.displayTemplate()
                CinemaDisplay.dispalyList(data)
                MainDisplay.dispalyJumbotron()

                document.querySelector('.list-group').addEventListener('click', function (event: MouseEvent) {

                    MainDisplay.displayLoader('.main-content')

                    let target = event.target as HTMLElement;
                    if (target.tagName != 'LI') return

                    Cinema.getOne(+target.dataset.id)
                        .then((cinema: Array<CinemaType>) => {
                            CinemaDisplay.dispalyInfoPage(cinema[0])
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
            .catch(() => {
                MainDisplay.displayError(
                    '.main-row',
                    'Ошибка загрузки данных',
                    'Иногда, портал открытых данных Москвы не выслает данные',
                    'Обновите страницу'
                )
            })
    } catch (e) {
        console.log(e)
    }
}

init()
