faqQuestions = document.querySelectorAll(".faq");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        question.classList.toggle("active");

        const answer = question.nextElementSibling;
        const arrow = question.querySelector(".faq-arrow");
        

        if (question.classList.contains("active")) {
            answer.style.display = "block";
            arrow.style.transform = "rotate(135deg)";
            arrow.style.transition = "all 0.3s ease-in-out";
            arrow.style.marginTop = "10px";
        } else {
            answer.style.display = "none";
            arrow.style.transform = "rotate(-45deg)";
            arrow.style.marginTop = "0px";
        }
    });
});

