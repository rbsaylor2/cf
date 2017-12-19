$(document).ready(function(){
  var maxHeight = -1;
  $('.grid li').each(function(){
    maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
  });
  $('.grid li').each(function() {
    $(this).height(maxHeight);
  });
});
