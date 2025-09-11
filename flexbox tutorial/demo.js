document.addEventListener("DOMContentLoaded", function () {
    const likeButtons = document.querySelectorAll(".likebtn");
    const countTexts = document.querySelectorAll(".count");

    likeButtons.forEach((button, index) => {
        let liked = false;
        let count = 0;

        button.addEventListener("click", function () {
            liked = !liked;

            if (liked) {
                count++;
                button.classList.add("liked");
            } else {
                count--;
                button.classList.remove("liked");
            }

            countTexts[index].textContent = "likes:" + count;
        });
    });
});