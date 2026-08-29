/* ==================================================
STUDYVAULT JAVASCRIPT
================================================== */

/* ==================================================
STUDENT PROFILE
================================================== */

let student = {

```
name: "",
roll: "",
department: "",
college: "",
mobile: "",
email: ""
```

};

/* ==================================================
PHYSICS CHAPTER DATA
================================================== */

const physicsChapters = {

```
1: {

    title:
        "Units & Measurements",

    description:
        "Physical quantities, units, dimensions and measurement errors.",

    content: `

        <h3>What is Measurement?</h3>

        <p>
            Measurement is the process of comparing
            an unknown physical quantity with a known
            standard quantity.
        </p>


        <h3>Physical Quantities</h3>

        <p>
            Physical quantities are quantities that can
            be measured. They are expressed using a
            numerical value and a unit.
        </p>


        <h3>SI Units</h3>

        <p>
            The International System of Units (SI)
            provides standard units for physical
            quantities.
        </p>


        <ul>

            <li>Length → metre (m)</li>

            <li>Mass → kilogram (kg)</li>

            <li>Time → second (s)</li>

            <li>Electric current → ampere (A)</li>

            <li>Temperature → kelvin (K)</li>

        </ul>

    `,

    concepts: [

        "Measurement compares a quantity with a standard.",

        "SI is the internationally accepted system of units.",

        "Every physical quantity has a numerical value and unit.",

        "Dimensions help identify the physical nature of a quantity.",

        "Measurement may contain errors."

    ]

},


2: {

    title:
        "Vectors",

    description:
        "Vector quantities, addition, subtraction and resolution.",

    content: `

        <h3>Scalar and Vector Quantities</h3>

        <p>
            A scalar quantity has only magnitude,
            while a vector quantity has both magnitude
            and direction.
        </p>


        <h3>Examples</h3>

        <ul>

            <li>Mass → Scalar</li>

            <li>Temperature → Scalar</li>

            <li>Speed → Scalar</li>

            <li>Displacement → Vector</li>

            <li>Velocity → Vector</li>

            <li>Force → Vector</li>

        </ul>


        <h3>Vector Addition</h3>

        <p>
            Vectors can be added using graphical or
            mathematical methods such as the
            parallelogram law.
        </p>

    `,

    concepts: [

        "Scalar has magnitude only.",

        "Vector has magnitude and direction.",

        "Displacement is a vector quantity.",

        "Velocity is a vector quantity.",

        "Vectors can be resolved into components."

    ]

},


3: {

    title:
        "Laws of Motion",

    description:
        "Newton's laws, force, momentum and motion.",

    content: `

        <h3>Newton's First Law</h3>

        <p>
            An object remains at rest or continues in
            uniform motion unless acted upon by an
            external unbalanced force.
        </p>


        <h3>Newton's Second Law</h3>

        <p>
            The rate of change of momentum of an object
            is proportional to the applied force.
        </p>


        <p>
            For constant mass:
            <strong>F = ma</strong>
        </p>


        <h3>Newton's Third Law</h3>

        <p>
            Forces always occur in pairs. When one body
            exerts a force on another body, the second
            body exerts an equal and opposite force.
        </p>

    `,

    concepts: [

        "Force can change the state of motion.",

        "Newton's second law gives F = ma for constant mass.",

        "Momentum is mass multiplied by velocity.",

        "Action and reaction forces act on different bodies.",

        "Inertia is the tendency to resist changes in motion."

    ]

},


4: {

    title:
        "Work, Energy & Power",

    description:
        "Work, kinetic energy, potential energy and power.",

    content: `

        <h3>Work</h3>

        <p>
            Work is done when a force causes displacement
            of an object in the direction of the force.
        </p>


        <p>
            For a constant force:
            <strong>W = F × s × cosθ</strong>
        </p>


        <h3>Kinetic Energy</h3>

        <p>
            Kinetic energy is the energy possessed by
            an object because of its motion.
        </p>


        <p>
            <strong>K.E. = ½mv²</strong>
        </p>


        <h3>Power</h3>

        <p>
            Power is the rate at which work is done.
        </p>

    `,

    concepts: [

        "Work depends on force and displacement.",

        "Kinetic energy depends on mass and velocity.",

        "Potential energy is associated with position or configuration.",

        "Power is the rate of doing work.",

        "Energy can be transformed from one form to another."

    ]

},


5: {

    title:
        "Current Electricity",

    description:
        "Electric current, voltage, resistance and circuits.",

    content: `

        <h3>Electric Current</h3>

        <p>
            Electric current is the rate of flow of
            electric charge through a conductor.
        </p>


        <p>
            <strong>I = Q / t</strong>
        </p>


        <h3>Potential Difference</h3>

        <p>
            Potential difference is the work done per
            unit charge in moving a charge between two
            points.
        </p>


        <h3>Resistance</h3>

        <p>
            Resistance is the opposition offered by a
            conductor to the flow of electric current.
        </p>


        <p>
            Ohm's law:
            <strong>V = IR</strong>
        </p>

    `,

    concepts: [

        "Current is measured in ampere.",

        "Voltage is measured in volt.",

        "Resistance is measured in ohm.",

        "Ohm's law is V = IR.",

        "Current flows through a conducting path."

    ]

}
```

};

/* ==================================================
SIDEBAR
================================================== */

function toggleSidebar() {

```
const sidebar =
    document.getElementById(
        "sidebar"
    );

sidebar.classList.toggle(
    "open"
);
```

}

/* ==================================================
OPEN PAGE
================================================== */

function openPage(pageId) {

```
const pages =
    document.querySelectorAll(
        ".page"
    );


pages.forEach(
    function(page) {

        page.classList.remove(
            "active"
        );

    }
);


const selected =
    document.getElementById(
        pageId
    );


if (selected) {

    selected.classList.add(
        "active"
    );

}


document
    .getElementById("sidebar")
    .classList.remove("open");


window.scrollTo(
    0,
    0
);
```

}

/* ==================================================
OPEN PHYSICS
================================================== */

function openPhysics() {

```
openPage("physics");
```

}

/* ==================================================
OPEN CHAPTER
================================================== */

function openChapter(
chapterNumber
) {

```
const chapter =
    physicsChapters[
        chapterNumber
    ];


if (!chapter) {

    return;

}


document.getElementById(
    "chapterTitle"
).textContent =
    chapter.title;


document.getElementById(
    "chapterDescription"
).textContent =
    chapter.description;


document.getElementById(
    "chapterContent"
).innerHTML =
    chapter.content;


const conceptList =
    document.getElementById(
        "keyConcepts"
    );


conceptList.innerHTML = "";


chapter.concepts.forEach(
    function(concept) {

        const li =
            document.createElement(
                "li"
            );

        li.textContent =
            concept;

        conceptList.appendChild(
            li
        );

    }
);


openPage("chapter");
```

}

/* ==================================================
PRACTICE
================================================== */

function startPractice() {

```
alert(

    "📝 Practice Mode\n\n" +

    "Practice questions for this chapter will be added next."

);
```

}

/* ==================================================
QUIZ
================================================== */

function startQuiz() {

```
alert(

    "🧠 Quiz Mode\n\n" +

    "The automatic quiz system will be added next."

);
```

}

/* ==================================================
COMING SOON
================================================== */

function comingSoon(
subject
) {

```
alert(

    "🚀 " +
    subject +
    "\n\n" +

    "This subject will be added soon."

);
```

}

/* ==================================================
GREETING
================================================== */

function updateGreeting() {

```
const hour =
    new Date().getHours();


let greeting;


if (
    hour >= 5 &&
    hour < 12
) {

    greeting =
        "Good Morning";

}

else if (
    hour >= 12 &&
    hour < 17
) {

    greeting =
        "Good Afternoon";

}

else if (
    hour >= 17 &&
    hour < 22
) {

    greeting =
        "Good Evening";

}

else {

    greeting =
        "Good Night";

}


document.getElementById(
    "timeGreeting"
).textContent =
    greeting;
```

}

/* ==================================================
EDIT PROFILE
================================================== */

function editDetails() {

```
const name =
    prompt(
        "Enter your name:"
    );


if (
    name === null ||
    name.trim() === ""
) {

    return;

}


const roll =
    prompt(
        "Enter your Roll No:"
    );


if (roll === null) {

    return;

}


const department =
    prompt(
        "Enter your Department:"
    );


if (department === null) {

    return;

}


const college =
    prompt(
        "Enter your College Name:"
    );


if (college === null) {

    return;

}


const mobile =
    prompt(
        "Enter your Mobile No:"
    );


if (mobile === null) {

    return;

}


const email =
    prompt(
        "Enter your Email:"
    );


if (email === null) {

    return;

}


student = {

    name:
        name.trim(),

    roll:
        roll.trim(),

    department:
        department.trim(),

    college:
        college.trim(),

    mobile:
        mobile.trim(),

    email:
        email.trim()

};


localStorage.setItem(

    "studyVaultStudent",

    JSON.stringify(
        student
    )

);


showStudent();


alert(
    "✅ Details saved successfully!"
);
```

}

/* ==================================================
SHOW STUDENT
================================================== */

function showStudent() {

```
const name =
    student.name
        ? student.name.trim()
        : "";


const welcomeName =
    document.getElementById(
        "welcomeName"
    );


const topName =
    document.getElementById(
        "topName"
    );


const profileName =
    document.getElementById(
        "profileName"
    );



if (name !== "") {

    welcomeName.textContent =
        " " + name;

    topName.textContent =
        name;

    profileName.textContent =
        name;

}

else {

    welcomeName.textContent =
        "";

    topName.textContent =
        "Student";

    profileName.textContent =
        "Student";

}



document.getElementById(
    "roll"
).textContent =
    student.roll ||
    "Not added";


document.getElementById(
    "department"
).textContent =
    student.department ||
    "Not added";


document.getElementById(
    "college"
).textContent =
    student.college ||
    "Not added";


document.getElementById(
    "mobile"
).textContent =
    student.mobile ||
    "Not added";


document.getElementById(
    "email"
).textContent =
    student.email ||
    "Not added";
```

}

/* ==================================================
LOAD PROFILE
================================================== */

function loadStudent() {

```
const saved =
    localStorage.getItem(
        "studyVaultStudent"
    );


if (saved) {

    try {

        student =
            JSON.parse(saved);

    }

    catch {

        student = {

            name: "",
            roll: "",
            department: "",
            college: "",
            mobile: "",
            email: ""

        };

    }

}


showStudent();
```

}

/* ==================================================
START WEBSITE
================================================== */

document.addEventListener(

```
"DOMContentLoaded",

function() {

    updateGreeting();

    loadStudent();

}
```

);

/* ==================================================
UPDATE GREETING
================================================== */

setInterval(

```
updateGreeting,

60000
```

);
