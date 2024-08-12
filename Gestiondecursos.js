document.addEventListener('DOMContentLoaded', () => {
    const coursesSection = document.getElementById('coursesSection');
    const courseInput = document.getElementById('courseInput');
    const imageInput = document.getElementById('imageInput');
    const addBtn = document.getElementById('addBtn');
    const saveBtn = document.getElementById('saveBtn');
    
    let courses = JSON.parse(localStorage.getItem('courses')) || []; 

    function renderCourses() {
        coursesSection.innerHTML = '';
        courses.forEach((course, index) => {
            const courseDiv = document.createElement('div');
            courseDiv.className = `C${index + 1}`;
            courseDiv.innerHTML = `
                <img src="${course.image}" class="PC1">
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
        const newImage = prompt('Ingrese la nueva URL de la imagen:', courses[index].image);
        if (newName !== null && newHours !== null && newImage !== null) {
            courses[index] = { name: newName, hours: newHours, image: newImage };
            localStorage.setItem('courses', JSON.stringify(courses));
            renderCourses();
        }
    };

    window.deleteCourse = function(index) {
        if (confirm('¿Está seguro de que desea eliminar este curso?')) {
            courses.splice(index, 1);
            localStorage.setItem('courses', JSON.stringify(courses));
            renderCourses();
        }
    };

    addBtn.addEventListener('click', () => {
        const courseName = courseInput.value.trim();
        const courseHours = prompt('Ingrese el número de horas del curso:');
        const imageFile = imageInput.files[0];
        if (courseName && courseHours && imageFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageUrl = e.target.result;
                courses.push({ name: courseName, hours: courseHours, image: imageUrl });
                localStorage.setItem('courses', JSON.stringify(courses));
                courseInput.value = '';
                imageInput.value = '';
                renderCourses();
            };
            reader.readAsDataURL(imageFile);
        }
    });

    saveBtn.addEventListener('click', () => {
        alert('Cursos guardados.');
    });

    renderCourses();
});