	var chars = document.getElementById('chars');
	chars.style.cursor = 'pointer';
	chars.onclick = function() {
		$("div.submenu").toggleClass("open");
	};
	var blockstate = '0';
	var webid = parseInt(window.location.search.replace(/\D+/g,""));
	var mobileToster = '0';
	//window;
	if($(window).width() > 1050) {		
			var setwind1 = document.getElementById('cl1');
			setwind1.style.width =  (500 + setwind1.offsetWidth - setwind1.clientWidth) + "px";
			var setwind2 = document.getElementById('cl2');
			setwind2.style.width =  (500 + setwind2.offsetWidth - setwind2.clientWidth) + "px";
			mobileToster = 1;		
		}else{}
	
$.getJSON('https://spreadsheets.google.com/feeds/list/1OlGYVMkYzWWO7dQteqo0KIGNrZEgJo3tyGs5tPeOfZ8/od6/public/values?alt=json', function(data) {
  //$(".container-right").prepend('<div class="top-block"><h1>На данный момент, общее количество ресурсов: ' + data.feed.entry[0]['gsx$amountres']['$t'] + ' </div>');

	
	// ресурсы

	
	$.each(data.feed.entry, function(i, entry) {
	var res_id = entry['gsx$idres']['$t'];
    var res_name = entry['gsx$resource']['$t'];
    var res_amount = entry['gsx$amount']['$t'];
    var res_about = entry['gsx$about']['$t'];
	  if (!!res_id && !!res_name && !!res_amount && !!res_about) {
			$(".submenu").append('<div id="char-' + res_id + '" class="static-block"><h1 class="name">' + res_name + ' [' + res_amount + ']</h1><div class="about">' + res_about +'</div></div>');	
	}else{
		
		
	};
	$.getJSON('https://spreadsheets.google.com/feeds/list/1VpPAgH4llQ7UzU1EdJdOBOxAHU7gIgkWIToDX79jOJk/od6/public/values?alt=json', function(data) {
		function activeblock(char_sid) {
			
				var css = '#char-' + webid + '{display:none; background: rgba(33, 33, 33, 0.5) !important;} #char-' + webid + ' h1 { color: rgba(215, 117, 4, 1) !important; } ',
				head = document.head || document.getElementsByTagName('head')[0],
				style = document.createElement('style');

				style.type = 'text/css';
				if (style.styleSheet){
				style.styleSheet.cssText = css;
				} else {
				style.appendChild(document.createTextNode(css));

				head.appendChild(style);
		}
	}; //конец блока

		// способности
		
 	  $.each(data.feed.entry, function(i, entry) {
		var build_id = entry['gsx$idbuild']['$t'];
		var name = entry['gsx$name']['$t'];
		var level = entry['gsx$level']['$t'];
		var res_amount2 = entry['gsx$resamount']['$t'];
		var res_need = entry['gsx$resneed']['$t'];	
		var res_type = entry['gsx$restype']['$t'];	
		var about2 = entry['gsx$about']['$t'];		
		var bbonus = entry['gsx$bonus']['$t'];	
		if (!!build_id && !!name && !!level && !!res_amount2 && !!res_need && res_type && about2 && bbonus && (res_type == res_id)) {
			
				$(".buildings").append('<div class="build"><h1 class="title">' + name + ' [lv' + level + ']</h1><div class="about">' + about2 + '<hr>' + bbonus+ '</div><div class="roll-1">[Использовано: ' + res_amount2 + ' ' + res_name +']</div><div class="roll-2">[Нужно: ' + res_need + ']</div></div>');		
		};		
	  });  //конец блока
	});
	}); //конец блока

	
});//конец блока


