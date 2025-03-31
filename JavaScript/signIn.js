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






function showAlert() {
    alert("Login Successfully...\nWelcome to Safe Steps");
    window.location.href = 'main.html';
    // window.location.reload();
}

// function redirectToProfile(event) {
//     event.preventDefault(); // Prevent form submission
//     // Add your logic here (e.g., validate input, send OTP, etc.)
//     window.location.href = "main.html"; // Redirect to the desired page
// }