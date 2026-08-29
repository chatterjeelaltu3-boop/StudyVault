/* ==========================================
STUDYVAULT
MAIN JAVASCRIPT
========================================== */

/* ==========================================
PROFILE DATA
========================================== */

let profileData = {

```
name: "",
roll: "",
department: "",
college: "",
mobile: "",
email: ""
```

};

/* ==========================================
SIDEBAR
========================================== */

function toggleSidebar() {

```
const sidebar =
    document.getElementById("sidebar");

sidebar.classList.toggle("open");
```

}

/* ==========================================
PAGE NAVIGATION
========================================== */

function showSection(sectionId) {

```
const sections =
    document.querySelectorAll(
        ".page-section"
    );


sections.forEach(function(section) {

    section.classList.remove("active");

});


const selectedSection =
    document.getElementById(sectionId);


if (selectedSection) {

    selectedSection.classList.add("active");

}


const sidebar =
    document.getElementById("sidebar");


if (window.innerWidth <= 700) {

    sidebar.classList.remove("open");

}
```

}

/* ==========================================
GREETING
========================================== */

function updateGreeting() {

```
const hour =
    new Date().getHours();


let greeting;


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


const greetingElement =
    document.getElementById(
        "greeting"
    );


if (greetingElement) {

    greetingElement.textContent =
        greeting;

}
```

}

/* ==========================================
LOAD PROFILE
========================================== */

function loadProfile() {

```
const savedProfile =
    localStorage.getItem(
        "studyVaultProfile"
    );


if (savedProfile) {

    try {

        profileData =
            JSON.parse(savedProfile);

    }

    catch (error) {

        profileData = {

            name: "",
            roll: "",
            department: "",
            college: "",
            mobile: "",
            email: ""

        };

    }

}


updateProfileUI();
```

}

/* ==========================================
UPDATE PROFILE UI
========================================== */

function updateProfileUI() {

```
const hasName =
    profileData.name &&
    profileData.name.trim() !== "";


const name =
    hasName
        ? profileData.name.trim()
        : "";


const welcomeName =
    document.getElementById(
        "welcomeName"
    );


const topProfileName =
    document.getElementById(
        "topProfileName"
    );


const profileName =
    document.getElementById(
        "profileName"
    );


/*
   If no name has been added,
   don't show anybody's name.
*/


if (welcomeName) {

    welcomeName.textContent =
        name;

}


if (topProfileName) {

    topProfileName.textContent =
        hasName
            ? name
            : "Student";

}


if (profileName) {

    profileName.textContent =
        hasName
            ? name
            : "Student";

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

/* ==========================================
PROFILE VALUE
========================================== */

function setProfileValue(
elementId,
value
) {

```
const element =
    document.getElementById(
        elementId
    );


if (!element) {

    return;

}


if (
    value &&
    value.toString().trim() !== ""
) {

    element.textContent =
        value;

}

else {

    element.textContent =
        "Not added";

}
```

}

/* ==========================================
EDIT DETAILS
========================================== */

function editProfile() {

```
const newName =
    prompt(
        "Enter your name:"
    );


if (newName === null) {

    return;

}


if (newName.trim() === "") {

    alert(
        "Please enter your name."
    );

    return;

}


const newRoll =
    prompt(
        "Enter your Roll Number:"
    );


if (newRoll === null) {

    return;

}


const newDepartment =
    prompt(
        "Enter your Department:"
    );


if (newDepartment === null) {

    return;

}


const newCollege =
    prompt(
        "Enter your College Name:"
    );


if (newCollege === null) {

    return;

}


const newMobile =
    prompt(
        "Enter your Mobile Number:"
    );


if (newMobile === null) {

    return;

}


const newEmail =
    prompt(
        "Enter your Email:"
    );


if (newEmail === null) {

    return;

}


profileData = {

    name:
        newName.trim(),

    roll:
        newRoll.trim(),

    department:
        newDepartment.trim(),

    college:
        newCollege.trim(),

    mobile:
        newMobile.trim(),

    email:
        newEmail.trim()

};


localStorage.setItem(

    "studyVaultProfile",

    JSON.stringify(
        profileData
    )

);


updateProfileUI();


alert(
    "✅ Details saved successfully!"
);
```

}

/* ==========================================
SUBJECT
========================================== */

function openSubject(subjectName) {

```
alert(

    "📚 " +
    subjectName +
    "\n\n" +
    "Study tools for this subject will be added soon."

);
```

}

/* ==========================================
START
========================================== */

document.addEventListener(

```
"DOMContentLoaded",

function() {

    updateGreeting();

    loadProfile();

}
```

);

/* ==========================================
UPDATE TIME GREETING
========================================== */

setInterval(

```
updateGreeting,

60000
```

);
