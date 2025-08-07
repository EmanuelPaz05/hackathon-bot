// This file contains the JavaScript code for the frontend application.
// It includes functions for handling user interactions and making API calls to the backend.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('data-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            resultDiv.textContent = JSON.stringify(result, null, 2);
        } catch (error) {
            console.error('Error:', error);
            resultDiv.textContent = 'An error occurred. Please try again.';
        }
    });
});