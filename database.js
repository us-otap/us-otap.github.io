import { getDatabase, ref, set, get, onValue } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';//

export function writeUserData(db, userId, firstName, lastName, email, volunteerHours) {
    set(ref(db, 'users/' + userId), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      volunteerHours: volunteerHours
    });
}

export async function writeContactFormData(db, firstName, lastName, email, formType, description) {
    const entryName = `${firstName}_${lastName}`;
    let entryRef = ref(db, 'forms/' + entryName);
    let snapshot = await get(entryRef);

    if (snapshot.exists()) {
        let counter = 2;
        while (snapshot.exists()) {
            const newEntryName = `${entryName}_${counter}`;
            entryRef = ref(db, 'forms/' + newEntryName);
            counter++;
            snapshot = await get(entryRef);
        }
    }

    set(entryRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        formType: formType,
        formDescription: description
    });
}

export function updateDashboard(db, userID) {
    const data = ref(db, 'users/' + userID);
    onValue(data, (snapshot) => {
        const userData = snapshot.val();
        console.log(userData);
        console.log(userID);
        const volunteerHours = userData["volunteerHours"];
        document.getElementById('user-name').innerHTML = `
            <p>Your Dashboard - ${userData["firstName"]} ${userData["lastName"]}</p>`;
        document.getElementById('user-email').innerHTML = `
            <p>${userData["email"]}</p>`;
        document.getElementById('volunteer-hours').innerHTML = `
            <p>Volunteer Hours: ${volunteerHours} hours</p>`;
    });
}
//https://firebase.google.com/docs/web/learn-more#libraries-cdn