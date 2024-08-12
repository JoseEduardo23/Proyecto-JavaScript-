document.addEventListener('DOMContentLoaded', () => {
    const coursesSection = document.getElementById('coursesSection');

    function renderCourses() {
        const courses = JSON.parse(localStorage.getItem('courses')) || [];
        coursesSection.innerHTML = '';
        courses.forEach((course, index) => {
            const courseDiv = document.createElement('div');
            courseDiv.className = `C${index + 1}`;
            courseDiv.innerHTML = `
                <img src="${course.image}" class="PC1">
                <p class="cursotxt1">${course.name} HORAS: ${course.hours}H</p>
            `;
            coursesSection.appendChild(courseDiv);
        });
    }

    renderCourses();

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const query = searchInput.value.trim().toLowerCase();
            if (query === 'cursos') {
                window.location.href = 'CursosDisp.html';
            } else {
                window.location.href = 'PaginaNoEncontrada.html';
            }
        }
    });
});