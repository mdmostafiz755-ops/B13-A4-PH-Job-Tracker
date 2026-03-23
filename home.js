const showOutof = selectorId("toShowOutof");
const btnAll = selectorId("btn-all");
const btnInterview = selectorId("btn-interview");
const btnReject = selectorId("btn-reject");
let intCount = 0;
//cards
document.addEventListener("click", function (e) {
    let card = e.target.closest(".job-card");
    if (!card)
        return;
    let badge = card.querySelector(".badge");
    if (e.target.classList.contains("interview-btn")) {
        if (badge.innerText !== "INTERVIEW") {
            badge.innerText = "INTERVIEW";
            card.classList.add("left-border-green");
            card.classList.remove("left-border-red");
            badge.classList.add("btn-success");
            badge.classList.remove("hidden", "btn-error");

            intCount++;
            selectorId("interview-count").innerText = intCount;
        }
    }
else if (e.target.classList.contains("reject-btn")) {
        if (badge.innerText === "INTERVIEW") {
            intCount--;
            selectorId("interview-count").innerText = intCount;
        }

        badge.innerText = "REJECTED";
        card.classList.add("left-border-red");
        card.classList.remove("left-border-green");
        badge.classList.add("btn-error");
        badge.classList.remove("hidden", "btn-success");
    }
}
);


