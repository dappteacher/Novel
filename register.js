document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');
    const registerStatus = document.getElementById('register-status');

    registerForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();

        // Basic form validation
        if (password !== confirmPassword) {
            registerStatus.textContent = 'Passwords do not match';
            registerStatus.classList.add('text-danger');
            return;
        }

        try {
            // Placeholder for actual registration process
            // This could involve calling an API or saving data to local storage
            const user = {
                email: email,
                password: password, // For real-world apps, never store plain-text passwords
            };

            // Simulate a successful registration
            registerStatus.textContent = 'Registration successful!';
            registerStatus.classList.remove('text-danger');
            registerStatus.classList.add('text-success');

            // You might want to save the user to local storage for this example
            // localStorage.setItem('user', JSON.stringify(user));

            // Redirect to login or dashboard
            setTimeout(() => {
                window.location.href = 'login.html'; // Redirect to login page
            }, 2000);
        } catch (error) {
            registerStatus.textContent = `Error: ${error.message}`;
            registerStatus.classList.add('text-danger');
        }
    });
});
