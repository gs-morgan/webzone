$.getJSON('https://spreadsheets.google.com/feeds/list/1VLrVmcGS-zVXBNHa-9zUjZ1VD8h6nvwJa9snXBAhmvY/od6/public/values?alt=json', function(data) {
  $(".container").prepend('<div class="top-block"><h1>На данный момент, общее количество ресурсов: ' + data.feed.entry[0]['gsx$amountres']['$t'] + ' </div>');

  $.each(data.feed.entry, function(i, entry) {
	var id = entry['gsx$buildid']['$t'];
	var name_build = entry['gsx$name']['$t'];
	var full_build = entry['gsx$needres']['$t'];
	var res_build = entry['gsx$isres']['$t'];
	var prog_build = Math.round(res_build / full_build * 100);
	if (!!id && !!name_build && !!full_build && !!res_build ){
			$(".container").append('<div class="progress-contain"><h1>' + name_build + '</h1><div class="progress-bar loading stripes"><span style="width: ' + prog_build + '%"></span><div class="progress-value">' + prog_build + '% (' + res_build + '/' + full_build + ')</div></div></div>');
	}	else
	{
	}});
});
