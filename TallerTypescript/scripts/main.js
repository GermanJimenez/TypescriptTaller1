import { dataCourses } from './dataCourses.js';
var coursesTbody = document.getElementById('courses');
var totalCreditElm = document.getElementById("total-Seassons");
var seriesImage = document.getElementById('series-image');
var nombre = document.getElementById('nombre');
var description = document.getElementById('description');
var seriesLink = document.getElementById('link');

renderCoursesInTable(dataCourses);

totalCreditElm.innerHTML = "" + getTotalSeassons(dataCourses);

function renderCoursesInTable(courses) {
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        var sub = course.name
        trElement.innerHTML = "<td>" + course.id + "</td>" +"<td><a href=\"#\">" + sub   + "</a> </td>\n                           <td>" + course.channel + "</td>\n                           <td>" + course.seassons + "</td>";
        
        trElement.addEventListener('click',function() {
            console.log("serie ", course);
            seriesImage.src = course.photo;
            nombre.textContent = course.name;
            description.textContent = course.description;
            seriesLink.href = course.page;
            console.log("imagen :", seriesImage.src);
            console.log("Descripción:", description.textContent);
        });
        coursesTbody.appendChild(trElement);

    });
}

function getTotalSeassons(courses) {
    var totalSeassons = 0;
    var totalShow = 0;
    courses.forEach(function (course) { 
        return totalSeassons = totalSeassons + course.seassons,
        totalShow = totalShow + 1;
     });

    return totalSeassons/totalShow;
}


