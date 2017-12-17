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
	
$.getJSON('https://spreadsheets.google.com/feeds/list/18t8PJW8ObN-LFlsC4PZEmyBR0DKW9PnD7OV66IZIwIg/od6/public/values?alt=json', function(data) {
  //$(".container-right").prepend('<div class="top-block"><h1>На данный момент, общее количество ресурсов: ' + data.feed.entry[0]['gsx$amountres']['$t'] + ' </div>');

	
	// персонажи

	
	$.each(data.feed.entry, function(i, entry) {
	var char_id = entry['gsx$charid']['$t'];
    var char_name = entry['gsx$charname']['$t'];
	  if (!!char_id && !!char_name) {
			$(".submenu").append('<a href="?id=' + char_id + '"><div id="char-' + char_id + '" class="static-block"><h1 class="name">' + char_name + '</h1></div></a>');	
			if(blockstate == '0' && webid == char_id) {
				$(".states").append('<div id="char-' + char_id + '" class="static-block mobile"><h1 class="name">' + char_name + '</h1></div>');
				charstate = '1';
			}else {};	
	}else{
		
		
	};
	}); //конец блока
	
	//	стиль
	
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
    var char_sid = entry['gsx$charsid']['$t'];
    var skill = entry['gsx$skill']['$t'];
    var type = entry['gsx$type']['$t'];
    var about = entry['gsx$about']['$t'];
    var roll1 = entry['gsx$roll1']['$t'];	
    var roll2 = entry['gsx$roll2']['$t'];	
	if (!!char_sid && !!skill && !!type && !!about && !!roll1 && roll2 && (window.location.search == '?id=' + char_sid) && ((type == 'dipl') || (type == 'atck'))) {
			$(".states").append('<div class="' + type + '"><h1 class="title">' + skill + '</h1><p class="about">' + about + '</p><p class="roll-1">Ролл: 1-' + roll1 + '</p><p class="roll-2">Порог: ' + roll2 + '</p></div>');
			if(blockstate == '0') {
				activeblock(char_sid);
				blockstate = '1';
			}else {};			
	};		
  }); //конец блока
});//конец блока


