
$(function(){$("div.bt-ad-placement-iframe[id*=marriott-US-search]").not("[id*=marriott-US-search-left-rail]").adaraSearch();$("div.bt-ad-placement-iframe[id*=marriott-US-search-left-rail]").adaraGuidedNav();});var MI=MI||{};MI.search=MI.search||{};MI.search.tracking={tracking:false,readMoreTrack:false,toggleView:function(view){if(this.tracking){var obj=$('#view-controls');if(typeof swa!=="undefined"){swa.linkTrackEvents='';swa.linkTrackVars='eVar14';swa.eVar14='View='+view;void(swa.tl(obj,'o','Search Results Toggle View'));}}},sortView:function(sort){if(this.tracking){var obj=$('#sortHD');if(typeof swa!=="undefined"){swa.linkTrackEvents='';swa.linkTrackVars='eVar14';swa.eVar14='SearchResultsRefinement:Sort='+sort;void(swa.tl(obj,'o','Search Results Sort View'));}}},refineSearch:function(refinement,obj){if(typeof swa!=="undefined"){swa.linkTrackEvents='';swa.linkTrackVars='eVar14';swa.eVar14='SearchResultsRefinement:Dimension='+refinement;void(swa.tl(obj,'o','Search Results Refinement Dimension'));}},readMore:function(obj){if(!this.readMoreTrack){if(typeof swa!=="undefined"){swa.linkTrackVars='prop29,events';swa.prop29='MiniStores:Read More';void(swa.tl(obj,'o','MiniStore Read More Link'));}
this.readMoreTrack=true;}}};MI.search.toggleView={mainContainer:$('body'),map:$('#map'),mapContainer:$('#map-container'),resultContainer:$('#merch-property-results'),toggleCityPOIList:function(viewSelection){var vSel=$('.l-cross-linked-group');var vCross=$('.m-cross-poi-container');if(vSel.hasClass("m-cross-poi-container")){vCross.show();if(viewSelection=='list'||viewSelection==''){vCross.show();}else{vCross.hide();}}},toggleBookRight:function(viewSelection){var brCompTop=$('#search-book-right'),brCompInline=$('#merch-property-results .l-bookright').parent().parent().parent(),isMiniStores=$('body#mini-stores').length>0?true:false,isHotelDir=$('body#hotel-directory').length>0?true:false;if(viewSelection!=''){if(viewSelection=='list'){if(!brCompInline.hasClass('clearfix'))
{brCompInline.addClass("clearfix");}
brCompTop.hide();brCompInline.show();}else if(viewSelection=='map'){brCompTop.hide();brCompInline.removeClass("clearfix").hide();}else if(viewSelection=='gallery'){brCompTop.show();brCompInline.removeClass("clearfix").hide();}}},toggleAction:function(view){var expandControls=$('#expand-map'),viewSelection=view.substring(0,view.length-4),resultContainer=this.resultContainer,oToggleContainer=$('#view-controls'),toggleControl='.js-toggle-view[data-view='+viewSelection+']',currentView=oToggleContainer.data('currentview');oToggleContainer.find('.is-active').removeClass('is-active');oToggleContainer.find(toggleControl).parent().addClass('is-active');resultContainer.fadeOut(300);MI.search.toggleView.toggleCityPOIList(viewSelection);MI.search.toggleView.toggleBookRight(viewSelection);switch(view){case'mapView':this.toggleMapView(true);break;case'listView':this.mapContainer.fadeOut(300);this.mainContainer.removeClass("is-map-view");resultContainer.addClass('list');resultContainer.removeClass('map gallery');resultContainer.fadeIn(300);hotelPanel.reposition();$(".is-drop-down > .l-drop-down-definition").css("display","none");$(".is-drop-down > .t-drop-down-title").removeClass("t-drop-down-opened");break;case'galleryView':this.mapContainer.fadeOut(300);this.mainContainer.removeClass("is-map-view");resultContainer.addClass('gallery');resultContainer.removeClass('list map');resultContainer.fadeIn(300);hotelPanel.reposition();$(".is-drop-down > .l-drop-down-definition").css("display","none");$(".is-drop-down > .t-drop-down-title").removeClass("t-drop-down-opened");break;}
this.resizeMap();},setDefaultMap:function(){$('.l-main-body').siblings('div').addClass('is-map-view-hidden');$('footer, .l-message-box, #search-book-right.book-right-holder').addClass('is-map-view-hidden');$('.l-main-body .l-last-col input.single-search-destination, #meetings-city-airport').bind("propertychange keyup input paste",function(event){$('.is-map-view .l-main-body .l-last-col').css('height','auto');}).blur(function(){MI.search.toggleView.resizeMap();});var currentView=$('#view-controls').data('currentview');if(this.map.length>0){if(currentView=="mapView"){this.toggleMapView(false);}}},toggleMapView:function(reloadMap){this.mainContainer.addClass("is-map-view");this.mapContainer.show();if(reloadMap&&typeof propertySearchBingMap!='undefined')
{propertySearchBingMap.toggleMap("mapView");}
if(reloadMap&&typeof propertySearchMap!='undefined')
{propertySearchMap.toggleMap("mapView");}
this.resultContainer.addClass('map');this.resultContainer.removeClass('list gallery');$("html, body").animate({scrollTop:0},"slow");this.resizeMap();hotelPanel.reposition();},resizeMap:function(){if(this.map.length>0&&this.mainContainer.hasClass('is-map-view')){var largeMapSize=$(window).height()-this.map.offset().top;this.map.css('height',largeMapSize);searchFormContainer=$('.l-main-body .l-last-col');searchFormContainer.css('height',$(window).height()-searchFormContainer.offset().top);}else{if(typeof searchFormContainer!='undefined')searchFormContainer.css('height','auto');}}};$(document).ready(function(){MI.search.toggleView.setDefaultMap();MI.search.toggleView.toggleCityPOIList('');var theView=$('.l-toggle-default.is-active .js-toggle-view').data('view');MI.search.toggleView.toggleBookRight(theView);$('.js-toggle-view').click(function(e){e.preventDefault();var viewSelection=$(this).data('view'),container=$('#merch-property-results');MI.search.toggleView.toggleAction(viewSelection+'View');switch(viewSelection){case'map':SearchResultsViewTypeRemoteService.setViewType('mapView');MI.search.tracking.toggleView('Map');break;case'list':SearchResultsViewTypeRemoteService.setViewType('listView');MI.search.tracking.toggleView('List');break;case'gallery':SearchResultsViewTypeRemoteService.setViewType('galleryView');MI.search.tracking.toggleView('Gallery');break;default:container.removeClass('list');container.addClass('gallery');}});$('.js-toggle-filter').click(function(e){e.preventDefault();laside.toggle('showFilter');});$('.js-filter-close').click(function(e){e.preventDefault();laside.toggle('hideFilter');});$('.js-toggle-edit').click(function(e){e.preventDefault();if($(this).hasClass('is-active')){laside.toggle('hideEdit');$(this).removeClass('is-active');}else{laside.toggle('showEdit');$(this).addClass('is-active');}});$('h3.hotel-title, .photo-panel a,a.view-rate-btn').hover(function(){var brandImage=$(this).parents('.merch-property-records').find('.logo-holder p');brandImage.addClass('hover');},function(){var brandImage=$(this).parents('.merch-property-records').find('.logo-holder p');brandImage.removeClass('hover');});$('.explore-brands-horizontal a').hover(function(){$(this).parent().addClass('hover');},function(){$(this).parent().removeClass('hover');});if($('#selected-dimensions').length>0){$(".dimension-remove-icon").click(function(){window.location=$(this).prev().attr('href');});}
heroCarousel.init();$('.js-open-photogallery').click(function(e){e.preventDefault();$(this).parent().trigger('click');return false;});if($('input[id=omniSiteTrackingOn]').val()=="true"){MI.search.tracking.tracking=true;var dimensions=$(':hidden[name=selectedDimensions]').val();$('#countries-list-display').undelegate('ul li a','click');$('#countries-list-display').delegate('ul li a','click',function(){if($(this).parents('div').prop('id')=='USTS'){if(typeof swa!=="undefined"){swa.linkTrackEvents='';swa.linkTrackVars='eVar14';swa.eVar14="HotelDirectory:Dimension=State";void(swa.tl(this,'o','Hotel Directory Landing Page'));}}else{if(typeof swa!=="undefined"){swa.linkTrackEvents='';swa.linkTrackVars='eVar14';swa.eVar14="HotelDirectory:Dimension=Country";void(swa.tl(this,'o','Hotel Directory Landing Page'));}}});$('#sortHD,#availability-filter,#currency').change(function(){MI.search.tracking.sortView($(this).val());});$('#guided-nav-items').find('a').click(function(){var refinement=$(this).prop('id');MI.search.tracking.refineSearch(refinement);});}
hotelPanel.init();$('.mi-quickview').click(function(e){e.preventDefault();var marshacode=$(this).data('marsha');var pushpinNumber=$(this).closest('.merch-property-records').data('pnum');var isMapAvailable=$(this).closest('.merch-property-records').data('map');var tab='';if($(this).closest('p').hasClass('m-amenities'))
{tab='amenities';}
hotelPanel.loadpanel(marshacode,pushpinNumber,isMapAvailable,tab);});});function equalHeight(group){var tallest=0;group.each(function(){var thisHeight=$(this).height();if(thisHeight>tallest){tallest=thisHeight;}});group.height(tallest);}
hotelPanel={init:function()
{var txtHotelPanel='<div class="l-quickview-modal is-hidden"></div><div class="l-hotel-quickview is-hidden"></div>';$('.l-main-body .l-last-col').prepend(txtHotelPanel);},reposition:function(onLoad)
{if($('body').hasClass('is-hotelpanel-open'))
{var originalTop=$('.l-main-body').offset().top,windowTop=$(window).scrollTop(),windowHeight=$(window).height(),panelHeight=windowHeight-originalTop;if($('.l-hotel-quickview').position().left==0){if(onLoad)$('.l-hotel-quickview').css('top',windowTop);}else{if(originalTop<windowTop){$('.l-hotel-quickview').css('top','0px');panelHeight=windowHeight;}else{$('.l-hotel-quickview').css('top',originalTop-windowTop);panelHeight=windowHeight-originalTop+windowTop;}}
var footerOffset=$('#footer').offset().top-$('.l-hotel-quickview').position().top;if(footerOffset>0&&footerOffset<panelHeight&&($('.l-hotel-quickview').position().left>0)){panelHeight=footerOffset;}
if($('.l-hotel-quickview').position().left!=0){$('.l-hotel-quickview').css('height',panelHeight);}else{$('.l-hotel-quickview').css('height','100%');$('.l-quickview-modal').css('height',$(document).height());}
var $panel=$('.m-hotelpanel-frame').contents(),$panelTabContainer=$panel.find(".m-tab-container");if($panelTabContainer.length>0){var vpSize=$(window).width();if(vpSize>'751'){$panel.find('.m-price-display .is-hidden-ml').css('display','none');$panel.find('.m-view-rate-btn.is-atlantis').css('display','block');}else{$panel.find('.m-price-display .is-hidden-ml').css('display','block');$panel.find('.m-view-rate-btn.is-atlantis').css('display','none');}
var panelTabHeight=panelHeight-$panelTabContainer.offset().top;if($('.l-hotel-quickview').position().left==0){$panel.find('.l-main').removeClass("is-large-vp").addClass("is-small-vp");$panel.find('.m-tab-content').css('height','auto');activeTab=$panel.find('.t-panel-tabs .ui-tabs-selected a').attr('href');panelFullHeight=$panel.find(activeTab).height()+$panelTabContainer.offset().top+20;panelFullHeight=panelFullHeight>(panelHeight-42)?panelFullHeight:(panelHeight-42);$('.m-hotelpanel-frame').height(panelFullHeight);}else{$panel.find('.l-main').removeClass("is-small-vp").addClass("is-large-vp");$panel.find('.m-tab-content').css('height',panelTabHeight-16);$('.m-hotelpanel-frame').height('100%');}}
if($('.lt-ie9, .l-lock').length>0){$('.l-hotel-quickview').css('left',$('.l-main-body .l-last-col').offset().left-$(window).scrollLeft());}}},loadpanel:function(dataMarsha,pNum,mVal,tabName){if(dataMarsha!=''&&typeof(dataMarsha)!='undefined')
{var quickViewHolder=$('.l-hotel-quickview'),propertyRecords=$('.merch-property-records'),propertyRecordSelected=$('#property-record-'+dataMarsha);if(propertyRecordSelected.hasClass('is-active')&&$('body').hasClass('is-hotelpanel-open')){hotelPanel.closePanel();}
else{propertyRecords.removeClass('is-active');propertyRecordSelected.addClass('is-active');var marrOfferId=$('#merch-property-results').data('marrofferid')||'',txtIframe="<iframe name='hotelpanel-frame' src='/hotels/quickView.mi?marshaCode="+dataMarsha+"&pin="+pNum+"&map="+mVal+"&view="+tabName+"&marrOfferId="+marrOfferId+"' class = 'm-hotelpanel-frame is-hidden' scrolling = 'no' marginheight='0' marginwidth='0' frameborder='0'/>",txtFrameFrame="<div class='m-hotelpanel is-loading'></div>",txtCloseBtn='<div class="m-close-button">'+msgResources.closeText+'<i class="icon icon-close" /></div>';quickViewHolder.html(txtFrameFrame+txtCloseBtn);laside.toggle('hotelpanel');$('.m-hotelpanel').html(txtIframe);quickViewHolder.children('.m-close-button').click(function(){hotelPanel.closePanel();});$('.l-quickview-modal').click(function(){hotelPanel.closePanel();})}}
hotelPanel.reposition(true);},closePanel:function(){$('body').removeClass('is-hotelpanel-open');$('.l-hotel-quickview').addClass('is-hidden').find('.m-hotelpanel').remove();if(!$('body').hasClass('is-map-view')){$('.merch-property-records.is-active a').focus();$('.merch-property-records.is-active').removeClass('is-active');}
$(window).trigger('resize');}}
var laside={toggle:function(switchType){var lmain=$('.l-main-body .l-first-col'),oHotelPanel=$('.l-hotel-quickview'),lasideO=oHotelPanel.parent().find('.l-last-col'),oEdit=$('.js-edit-form'),oFilter=$('#guided-nav'),oBody=$('body');switch(switchType){case'hotelpanel':oBody.addClass('is-hotelpanel-open');oBody.removeClass('is-show-edit-search');oHotelPanel.removeClass('is-hidden');oHotelPanel.nextAll().addClass('is-hidden-edit-search');break;case'showFilter':oBody.addClass('is-show-edit-search');oBody.removeClass('is-hotelpanel-open');oHotelPanel.addClass('is-hidden');oFilter.siblings().addClass('is-hidden-edit-search');oFilter.removeClass('is-hidden-edit-search');break;case'hideFilter':oBody.removeClass('is-show-edit-search');oFilter.addClass('is-hidden-edit-search');oFilter.siblings().removeClass('is-hidden-edit-search');break;case'showEdit':oBody.addClass('is-show-edit-search');oBody.removeClass('is-hotelpanel-open');oHotelPanel.addClass('is-hidden');oEdit.siblings().addClass('is-hidden-edit-search');oEdit.removeClass('is-hidden-edit-search');break;case'hideEdit':oBody.removeClass('is-show-edit-search');oEdit.addClass('is-hidden-edit-search');oEdit.siblings().removeClass('is-hidden-edit-search');break;default:lasideO.children().addClass('is-hidden-edit-search');}}}
var heroCarousel={oCarousel:$('.m-hero-carousel'),init:function(){var oCarousel=this.oCarousel,numImgs=$('.caroufredsel_wrapper img').length;if(oCarousel.length>0){var playText=oCarousel.data('options').play,pauseText=oCarousel.data('options').pause,carouselControls1=$('<a href="#" title="carousel-left-arrow" class="m-carousel-left icon-arrow-left"/><a href="#" title="carousel-right-arrow" class="m-carousel-right icon-arrow-right"/>'),carouselControls=$('<div class="m-carousel-controls"/>').append($('<div class="m-carousel-pagination"/>'));oCarousel.append(carouselControls1);oCarousel.css('position','relative').append(carouselControls);oCarousel.parent().addClass("l-carousel-container");oCarousel.find('ul').carouFredSel({responsive:true,items:{visible:1,height:'variable'},height:'variable',onCreate:function(){var carHeight=$('.m-hero-carousel').height(),alignArrows=carHeight/2;$(".caroufredsel_wrapper").css("width","100%");$('.firstCarouselImage').remove();oCarousel.css('width',"100%");oCarousel.find('li').removeClass("is-loading-img");$(window).on('resize',function(){$('.icon-arrow-left, .icon-arrow-right').css('top',($('.m-hero-carousel .caroufredsel_wrapper li').height()/2));}).trigger('resize');},pagination:".m-carousel-pagination",keys:'true',prev:'#prebtn',next:'#nextbtn',next:{button:'.m-carousel-right',key:'right'},prev:{button:'.m-carousel-left',key:'left'},auto:false,scroll:{fx:"scroll",onAfter:function(){var count=$(".caroufredsel_wrapper img").length;numImgs++;if(count<=3){if(numImgs==count*2){$('.caroufredsel_wrapper img').trigger("pause");}
else{$('ul img').trigger("play");}}}},swipe:true}).trigger('play');}
oCarousel.on('click','.icon-pause',function(){$(this).toggleClass("pause icon-play");var a=$(".icon-pause > .is-hidden-text").text();if(a==pauseText){$(".icon-pause > .is-hidden-text").text(playText);}
else if(a==playText){$(".icon-pause > .is-hidden-text").text(pauseText);}});oCarousel.find('.m-carousel-pagination a').each(function(i,o){var altText=oCarousel.find('.caroufredsel_wrapper ul li:nth-child('+(i+1)+') img').attr('alt'),aTitle=altText||(oCarousel.data('options').pagination+' '+(i+1));$(o).attr('title',aTitle);});}}
$(window).resize(function(){hotelPanel.reposition();MI.search.toggleView.resizeMap();});$(window).scroll(function(){hotelPanel.reposition();});