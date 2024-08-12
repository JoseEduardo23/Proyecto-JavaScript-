document.addEventListener('DOMContentLoaded', () => {
    const coursesSection = document.getElementById('coursesSection');
    const courseInput = document.getElementById('courseInput');
    const addBtn = document.getElementById('addBtn');
    const saveBtn = document.getElementById('saveBtn');
    
    let courses = []; 

    function renderCourses() {
        coursesSection.innerHTML = '';
        courses.forEach((course, index) => {
            const courseDiv = document.createElement('div');
            courseDiv.className = `C${index + 1}`;
            courseDiv.innerHTML = `
                <img src="Estilos/IMG/Java curso.jpeg" class="PC1">
                <p class="cursotxt1">${course.name} HORAS: ${course.hours}H</p>
                <button class="BM1" onclick="editCourse(${index})">Modificar</button>
                <button class="BE1" onclick="deleteCourse(${index})">Eliminar</button>
            `;
            coursesSection.appendChild(courseDiv);
        });
    }

    window.editCourse = function(index) {
        const newName = prompt('Ingrese el nuevo nombre del curso:', courses[index].name);
        const newHours = prompt('Ingrese el nuevo número de horas:', courses[index].hours);
        if (newName !== null && newHours !== null) {
            courses[index] = { name: newName, hours: newHours };
            renderCourses();
        }
    };

    window.deleteCourse = function(index) {
        if (confirm('¿Está seguro de que desea eliminar este curso?')) {
            courses.splice(index, 1);
            renderCourses();
        }
    };

    addBtn.addEventListener('click', () => {
        const courseName = courseInput.value.trim();
        const courseHours = prompt('Ingrese el número de horas del curso:');
        if (courseName && courseHours) {
            courses.push({ name: courseName, hours: courseHours });
            courseInput.value = '';
            renderCourses();
        }
    });
    document.getElementById("edp1").addEventListener("click", function() {
        window.location.href = "EditarPerfil.html"; 
    });

    saveBtn.addEventListener('click', () => {
        alert('Cursos guardados (en este ejemplo, no se realiza ninguna acción).');
    });

    renderCourses();
});