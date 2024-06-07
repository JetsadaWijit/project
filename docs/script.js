const githubUrl = 'https://github.com';

document.addEventListener('DOMContentLoaded', () => {
    fetch('data/project.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects-container');
            data.forEach(project => {
                if (project.host === 'github') baseUrl = githubUrl;
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');
                projectElement.innerHTML = `
                    <h2>${project.title}</h2>
                    <p><strong>Owner:</strong> ${project.owner}</p>
                    <p><strong>Repository:</strong> <a href="${baseUrl}/${project.owner}/${project.repository}" target="_blank">${project.repository}</a></p>
                `;
                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Error fetching the project data:', error));
});
