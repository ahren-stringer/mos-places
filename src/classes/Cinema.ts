export default class Cinema {

    private static url: string = 'https://apidata.mos.ru/v1/datasets/495/rows?api_key=c70b711784b712cbe482f9701909fd97'

    public static getAll(categoryId: number | string): Promise<any> {
        return fetch(`https://apidata.mos.ru/v1/datasets/${categoryId}/rows?api_key=c70b711784b712cbe482f9701909fd97`)
            .then(response => response.json())
    }
    public static getOne(id: number): Promise<any> {
        return fetch(`${Cinema.url}&$skip=${id - 1}&$top=1`)
            .then(response => response.json())

        /*
            Для проверки на ошибку
        */

        // return new Promise(function(resolve, reject) {
        //     setTimeout(() => reject("done!"), 1000);
        //   });

    }
}