const buttons = document.querySelectorAll(".btn");
const container = document.getElementById("form-container");
const closeBtn = document.querySelector(".close-btn");
const form = document.getElementById("contact-form");
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        container.classList.remove("hidden");
    })
})
closeBtn.addEventListener("click", () => {
    container.classList.add("hidden");
});
(function () {
    emailjs.init({
        publicKey: "e9RLvrU8NA4uScwcF",
    });
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const btn = container.querySelector("input[type='submit']");
        btn.value = "Sending...";
        btn.disabled = "true";
        emailjs.sendForm('service_rlasf9m', 'template_n830bjr', this)
            .then(() => {
                console.log('SUCCESS!');
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent',
                    text: 'Email sent successfully'
                });
                form.reset();
                container.classList.add("hidden");
                btn.value = "Sent";
                btn.disabled = "true";
            }, (error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to send email'
                });
                console.log('FAILED...', error);
            });
    });
}