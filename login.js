document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Replace this URL with your actual login API endpoint
        const loginUrl = 'https://example.com/api/login'; 

        try {
            const response = await fetch(loginUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const result = await response.json();
                // Handle successful login (e.g., redirect to dashboard)
                window.location.href = 'dashboard.html'; // Change to your dashboard page
            } else {
                const error = await response.json();
                // Handle login error (e.g., show error message)
                alert(`Login failed: ${error.message}`);
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login. Please try again.');
        }
    });
});
