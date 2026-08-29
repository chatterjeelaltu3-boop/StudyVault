/* =========================================
STUDYVAULT - MAIN JAVASCRIPT
========================================= */

/* =========================================
SIDEBAR
========================================= */

function toggleSidebar() {
const sidebar = document.getElementById("sidebar");

```
sidebar.classList.toggle("open");
```

}

/* =========================================
PAGE NAVIGATION
========================================= */

function showSection(sectionId) {

```
const sections = document.querySelectorAll(".page-section");

sections.forEach(function(section) {
    section.classList.remove("active");
});


const selectedSection = document.getElementById(sectionId);

if (selectedSection) {
    selectedSection.classList.add("active");
}


// Close sidebar after selecting a page
const sidebar = document.getElementById("sidebar");

if (window.innerWidth <= 700) {
    sidebar.classList.remove("open");
}
```

}

/* =========================================
WELCOME MESSAGE
========================================= */

function updateGreeting() {

```
const hour = new Date().getHours();

let greeting = "Good Evening";

if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
}

else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
}

else if (hour >= 17 && hour < 22) {
    greeting = "Good Evening";
}

else {
    greeting = "Good Night";
}


const greetingElement = document.getElementById("greeting");

if (greetingElement) {
    greetingElement.textContent = greeting;
}
```

}

/* =========================================
PROFILE DATA
========================================= */

let profileData = {

```
name: "Ayush Chatterjee",

roll: "",

department: "",

college: "",

mobile: "",

email: ""
```

};

/* =========================================
LOAD PROFILE
========================================= */

function loadProfile() {

```
const savedProfile = localStorage.getItem("studyVaultProfile");

if (savedProfile) {

    profileData = JSON.parse(savedProfile);

}


updateProfileUI();
```

}

/* =========================================
UPDATE PROFILE UI
========================================= */

function updateProfileUI() {

```
const name = profileData.name || "Ayush Chatterjee";


const welcomeName =
    document.getElementById("welcomeName");

const topProfileName =
    document.getElementById("topProfileName");

const profileName =
    document.getElementById("profileName");


if (welcomeName) {
    welcomeName.textContent = name;
}

if (topProfileName) {
    topProfileName.textContent = name;
}

if (profileName) {
    profileName.textContent = name;
}


setProfileValue(
    "profileRoll",
    profileData.roll
);

setProfileValue(
    "profileDepartment",
    profileData.department
);

setProfileValue(
    "profileCollege",
    profileData.college
);

setProfileValue(
    "profileMobile",
    profileData.mobile
);

setProfileValue(
    "profileEmail",
    profileData.email
);
```

}

/* =========================================
PROFILE VALUE HELPER
========================================= */

function setProfileValue(elementId, value) {

```
const element = document.getElementById(elementId);

if (!element) {
    return;
}


if (value && value.trim() !== "") {

    element.textContent = value;

}

else {

    element.textContent = "Not added";

}
```

}

/* =========================================
EDIT PROFILE
========================================= */

function editProfile() {

```
const newName = prompt(
    "Enter your name:",
    profileData.name
);

if (newName === null) {
    return;
}


const newRoll = prompt(
    "Enter your Roll Number:",
    profileData.roll
);

if (newRoll === null) {
    return;
}


const newDepartment = prompt(
    "Enter your Department:",
    profileData.department
);

if (newDepartment === null) {
    return;
}


const newCollege = prompt(
    "Enter your College Name:",
    profileData.college
);

if (newCollege === null) {
    return;
}


const newMobile = prompt(
    "Enter your Mobile Number:",
    profileData.mobile
);

if (newMobile === null) {
    return;
}


const newEmail = prompt(
    "Enter your Email:",
    profileData.email
);

if (newEmail === null) {
    return;
}


profileData = {

    name: newName.trim() || "Ayush Chatterjee",

    roll: newRoll.trim(),

    department: newDepartment.trim(),

    college: newCollege.trim(),

    mobile: newMobile.trim(),

    email: newEmail.trim()

};


localStorage.setItem(
    "studyVaultProfile",
    JSON.stringify(profileData)
);


updateProfileUI();


alert(
    "✅ Profile updated successfully!"
);
```

}

/* =========================================
SUBJECT
========================================= */

function openSubject(subjectName) {

```
alert(
    "📚 " +
    subjectName +
    "\n\nSubject page will be available in the next version."
);
```

}

/* =========================================
PAGE LOAD
========================================= */

document.addEventListener(
"DOMContentLoaded",
function() {

```
    updateGreeting();

    loadProfile();

}
```

);

/* =========================================
UPDATE GREETING EVERY MINUTE
========================================= */

setInterval(
updateGreeting,
60000
);

