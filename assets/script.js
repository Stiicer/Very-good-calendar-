$("#date-function").text(moment().format("dddd, MMMM Do YYYY"));

var userSave;

var currentTime = moment().format("hA");

JSON.parse(localStorage.getItem("info"));

var saveDetail= [i];

if(JSON.parse(localStorage.getItem("info"))){
for(var i=0;i<9;i++){
    
    $(".time-block").eq(i).text(JSON.parse(localStorage.getItem("info")));
    
}
}

if(currentTime === $(".data-hour")){
    $(".time-block").addClass("present");
}

if(currentTime > $(".data-hour")){
    $(".time-block").addClass("past");
}

if(currentTime < $(".data-hour")){
    $(".time-block").addClass("future");
}

$(".saveBtn").click(function(){
    for(var i=0; i<9; i++){
    saveDetail.push($(".time-block").eq(i).val());

    localStorage.setItem("info",JSON.stringify(saveDetail));
    console.log(saveDetail);}

});


