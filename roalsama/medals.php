<html>

<head>
    <title>Template</title>

    <link rel='stylesheet' href='./css/bootstrap.min.css' />
    <link rel='stylesheet' href='./css/bootstrap-theme.min.css' />

    <script src='./js/jquery-3.3.1.min.js'></script>
    <script src='./js/bootstrap.min.js'></script>
</head>

<body>
    <div class='container-flud'>
	<form class="form-horizontal">
		<div class="form-group">
			<label class="col-sm-3 control-label">Имя пользователя</label>
			<div class="col-sm-9">
				<p class="form-control-static">Галиль</p>
			</div>
		</div>
		<div class="form-group medal-id">
			<label class="col-sm-3 control-label">Медаль</label>
			<div class="col-sm-9">
				<p class="form-control-static">
					<select class="form-control">
					  <option value='1'>1</option>
					  <option value='2'>2</option>
					  <option value='3'>3</option>
					</select>
				</p>
			</div>
		</div>
		
		<div class="form-group medal-status">
			<label class="col-sm-3 control-label">Статус</label>
			<div class="col-sm-9">
				<p class="form-control-static">Выдан</p>
			</div>
		</div>
		
		<div class="form-group medal-img">
			<label class="col-sm-3 control-label">Изображение</label>
			<div class="col-sm-9">
				<p class="form-control-static">фырк</p>
			</div>
		</div>
		
		<div class="form-group medal-about">
			<label class="col-sm-3 control-label">Описание</label>
			<div class="col-sm-9">
				<p class="form-control-static">фырк</p>
			</div>
		</div>
 
 
		<div class="form-group">
			<div class="col-sm-offset-6 col-sm-3 medal-control">
				<button type="submit" class="btn btn-success btn-block">Выдать</button>
			</div>
			<div class="col-sm-3">
				<button type="submit" class="btn btn-danger btn-block">Отобрать</button>
			</div>
		</div>
	</form>
	
	</div>
	<style>
		.form-horizontal .form-group {
		margin-left: 0 !important;
		margin-right: 0 !important;
	}</style>

	
	<script>

 $.getJSON ('http://localhost/rps/medals?all', function(data) {
	$( "select" ).change(function() {
		var SelectID = "";
		$( "select option:selected" ).each(function() {
			test = $( this ).val();
			$.each(data, function(i, entry) {
				if((data[i].id) == test) {
					$( ".medal-img .col-sm-9 .form-control-static" ).html( data[i].url );
					$( ".medal-about .col-sm-9 .form-control-static" ).html("<strong>["+data[i].title+"]</strong> - "+data[i].about );
				}
			});
			
		});
	}).trigger( "change" );
	
	
 });
</script>
        <!-- used material

css - https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css
css - https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css
js - https://code.jquery.com/jquery-3.3.1.min.js
js - https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js

url - https://getbootstrap.com/docs/3.3/getting-started/
url - https://getbootstrap.com/docs/3.3/css/
url - https://getbootstrap.com/docs/3.3/components/ (В будущем)
-->


</body>

</html>