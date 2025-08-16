document.addEventListener('DOMContentLoaded', () => {
    // Handle Login Form Submission
    const loginForm = document.querySelector('.login-form form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Login form submitted');
        // Add login logic here
    });

    // Handle Register Form Submission
    const registerForm = document.querySelector('.register-form form');
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Register form submitted');
        // Add registration logic here
    });

    // Handle AI Prediction Form Submission
    const aiPredictionForm = document.querySelector('#ai-prediction form');
    aiPredictionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('AI Prediction form submitted');
        // Add AI prediction logic here
    });

    // Handle Appointment Booking Form Submission
    const appointmentForm = document.querySelector('#appointments form');
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Appointment booking form submitted');
        // Add appointment booking logic here
    });

    // Handle Mental Health Chat Form Submission
    const chatForm = document.querySelector('#mental-health form');
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Chat message sent');
        // Add chat logic here
    });

    // Handle Genetic Analysis Form Submission
    const geneticForm = document.querySelector('#genetic-analysis form');
    geneticForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Genetic analysis form submitted');
        // Add genetic analysis logic here
    });
});