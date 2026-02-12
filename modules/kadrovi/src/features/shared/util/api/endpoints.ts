export const API_ENDPOINTS = {
    sifarnici: {
        vera: "/kadrovi/pretraga/vera",
    },
    radnik: {
        list: '/radnik',
        detail: '/radnik/:id',
        create: '/radnik',
        update: '/radnik/:id',
        delete: '/radnik/:id',
    }
} as const;