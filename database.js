import { getDatabase, ref, set, onValue } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js';

export function writeUserData(db, userId, firstName, lastName, email, volunteerHours) {
    set(ref(db, 'users/' + userId), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      volunteerHours: volunteerHours
    });
}

export function updateDashboard(db, userID) {
    const data = ref(db, 'users/' + userID);
    onValue(data, (snapshot) => {
        const userData = snapshot.val();
        console.log(userData);
        console.log(userID);
        const volunteerHours = userData["volunteerHours"];
        document.getElementById('user-info').innerHTML = `
            <p>Email: ${userData["email"]}!</p>
            <p>Hello ${userData["firstName"]} ${userData["lastName"]}</p>`;
        document.getElementById('volunteer-hours').innerHTML = `
            <p>Volunteer Hours: ${volunteerHours} hours</p>`;
    });
}