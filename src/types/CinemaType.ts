export type CinemaType = {
    Cells: {
        ChiefName: string
        ChiefOrg: string
        ChiefPosition: string
        ClarificationOfWorkingHours: string
        CommonName: string
        Email: [{ 
            Email: string
        }]
        Fax: Array<any>
        FullName: string
        NumberOfHalls: number
        ObjectAddress: [{
            AdmArea: string,
            District: string,
            PostalCode: string,
            Address: string,
            Availability: Array<any>
        }]
        OrgInfo: { 
            ChiefName: string
            ChiefPhone: [{ChiefPhone: string}], 
            ChiefPosition: string
            FullName: string, 
            INN: string, 
            KPP: string, 
            OGRN: string, 
            LegalAddress: string
        }
        PublicPhone: [{ PublicPhone: string }]
        ShortName: string
        TotalSeatsAmount: number
        WebSite: string
        WorkingHours: [{
            DayWeek: string,
            WorkHours: string
        }]
        geoData: {
            coordinates: number[][]
            type: string
        }
        global_id: number
    }
    Number: number
    global_id: number
}

//module.exports = {CinemaType}
