import { randomUserMock, additionalUsers } from './FE4U-Lab3-mock.js';


// TASK1 Lab3



const normalObj = (arr1, arr2) => {
    // Данні з обєкту random-user-mock привести до вигляду: 

    const normalizeObj = (obj) => {
        obj.full_name = `${obj.name.first} ${obj.name.last}`;
        obj.b_date = obj.dob.date;
        obj.b_age = obj.dob.age;
        obj.picture_large = obj.picture.large;
        obj.picture_thumbnail = obj.picture.thumbnail;
        for (const key in obj) {
            if (typeof obj[key] === "object") {
                for (const subKey in obj[key]) {
                    obj[subKey] = obj[key][subKey];
                }
                delete obj[key];
            }
        }
        return obj;
    }

    // додати поля: id, favorite, course, bg_color,note, 

    const addProperty = (obj) => {

        const makeId = (length) => {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            let counter = 0;
            while (counter < length) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                counter += 1;
            }
            return result;
        }

        // список course

        const courses = ['Mathematics', 'Physics', 'English', 'Computer Science', 'Dancing', 'Chess', 'Biology', 'Chemistry',
            'Law', 'Art', 'Medicine', 'Statistics'];

        const randomTo = (max) => {
            const min = 0;
            max++;
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);;
        };

        const newObj = {
            id: makeId(11),
            favorite: null,
            course: courses[randomTo(courses.length - 1)],
            bg_color: `#${randomTo(255).toString(16)}${randomTo(255).toString(16)}${randomTo(255).toString(16)}`,
            note: null
        };

        return Object.assign(obj, newObj);
    };

    // По’єднати два обєкти позбуваючись повторів

    const mergeArr = (arr1, arr2) => {
        arr1.push(arr2);
    }

    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = normalizeObj(arr1[i]);
        arr1[i] = addProperty(arr1[i]);
    }

    mergeArr(arr1, arr2)

    return arr1;
}
console.log(normalObj(randomUserMock, additionalUsers));