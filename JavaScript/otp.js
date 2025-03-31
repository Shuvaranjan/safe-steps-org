document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("bg-video");

    // Hide the video initially
    video.style.opacity = 0;

    // Wait for the video to load
    video.addEventListener("loadeddata", function () {
        // Fade in the video smoothly
        video.style.transition = "opacity 1s ease-in-out";
        video.style.opacity = 1;
    });

    // Fallback: If the video fails to load, ensure the background color is visible
    video.addEventListener("error", function () {
        document.querySelector(".video-background").style.backgroundColor = "#000"; // Fallback color
    });
});




const inputs = document.querySelectorAll(".input-box input"),
    button = document.querySelector("form button");

// Function to check if all inputs are filled
function checkInputs() {
    const allFilled = Array.from(inputs).every(input => input.value.trim() !== "");
    if (allFilled) {
        button.classList.add("active");
    } else {
        button.classList.remove("active");
    }
}

// Iterate over all inputs
inputs.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
        const currentInput = input,
            nextInput = input.nextElementSibling,
            prevInput = input.previousElementSibling;

        // If the value is more than one character, clear it
        if (currentInput.value.length > 1) {
            currentInput.value = "";
            return;
        }

        // If the next input is disabled and the current value is not empty,
        // enable the next input and focus on it
        if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }

        // If the backspace key is pressed
        if (e.key === "Backspace" && prevInput) {
            currentInput.setAttribute("disabled", true);
            currentInput.value = "";
            prevInput.focus();
        }

        // Check if all inputs are filled
        checkInputs();
    });
});

// Focus the first input on window load
window.addEventListener("load", () => inputs[0].focus());










function showAlert() {
    alert("OTP Verified Successfully");
    // window.location.href = 'forgot.html';
    window.location.reload();
}