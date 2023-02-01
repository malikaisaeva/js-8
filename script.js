let cars = [28000, 5000, 11000, 12000, 16000, 8000, 7000, 22000, 45000, 80000, 55000, 20000] 
let from = prompt('from')
let upto = prompt('upto')

cars.sort((a,b) => a - b)
let sum = cars.filter(item => item >= from && item <=upto) 


console.log(sum)
if (cars) {

    let first = prompt('вы купите машину или нет?') 
    if (first) {
        console.log('далее');
    } else {
        console.log('если не купите то идите обратно')
    }

    let second = prompt('какую машину вы выбрали?')
    if (second) {
        console.log('поздравляю с новой машиной')
    } else {
        console.log('сначала выберите машину');
    }

} else {
    console.log('удачи')
}



