export const API_ENDPOINTS = {
    sifarnici: {
        vera: "/kadrovi/pretraga/vera",
        staz: "/kadrovi/pretraga/staz",
        sprema: "/kadrovi/pretraga/sprema",
        opstina: "/kadrovi/pretraga/opstina",
        nacija: "/kadrovi/pretraga/nacija",
        kategorija: "/kadrovi/pretraga/kategorija",
        slava: "/kadrovi/pretraga/slava",
    },
    radnik: {
        list: '/radnik',
        detail: '/radnik/:id',
        create: '/radnik',
        update: '/radnik/:id',
        delete: '/radnik/:id',
    }
} as const;