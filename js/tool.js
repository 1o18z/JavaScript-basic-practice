// const tab1 = document.getElementById("tab1");
// const tab2 = document.getElementById("tab2");
// const tab3 = document.getElementById("tab3");
// const tab4 = document.getElementById("tab4");
const tabs = document.getElementById("tabs");
const button1 = document.getElementById("button1");
const all = document.getElementById("all");

function clickTab(){
    tabs.style.borderBottomLeftRadius="10px";
    tabs.style.borderBottomRightRadius="10px";
    tabs.style.color="red";

}

function outOfPage(){
    all.style.display="none";
}
tabs.addEventListener('click', clickTab);
button1.addEventListener('click', outOfPage);