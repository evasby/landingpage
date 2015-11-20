(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.myscriptfront = {
    attach: function(context, settings) {
      if (typeof(checkmyscriptfront) == "undefined") {

        $('.slider').bxSlider({
          pager: false,
          controls: false,
          mode: 'fade',
          auto: true,
          pause: 5000
        });
        $('.main1_slider').bxSlider({
          pager: false,
          controls: false,
          mode: 'fade',
          auto: true,
          pause: 5000
        });

        $('.main6_list').bxSlider({
          slideWidth: 181,
          minSlides: 4,
          maxSlides: 4,
          moveSlides: 1,
          pager: false,
          auto: true,
          slideMargin: 45,
          pause: 5000
        });
        
        var sliderlist1 = $('#review_slider1').bxSlider({
          pager: false,
          controls: false,
          mode: 'fade',
          startSlide: 0
        });
        var sliderlist3 = $('#review_slider3').bxSlider({
          pager: false,
          controls: false,
          mode: 'fade',
          startSlide: 2
        });
        var slideQty = sliderlist3.getSlideCount();
        $('#review_slider2').bxSlider({
          pager: false,
          auto: true,
          startSlide: 1,
          pause: 5000,
          onSlideNext: function($slideElement, oldIndex, newIndex){ 
            if (newIndex < (slideQty-1)) {
              sliderlist3.goToSlide(newIndex + 1);
            } else {
              sliderlist3.goToSlide(newIndex + 1 - slideQty);
            }
            sliderlist1.goToSlide(newIndex - 1);
          },
          onSlidePrev: function($slideElement, oldIndex, newIndex){ 
            if (newIndex < (slideQty-1)) {
              sliderlist3.goToSlide(newIndex + 1);
            } else {
              sliderlist3.goToSlide(newIndex + 1 - slideQty);
            }
            sliderlist1.goToSlide(newIndex - 1);
          }
        });


        /************************************************************************/
        var map;
        var myLatlng = new google.maps.LatLng(53.907179, 27.484561);
        function initialize() {
          var styles = [
            {
              stylers: [
                { hue: "#cccccc" },
                { saturation: -120 }
              ]
            },{
              featureType: "road",
              elementType: "geometry",
              stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
              ]
            },{
              featureType: "road",
              elementType: "labels",
              stylers: [
                { visibility: "off" }
              ]
            }
          ];
          var styledMap = new google.maps.StyledMapType(styles,
          {name: "Styled Map"});
          var mapOptions = {
            zoom: 15,
            //center: new google.maps.LatLng(53.905497, 27.558681)
            center: myLatlng,
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            }
          };
          map = new google.maps.Map(document.getElementById('gmap'),
              mapOptions);
          var marker = new google.maps.Marker({
              position: myLatlng,
              title:"Webformat"
          });
          marker.setMap(map);
          var contentString = '<div class="main9_wrap"><img src="http://landing.wfs.by/sites/all/themes/landing/image/webformat.png" alt="" /><div class="main9_text">+375 44 732 05 09<br>г.Минск Притыцкого 29 оф 522</div></div>';
          var infowindow = new google.maps.InfoWindow({
              content: contentString
          });
          infowindow.open(map,marker);


          map.mapTypes.set('map_style', styledMap);
          map.setMapTypeId('map_style');
        }
        google.maps.event.addDomListener(window, 'load', initialize);
        /************************************************************************/
        var visible = '95%';
        var hidden = 50;
        var waypoint_main1_1 = new Waypoint({
          element: $('#main1'),
          handler: function(dir) {
            if (dir === 'down') {
              $('.slider_item').bgLoaded({
                afterLoaded : function(){
                  $('#main1').removeClass('fadeOut').addClass('fadeIn');
                }
              });
            } else{
              $('#main1').removeClass('fadeIn').addClass('fadeOut');
            }
          },
          offset: visible
        })
        var waypoint_main1_2 = new Waypoint({
          element: $('#main1'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main1').removeClass('fadeIn').addClass('fadeOut');
            } else {
              $('#main1').removeClass('fadeOut').addClass('fadeIn');
            };
            
          },
          offset: - $('#main1').innerHeight() + hidden
        })
        /*********************************************************************/
        /************************************************************************/
        var waypoint_main2_1 = new Waypoint({
          element: $('#main2'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main2').removeClass('fadeOut').addClass('fadeIn');
              $('.main2_image').removeClass('rotateOut').addClass('rotateIn');
            } else{
              $('#main2').removeClass('fadeIn').addClass('fadeOut');
              $('.main2_image').removeClass('rotateIn').addClass('rotateOut');
            }
          },
          offset: visible
        })
        var waypoint_main2_2 = new Waypoint({
          element: $('#main2'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main2').removeClass('fadeIn').addClass('fadeOut');
              $('.main2_image').removeClass('rotateIn').addClass('rotateOut');
            } else {
              $('#main2').removeClass('fadeOut').addClass('fadeIn');
              $('.main2_image').removeClass('rotateOut').addClass('rotateIn');
            };
            
          },
          offset: - $('#main2').innerHeight() + hidden
        })
        /*********************************************************************/
        /************************************************************************/
        var waypoint_main3_1 = new Waypoint({
          element: $('#main3'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main3').removeClass('fadeOut').addClass('fadeIn');
              //$('.main2_image').removeClass('rotateOut').addClass('rotateIn');
              $('.main3_link__1').removeClass('fadeOutLeft').addClass('fadeInLeft');
              $('.main3_link__2').removeClass('fadeOutDown').addClass('fadeInDown');
              $('.main3_link__3').removeClass('fadeOutRight').addClass('fadeInRight');
              $('.main3_link__4').removeClass('fadeOutLeft').addClass('fadeInLeft');
              $('.main3_link__5').removeClass('fadeOutUp').addClass('fadeInUp');
              $('.main3_link__6').removeClass('fadeOutRight').addClass('fadeInRight');
              $('.main3_link__7').removeClass('fadeOutUp').addClass('fadeInUp');
            } else{
              $('#main3').removeClass('fadeIn').addClass('fadeOut');
              //$('.main2_image').removeClass('rotateIn').addClass('rotateOut');
              $('.main3_link__1').removeClass('fadeInLeft').addClass('fadeOutLeft');
              $('.main3_link__2').removeClass('fadeInDown').addClass('fadeOutDown');
              $('.main3_link__3').removeClass('fadeInRight').addClass('fadeOutRight');
              $('.main3_link__4').removeClass('fadeInLeft').addClass('fadeOutLeft');
              $('.main3_link__5').removeClass('fadeInUp').addClass('fadeOutUp');
              $('.main3_link__6').removeClass('fadeInRight').addClass('fadeOutRight');
              $('.main3_link__7').removeClass('fadeInUp').addClass('fadeOutUp');
            }
          },
          offset: visible
        })
        var waypoint_main3_2 = new Waypoint({
          element: $('#main3'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main3').removeClass('fadeIn').addClass('fadeOut');
              //$('.main2_image').removeClass('rotateIn').addClass('rotateOut');
              $('.main3_link__1').removeClass('fadeInLeft').addClass('fadeOutLeft');
              $('.main3_link__2').removeClass('fadeInDown').addClass('fadeOutDown');
              $('.main3_link__3').removeClass('fadeInRight').addClass('fadeOutRight');
              $('.main3_link__4').removeClass('fadeInLeft').addClass('fadeOutLeft');
              $('.main3_link__5').removeClass('fadeInUp').addClass('fadeOutUp');
              $('.main3_link__6').removeClass('fadeInRight').addClass('fadeOutRight');
              $('.main3_link__7').removeClass('fadeInUp').addClass('fadeOutUp');
            } else {
              $('#main3').removeClass('fadeOut').addClass('fadeIn');
              //$('.main2_image').removeClass('rotateOut').addClass('rotateIn');
              $('.main3_link__1').removeClass('fadeOutLeft').addClass('fadeInLeft');
              $('.main3_link__2').removeClass('fadeOutDown').addClass('fadeInDown');
              $('.main3_link__3').removeClass('fadeOutRight').addClass('fadeInRight');
              $('.main3_link__4').removeClass('fadeOutLeft').addClass('fadeInLeft');
              $('.main3_link__5').removeClass('fadeOutUp').addClass('fadeInUp');
              $('.main3_link__6').removeClass('fadeOutRight').addClass('fadeInRight');
              $('.main3_link__7').removeClass('fadeOutUp').addClass('fadeInUp');
            };
            
          },
          offset: - $('#main3').innerHeight() + hidden
        })
        /*********************************************************************/
        /************************************************************************/
        var waypoint_main4_1 = new Waypoint({
          element: $('#main4'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main4').removeClass('fadeOut').addClass('fadeIn');
              $('.tarif').removeClass('flipOutX').addClass('flipInX');
              //$('.tarif').removeClass('lightSpeedOut').addClass('lightSpeedIn');
              /*$('.tarif__green').removeClass('fadeOutLeft').addClass('fadeInLeft');
              $('.tarif__blue').removeClass('fadeOutDown').addClass('fadeInDown');
              $('.tarif__red').removeClass('fadeOutRight').addClass('fadeInRight');*/
            } else{
              $('#main4').removeClass('fadeIn').addClass('fadeOut');
              $('.tarif').removeClass('flipInX').addClass('flipOutX');
              //$('.tarif').removeClass('lightSpeedIn').addClass('lightSpeedOut');
              /*$('.tarif__green').removeClass('fadeInLeft').addClass('fadeOutLeft');
              $('.tarif__blue').removeClass('fadeInDown').addClass('fadeOutDown');
              $('.tarif__red').removeClass('fadeInRight').addClass('fadeOutRight');*/
            }
          },
          offset: visible
        })
        var waypoint_main4_2 = new Waypoint({
          element: $('#main4'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main4').removeClass('fadeIn').addClass('fadeOut');
              $('.tarif').removeClass('flipInX').addClass('flipOutX');
              //$('.tarif').removeClass('lightSpeedIn').addClass('lightSpeedOut');
              /*$('.tarif__green').removeClass('fadeInLeft').addClass('fadeOutLeft');
              $('.tarif__blue').removeClass('fadeInDown').addClass('fadeOutDown');
              $('.tarif__red').removeClass('fadeInRight').addClass('fadeOutRight');*/
            } else {
              $('#main4').removeClass('fadeOut').addClass('fadeIn');
              $('.tarif').removeClass('flipOutX').addClass('flipInX');
              //$('.tarif').removeClass('lightSpeedOut').addClass('lightSpeedIn');
              /*$('.tarif__green').removeClass('fadeOutLeft').addClass('fadeInLeft');
              $('.tarif__blue').removeClass('fadeOutDown').addClass('fadeInDown');
              $('.tarif__red').removeClass('fadeOutRight').addClass('fadeInRight');*/
            };
            
          },
          offset: - $('#main4').innerHeight() + hidden
        })
        /*********************************************************************/
        /************************************************************************/
        var waypoint_main5_1 = new Waypoint({
          element: $('#main5'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main5').removeClass('fadeOut').addClass('fadeIn');
              $('.main5_item').removeClass('fadeOutLeft').addClass('fadeInLeft');
            } else{
              $('#main5').removeClass('fadeIn').addClass('fadeOut');
              $('.main5_item').removeClass('fadeInLeft').addClass('fadeOutLeft');
            }
          },
          offset: visible
        })
        var waypoint_main5_2 = new Waypoint({
          element: $('#main5'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main5').removeClass('fadeIn').addClass('fadeOut');
              $('.main5_item').removeClass('fadeInLeft').addClass('fadeOutLeft');
            } else {
              $('#main5').removeClass('fadeOut').addClass('fadeIn');
              $('.main5_item').removeClass('fadeOutLeft').addClass('fadeInLeft');
            };
            
          },
          offset: - $('#main5').innerHeight() + hidden
        })
        /*********************************************************************/
        /************************************************************************/
        var waypoint_main6_1 = new Waypoint({
          element: $('#main6'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main6').removeClass('fadeOut').addClass('fadeIn');
            } else{
              $('#main6').removeClass('fadeIn').addClass('fadeOut');
            }
          },
          offset: visible
        })
        var waypoint_main6_2 = new Waypoint({
          element: $('#main6'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main6').removeClass('fadeIn').addClass('fadeOut');
            } else {
              $('#main6').removeClass('fadeOut').addClass('fadeIn');
            };
            
          },
          offset: - $('#main6').innerHeight() + hidden
        })
        /*********************************************************************/
        /************************************************************************/
        var waypoint_main7_1 = new Waypoint({
          element: $('#main7'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main7').removeClass('fadeOut').addClass('fadeIn');
            } else{
              $('#main7').removeClass('fadeIn').addClass('fadeOut');
            }
          },
          offset: visible
        })
        var waypoint_main7_2 = new Waypoint({
          element: $('#main7'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main7').removeClass('fadeIn').addClass('fadeOut');
            } else {
              $('#main7').removeClass('fadeOut').addClass('fadeIn');
            };
            
          },
          offset: - $('#main7').innerHeight() + hidden
        })
        /*********************************************************************/
        /************************************************************************/
        var waypoint_main8_1 = new Waypoint({
          element: $('#main8'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main8').removeClass('fadeOut').addClass('fadeIn');
            } else{
              $('#main8').removeClass('fadeIn').addClass('fadeOut');
            }
          },
          offset: visible
        })
        var waypoint_main8_2 = new Waypoint({
          element: $('#main8'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main8').removeClass('fadeIn').addClass('fadeOut');
            } else {
              $('#main8').removeClass('fadeOut').addClass('fadeIn');
            };
            
          },
          offset: - $('#main8').innerHeight() + hidden
        })
        /*********************************************************************/
        /************************************************************************/
        var waypoint_main9_1 = new Waypoint({
          element: $('#main9'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main9').removeClass('fadeOut').addClass('fadeIn');
            } else{
              $('#main9').removeClass('fadeIn').addClass('fadeOut');
            }
          },
          offset: visible
        })
        var waypoint_main9_2 = new Waypoint({
          element: $('#main9'),
          handler: function(dir) {
            if (dir === 'down') {
              $('#main9').removeClass('fadeIn').addClass('fadeOut');
            } else {
              $('#main9').removeClass('fadeOut').addClass('fadeIn');
            };
            
          },
          offset: - $('#main9').innerHeight() + hidden
        })
        /*********************************************************************/
        var waypoint_menu = new Waypoint({
          element: $('#header'),
          handler: function(dir) {
            if (dir === 'down') {
              $('.header_wrap').addClass('header_wrap__fixed')
                .stop()
                .css("top", -$('#header').outerHeight())
                .animate({"top" : 0});         
            } else{
              $('.header_wrap').removeClass('header_wrap__fixed');
            }
          },
          offset: -200
        })

        var sections = $('.inmenu');
        var navigation_links = $('.menu_link');

        sections.waypoint({
          handler: function(dir) {
            var active_section;
            if (dir === "down") {  
              active_section = this;
              var active_link = $('.menu_link[href="#' + $(active_section.element).attr("id") + '"]');
              navigation_links.removeClass("menu_link__active");
              active_link.addClass("menu_link__active");
            }          
          },
          offset: '35%'
        });
        sections.waypoint({
          handler: function(dir) {
            var active_section;
            if (dir === "up") {      
              //active_section = this.previous();
              active_section = this;
              //console.log($(active_section.element).attr("id"));
              var active_link = $('.menu_link[href="#' + $(active_section.element).attr("id") + '"]');
              navigation_links.removeClass("menu_link__active");
              active_link.addClass("menu_link__active");
            }         
          },
          offset: '5%'
        });
        navigation_links.click( function(event) {
          $.scrollTo(
            $(this).attr("href"),
            {
              duration: 400,
              offset: { 'left':0, 'top':-0.15*$(window).height() }
            }
          );
        });

      }
      checkmyscriptfront = true;
    }
  };
})(jQuery, Drupal, this, this.document);