const Cinema = require('./classes/Cinema.ts')
const CinemaDisplay = require('./classes/CinemaDisplay.ts')
const MainDisplay = require('./classes/MainDisplay.ts')

async function init() {
    try {
        MainDisplay.displayLoader('.main-row')
        Cinema.getAll()
            .then((data: Array<typeof CinemaType>) => {
                MainDisplay.displayTemplate()
                CinemaDisplay.dispalyList(data)
                MainDisplay.dispalyJumbotron()


                document.querySelector('.list-group').addEventListener('click', function (event: MouseEvent) {

                    MainDisplay.displayLoader('.main-content')

                    let target = event.target as HTMLElement;
                    if (target.tagName != 'LI') return;

                    Cinema.getOne(+target.dataset.id)
                        .then((cinema: typeof CinemaType) => {
                            CinemaDisplay.dispalyInfoPage(cinema[0])
                        });
                })


                console.log(data)
            })
    } catch (e) {
        console.log(e)
    }
}

init()