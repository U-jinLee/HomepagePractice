$(document).ready(function(){
/*Add event a tag*/
  $("h2").click(function(){
    $("ol").fadeToggle();
  })
  $("li").click(function(){
    alert($(li.eq()).html());
  })
  $("a").mouseenter(function(){
    $(this).addClass("strongBold")
  })
  $("a").mouseleave(function(){
    $(this).removeClass()
  })
})