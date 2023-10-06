import { CinemaType } from './types/CinemaType'
import MainDisplay from './classes/MainDisplay'
import Cinema from "./classes/Cinema";
import CinemaDisplay from './classes/CinemaDisplay'
import CatagoriesDisplay from './classes/CategoriesDisplay';

async function init() {
    try {
        MainDisplay.displayLoader('.main-row')

        let MD = new MainDisplay();
        let CD = new CatagoriesDisplay();

        MD.print()
        CD.print()
        MainDisplay.dispalyJumbotron()

        // Cinema.getAll(495)
        //     // .finally(() =>
        //     //     MainDisplay.displayLoader('.main-row')
        //     // )
        //     .then((data: Array<CinemaType>) => {
        //         MainDisplay.displayTemplate()
        //         CinemaDisplay.dispalyList(data)
        //         MainDisplay.dispalyJumbotron()

        //         document.querySelector('.list-group').addEventListener('click', function (event: MouseEvent) {

        //             MainDisplay.displayLoader('.main-content')

        //             let target = event.target as HTMLElement;
        //             if (target.tagName != 'LI') return

        //             Cinema.getOne(+target.dataset.id)
        //                 .then((cinema: Array<CinemaType>) => {
        //                     CinemaDisplay.dispalyInfoPage(cinema[0])
        //                 })
        //                 .catch(() => {
        //                     MainDisplay.displayError(
        //                         '.main-content',
        //                         'Ошибка загрузки данных',
        //                         'Иногда, портал открытых данных Москвы не выслает данные',
        //                         'Выберите место* еще раз'
        //                     )
        //                 })
        //         })

        //         console.log(data)
        //     })
        //     .catch(() => {
        //         MainDisplay.displayError(
        //             '.main-row',
        //             'Ошибка загрузки данных',
        //             'Иногда, портал открытых данных Москвы не выслает данные',
        //             'Обновите страницу'
        //         )
        //     })
    } catch (e) {
        console.log(e)
    }
}

init()

// abstract class Figure {
//     abstract getArea(): void
// }
// class Rectangle extends Figure{
     
//     constructor(public width: number, public height: number){ 
//         super();
//     }
     
//     getArea(): void{
//         let square = this.width * this.height;
//         console.log("area =", square);
//     }
// }
 
// let someFigure: Figure = new Rectangle(20, 30);
// console.log(someFigure)
// // someFigure.getArea(); 