import { formatObject, findObject } from "./script.js";

// Завдання 1

const buildTeachersList = (teachersList, section) => {
    const tInicial = (inicial) => {
        let str = '';
        const fCh = str.concat(inicial[0]);
        const sCh = inicial[inicial.indexOf(' ') + 1];
        str = str.concat(fCh, '.', sCh);
        return str;
    }

    teachersList.forEach(obj => {
        const tAvatar = (obj.picture_large !== undefined) ? (
            `<img src="${obj.picture_large}" alt="IT">`
        ) : (
            `<h1 class="t-inicial">${tInicial(obj.full_name)}</h1>`
        );

        const tCardHTML = `
        <div class="t-card">
            <div class="t-avatar">
                ${tAvatar}
            </div>
            <h1 class="t-name">${obj.full_name}</h1>
            <p class="t-subject">${obj.course}</p>
            <p class="t-region">${obj.country}</p>
        </div>`;
        section.insertAdjacentHTML('beforeend', tCardHTML);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const teachersContainer = document.getElementById('teachers-container');
    const allTeacher = formatObject();
    buildTeachersList(allTeacher, teachersContainer);
    
    const favoriteTeacherContainer = document.getElementById('favorite-teachers-container');
    const favoriteTeacher = findObject(formatObject(), 'favorite', true);
    buildTeachersList(favoriteTeacher, favoriteTeacherContainer);
});

