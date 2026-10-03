// =========================
// GET ELEMENTS
// =========================

const form = document.querySelector("#registrationForm");

const successMessage = document.querySelector("#successMessage");

const result = document.querySelector("#result");

const resultContent = document.querySelector("#resultContent");

const password = document.querySelector("#password");

const togglePassword = document.querySelector("#togglePassword");

const experience = document.querySelector("#experience");

const experienceValue = document.querySelector("#experienceValue");

const message = document.querySelector("#message");

const characterCount = document.querySelector("#characterCount");


// =========================
// SHOW / HIDE PASSWORD
// =========================

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.textContent = "Hide";

    } else {

        password.type = "password";

        togglePassword.textContent = "Show";

    }

});


// =========================
// EXPERIENCE RANGE
// =========================

experience.addEventListener("input", function () {

    experienceValue.textContent = experience.value;

});


// =========================
// CHARACTER COUNTER
// =========================

message.addEventListener("input", function () {

    characterCount.textContent = message.value.length;

});


// =========================
// FORM SUBMIT
// =========================

form.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get personal information

    const firstName =
        document.querySelector("#firstName").value.trim();

    const lastName =
        document.querySelector("#lastName").value.trim();

    const email =
        document.querySelector("#email").value.trim();

    const phone =
        document.querySelector("#phone").value.trim();

    const age =
        document.querySelector("#age").value;

    const birthDate =
        document.querySelector("#birthDate").value;

    const appointment =
        document.querySelector("#appointment").value;


    // Gender

    const gender =
        document.querySelector(
            'input[name="gender"]:checked'
        );


    const genderValue =
        gender ? gender.value : "Not selected";


    // Hobbies

    const hobbies =
        document.querySelectorAll(
            'input[name="hobbies"]:checked'
        );


    const hobbyList =
        Array.from(hobbies)
            .map(hobby => hobby.value)
            .join(", ") || "None selected";


    // Education

    const course =
        document.querySelector("#course").value;


    // Online information

    const website =
        document.querySelector("#website").value.trim();


    // Preferences

    const favoriteColor =
        document.querySelector("#color").value;

    const programmingExperience =
        experience.value;


    // Address and message

    const address =
        document.querySelector("#address").value.trim();

    const about =
        message.value.trim();


    // =========================
    // DISPLAY SUCCESS MESSAGE
    // =========================

    successMessage.style.display = "block";

    successMessage.textContent =
        `Registration successful! Welcome ${firstName} ${lastName}.`;


    // =========================
    // DISPLAY RESULT
    // =========================

    result.style.display = "block";


    resultContent.innerHTML = `

        <div class="result-item">
            <strong>Name:</strong>
            ${firstName} ${lastName}
        </div>

        <div class="result-item">
            <strong>Email:</strong>
            ${email}
        </div>

        <div class="result-item">
            <strong>Phone:</strong>
            ${phone || "Not provided"}
        </div>

        <div class="result-item">
            <strong>Age:</strong>
            ${age || "Not provided"}
        </div>

        <div class="result-item">
            <strong>Date of Birth:</strong>
            ${birthDate || "Not provided"}
        </div>

        <div class="result-item">
            <strong>Appointment:</strong>
            ${appointment || "Not provided"}
        </div>

        <div class="result-item">
            <strong>Gender:</strong>
            ${genderValue}
        </div>

        <div class="result-item">
            <strong>Hobbies:</strong>
            ${hobbyList}
        </div>

        <div class="result-item">
            <strong>Course:</strong>
            ${course || "Not selected"}
        </div>

        <div class="result-item">
            <strong>Website:</strong>
            ${website || "Not provided"}
        </div>

        <div class="result-item">
            <strong>Favorite Color:</strong>
            ${favoriteColor}
        </div>

        <div class="result-item">
            <strong>Programming Experience:</strong>
            ${programmingExperience}/10
        </div>

        <div class="result-item">
            <strong>Address:</strong>
            ${address || "Not provided"}
        </div>

        <div class="result-item">
            <strong>About:</strong>
            ${about || "Not provided"}
        </div>

    `;


    // Scroll to results

    result.scrollIntoView({
        behavior: "smooth"
    });

});


// =========================
// RESET FORM
// =========================

form.addEventListener("reset", function () {

    setTimeout(function () {

        successMessage.style.display = "none";

        result.style.display = "none";

        resultContent.innerHTML = "";

        experienceValue.textContent = "5";

        characterCount.textContent = "0";

        password.type = "password";

        togglePassword.textContent = "Show";

    }, 0);

});