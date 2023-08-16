class ServiceData{
    static bookData =  [
        {
            id: 1,
            name: 'HP Pavilion Ryzen 5 Hexa Core 5625U',
            img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/u/b/s/-original-imagp7pfhsmmdawz.jpeg?q=70',
            qty: 9,
        },
        {
            id: 2,
            name: 'HP Pavilion Core i7 12th Gen  14-dv2015TU',
            img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/k/z/2/-original-imagp7pge3agtryz.jpeg?q=70',
            qty: 0,
        },
        {
            id: 3,
            name: 'HP Pavilion AMD Ryzen 5 5600H 15-ec2145AX',
            img: 'https://m.media-amazon.com/images/I/51DmOWr3rnL._AC_UY327_FMwebp_QL65_.jpg',
            qty: 30
        }
    ]

    static getBooksData(){
        return this.bookData
    }
}

export default ServiceData