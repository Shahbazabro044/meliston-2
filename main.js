document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;

    // Create resume preview
    const resumeDetails = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h4>Education:</h4>
        <p>${education}</p>
        <h4>Skills:</h4>
        <p>${skills}</p>
        <h4>Work Experience:</h4>
        <p>${experience}</p>
    `;

    // Display the resume preview
    document.getElementById('resume-details').innerHTML = resumeDetails;
    document.getElementById('resume-preview').style.display = 'block';
});
