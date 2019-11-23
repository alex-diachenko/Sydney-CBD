var anchor = document.querySelectorAll('button');
				[].forEach.call(anchor, function(anchor){
				  var open = false;
				  anchor.onclick = function(event){
					event.preventDefault();
					if(!open){
					  this.classList.add('close');
					  open = true;
					}
					else{
					  this.classList.remove('close');
					  open = false;
					}
				  }
				});

				$('.owl-carousel').owlCarousel({
    				loop:true,
					autoplay:true, 
    				autoplayTimeout:4500,
					autoplayHoverPause:true,
    				margin:0,
    				nav:true,
					navText : ["",""],
					dots:true,
    				responsive:{
        			0:{
            			items:1
        				},
        			600:{
          				items:2
        				},
        			1000:{
            			items:2
        				},
					
					1200: {
						items: 3
					}
    				}
				});