$("#date-function").text(moment().format("dddd, MMMM Do YYYY"));
const timeBlockData= $("time-block");
const save = $("saveBtn");
const userSave;

JSON.parse(localStorage.getItem("info"));

const saveDetail= [];

if(JSON.parse(localStorage.getItem("info"))){

   saveDetail = JSON.parse(localStorage.getItem("info"));

}
function saveText(){

    userSave = timeBlockData.textContent;
    saveDetail.push(userSave);
    localStorage.setItem("info",JSON.stringify(saveDetail));
    console.log(userSave);
}


save.addEventListener("click",saveText);