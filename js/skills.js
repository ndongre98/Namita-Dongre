// Source: https://www.darkcode.info/2020/03/animated-skills-bars-using-html-css.html

$('.skill-per').each(function(){
  var $this = $(this);
  var per = $this.attr('per');
  $this.css("width",per+'%');
  $({animatedValue: 0}).animate({animatedValue: per},{
    duration: 1000,
    step: function(){
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    },
    complete: function(){
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    }
  });
});