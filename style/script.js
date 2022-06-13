




let car = [
    {
        name: 'malibu',
        price: 24000 
    },
    {
        name: 'matiz',
        price: 3500 
    },
    {
        name: 'tahoe',
        price: 80000 
    },
    {
        name: 'nexia',
        price: 10000 
    },
    {
        name: 'gentra',
        price: 15000 
    },
    {
        name: 'tracker',
        price: 22000 
    }
]

let open = prompt('Какую машину удалить?').toLowerCase()


car.filter(item => {

    if (open === item.name) {
        let lux = confirm(  item.price )
        if (lux === true) {
            alert('успешно')
        } 
    } 
})