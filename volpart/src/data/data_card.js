export const data_main = [
    {
        title_flat: "Квартира-студия",
        description_flat: "Address",
        imageUrls_flat: Object.values(
            import.meta.glob('../image/img/apartment_1/*.{png,jpg,jpeg,svg}', {
                eager: true,
                as: 'url'
            })
        )
    },
    {
        title_flat: "Квартира-студия_2",
        description_flat: "Address_2",
        imageUrls_flat: Object.values(
            import.meta.glob('../image/img/apartment_2/*.{png,jpg,jpeg,svg}', {
                eager: true,
                as: 'url'
                })
        )
    },
    {
        title_flat: "Квартира-студия_3",
        description_flat: "Address_3",
        imageUrls_flat: Object.values(
            import.meta.glob('../image/img/apartment_3/*.{png,jpg,jpeg,svg}', {
                eager: true,
                as: 'url'
                })
        )
    },
    {
        title_flat: "Квартира-студия_4",
        description_flat: "Address_4",
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
        title_flat: "Квартира-студия_4",
        description_flat: "Address_4",
        imageUrls_flat: Object.values(
            import.meta.glob('../image/img/apartment_5/*.{png,jpg,jpeg,svg}', {
                eager: true,
                as: 'url'
                })
        )
    }
]