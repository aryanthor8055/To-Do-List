
module.exports=getdate

function getdate(){


var today=new Date()

var option={
    weekday:"long",
    day:"numeric",
    month:"long"
}
var day=today.toLocaleDateString("en-US",option)

return day;
}