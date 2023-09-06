const loginLink = document.getElementById('loginLink');

auth.onAuthStateChanged(user => {
    if (user) {
        loginLink.textContent = 'Profile';
        loginLink.href = 'profile.html';
    } else {
        loginLink.textContent = 'Register/Login';
        loginLink.href = 'login2.html';
    }
});