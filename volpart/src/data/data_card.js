export const data_main = [
    {
        title_flat: "Квартира-студия",
        description_flat: "2500руб/сут",
        imageUrls_flat: Object.values(
            import.meta.glob('../image/img/apartment_1/*.{png,jpg,jpeg,svg}', {
                eager: true,
                as: 'url'
            })
        )
    },
    {
        title_flat: "Квартира-студия",
        description_flat: "2500руб/сут",
        imageUrls_flat: Object.values(
            import.meta.glob('../image/img/apartment_2/*.{png,jpg,jpeg,svg}', {
                eager: true,
                as: 'url'
                })
        )
    },
    {
        title_flat: "Квартира-студия",
        description_flat: "2500руб/сут",
        imageUrls_flat: Object.values(
            import.meta.glob('../image/img/apartment_3/*.{png,jpg,jpeg,svg}', {
                eager: true,
                as: 'url'
                })
        )
    },
    {
        title_flat: "Квартира-студия",
        description_flat: "2500руб/сут",
        imageUrls_flat: Object.values(
            import.meta.glob('../image/img/apartment_4/*.{png,jpg,jpeg,svg}', {
                eager: true,
                as: 'url'
                })
        )
    },
]   
export const data_second = [
    {
        title_flat: "Квартира-студия",
        description_flat: "2500руб/сут",
        imageUrls_flat: Object.values(
            import.meta.glob('../image/img/apartment_5/*.{png,jpg,jpeg,svg}', {
                eager: true,
                as: 'url'
                })
        )
    },
]