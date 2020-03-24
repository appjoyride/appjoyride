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
				
<option value='lu_zone_1_temple'>lu_zone_1_temple</option>
<option value='lu_zone_1_blackfriars'>lu_zone_1_blackfriars</option>
<option value='lu_zone_1_mansion_house'>lu_zone_1_mansion_house</option>
<option value='lu_zone_1_cannon_street'>lu_zone_1_cannon_street</option>
<option value='lu_zone_1_monument'>lu_zone_1_monument</option>
<option value='lu_zone_1_tower_hill'>lu_zone_1_tower_hill</option>
<option value='lu_zone_1_aldgate'>lu_zone_1_aldgate</option>
<option value='lu_zone_1_liverpool_street'>lu_zone_1_liverpool_street</option>
<option value='lu_zone_1_moorgate'>lu_zone_1_moorgate</option>
<option value='lu_zone_1_barbican'>lu_zone_1_barbican</option>
<option value='lu_zone_1_farringdon'>lu_zone_1_farringdon</option>
<option value='lu_zone_1_kings_cross_st_pancras'>lu_zone_1_kings_cross_st_pancras</option>
<option value='lu_zone_1_euston_square'>lu_zone_1_euston_square</option>
<option value='lu_zone_1_great_portland_street'>lu_zone_1_great_portland_street</option>
<option value='lu_zone_1_baker_street'>lu_zone_1_baker_street</option>
<option value='lu_zone_1_edgware_road_circle_line'>lu_zone_1_edgware_road_circle_line</option>
<option value='lu_zone_1_paddington'>lu_zone_1_paddington</option>
<option value='lu_zone_1_bayswater'>lu_zone_1_bayswater</option>
<option value='lu_zone_1_high_street_kensington'>lu_zone_1_high_street_kensington</option>
<option value='lu_zone_1_gloucester_road'>lu_zone_1_gloucester_road</option>
<option value='lu_zone_1_south_kensington'>lu_zone_1_south_kensington</option>
<option value='lu_zone_1_victoria'>lu_zone_1_victoria</option>
<option value='lu_zone_1_pimlico'>lu_zone_1_pimlico</option>
<option value='lu_zone_1_warren_street'>lu_zone_1_warren_street</option>
<option value='lu_zone_1_queensway'>lu_zone_1_queensway</option>
<option value='lu_zone_1_hyde_park_corner'>lu_zone_1_hyde_park_corner</option>
<option value='lu_zone_1_knightsbridge'>lu_zone_1_knightsbridge</option>
<option value='lu_zone_1_leicester_square'>lu_zone_1_leicester_square</option>
<option value='lu_zone_1_covent_garden'>lu_zone_1_covent_garden</option>
<option value='lu_zone_1_russell_square'>lu_zone_1_russell_square</option>
<option value='lu_zone_1_earls_court'>lu_zone_1_earls_court</option>
<option value='lu_zone_1_notting_hill_gate'>lu_zone_1_notting_hill_gate</option>
<option value='lu_zone_1_lancaster_gate'>lu_zone_1_lancaster_gate</option>
<option value='lu_zone_1_marble_arch'>lu_zone_1_marble_arch</option>
<option value='lu_zone_1_bond_street'>lu_zone_1_bond_street</option>
<option value='lu_zone_1_bank'>lu_zone_1_bank</option>
<option value='lu_zone_1_oxford_circus'>lu_zone_1_oxford_circus</option>
<option value='lu_zone_1_holborn'>lu_zone_1_holborn</option>
<option value='lu_zone_1_chancery_lane'>lu_zone_1_chancery_lane</option>
<option value='lu_zone_1_st_pauls'>lu_zone_1_st_pauls</option>
<option value='lu_zone_1_paddington'>lu_zone_1_paddington</option>
<option value='lu_zone_1_embankment'>lu_zone_1_embankment</option>
<option value='lu_zone_1_westminster'>lu_zone_1_westminster</option>
<option value='lu_zone_1_euston'>lu_zone_1_euston</option>
<option value='lu_zone_1_waterloo'>lu_zone_1_waterloo</option>
<option value='lu_zone_1_green_park'>lu_zone_1_green_park</option>
<option value='lu_zone_1_paddington_handc_line'>lu_zone_1_paddington_handc_line</option>
<option value='lu_zone_1_piccadilly_circus'>lu_zone_1_piccadilly_circus</option>
<option value='lu_zone_1_charing_cross'>lu_zone_1_charing_cross</option>
<option value='lu_zone_1_lambeth_north'>lu_zone_1_lambeth_north</option>
<option value='lu_zone_1_edgware_road_bakerloo'>lu_zone_1_edgware_road_bakerloo</option>
<option value='lu_zone_1_marylebone'>lu_zone_1_marylebone</option>
<option value='lu_zone_1_regents_park'>lu_zone_1_regents_park</option>
<option value='lu_zone_1_sloane_square'>lu_zone_1_sloane_square</option>
<option value='lu_zone_1_st_jamess_park'>lu_zone_1_st_jamess_park</option>
<option value='lu_zone_1_goodge_street'>lu_zone_1_goodge_street</option>
<option value='lu_zone_1_tottenham_court_road'>lu_zone_1_tottenham_court_road</option>
<option value='lu_zone_1_borough'>lu_zone_1_borough</option>
<option value='lu_zone_1_old_street'>lu_zone_1_old_street</option>
<option value='lu_zone_1_angel'>lu_zone_1_angel</option>
<option value='oground_zone_1_shoreditch_high_street'>oground_zone_1_shoreditch_high_street</option>
<option value='lu_zone_1_aldgate_east'>lu_zone_1_aldgate_east</option>
<option value='lu_zone_1_southwark'>lu_zone_1_southwark</option>
<option value='lu_zone_1_london_bridge'>lu_zone_1_london_bridge</option>
<option value='oground_zone_1_liverpool_street'>oground_zone_1_liverpool_street</option>
<option value='dlr_zone_1_tower_gateway_dlr'>dlr_zone_1_tower_gateway_dlr</option>
<option value='dlr_zone_1_bank_dlr'>dlr_zone_1_bank_dlr</option>
<option value='oground_zone_1_euston'>oground_zone_1_euston</option>
<option value='lu_zone_2_east_putney'>lu_zone_2_east_putney</option>
<option value='lu_zone_2_putney_bridge'>lu_zone_2_putney_bridge</option>
<option value='lu_zone_2_parsons_green'>lu_zone_2_parsons_green</option>
<option value='lu_zone_2_white_city'>lu_zone_2_white_city</option>
<option value='lu_zone_2_shepherds_bush'>lu_zone_2_shepherds_bush</option>
<option value='lu_zone_2_holland_park'>lu_zone_2_holland_park</option>
<option value='lu_zone_2_brixton'>lu_zone_2_brixton</option>
<option value='lu_zone_2_vauxhall'>lu_zone_2_vauxhall</option>
<option value='lu_zone_2_highbury_and_islington'>lu_zone_2_highbury_and_islington</option>
<option value='lu_zone_2_caledonian_road'>lu_zone_2_caledonian_road</option>
<option value='lu_zone_2_holloway_road'>lu_zone_2_holloway_road</option>
<option value='lu_zone_2_arsenal'>lu_zone_2_arsenal</option>
<option value='lu_zone_2_manor_house'>lu_zone_2_manor_house</option>
<option value='lu_zone_2_shepherds_bush_market'>lu_zone_2_shepherds_bush_market</option>
<option value='lu_zone_2_goldhawk_road'>lu_zone_2_goldhawk_road</option>
<option value='lu_zone_2_latimer_road'>lu_zone_2_latimer_road</option>
<option value='lu_zone_2_ladbroke_grove'>lu_zone_2_ladbroke_grove</option>
<option value='lu_zone_2_royal_oak'>lu_zone_2_royal_oak</option>
<option value='lu_zone_2_westbourne_park'>lu_zone_2_westbourne_park</option>
<option value='lu_zone_2_queens_park'>lu_zone_2_queens_park</option>
<option value='lu_zone_2_mile_end'>lu_zone_2_mile_end</option>
<option value='lu_zone_2_bethnal_green'>lu_zone_2_bethnal_green</option>
<option value='oground_zone_2_rotherhithe'>oground_zone_2_rotherhithe</option>
<option value='lu_zone_2_kensington_olympia'>lu_zone_2_kensington_olympia</option>
<option value='lu_zone_2_finsbury_park'>lu_zone_2_finsbury_park</option>
<option value='lu_zone_2_stockwell'>lu_zone_2_stockwell</option>
<option value='lu_zone_2_hammersmith_handc_line'>lu_zone_2_hammersmith_handc_line</option>
<option value='lu_zone_2_kensal_green'>lu_zone_2_kensal_green</option>
<option value='lu_zone_2_elephant_and_castle'>lu_zone_2_elephant_and_castle</option>
<option value='lu_zone_2_warwick_avenue'>lu_zone_2_warwick_avenue</option>
<option value='lu_zone_2_maida_vale'>lu_zone_2_maida_vale</option>
<option value='lu_zone_2_kilburn_park'>lu_zone_2_kilburn_park</option>
<option value='lu_zone_2_ravenscourt_park'>lu_zone_2_ravenscourt_park</option>
<option value='lu_zone_2_hammersmith_distandpicc_line'>lu_zone_2_hammersmith_distandpicc_line</option>
<option value='lu_zone_2_kilburn'>lu_zone_2_kilburn</option>
<option value='lu_zone_2_west_hampstead'>lu_zone_2_west_hampstead</option>
<option value='lu_zone_2_swiss_cottage'>lu_zone_2_swiss_cottage</option>
<option value='lu_zone_2_finchley_road'>lu_zone_2_finchley_road</option>
<option value='lu_zone_2_archway'>lu_zone_2_archway</option>
<option value='lu_zone_2_clapham_south'>lu_zone_2_clapham_south</option>
<option value='lu_zone_2_clapham_common'>lu_zone_2_clapham_common</option>
<option value='lu_zone_2_clapham_north'>lu_zone_2_clapham_north</option>
<option value='lu_zone_2_belsize_park'>lu_zone_2_belsize_park</option>
<option value='lu_zone_2_hampstead'>lu_zone_2_hampstead</option>
<option value='lu_zone_2_mornington_crescent'>lu_zone_2_mornington_crescent</option>
<option value='lu_zone_2_chalk_farm'>lu_zone_2_chalk_farm</option>
<option value='lu_zone_2_camden_town'>lu_zone_2_camden_town</option>
<option value='lu_zone_2_kentish_town'>lu_zone_2_kentish_town</option>
<option value='lu_zone_2_tufnell_park'>lu_zone_2_tufnell_park</option>
<option value='lu_zone_2_oval'>lu_zone_2_oval</option>
<option value='lu_zone_2_kennington'>lu_zone_2_kennington</option>
<option value='lu_zone_2_east_acton'>lu_zone_2_east_acton</option>
<option value='lu_zone_2_wood_lane'>lu_zone_2_wood_lane</option>
<option value='oground_zone_2_canada_water'>oground_zone_2_canada_water</option>
<option value='oground_zone_2_shadwell'>oground_zone_2_shadwell</option>
<option value='oground_zone_2_whitechapel'>oground_zone_2_whitechapel</option>
<option value='oground_zone_2_hoxton'>oground_zone_2_hoxton</option>
<option value='oground_zone_2_haggerston'>oground_zone_2_haggerston</option>
<option value='oground_zone_2_dalston_junction'>oground_zone_2_dalston_junction</option>
<option value='oground_zone_2_new_cross'>oground_zone_2_new_cross</option>
<option value='oground_zone_2_brockley'>oground_zone_2_brockley</option>
<option value='lu_zone_2_west_kensington'>lu_zone_2_west_kensington</option>
<option value='lu_zone_2_barons_court'>lu_zone_2_barons_court</option>
<option value='lu_zone_2_fulham_broadway'>lu_zone_2_fulham_broadway</option>
<option value='lu_zone_2_west_brompton'>lu_zone_2_west_brompton</option>
<option value='lu_zone_2_stamford_brook'>lu_zone_2_stamford_brook</option>
<option value='lu_zone_2_stepney_green'>lu_zone_2_stepney_green</option>
<option value='lu_zone_2_whitechapel'>lu_zone_2_whitechapel</option>
<option value='lu_zone_2_bow_road'>lu_zone_2_bow_road</option>
<option value='lu_zone_2_st_johns_wood'>lu_zone_2_st_johns_wood</option>
<option value='lu_zone_2_canada_water'>lu_zone_2_canada_water</option>
<option value='lu_zone_2_bermondsey'>lu_zone_2_bermondsey</option>
<option value='lu_zone_2_canary_wharf'>lu_zone_2_canary_wharf</option>
<option value='oground_zone_2_bethnal_green'>oground_zone_2_bethnal_green</option>
<option value='oground_zone_2_cambridge_heath'>oground_zone_2_cambridge_heath</option>
<option value='oground_zone_2_clapham_high_street'>oground_zone_2_clapham_high_street</option>
<option value='oground_zone_2_denmark_hill'>oground_zone_2_denmark_hill</option>
<option value='oground_zone_2_hackney_downs'>oground_zone_2_hackney_downs</option>
<option value='oground_zone_2_london_fields'>oground_zone_2_london_fields</option>
<option value='oground_zone_2_peckham_rye'>oground_zone_2_peckham_rye</option>
<option value='oground_zone_2_queens_road_peckham'>oground_zone_2_queens_road_peckham</option>
<option value='oground_zone_2_rectory_road'>oground_zone_2_rectory_road</option>
<option value='oground_zone_2_wandsworth_road'>oground_zone_2_wandsworth_road</option>
<option value='oground_zone_2_stoke_newington'>oground_zone_2_stoke_newington</option>
<option value='oground_zone_2_brondesbury'>oground_zone_2_brondesbury</option>
<option value='oground_zone_2_brondesbury_park'>oground_zone_2_brondesbury_park</option>
<option value='oground_zone_2_caledonian_road_and_barnsbury'>oground_zone_2_caledonian_road_and_barnsbury</option>
<option value='oground_zone_2_camden_road'>oground_zone_2_camden_road</option>
<option value='oground_zone_2_canonbury'>oground_zone_2_canonbury</option>
<option value='oground_zone_2_dalston_kingsland'>oground_zone_2_dalston_kingsland</option>
<option value='oground_zone_2_finchley_road_and_frognal'>oground_zone_2_finchley_road_and_frognal</option>
<option value='oground_zone_2_gospel_oak'>oground_zone_2_gospel_oak</option>
<option value='oground_zone_2_hackney_central'>oground_zone_2_hackney_central</option>
<option value='oground_zone_2_hackney_wick'>oground_zone_2_hackney_wick</option>
<option value='oground_zone_2_hampstead_heath'>oground_zone_2_hampstead_heath</option>
<option value='oground_zone_2_homerton'>oground_zone_2_homerton</option>
<option value='oground_zone_2_kensal_green'>oground_zone_2_kensal_green</option>
<option value='oground_zone_2_kensal_rise'>oground_zone_2_kensal_rise</option>
<option value='oground_zone_2_kentish_town_west'>oground_zone_2_kentish_town_west</option>
<option value='oground_zone_2_kilburn_high_road'>oground_zone_2_kilburn_high_road</option>
<option value='oground_zone_2_new_cross_gate'>oground_zone_2_new_cross_gate</option>
<option value='dlr_zone_2_all_saints_dlr'>dlr_zone_2_all_saints_dlr</option>
<option value='dlr_zone_2_blackwall_dlr'>dlr_zone_2_blackwall_dlr</option>
<option value='dlr_zone_2_bow_church_dlr'>dlr_zone_2_bow_church_dlr</option>
<option value='dlr_zone_2_canary_wharf_dlr'>dlr_zone_2_canary_wharf_dlr</option>
<option value='dlr_zone_2_crossharbour_dlr'>dlr_zone_2_crossharbour_dlr</option>
<option value='dlr_zone_2_cutty_sark_dlr'>dlr_zone_2_cutty_sark_dlr</option>
<option value='dlr_zone_2_deptford_bridge_dlr'>dlr_zone_2_deptford_bridge_dlr</option>
<option value='dlr_zone_2_devons_road_dlr'>dlr_zone_2_devons_road_dlr</option>
<option value='dlr_zone_2_elverson_road_dlr'>dlr_zone_2_elverson_road_dlr</option>
<option value='dlr_zone_2_heron_quays_dlr'>dlr_zone_2_heron_quays_dlr</option>
<option value='dlr_zone_2_island_gardens_dlr'>dlr_zone_2_island_gardens_dlr</option>
<option value='dlr_zone_2_langdon_park_dlr'>dlr_zone_2_langdon_park_dlr</option>
<option value='dlr_zone_2_lewisham_dlr'>dlr_zone_2_lewisham_dlr</option>
<option value='dlr_zone_2_limehouse_dlr'>dlr_zone_2_limehouse_dlr</option>
<option value='dlr_zone_2_mudchute_dlr'>dlr_zone_2_mudchute_dlr</option>
<option value='dlr_zone_2_poplar_dlr'>dlr_zone_2_poplar_dlr</option>
<option value='dlr_zone_2_shadwell_dlr'>dlr_zone_2_shadwell_dlr</option>
<option value='dlr_zone_2_south_quay_dlr'>dlr_zone_2_south_quay_dlr</option>
<option value='dlr_zone_2_west_india_quay_dlr'>dlr_zone_2_west_india_quay_dlr</option>
<option value='dlr_zone_2_westferry_dlr'>dlr_zone_2_westferry_dlr</option>
<option value='oground_zone_2_south_hampstead'>oground_zone_2_south_hampstead</option>
<option value='oground_zone_2_surrey_quays'>oground_zone_2_surrey_quays</option>
<option value='oground_zone_2_upper_holloway'>oground_zone_2_upper_holloway</option>
<option value='oground_zone_2_wapping'>oground_zone_2_wapping</option>
<option value='oground_zone_2_west_hampstead'>oground_zone_2_west_hampstead</option>
<option value='oground_zone_2_shepherds_bush'>oground_zone_2_shepherds_bush</option>
<option value='oground_zone_2_kensington_olympia'>oground_zone_2_kensington_olympia</option>
<option value='oground_zone_2_westompton'>oground_zone_2_westompton</option>
<option value='oground_zone_2_clapham_junction'>oground_zone_2_clapham_junction</option>
<option value='oground_zone_2_imperial_wharf'>oground_zone_2_imperial_wharf</option>
<option value='oground_zone_2_queens_park'>oground_zone_2_queens_park</option>
<option value='oground_zone_2_highbury_and_islington'>oground_zone_2_highbury_and_islington</option>
<option value='lu_zone_3_chiswick_park'>lu_zone_3_chiswick_park</option>
<option value='lu_zone_3_wimbledon_park'>lu_zone_3_wimbledon_park</option>
<option value='lu_zone_3_southfields'>lu_zone_3_southfields</option>
<option value='lu_zone_3_seven_sisters'>lu_zone_3_seven_sisters</option>
<option value='lu_zone_3_blackhorse_road'>lu_zone_3_blackhorse_road</option>
<option value='lu_zone_3_tottenham_hale'>lu_zone_3_tottenham_hale</option>
<option value='lu_zone_3_brent_cross'>lu_zone_3_brent_cross</option>
<option value='lu_zone_3_golders_green'>lu_zone_3_golders_green</option>
<option value='lu_zone_3_south_ealing'>lu_zone_3_south_ealing</option>
<option value='lu_zone_3_north_ealing'>lu_zone_3_north_ealing</option>
<option value='lu_zone_3_park_royal'>lu_zone_3_park_royal</option>
<option value='lu_zone_3_hanger_lane'>lu_zone_3_hanger_lane</option>
<option value='lu_zone_3_north_acton'>lu_zone_3_north_acton</option>
<option value='lu_zone_3_leyton'>lu_zone_3_leyton</option>
<option value='lu_zone_3_bromley_by_bow'>lu_zone_3_bromley_by_bow</option>
<option value='lu_zone_3_plaistow'>lu_zone_3_plaistow</option>
<option value='lu_zone_3_upton_park'>lu_zone_3_upton_park</option>
<option value='lu_zone_3_turnpike_lane'>lu_zone_3_turnpike_lane</option>
<option value='lu_zone_3_wood_green'>lu_zone_3_wood_green</option>
<option value='lu_zone_3_bounds_green'>lu_zone_3_bounds_green</option>
<option value='lu_zone_3_west_ham'>lu_zone_3_west_ham</option>
<option value='lu_zone_3_walthamstow_central'>lu_zone_3_walthamstow_central</option>
<option value='lu_zone_3_ealing_broadway'>lu_zone_3_ealing_broadway</option>
<option value='lu_zone_3_acton_town'>lu_zone_3_acton_town</option>
<option value='lu_zone_3_ealing_common'>lu_zone_3_ealing_common</option>
<option value='lu_zone_3_south_wimbledon'>lu_zone_3_south_wimbledon</option>
<option value='lu_zone_3_northfields'>lu_zone_3_northfields</option>
<option value='lu_zone_3_harlesden'>lu_zone_3_harlesden</option>
<option value='lu_zone_3_kew_gardens'>lu_zone_3_kew_gardens</option>
<option value='lu_zone_3_gunnersbury'>lu_zone_3_gunnersbury</option>
<option value='lu_zone_3_north_greenwich'>lu_zone_3_north_greenwich</option>
<option value='lu_zone_3_canning_town'>lu_zone_3_canning_town</option>
<option value='lu_zone_3_willesden_green'>lu_zone_3_willesden_green</option>
<option value='lu_zone_3_colliers_wood'>lu_zone_3_colliers_wood</option>
<option value='lu_zone_3_tooting_broadway'>lu_zone_3_tooting_broadway</option>
<option value='lu_zone_3_tooting_bec'>lu_zone_3_tooting_bec</option>
<option value='lu_zone_3_balham'>lu_zone_3_balham</option>
<option value='lu_zone_3_hendon_central'>lu_zone_3_hendon_central</option>
<option value='lu_zone_3_wimbledon'>lu_zone_3_wimbledon</option>
<option value='oground_zone_3_honor_oak_park'>oground_zone_3_honor_oak_park</option>
<option value='oground_zone_3_forest_hill'>oground_zone_3_forest_hill</option>
<option value='oground_zone_3_sydenham'>oground_zone_3_sydenham</option>
<option value='lu_zone_3_turnham_green'>lu_zone_3_turnham_green</option>
<option value='lu_zone_3_neasden'>lu_zone_3_neasden</option>
<option value='lu_zone_3_dollis_hill'>lu_zone_3_dollis_hill</option>
<option value='lu_zone_3_stonebridge_park'>lu_zone_3_stonebridge_park</option>
<option value='lu_zone_3_willesden_junction'>lu_zone_3_willesden_junction</option>
<option value='lu_zone_3_east_finchley'>lu_zone_3_east_finchley</option>
<option value='lu_zone_3_highgate'>lu_zone_3_highgate</option>
<option value='lu_zone_3_west_acton'>lu_zone_3_west_acton</option>
<option value='lu_zone_3_stratford'>lu_zone_3_stratford</option>
<option value='oground_zone_3_bruce_grove'>oground_zone_3_bruce_grove</option>
<option value='oground_zone_3_seven_sisters'>oground_zone_3_seven_sisters</option>
<option value='oground_zone_3_walthamstow_st_james_street'>oground_zone_3_walthamstow_st_james_street</option>
<option value='oground_zone_3_white_hart_lane'>oground_zone_3_white_hart_lane</option>
<option value='oground_zone_3_stamford_hill'>oground_zone_3_stamford_hill</option>
<option value='oground_zone_3_acton_central'>oground_zone_3_acton_central</option>
<option value='oground_zone_3_blackhorse_road'>oground_zone_3_blackhorse_road</option>
<option value='oground_zone_3_crouch_hill'>oground_zone_3_crouch_hill</option>
<option value='oground_zone_3_harlesden'>oground_zone_3_harlesden</option>
<option value='oground_zone_3_harringay_green_lanes'>oground_zone_3_harringay_green_lanes</option>
<option value='oground_zone_3_kew_gardens'>oground_zone_3_kew_gardens</option>
<option value='oground_zone_3_leyton_midland_road'>oground_zone_3_leyton_midland_road</option>
<option value='oground_zone_3_leytonstone_high_road'>oground_zone_3_leytonstone_high_road</option>
<option value='tfl_rail_zone_3_stratford'>tfl_rail_zone_3_stratford</option>
<option value='tfl_rail_zone_3_maryland'>tfl_rail_zone_3_maryland</option>
<option value='tfl_rail_zone_3_forest_gate'>tfl_rail_zone_3_forest_gate</option>
<option value='tramlink_zone_3_wimbledon_tramlink'>tramlink_zone_3_wimbledon_tramlink</option>
<option value='tramlink_zone_3_dundonald_road'>tramlink_zone_3_dundonald_road</option>
<option value='tramlink_zone_3_merton_park'>tramlink_zone_3_merton_park</option>
<option value='dlr_zone_3_beckton_dlr'>dlr_zone_3_beckton_dlr</option>
<option value='dlr_zone_3_beckton_park_dlr'>dlr_zone_3_beckton_park_dlr</option>
<option value='dlr_zone_3_custom_house_dlr'>dlr_zone_3_custom_house_dlr</option>
<option value='dlr_zone_3_cyprus_dlr'>dlr_zone_3_cyprus_dlr</option>
<option value='dlr_zone_3_gallions_reach_dlr'>dlr_zone_3_gallions_reach_dlr</option>
<option value='dlr_zone_3_king_george_v_dlr'>dlr_zone_3_king_george_v_dlr</option>
<option value='dlr_zone_3_london_city_airport_dlr'>dlr_zone_3_london_city_airport_dlr</option>
<option value='dlr_zone_3_pontoon_dock_dlr'>dlr_zone_3_pontoon_dock_dlr</option>
<option value='dlr_zone_3_prince_regent_dlr'>dlr_zone_3_prince_regent_dlr</option>
<option value='dlr_zone_3_royal_albert_dlr'>dlr_zone_3_royal_albert_dlr</option>
<option value='dlr_zone_3_royal_victoria_dlr'>dlr_zone_3_royal_victoria_dlr</option>
<option value='dlr_zone_3_west_silvertown_dlr'>dlr_zone_3_west_silvertown_dlr</option>
<option value='dlr_zone_3_canning_town_dlr'>dlr_zone_3_canning_town_dlr</option>
<option value='dlr_zone_3_east_india_dlr'>dlr_zone_3_east_india_dlr</option>
<option value='dlr_zone_3_greenwich_dlr'>dlr_zone_3_greenwich_dlr</option>
<option value='dlr_zone_3_pudding_mill_lane_dlr'>dlr_zone_3_pudding_mill_lane_dlr</option>
<option value='dlr_zone_3_west_ham_dlr'>dlr_zone_3_west_ham_dlr</option>
<option value='dlr_zone_3_stratford_dlr'>dlr_zone_3_stratford_dlr</option>
<option value='dlr_zone_3_star_lane_dlr'>dlr_zone_3_star_lane_dlr</option>
<option value='dlr_zone_3_abbey_road_dlr'>dlr_zone_3_abbey_road_dlr</option>
<option value='dlr_zone_3_stratford_high_street_dlr'>dlr_zone_3_stratford_high_street_dlr</option>
<option value='dlr_zone_3_stratford_international_dlr'>dlr_zone_3_stratford_international_dlr</option>
<option value='oground_zone_3_south_acton'>oground_zone_3_south_acton</option>
<option value='oground_zone_3_south_tottenham'>oground_zone_3_south_tottenham</option>
<option value='oground_zone_3_stonebridge_park'>oground_zone_3_stonebridge_park</option>
<option value='oground_zone_3_walthamstow_queens_road'>oground_zone_3_walthamstow_queens_road</option>
<option value='oground_zone_3_wanstead_park'>oground_zone_3_wanstead_park</option>
<option value='oground_zone_3_gunnersbury'>oground_zone_3_gunnersbury</option>
<option value='oground_zone_3_stratford'>oground_zone_3_stratford</option>
<option value='lu_zone_4_hainault'>lu_zone_4_hainault</option>
<option value='lu_zone_4_grange_hill'>lu_zone_4_grange_hill</option>
<option value='lu_zone_4_colindale'>lu_zone_4_colindale</option>
<option value='lu_zone_4_burnt_oak'>lu_zone_4_burnt_oak</option>
<option value='lu_zone_4_mill_hill_east'>lu_zone_4_mill_hill_east</option>
<option value='lu_zone_4_finchley_central'>lu_zone_4_finchley_central</option>
<option value='lu_zone_4_sudbury_hill'>lu_zone_4_sudbury_hill</option>
<option value='lu_zone_4_sudbury_town'>lu_zone_4_sudbury_town</option>
<option value='lu_zone_4_alperton'>lu_zone_4_alperton</option>
<option value='lu_zone_4_arnos_grove'>lu_zone_4_arnos_grove</option>
<option value='lu_zone_4_southgate'>lu_zone_4_southgate</option>
<option value='lu_zone_4_perivale'>lu_zone_4_perivale</option>
<option value='lu_zone_4_greenford'>lu_zone_4_greenford</option>
<option value='lu_zone_4_snaresbrook'>lu_zone_4_snaresbrook</option>
<option value='lu_zone_4_leytonstone'>lu_zone_4_leytonstone</option>
<option value='lu_zone_4_wanstead'>lu_zone_4_wanstead</option>
<option value='lu_zone_4_redbridge'>lu_zone_4_redbridge</option>
<option value='lu_zone_4_gants_hill'>lu_zone_4_gants_hill</option>
<option value='lu_zone_4_south_woodford'>lu_zone_4_south_woodford</option>
<option value='lu_zone_4_newbury_park'>lu_zone_4_newbury_park</option>
<option value='lu_zone_4_barkingside'>lu_zone_4_barkingside</option>
<option value='lu_zone_4_fairlop'>lu_zone_4_fairlop</option>
<option value='lu_zone_4_woodford'>lu_zone_4_woodford</option>
<option value='lu_zone_4_roding_valley'>lu_zone_4_roding_valley</option>
<option value='lu_zone_4_chigwell'>lu_zone_4_chigwell</option>
<option value='lu_zone_4_east_ham'>lu_zone_4_east_ham</option>
<option value='lu_zone_4_upney'>lu_zone_4_upney</option>
<option value='lu_zone_4_barking'>lu_zone_4_barking</option>
<option value='lu_zone_4_morden'>lu_zone_4_morden</option>
<option value='lu_zone_4_hounslow_central'>lu_zone_4_hounslow_central</option>
<option value='lu_zone_4_hounslow_east'>lu_zone_4_hounslow_east</option>
<option value='lu_zone_4_osterley'>lu_zone_4_osterley</option>
<option value='lu_zone_4_boston_manor'>lu_zone_4_boston_manor</option>
<option value='lu_zone_4_wembley_central'>lu_zone_4_wembley_central</option>
<option value='lu_zone_4_north_wembley'>lu_zone_4_north_wembley</option>
<option value='lu_zone_4_richmond'>lu_zone_4_richmond</option>
<option value='lu_zone_4_preston_road'>lu_zone_4_preston_road</option>
<option value='lu_zone_4_wembley_park'>lu_zone_4_wembley_park</option>
<option value='lu_zone_4_kingsbury'>lu_zone_4_kingsbury</option>
<option value='lu_zone_4_queensbury'>lu_zone_4_queensbury</option>
<option value='lu_zone_4_south_kenton'>lu_zone_4_south_kenton</option>
<option value='lu_zone_4_kenton'>lu_zone_4_kenton</option>
<option value='lu_zone_4_woodside_park'>lu_zone_4_woodside_park</option>
<option value='lu_zone_4_west_finchley'>lu_zone_4_west_finchley</option>
<option value='lu_zone_4_totteridge_and_whetstone'>lu_zone_4_totteridge_and_whetstone</option>
<option value='lu_zone_4_northwick_park'>lu_zone_4_northwick_park</option>
<option value='oground_zone_4_norwood_junction'>oground_zone_4_norwood_junction</option>
<option value='oground_zone_4_edmondton_green'>oground_zone_4_edmondton_green</option>
<option value='oground_zone_4_highams_park'>oground_zone_4_highams_park</option>
<option value='oground_zone_4_walthamstow_wood_street'>oground_zone_4_walthamstow_wood_street</option>
<option value='oground_zone_4_silver_street'>oground_zone_4_silver_street</option>
<option value='oground_zone_4_kenton'>oground_zone_4_kenton</option>
<option value='oground_zone_4_north_wembley'>oground_zone_4_north_wembley</option>
<option value='tfl_rail_zone_4_manor_park'>tfl_rail_zone_4_manor_park</option>
<option value='tfl_rail_zone_4_ilford'>tfl_rail_zone_4_ilford</option>
<option value='tfl_rail_zone_4_seven_kings'>tfl_rail_zone_4_seven_kings</option>
<option value='tfl_rail_zone_4_goodmayes'>tfl_rail_zone_4_goodmayes</option>
<option value='tramlink_zone_4_morden_road'>tramlink_zone_4_morden_road</option>
<option value='tramlink_zone_4_phipps_bridge'>tramlink_zone_4_phipps_bridge</option>
<option value='tramlink_zone_4_belgrave_walk'>tramlink_zone_4_belgrave_walk</option>
<option value='tramlink_zone_4_mitcham'>tramlink_zone_4_mitcham</option>
<option value='tramlink_zone_4_mitcham_junction_tramlink'>tramlink_zone_4_mitcham_junction_tramlink</option>
<option value='tramlink_zone_4_beddington_lane'>tramlink_zone_4_beddington_lane</option>
<option value='tramlink_zone_4_therapia_lane'>tramlink_zone_4_therapia_lane</option>
<option value='tramlink_zone_4_ampere_way'>tramlink_zone_4_ampere_way</option>
<option value='tramlink_zone_4_arena'>tramlink_zone_4_arena</option>
<option value='tramlink_zone_4_elmers_end_tramlink'>tramlink_zone_4_elmers_end_tramlink</option>
<option value='tramlink_zone_4_harrington_road'>tramlink_zone_4_harrington_road</option>
<option value='tramlink_zone_4_birkbeck_tramlink'>tramlink_zone_4_birkbeck_tramlink</option>
<option value='tramlink_zone_4_avenue_road'>tramlink_zone_4_avenue_road</option>
<option value='tramlink_zone_4_beckenham_road'>tramlink_zone_4_beckenham_road</option>
<option value='tramlink_zone_4_beckenham_junction_tramlink'>tramlink_zone_4_beckenham_junction_tramlink</option>
<option value='dlr_zone_4_woolwich_arsenal_dlr'>dlr_zone_4_woolwich_arsenal_dlr</option>
<option value='oground_zone_4_penge_west'>oground_zone_4_penge_west</option>
<option value='oground_zone_4_anerley'>oground_zone_4_anerley</option>
<option value='oground_zone_4_south_kenton'>oground_zone_4_south_kenton</option>
<option value='oground_zone_4_wembley_central'>oground_zone_4_wembley_central</option>
<option value='oground_zone_4_barking'>oground_zone_4_barking</option>
<option value='oground_zone_4_richmond'>oground_zone_4_richmond</option>
<option value='lu_zone_5_becontree'>lu_zone_5_becontree</option>
<option value='lu_zone_5_dagenham_heathway'>lu_zone_5_dagenham_heathway</option>
<option value='lu_zone_5_buckhurst_hill'>lu_zone_5_buckhurst_hill</option>
<option value='lu_zone_5_edgware'>lu_zone_5_edgware</option>
<option value='lu_zone_5_cockfosters'>lu_zone_5_cockfosters</option>
<option value='lu_zone_5_oakwood'>lu_zone_5_oakwood</option>
<option value='lu_zone_5_ruislip_gardens'>lu_zone_5_ruislip_gardens</option>
<option value='lu_zone_5_south_ruislip'>lu_zone_5_south_ruislip</option>
<option value='lu_zone_5_northolt'>lu_zone_5_northolt</option>
<option value='lu_zone_5_hounslow_west'>lu_zone_5_hounslow_west</option>
<option value='lu_zone_5_south_harrow'>lu_zone_5_south_harrow</option>
<option value='lu_zone_5_harrow_and_wealdstone'>lu_zone_5_harrow_and_wealdstone</option>
<option value='lu_zone_5_high_barnet'>lu_zone_5_high_barnet</option>
<option value='lu_zone_5_eastcote'>lu_zone_5_eastcote</option>
<option value='lu_zone_5_west_harrow'>lu_zone_5_west_harrow</option>
<option value='lu_zone_5_rayners_lane'>lu_zone_5_rayners_lane</option>
<option value='lu_zone_5_north_harrow'>lu_zone_5_north_harrow</option>
<option value='lu_zone_5_pinner'>lu_zone_5_pinner</option>
<option value='lu_zone_5_harrow_on_the_hill'>lu_zone_5_harrow_on_the_hill</option>
<option value='lu_zone_5_stanmore'>lu_zone_5_stanmore</option>
<option value='lu_zone_5_canons_park'>lu_zone_5_canons_park</option>
<option value='lu_zone_5_dagenham_east'>lu_zone_5_dagenham_east</option>
<option value='oground_zone_5_west_croydon'>oground_zone_5_west_croydon</option>
<option value='oground_zone_5_bush_hill_park'>oground_zone_5_bush_hill_park</option>
<option value='oground_zone_5_chingford'>oground_zone_5_chingford</option>
<option value='oground_zone_5_enfield_town'>oground_zone_5_enfield_town</option>
<option value='oground_zone_5_southbury'>oground_zone_5_southbury</option>
<option value='oground_zone_5_headstone_lane'>oground_zone_5_headstone_lane</option>
<option value='tfl_rail_zone_5_chadwell_heath'>tfl_rail_zone_5_chadwell_heath</option>
<option value='tramlink_zone_5_waddon_marsh'>tramlink_zone_5_waddon_marsh</option>
<option value='tramlink_zone_5_wandle_park'>tramlink_zone_5_wandle_park</option>
<option value='tramlink_zone_5_reeves_corner'>tramlink_zone_5_reeves_corner</option>
<option value='tramlink_zone_5_centrale'>tramlink_zone_5_centrale</option>
<option value='tramlink_zone_5_west_croydon_tramlink'>tramlink_zone_5_west_croydon_tramlink</option>
<option value='tramlink_zone_5_wellesley_road'>tramlink_zone_5_wellesley_road</option>
<option value='tramlink_zone_5_church_street'>tramlink_zone_5_church_street</option>
<option value='tramlink_zone_5_george_street'>tramlink_zone_5_george_street</option>
<option value='tramlink_zone_5_east_croydon_tramlink'>tramlink_zone_5_east_croydon_tramlink</option>
<option value='tramlink_zone_5_lebanon_road'>tramlink_zone_5_lebanon_road</option>
<option value='tramlink_zone_5_sandilands'>tramlink_zone_5_sandilands</option>
<option value='tramlink_zone_5_lloyd_park'>tramlink_zone_5_lloyd_park</option>
<option value='tramlink_zone_5_coombe_lane'>tramlink_zone_5_coombe_lane</option>
<option value='tramlink_zone_5_addiscombe'>tramlink_zone_5_addiscombe</option>
<option value='tramlink_zone_5_blackhorse_lane'>tramlink_zone_5_blackhorse_lane</option>
<option value='tramlink_zone_5_woodside'>tramlink_zone_5_woodside</option>
<option value='oground_zone_5_harrow_and_wealdstone'>oground_zone_5_harrow_and_wealdstone</option>
<option value='lu_zone_6_loughton'>lu_zone_6_loughton</option>
<option value='lu_zone_6_debden'>lu_zone_6_debden</option>
<option value='lu_zone_6_theydon_bois'>lu_zone_6_theydon_bois</option>
<option value='lu_zone_6_epping'>lu_zone_6_epping</option>
<option value='lu_zone_6_elm_park'>lu_zone_6_elm_park</option>
<option value='lu_zone_6_hornchurch'>lu_zone_6_hornchurch</option>
<option value='lu_zone_6_heathrow_terminals_1_2_3'>lu_zone_6_heathrow_terminals_1_2_3</option>
<option value='lu_zone_6_upminster_bridge'>lu_zone_6_upminster_bridge</option>
<option value='lu_zone_6_west_ruislip'>lu_zone_6_west_ruislip</option>
<option value='lu_zone_6_upminster'>lu_zone_6_upminster</option>
<option value='lu_zone_6_hatton_cross'>lu_zone_6_hatton_cross</option>
<option value='lu_zone_6_northwood'>lu_zone_6_northwood</option>
<option value='lu_zone_6_heathrow_terminal_5'>lu_zone_6_heathrow_terminal_5</option>
<option value='lu_zone_6_heathrow_terminal_4'>lu_zone_6_heathrow_terminal_4</option>
<option value='lu_zone_6_uxbridge'>lu_zone_6_uxbridge</option>
<option value='lu_zone_6_hillingdon'>lu_zone_6_hillingdon</option>
<option value='lu_zone_6_ickenham'>lu_zone_6_ickenham</option>
<option value='lu_zone_6_ruislip'>lu_zone_6_ruislip</option>
<option value='lu_zone_6_ruislip_manor'>lu_zone_6_ruislip_manor</option>
<option value='lu_zone_6_northwood_hills'>lu_zone_6_northwood_hills</option>
<option value='oground_zone_6_emerson_park'>oground_zone_6_emerson_park</option>
<option value='oground_zone_6_romford'>oground_zone_6_romford</option>
<option value='oground_zone_6_turkey_street'>oground_zone_6_turkey_street</option>
<option value='oground_zone_6_upminster'>oground_zone_6_upminster</option>
<option value='oground_zone_6_hatch_end'>oground_zone_6_hatch_end</option>
<option value='tfl_rail_zone_6_romford'>tfl_rail_zone_6_romford</option>
<option value='tfl_rail_zone_6_gidea_park'>tfl_rail_zone_6_gidea_park</option>
<option value='tfl_rail_zone_6_harold_wood'>tfl_rail_zone_6_harold_wood</option>
<option value='tramlink_zone_6_gravel_hill'>tramlink_zone_6_gravel_hill</option>
<option value='tramlink_zone_6_addington_village'>tramlink_zone_6_addington_village</option>
<option value='tramlink_zone_6_new_addington'>tramlink_zone_6_new_addington</option>
<option value='tramlink_zone_6_king_henrys_drive'>tramlink_zone_6_king_henrys_drive</option>
<option value='tramlink_zone_6_fieldway'>tramlink_zone_6_fieldway</option>
<option value='lu_zone_7_chorleywood'>lu_zone_7_chorleywood</option>
<option value='lu_zone_7_rickmansworth'>lu_zone_7_rickmansworth</option>
<option value='lu_zone_7_moor_park'>lu_zone_7_moor_park</option>
<option value='lu_zone_7_croxley'>lu_zone_7_croxley</option>
<option value='lu_zone_7_watford'>lu_zone_7_watford</option>
<option value='oground_zone_7_theobalds_grove'>oground_zone_7_theobalds_grove</option>
<option value='oground_zone_7_carpenders_park'>oground_zone_7_carpenders_park</option>
<option value='lu_zone_8_chalfont_and_latimer'>lu_zone_8_chalfont_and_latimer</option>
<option value='oground_zone_8_cheshunt'>oground_zone_8_cheshunt</option>
<option value='oground_zone_8_watford_high_street'>oground_zone_8_watford_high_street</option>
<option value='oground_zone_8_watford_junction'>oground_zone_8_watford_junction</option>
<option value='oground_zone_8_bushey'>oground_zone_8_bushey</option>
<option value='lu_zone_9_chesham'>lu_zone_9_chesham</option>
<option value='lu_zone_9_amersham'>lu_zone_9_amersham</option>
<option value='oground_zone_0_clapton'>oground_zone_0_clapton</option>
<option value='oground_zone_0_crystal_palace'>oground_zone_0_crystal_palace</option>
<option value='tfl_rail_zone_0_brentwood'>tfl_rail_zone_0_brentwood</option>
<option value='tfl_rail_zone_0_shenfield'>tfl_rail_zone_0_shenfield</option>
<option value='oground_zone_0_woodgrange_park'>oground_zone_0_woodgrange_park</option>
<option value='oground_zone_0_willesden_junction'>oground_zone_0_willesden_junction</option>
				
				
				
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
