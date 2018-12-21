<html>

<head>
    <title>Template</title>

    <link rel='stylesheet' href='./css/bootstrap.min.css' />
    <link rel='stylesheet' href='./css/bootstrap-theme.min.css' />

    <script src='./js/jquery-3.3.1.min.js'></script>
    <script src='./js/bootstrap.min.js'></script>
    <script src='./js/bootstrap-datetimepicker.min.js'></script>
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
		<div class="form-group">
			<label class="col-sm-3 control-label">Статус</label>
			<div class="col-sm-9">
				<p class="form-control-static">Заблокирован</p>
			</div>
		</div>
		
		<div class="form-group">
			<label class="col-sm-3 control-label">Причина блокировки</label>
			<div class="col-sm-9">
				<textarea class="form-control" rows="3" id="inputNickname" placeholder="Например, жизнь наказала.">Жизнь наказала</textarea>
			</div>
		</div>
		
		<div class="form-group">
			<label class="col-sm-3 control-label">Время бана</label>
			<div class="col-sm-9">
                <div class='input-group date'>
                    <input type="text" value="<?php echo(date('Y-m-d h:m'));?>" readonly class="form-control form_datetime">
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
			</div>
		</div>
 
 
		<div class="form-group">
			<div class="col-sm-offset-6 col-sm-3">
				<button type="submit" class="btn btn-success btn-block">Разблокировать</button>
			</div>
			<div class="col-sm-3">
				<button type="submit" class="btn btn-danger btn-block">Заблокировать</button>
			</div>
		</div>
	</form>
	
	</div>
	<script type="text/javascript">
    $(".form_datetime").datetimepicker({format: 'yyyy-mm-dd hh:ii'});
</script>   
	
	<style>
		.form-horizontal .form-group {
		margin-left: 0 !important;
		margin-right: 0 !important;
	}</style>

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