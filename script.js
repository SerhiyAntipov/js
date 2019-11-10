// map array
let array4 = [1, 24, 20, 21, 2, 36, 33, 3, 30];
let newArray4 = array4.map(function (data, i, object) {
    return data * 3;
})

// filter array
let newArray5 = array4.filter(function (data, i, object) {
    if ((data % 2) == 0) return true
})

// split -- string to array
let string = 'hello,my,name,alla'

// join -- array to string
array4 = [1, 24, 20, 21, 2, 36, 33, 3, 30];

// stringify --
let string2 = JSON.stringify([1, 3, 6, 9])

// parse --
console.log(JSON.parse(string2))

// sort ======================
// 1 --
let array1 = [1, 38, 35, 2, 29, 26, 45, 3, 18];
array1.sort(compare);

function compare(a, b) {
    return a - b;
}

// 2 --
let array2 = [1, 24, 20, 21, 2, 36, 33, 3, 30];
array2.sort((a, b) => a - b);

// 3 --
let array3 = [{
        name: 'Alex',
        price: 1500
    },
    {
        name: 'Bob',
        price: 900
    },
    {
        name: 'Jain',
        price: 1300
    }
];
array3.sort((a, b) => a.price - b.price);

// 4 sort reverse --
array4 = [1, 24, 20, 21, 2, 36, 33, 3, 30];
array4.sort((a, b) => a - b).reverse();

// push add last element
array4.push(27);

// pop del last element
array4.pop();

// shift del 0 element 
array4.shift()

// unshift add 0 element 
array4.unshift(0)

// splice element--
array4.splice(3, 2)

// splice element & add data--
array4.splice(3, 2, 'add-data')

// for(let i = 0; i < array1.length; i++)
let array5 = [1, 4, 7, 78, 90, 34, 45];
for (let i = 0; i < array5.length; i++) {
    // console.log(array5[i])
}

// while
array5 = [1, 4, 7, 78, 90, 34, 45];
let p = 0;
while (p < array5.length) {
    // console.log(array5[p])
    p++
}

// for (let key in newArray4) 
let array6 = {
    'data': 123,
    'asd': 345,
    'fgh jk': 67879,
    'ghjkg': 'ghgjh',
}
for (let key in array6) {
    // console.log(key)
    // console.log(array6[key])
}

// for (let item of array7) nodelist HTML collection !!!
array7 = [1, 4, 7, 78, 90, 34, 45];
for (let item of array7) {
    // console.log(item)
}


// forEach --
array7.forEach(function (data, i, object) {
    // console.log(data)
})

// set ----
let defaultCity = ['lviv']
let dataCitySet = new Set(defaultCity);
let nameCity = 'Brody'
dataCitySet.add(nameCity.toLowerCase())
// console.log(dataCitySet)
// console.log(Array.from(dataCitySet))


// xhttpRequesrt =========================
xhttpRequesrtWeather()

function xhttpRequesrtWeather() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response);
            console.log(response)
        }
    };
    xhttp.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=lviv&appid=0bf66710f118cd8dbd8d4055849f69aa`, true);
    xhttp.send();
};

// fetch  ====================
fetchWeatherHour()

function fetchWeatherHour() {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=702550&appid=0bf66710f118cd8dbd8d4055849f69aa`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            weatherHour = response;
            console.log(weatherHour)
        })
        .catch(function () {
            console.log('the database did not load')
        });
}