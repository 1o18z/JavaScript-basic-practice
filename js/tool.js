
const tabs = document.getElementById("tabs");
const all = document.getElementById("all");
const icon = document.querySelector("icon");

function clickTab(){
    tabs.style.borderBottomLeftRadius="10px";
    tabs.style.borderBottomRightRadius="10px";
    tabs.style.color="red";

}

tabs.addEventListener('click', clickTab);
