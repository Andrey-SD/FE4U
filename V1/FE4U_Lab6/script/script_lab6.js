import { formatObject, findObject } from "./script_lab3.js";

const close = (element) => {
    console.log(element);
}
const teachersContainer = document.getElementById('teachers-container');

teachersContainer.addEventListener('click', (event) => {
    const teacherId = event.target.dataset.id;
    const teacher = findObject(formatObject(), 'id', teacherId);
    if (teacher[0]) {
        document.getElementById('t-info-pop-up').classList.add('visible');
        const t = teacher[0];
        const teacherInfoBody = document.getElementById('teacher-info-body');
        teacherInfoBody.innerHTML = `
        <div class="pop-t-info fl">
            <div class="col" style="width: 40%;">
                <img class="pop-t-photo" src="${t.picture_large}" alt="Teacher photo">
            </div>
                <div class="col" style="width: 60%;">
                    <div class="pop-t-detail">
                        <h1 class="pop-t-name">${t.full_name}</h1>
                        <p class="pop-t-subj">${t.course}</p>
                        <ul>
                            <li>${t.country}, ${t.city}</li>
                            <li>${t.age}, ${t.email}</li>
                            <li class="pop-email">${t.email}</li>
                            <li>${t.phone}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p class="about-p" style="margin: 15px 0;">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Rerum,
                neque sint. Quibusdam fuga ut quas quos nobis earum, tempora eum odit! Consequuntur odit accusamus
                sapiente
                perspiciatis reiciendis rerum blanditiis minus!ghfhdgdh</p>
            <a href="#" class="toggle - map">toggle map</a>
            <div id="map" style="height: 280px;"></div>`;

        const map = L.map('map').setView([t.coordinates.latitude, t.coordinates.longitude], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        const marker = L.marker([t.coordinates.latitude, t.coordinates.longitude]).addTo(map);
    }
});
