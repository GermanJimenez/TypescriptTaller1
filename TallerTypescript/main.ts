
import { Course } from './course.js';

import { dataCourses } from './dataCourses.js';

let coursesTbody: HTMLElement = document.getElementById('courses')!;
const totalCreditElm: HTMLElement = document.getElementById("total-Seassons")!;



renderCoursesInTable(dataCourses);


totalCreditElm.innerHTML = `${getTotalSeassons(dataCourses)}`

function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.id}</td>
                           <td>${course.name}</td>
                           <td>${course.channel}</td>
                           <td>${course.seassons}</td>`;
    coursesTbody.appendChild(trElement);
  });
}
 

 
function getTotalSeassons(courses: Course[]): number {
  let totalSeassons: number = 0;
  courses.forEach((course) => totalSeassons = totalSeassons + course.seassons);
  return totalSeassons;
}