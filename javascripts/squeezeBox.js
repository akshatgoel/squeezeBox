/*
**
** Plugin Name : SqueezeBox
** Version : 1.0
** Author : Akshat Goel
** Author email : akshat91@gmail.com
**
*/

(function($) {
  $.fn.squeezeBox = function (options) {

    var el = this;

	var docHeight = $(document).height();
	var docWidth = $(document).width();

	var defaults = {
		classPrefix: 'squeezeBox-',
		overlay: {
			width: docWidth + 'px',
			height: docHeight + 'px',
			position: 'absolute',
			zIndex: 999,
			top: 0,
			left: 0,
			background: 'rgba(64,64,64,0.6)'
		},
		container: {
			width: '100%',
			margin: 0,
			padding: '20px',
			background: '#fff',
			border: '1px solid #efefef'
		},
		close: {
			float: 'right',
			clear: 'both',
			fontWeight: 'bolder',
			cursor: 'pointer'
		},
		data: {
		},
		animation: {
			properties: {
		  		width: '80%',
		  		maxHeight: '80%',
		  		overflow: 'auto',
		  		marginTop: '10%',
		  		marginLeft: '10%'
			},
			options: {
				duration: 700
			}
		}
	};

	var opts = $.extend(true, {}, defaults, options);

    var prefix = opts.classPrefix;

  	var original = el.html();

  	el.html('<div class="' + prefix + 'overlay"></div>');

	$('.' + prefix + 'overlay', el)
		.css(opts.overlay)
		.html([
			'<div class="' + prefix + 'container" >',
			'<div class="' + prefix + 'close">X</div>',
			'<div class="' + prefix + 'data" >', original, '</div>',
			'</div>'
		].join(''));

	$('.' + prefix + 'container', el).css(opts.container);
	$('.' + prefix + 'close', el).css(opts.close);
	$('.' + prefix + 'data', el).css(opts.data);


  	el.show(0, function () {
  		$('.' + prefix + 'container').animate(opts.animation.properties, opts.animation.options);
  	});

  	$('.' + prefix + 'close').click(function () {
  		el.hide().html(original);
  	});

  };

}(jQuery));