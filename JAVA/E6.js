addTable = function () {
 var a = $("#text").val();
  $('#displayArea').append("<tr><td>" + a + "</td><td>"+'<button class = "btn" style = "background-color: lightgreen" id = "done">Done</button> <button class = "btn btn-danger" id ="cross">cross</button>  <button class = "btn" style = "background-color: lightgray" id="undone">Undone</button>'+"</td><td class= 'answer' >"+"</td></tr>");


  
}


$(document).on('click','#done',function(){
  $(this).parent().siblings('.answer').html('&#10004;');  
  $(this).siblings('#cross').attr("disabled",false)
  // $(this).parent().siblings('.answer').html('&#9989;');
});

$(document).on('click','#cross',function(){
  
     i = mytable2.rows.length;

  if(i>2){
      $(this).parent().parent().remove();
  }
});

$(document).on('click','#undone',function(){
  $(this).parent().siblings('.answer').html('&#x274C;');
  $(this).siblings('#cross').attr("disabled",false)
});

