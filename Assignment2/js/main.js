// WEB303 Assignment 2
$(document).ready(function(){
    $('#content-wrapper').on('click', 'a' , function(event) {
        
        $.ajax({
        url: this.href,
        success: function(data) {
            const $content = $('#content');
            $content.html(data);
            $content.removeClass('fadeOutDown');
            $content.addClass('fadeInUp');
            $content.show();
        },
        error: function() {
          console.error('Failed to load content');
        }
        });
        event.preventDefault();
    });
});
  

  
  
  

