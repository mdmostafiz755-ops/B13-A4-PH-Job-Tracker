
//function for selecting elements by id
function selectorId(id) {
    const select = document.querySelector(`#${id}`);
    return select;
}
//function for selecting elements by class
function selectorClass(Class) {
    const selectC = document.querySelector(`.${Class}`);
    return selectC;
}
//function for selecting elements by multiple same class
function selectorClassN(ClassN) {
    const selectCn = document.querySelectorAll(`.${ClassN}`);
    return selectCn;
}
//pore lagbe
const totalJob = selectorId("total-job");
const rejectCount = selectorId("reject-count");
