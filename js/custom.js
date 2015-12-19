// animations

$('#fightsforyou').waypoint(function(direction) {
	if (direction === 'down') {
		$('nav').addClass('sticky')
	} else {
		$('nav').removeClass('sticky')
	}
}, {
  context: '#fightsforyou-cont',
  offset: '00'
})

$('#fightsforyou').waypoint(function(direction) {
  if (direction === 'down') {
    $('#fights-h3').removeClass('hidden-sm hidden-md hidden-lg animated')
  } else {
    $('#fights-h3').addClass('hidden-sm hidden-md hidden-lg')
  }
}, {
  context: '#fightsforyou-cont',
  offset: '00'
})

$('#howitworks').waypoint(function(direction) {
  if (direction === 'down') {
    $('#how-h3').removeClass('hidden-sm hidden-md hidden-lg')
    $('#how-h3').addClass('animated fadeInUp')
    $('#fights-h3').addClass('animated fadeOutUp')
    $('#howitworks h3').addClass('hidden-sm hidden-md hidden-lg')
  } else {
    $('#how-h3').addClass('hidden-sm hidden-md hidden-lg')
    $('#howitworks h3').removeClass('hidden-sm hidden-md hidden-lg')
    $('#howitworks h3').addClass('animated fadeInDown')
    $('#fights-h3').removeClass('fadeOutUp').addClass('animated fadeInDown')
  }
}, {
  context: '#howitworks-cont',
  offset: '38'
})

$('#rampage-head').waypoint(function(direction) {
  if (direction === 'down') {
    $('#rampage-h3').removeClass('hidden-sm hidden-md hidden-lg')
    $('#rampage-h3').addClass('animated fadeInUp')
    $('#how-h3').addClass('animated fadeOutUp')
    $('#rampage-head-cont h3').addClass('hidden-sm hidden-md hidden-lg')
  } else {
    $('#rampage-h3').addClass('hidden-sm hidden-md hidden-lg')
    $('#rampage-head-cont h3').removeClass('hidden-sm hidden-md hidden-lg')
    $('#rampage-head-cont h3').addClass('animated fadeInDown')
    $('#how-h3').removeClass('fadeOutUp').removeClass('fadeInUp').addClass('animated fadeInDown')
  }
}, {
  context: '#rampage-head-cont',
  offset: '38'
})

// smooth scroll

$(".navbar a[href^='#']").on('click', function(e) {
 e.preventDefault();
 var hash = this.hash;
 $('html, body').animate({
     scrollTop: $(this.hash).offset().top -49
   }, 500, function(){
     window.location.hash = hash;
   });
});