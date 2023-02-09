// WEB303 Assignment 2
$(document).ready(function(){
    $("#content-wrapper").on("click", "a", function (event) {
        var fileToLoad = $(this).attr("id") + ".html";
        $("a.content").removeClass("content"); // Update links
        $(this).addClass("content");
        $.ajax({
          url: fileToLoad,
          success: function (data) {
            const $content = $("#content");
            $content.html(data).hide().fadeIn(500);
            $content.removeClass("fadeOutDown");
            $content.addClass("fadeInUp");
          },
          error: function () {
            console.error("Failed to load content");
          }
        });
        event.preventDefault();
      });
});
  

  
  
  

