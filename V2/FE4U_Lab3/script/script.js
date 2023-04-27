import { randomUserMock, additionalUsers } from './FE4U-Lab3-mock.js';

// const copyArray = (arr) => {
//     const newArr = [];
//     for (const iterator of arr) {
//         newArr.push(JSON.parse(JSON.stringify(iterator)));
//     }
//     return newArr;
// };

console.log(randomUserMock);

// Завдання 1

const formatObject = (arr1, arr2) => {
    const courses = ['Mathematics', 'Physics', 'English', 'Computer Science', 'Dancing', 'Chess', 'Biology', 'Chemistry',
        'Law', 'Art', 'Medicine', 'Statistics'];

    const randomNumber = (max) => {
        return Math.floor(Math.random() * max + 1);
    }

    const generateRandomColor = () => {
        let color = '#';
        for (let i = 0; i < 2; i++) {
            color = color + randomNumber(255);
        }
        return color;
    }

    const generateId = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(randomNumber(charactersLength));
        }
        return result;
    }

    const normalArray = [];

    arr1.forEach(obj => {

        // Данні з обєкту random-user-mock привести до вигляду:

        const formattedUser = {
            "gender": obj.gender,
            "title": obj.name.title,
            "full_name": `${obj.name.first} ${obj.name.last}`,
            "city": obj.location.city,
            "state": obj.location.state,
            "country": obj.location.country,
            "postcode": obj.location.postcode,
            "coordinates": obj.location.coordinates,
            "timezone": obj.location.timezone,
            "email": obj.email,
            "b_date": obj.dob.date,
            "age": obj.dob.age,
            "phone": obj.phone,
            "picture_large": obj.picture.large,
            "picture_thumbnail": obj.picture.thumbnail
        };

        // До кожного з об’єктів масиву додати поля: id, favorite, course, bg_color, note

        const addField = {
            id: generateId(11),
            favorite: null,
            
            // Значення поля course заповнювати рандомно зі списку: 
            course: courses[randomNumber(courses.length - 1)],
            bg_color: generateRandomColor(),
            note: null
        }

        const newObject = Object.assign(formattedUser, addField);
        normalArray.push(newObject);
    });


    // По’єднати два обєкти в один, позбуваючись повторів

    arr2.forEach(element => {
        const f = normalArray.filter(o => o.full_name == element.full_name);
        if (!f.length) {
            normalArray.push(element);
        }
    });

    return normalArray;
}

const formatedObj = formatObject(randomUserMock, additionalUsers);
console.log(formatedObj);


// Lab3 TASK2 

const validateObject = (obj) => {

    const isUpper = (symbol) => {
        if (symbol === symbol.toUpperCase()) return true;
        else return false;
    }

    const validObject = (valObj) => {
        for (let i = 0; i < valObj.length; i++) {
            if ((typeof (valObj[i].full_name) != 'string') || (!isUpper(valObj[i].full_name[0]))) {
                valObj.splice(i, 1);
                i--;
            } else if (typeof (valObj[i].gender) != 'string' || (!isUpper(valObj[i].gender[0]))) {
                valObj.splice(i, 1);
                i--;
            } else if (typeof (valObj[i].note) != 'string' || (!isUpper(valObj[i].note[0]))) {
                valObj.splice(i, 1);
                i--;
            } else if (typeof (valObj[i].state) != 'string' || (!isUpper(valObj[i].state[0]))) {
                valObj.splice(i, 1);
                i--;
            } else if (typeof (valObj[i].city) != 'string' || (!isUpper(valObj[i].city[0]))) {
                valObj.splice(i, 1);
                i--;
            } else if (typeof (valObj[i].country) != 'string' || (!isUpper(valObj[i].full_name[0]))) {
                valObj.splice(i, 1);
                i--;
            } else if (typeof (valObj[i].age) != 'number') {
                valObj.splice(i, 1);
                i--;
            } else if (!/^\+\d{2}\(\d{3}\)\d{3}\d{2}\d{2}$/.test(valObj[i].phone)) {
                valObj.splice(i, 1);
                i--;
            } else if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(valObj[i].email)) {
                valObj.splice(i, 1);
                i--;
            }
        }
        return valObj;
    }

    return (validObject(obj));
}

const validatedObj = validateObject(copyArray(normalizedObj));
// console.log(validatedObj);


// Lab3 TASK3

const filterArr = (arr, country, age, gender, favorite) => {
    const filtreted = arr.filter((obj) => {
        return obj.country == country &&
            obj.age == age &&
            obj.gender == gender &&
            obj.favorite == favorite;
    });
    return filtreted;
}

const filteredArr = filterArr(copyArray(normalizedObj), 'Germany', 17, 'male', null);
// console.log(filteredArr);


// Lab3 TASK4

const sortArr = (arr, sortParam) => {
    arr.sort((a, b) => {
        const nameA = String(a[sortParam]).toUpperCase(); // ігноруємо малі та великі літери
        const nameB = String(b[sortParam]).toUpperCase(); // ігноруємо малі та великі літери
        if (nameA < nameB) {
            return -1;
        }
        if (nameA >= nameB) {
            return 1;
        }
        return 0;
    });
    return arr;
}

const sortedArr = sortArr(copyArray(normalizedObj), 'b_age');
// console.log(sortedArr);


// Lab3 TASK5

const findObject = (arr, param, val) => {
    const a = arr.find(a => a[param] == val);
    return a;
}

const findedObj = findObject(copyArray(normalizedObj), 'gender', 'male');
// console.log(findedObj);

// Lab3 TASK6

const statArr = (arr, param, val) => {
    const filtreted = arr.filter((obj) => {
        return obj[param] == val;
    });
    return filtreted.length * 100 / arr.length;
}

const statistic = statArr(copyArray(normalizedObj), 'email', 'norbert.weishaupt@example.com');
// console.log(statistic);

