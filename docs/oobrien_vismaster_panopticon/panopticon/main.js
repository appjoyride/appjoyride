<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
	<meta property="og:title" content="London Panopticon" />
	<meta property="og:url" content="http://vis.oobrien.com/panopticon/" />
	<meta property="og:description" content="CCTV traffic cameras from TfL around you." />
	<meta property="og:site_name" content="London Panopticon" />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="http://vis.oobrien.com/panopticon/images/thumbnail.png" />
	<meta property="fb:admins" content="507348039" />	
	<meta property="fb:app_id" content="114474805306975" />	

	<title>London Panopticon</title>
	<link rel="stylesheet" type="text/css" media="all" href="style.css" />	
	<link rel="stylesheet" type="text/css" media="all" href="https://fonts.googleapis.com/css?family=Hammersmith+One">
	
	<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
	<script type="text/javascript" src="main.js"></script>
	<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-424605-12', 'oobrien.com');
	ga('send', 'pageview');
	</script>
</head>
<body>   
<div id='cams'>
	<div class='cam' id='camNW'><div class='camdir'>NW</div><div class='camimage' id='camimgNW'></div><div class='camname' id='camnameNW'></div></div>
	<div class='cam' id='camN'><div class='camdir'>N</div><div class='camimage' id='camimgN'></div><div class='camname' id='camnameN'></div></div>
	<div class='cam' id='camNE'><div class='camdir'>NE</div><div class='camimage' id='camimgNE'></div><div class='camname' id='camnameNE'></div></div>
	<div class='cam' id='camW'><div class='camdir'>W</div><div class='camimage' id='camimgW'></div><div class='camname' id='camnameW'></div></div>
	<div class='cam' id='camE'><div class='camdir'>E</div><div class='camimage' id='camimgE'></div><div class='camname' id='camnameE'></div></div>
	<div class='cam' id='camSW'><div class='camdir'>SW</div><div class='camimage' id='camimgSW'></div><div class='camname' id='camnameSW'></div></div>
	<div class='cam' id='camS'><div class='camdir'>S</div><div class='camimage' id='camimgS'></div><div class='camname' id='camnameS'></div></div>
	<div class='cam' id='camSE'><div class='camdir'>SE</div><div class='camimage' id='camimgSE'></div><div class='camname' id='camnameSE'></div></div>
	<div class='cam' id='myloc'>
		<div id='mylocoptions'>
			<h1>London Panopticon</h1>
			Look around: 
			<select id='location' onchange='setLocationManual()'>
				<option value='geo'>Current location</option>
				<option value='angel'>Angel</option>
				<option value='londonbridge'>londonbridge</option>
				<option value='bank'>Bank</option>
				<option value='blackfriars'>Blackfriars (for CS)</option>
				<option value='bloomsbury'>Bloomsbury (UCL)</option>
				<option value='camdentown'>Camden Town</option>
				<option value='clapham'>Clapham</option>
				<option value='croydon'>Croydon</option>
				<option value='dalston'>Dalston</option>
				<option value='hammersmith'>Hammersmith</option>
				<option value='oldstreet'>Old Street</option>
				<option value='oxfordcircus'>Oxford Circus</option>
				<option value='bigben'>Parliament Square</option>
				<option value='putney'>Putney</option>
				<option value='stratford'>Stratford</option>
				<option value='tooting'>Tooting</option>
				<option value='tottenhamhale'>Tottenham Hale</option>
				<option value='trafalgarsq'>Trafalgar Square</option>
				<option value='hydepark_picadilly'>hydepark_picadilly</option>
				<option value='hydepark_oxfordstreet'>hydepark_oxfordstreet</option>
				<option value='hydepark_exhibitionroad'>hydepark_exhibitionroad</option>
				<option value='clapham_south'>clapham_south</option>
				<option value='towerhill'>TOWER HILL</option>
				<option value='columbiaroad'>COLUMBIA ROAD</option>
				<option value='cityroadmcdonalds'>CITY ROAD MCDONALDS</option>
			</select>
			<div id='explanationkey'>Showing the TfL traffic cameras nearest to you in all directions.<br />
			Works in Chrome, Firefox and Safari but not Android Chrome.<br />
			Created by <a href="http://oobrien.com">Oliver O'Brien</a> (<a href="http://twitter.com/oobr">(@oobr)</a>). 
			<a href="http://oobrien.com/2016/04/london-panopticon/">How it works</a>.
			</div> 
			<div id='locationText'>Determining location...</div>
			<div id='countdown'>Updating in... <span id='countdowntimer'></span></div>	
			<div id='loadingDisruption'>Loading cameras...<br /><img src='images/1-1.gif' style='width: 16px; height: 16px;' alt='...' /></div>
		</div>
	</div>
</div>
</body>
</html>
