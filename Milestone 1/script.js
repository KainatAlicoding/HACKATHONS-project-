// Get the toggle button and the skills section
var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
// Add event listener to the button
toggleButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
