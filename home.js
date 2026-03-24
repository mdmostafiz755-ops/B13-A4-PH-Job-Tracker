let currentTab = "all";
const tabActive = ["btn-info", "text-white"];
const tabInactive = ["btn-nutral", "text-black"];

const allcontainer = selectorClass("job-card-container");
const interviewcontainer = selectorId("interview-section");
const rejectcontainer = selectorId("reject-section");
const interviewCount = selectorId("interview-count");
const rejectCount = selectorId("reject-count");
const totaljobCount = selectorId("total-job");
const toShowOutofCount = selectorId("toShowOutof");
function tab(tab) {
    const tabs = ['all', 'interview', 'reject'];
    currentTab=tab;
    for (const t of tabs) {
        const tabName = selectorId("btn-" + t);
        if (t === tab) {
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else {
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
    }
    const pages = [allcontainer, interviewcontainer, rejectcontainer];
    for (let page of pages) {
        page.classList.add("hidden");
    }
    if (tab === 'all') {
        allcontainer.classList.remove("hidden");
    } else if (tab === 'interview') {
        interviewcontainer.classList.remove("hidden");
    } else {
        rejectcontainer.classList.remove("hidden");
    }
}
tab(currentTab);//to make the all-tab active firstly after loading

///button handling part finish

let jobContainer = selectorClass("job-card-container");

document.addEventListener('click', function (event) {
    let card = event.target.closest(".job-card");
    //console.log(card);
    let badge = card.querySelector(".badge");
    if (event.target.classList.contains("interview-btn")) {
        badge.innerText = "INTERVIEW";
        badge.classList.add("btn-success", "btn-outline");
        card.classList.add("left-border-green");
        badge.classList.remove("btn-error", "btn-outline");
        card.classList.remove("left-border-red");
        interviewcontainer.appendChild(card);
       
    } else if (event.target.classList.contains("reject-btn")) {
        //console.log('clicked reject');
        badge.innerText = "REJECT";
        badge.classList.add("btn-error", "btn-outline");
        card.classList.add("left-border-red");
        badge.classList.remove("btn-success", "btn-outline");
        card.classList.remove("left-border-green");
        rejectcontainer.appendChild(card);
        
    } else if (event.target.classList.contains("delete")) {
        let parentCard = card.parentNode;
        parentCard.removeChild(card);
        
    }
    updateStat();
})


//stats section
function updateStat() {
    
    // //toShowOutofCount.innerText=allcontainer.children.length;

    const Stats = {
        all: allcontainer.children.length,
        interview: interviewcontainer.children.length,
        reject: rejectcontainer.children.length
    }

    totaljobCount.innerText = Stats.all;
    interviewCount.innerText = Stats.interview;
    rejectCount.innerText = Stats.reject;

}
updateStat();

const noJob = selectorId("nojob-popup");

