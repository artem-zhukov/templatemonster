//Accordion
$(document).ready(function() {
  var previousId = null;
$('.main__info__banners__panel--body').hide();
$('.main__banners__panel').click(function(){
    if ($(previousId).hasClass('opened') && previousId != this) {
      $(previousId).toggleClass('opened').toggleClass('closed').next().slideToggle();
      $closeSlide(previousId.id)
    }
    $(this).toggleClass('opened').toggleClass('closed').next().slideToggle();
    previousId = this;
    if($(this).hasClass('opened')) {
        $('#'+this.id+'Mark').addClass("material-icons-remove_circle")
        document.getElementById(this.id+"Mark").style.border = 'none';
        document.getElementById(this.id+"Mark").style.background ="#dd3c30";
        document.getElementById(this.id).style.background ="#dd3c30";
        document.getElementById(this.id+"Title").style.border = 'none';
        // document.getElementById(this.id+"Mark").style.borderRight = '1px solid #dd3c30';
        document.getElementById(this.id+"SpanTitle").style.color = "#fff";
        document.getElementById(this.id+"Text").style.color = "#fff";
        document.getElementById(this.id+"Text").style.background="#dd3c30";
    }
    else {
        $closeSlide(this.id)
    }
  });
});


$closeSlide = function (elementId) {
  $('#'+elementId+'Mark').removeClass("material-icons-remove_circle")
  // document.getElementById(elementId+"Mark").style.border = '1px solid #ff4538';
  document.getElementById(elementId+"Mark").style.background ="#ff4538";
  document.getElementById(elementId).style.background ="#ff4538";
  // document.getElementById(elementId+"Title").style.border = '1px solid #ff4538';
  document.getElementById(elementId+"SpanTitle").style.color = "#fff";
}



$(document).ready(function() {
$(".wrapper--portfolio").hover(
  function () {
    console.log(this.id);
    document.getElementById(this.id+'hover').style.display="block";
  },
  function () {
    document.getElementById(this.id+'hover').style.display="none";
  }
)
 });


 //Slider
$(document).ready(function() {
 $(".slider").each(function () {
  var obj = $(this);
  $(obj).append("<div class='nav'></div>");
  $(obj).find("li").each(function () {
   $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>");
   $(this).addClass("slider"+$(this).index());
  });
  $(obj).find("span").first().addClass("on");
 });
});
function sliderJS (obj, sl) {
 var ul = $(sl).find("ul");
 var bl = $(sl).find("li.slider"+obj);
 var step = $(bl).width();
 $(ul).animate({marginLeft: "-"+step*obj}, 500);
}
$(document).on("click", ".slider .nav span", function() {
 var sl = $(this).closest(".slider");
 $(sl).find("span").removeClass("on");
 $(this).addClass("on");
 var obj = $(this).attr("rel");
 sliderJS(obj, sl);
 return false;
});


//Parallax
$(document).ready(function(){
	$window = $(window);
   $('section[data-type="background"]').each(function(){
     var $bgobj = $(this);
      $(window).scroll(function() {
		var yPos = -(($(window).scrollTop()-6000) / $bgobj.data('speed'));
    console.log(yPos);
		var coords = '50% '+ yPos + 'px';
		$bgobj.css({ backgroundPosition: coords });
	});
 });
});
