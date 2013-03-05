/*
**
** Plugin Name : SqueezeBox
** Version : 1.0
** Author : Akshat Goel
** Author email : akshat91@gmail.com
**
*/

(function( $ ) {
  $.fn.squeezeBox = function() {
  
    var el = this;

  	var text = el.html();
  	var overlay = '<div style="width:100%;height:100%;position:absolute;top:0;left:0;background:rgba(64,64,64,0.6);" id="squeezeBox-overlay"></div>';

  	el.html(overlay);

  	var boxHtml = '<div style="width:100%;background:#fff;margin:0;border:1px solid #efefef;padding:20px;" id="squeezeBox-content" >';
  	boxHtml = boxHtml + '<span class="squeezeBox-close" style="float:right;font-weight:bolder;cursor:pointer;">X</span><br />';
  	boxHtml = boxHtml + text+'</div>';

  	$('#squeezeBox-overlay').html(boxHtml);

  	el.show(0,function(){
  		$('#squeezeBox-content').animate({
	  		width: '80%',
	  		maxHeight: '80%',
	  		overflow: 'auto',
	  		marginTop: '10%',
	  		marginLeft: '10%'
	  	},700);
  	})
  	
  	$('.squeezeBox-close').click(function(){
  		el.hide();
  		el.html(text);

  	});


  };
})( jQuery );
