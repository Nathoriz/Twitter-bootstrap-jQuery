$(document).ready(function() {
  var $spaceToComent = $('#spaceToComent');
  var $textarea =  $('#whatYouThink');
  var $tweetButton =  $('#tweet');
  var $count = $('#words');
  var $maxCharacters  =  140;
  var $containerComents = $("#container-coments");

  $tweetButton.click(function() {
    if($textarea.val().length) {
      var $comment = $textarea.val();
      var $newComment = $("<div class='col-lg-12 light-blue lighten-4 coments padding-twitter'><div class='row'><div class='col-lg-2'><img class='col-lg-12 rounded-circle' src='assets/images/white-fox.jpg'></div><div class='col-lg-10 coment'><div class='col-lg-auto rounded white padding-twitter myComent'>"+$comment+"</div></div></div><div class='row'><div class='col-lg-7'></div><div class='col-lg-auto'><span class='btn btn-outline-primary btn-rounded white mrg-btn'>Publicado:<span id='#setTime'></span></span></div></div></div>");
      $containerComents.prepend($newComment);
    }
  });

  $textarea.keyup(function() {
    var $characters = $textarea.val().length;
    var $total = $maxCharacters - $characters;
    $count.text($total);
    if(140 >= $total && $total > 20 ) {
      $count.removeClass('btn-outline-primary');
      $count.removeClass('btn-outline-secondary');
      $count.removeClass('btn-outline-warning');
      $count.removeClass('btn-outline-danger');
      $count.addClass('btn-outline-primary');
      $tweetButton.removeAttr('disabled');

    }else if($total <= 20 && $total > 10){
      $count.removeClass('btn-outline-primary');
      $count.removeClass('btn-outline-warning');
      $count.removeClass('btn-outline-danger');
      $count.addClass('btn-outline-secondary');
      $tweetButton.removeAttr('disabled');
      
    }else if($total <= 10 && $total > 0) {
      $count.removeClass('btn-outline-primary');
      $count.removeClass('btn-outline-secondary');
      $count.removeClass('btn-outline-danger');
      $count.addClass('btn-outline-warning');

      $tweetButton.removeAttr('disabled');
      
    }else if($total <= 0) {
      $count.removeClass('btn-outline-primary');
      $count.removeClass('btn-outline-secondary');
      $count.removeClass('btn-outline-warning');
      $count.addClass('btn-outline-danger');
      $tweetButton.attr('disabled', 'true');
    }  
  });

});