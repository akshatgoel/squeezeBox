/*
**
** Plugin Name : SqueezeBox
** Version : 1.0
** Author : Akshat Goel
** Author email : akshat91@gmail.com
**
*/

(function( $ ) {
  $.fn.squeezeBox = function(options) {
	
    var el = this;

	
	var docHeight = $(document).height();
	var docWidth = $(document).width();
	
	// Options initialization
	if(!options){
		options = {overlay: '',container: '',data: '',close: ''};
	}
	
	if(!options.overlay){ 
		options.overlay = '';
	}
	
	if(!options.container){
		options.container = '';
	}
	
	if(!options.data){
		options.data = '';
	}
	
	if(!options.close){
		options.close = '';
	}
	
	// Create some defaults, extending them with any options that were provided
    var overlayCSS = $.extend( {
		'width': docWidth+'px',
		'height': docHeight+'px',
		'position': 'absolute',
		'z-index': '999',
		'top': '0',
		'left': '0',
		'background': 'rgba(64,64,64,0.6)'
    }, options.overlay);
	
	var containerCSS = $.extend( {
		'width': '100%',
		'z-index': '1000',
		'margin': '0',
		'padding': '20px',
		'background': '#fff',
		'border': '1px solid #efefef'
    }, options.container);
	
	var closeCSS = $.extend({
		'float': 'right',
		'font-weight': 'bolder',
		'cursor': 'pointer'
	},options.close);
	
	var dataCSS = $.extend({
	
	},options.data);
	
  	var text = el.html();
	
  	var overlay = '<div class="squeezeBox-overlay"></div>';
		
  	el.html(overlay);

	$('.squeezeBox-overlay').css(overlayCSS);
	
  	var boxHtml = '<div class="squeezeBox-container" >';
  	boxHtml = boxHtml + '<span class="squeezeBox-close">X</span><br style="clear:both;"/>';
  	boxHtml = boxHtml + '<div class="squeezeBox-data" >'+text+'</div></div>';

  	$('.squeezeBox-overlay').html(boxHtml);
	$('.squeezeBox-container').css(containerCSS);
	$('.squeezeBox-close').css(closeCSS);
	$('.squeezeBox-data').css(dataCSS);
	

  	el.show(0,function(){
  		$('.squeezeBox-container').animate({
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
