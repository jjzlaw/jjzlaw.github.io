    $("nav").find("a").click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
     
      $("html, body").animate({
          scrollTop: $(section).offset().top 
      }, 1600);
     });

    $("#learn-more").click(function(e){
      e.preventDefault();
      console.log('btn clicked', e);
      
      var section = $(this).attr("href");
      
        $("html, body").animate({
          scrollTop: $(section).offset().top 
      }, 1600);
    })