$(document).ready(function(){
/*Add event a tag*/
  $("h2").click(function(){
    alert("event execute")
  })
  $("a").click(function(){
    alert("event execute")
  })
  $("a").mouseenter(function(){
    $(this).addClass("strongBold")
  })
  $("a").mouseleave(function(){
    $(this).removeClass()
  })
})