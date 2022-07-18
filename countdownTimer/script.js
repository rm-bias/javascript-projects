

var date =new Date()

var goal = new Date()
var note ="specify goalTime in format day/month/fullyear hour:minute:seconds example  12.0 midnight on2nd dec  can be give as 2012 02/06/2012 00:00:00 "
goaldate = undefined


var goaldate = prompt(note)
    
goaldate = goaldate.trim()
goaldate = goaldate.split(" ")
var goalday = goaldate[0].trim().split("/")
var goaltime = goaldate[1].trim().split(":")

goal.setDate(goalday[0],goalday[1],goalday[2])

goal.setHours(goaltime[0])
goal.setMinutes(goaltime[1])
goal.setSeconds(goaltime[2])
console.log(goal)

var seconds =Math.abs((date -goal)/1000)
var minutes = Math.floor(seconds/60)
var hours = Math.floor(minutes/60)
var days = Math.floor(hours/24)

seconds = seconds%60
minutes = minutes%60
hours = hours%24

document.getElementById("day").innerHTML=days
document.getElementById("hour").innerHTML=hours
document.getElementById("minute").innerHTML=minutes
document.getElementById("sec").innerHTML=seconds





var iid =setInterval(()=>{

seconds--
if(seconds<0){
  seconds = 59
  minutes--
  if(minutes<0){
    minutes = 59
    hours--
    if(hours==0)
    {
        days--
    }
  }
}

document.getElementById("day").innerHTML=format(days)
document.getElementById("hour").innerHTML=format(hours)
document.getElementById("minute").innerHTML=format(minutes)
document.getElementById("sec").innerHTML=format(seconds)
 
srop()

 },1000)



function srop()
{ if(days ==0){
clearInterval(iid)
 }}



function format(time){
    if(time<10) return "0"+time
    else return time
}



