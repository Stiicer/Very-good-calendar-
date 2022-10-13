$("#date-function").text(moment().format("dddd, MMMM Do YYYY"));

var userSave;

var currentTime = moment().format("hA");




for(i=9;i<18;i++){
$(".time-"+i).text(localStorage.getItem(i));
console.log($(".time-block").attr("id"));
}



if(currentTime === $(".data-hour")){
    $(".time-block").addClass("present");
}

if(currentTime > $(".data-hour")){
    $(".time-block").addClass("future");
}

if(currentTime < $(".data-hour")){
    $(".time-block").addClass("past");
}

$(".saveBtn").click(function(e){
    
  console.log(e.target.previousElementSibling.value);

    localStorage.setItem($(this).attr("id"),e.target.previousElementSibling.value);

});



