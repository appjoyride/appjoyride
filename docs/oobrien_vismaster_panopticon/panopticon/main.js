var counterInterval;
var currcount;
var lon;
var lat;

var locations = {};
locations.trafalgarsq = [51.50799, -0.12816];
locations.oxfordcircus = [51.51527, -0.14246];
locations.camdentown = [51.53874, -0.14245];
locations.oldstreet = [51.52565, -0.08692];
locations.tottenhamhale = [51.5883, -0.0562];
locations.bigben = [51.50068, -0.12458];
locations.stratford = [51.54189, 0.00048];
locations.clapham = [51.46208, -0.13752];
locations.tooting = [51.43226, -0.16385];
locations.angel = [51.53189, -0.10628];
locations.dalston = [51.54618, -0.07561];
locations.hammersmith = [51.49226, -0.22363];
locations.putney = [51.46310, -0.21593];
locations.croydon = [51.37365, -0.10119];
locations.blackfriars = [51.50990, -0.10436];
locations.bloomsbury = [51.52453, -0.13390];
locations.bank = [51.51337, -0.08898];
locations.towerhill = [51.5080189, -0.0747825];
locations.londonbridge = [51.5061573,-0.0906167];
locations.columbiaroad = [51.5284168,-0.0717735];
locations.cityroadmcdonalds = [51.5290538,-0.0952865];
locations.hydepark_picadilly = [51.503094,-0.153147];
locations.hydepark_oxfordstreet = [51.512593,-0.1596869];
locations.hydepark_exhibitionroad = [51.50173,-0.1751688];
locations.clapham_south = [51.453853,-0.149184];

locations.dlr_zone_1_bank_dlr = [51.51286207, -0.087316571];
locations.dlr_zone_1_tower_gateway_dlr = [51.51011047, -0.073061976];
// locations.dlr_zone_2_all_saints_dlr = [51.51051157, -0.011456278];
// locations.dlr_zone_2_blackwall_dlr = [51.50745237, -0.005550544];
// locations.dlr_zone_2_bow_church_dlr = [51.52715522, -0.01918061];
// locations.dlr_zone_2_canary_wharf_dlr = [51.50461022, -0.019337121];
// locations.dlr_zone_2_crossharbour_dlr = [51.49538997, -0.012863868];
// locations.dlr_zone_2_cutty_sark_dlr = [51.48115778, -0.009463903];
// locations.dlr_zone_2_deptford_bridge_dlr = [51.47378671, -0.020845808];
// locations.dlr_zone_2_devons_road_dlr = [51.52195436, -0.015859691];
// locations.dlr_zone_2_elverson_road_dlr = [51.46817948, -0.014766759];
// locations.dlr_zone_2_heron_quays_dlr = [51.50281981, -0.019832666];
// locations.dlr_zone_2_island_gardens_dlr = [51.48754261, -0.008883221];
// locations.dlr_zone_2_langdon_park_dlr = [51.51456754, -0.012505001];
// locations.dlr_zone_2_lewisham_dlr = [51.46513641, -0.012465383];
// locations.dlr_zone_2_limehouse_dlr = [51.51179704, -0.038095069];
// locations.dlr_zone_2_mudchute_dlr = [51.49037168, -0.013413578];
// locations.dlr_zone_2_poplar_dlr = [51.50720026, -0.015607274];
// locations.dlr_zone_2_shadwell_dlr = [51.51118155, -0.05512963];
// locations.dlr_zone_2_south_quay_dlr = [51.50009877, -0.017414424];
// locations.dlr_zone_2_west_india_quay_dlr = [51.50697183, -0.018586106];
// locations.dlr_zone_2_westferry_dlr = [51.50899182, -0.025301528];
// locations.dlr_zone_3_abbey_road_dlr = [51.5318653, 0.005308217];
// locations.dlr_zone_3_beckton_dlr = [51.51390419, 0.063442568];
// locations.dlr_zone_3_beckton_park_dlr = [51.50826026, 0.056557435];
// locations.dlr_zone_3_canning_town_dlr = [51.51339633, 0.009772469];
// locations.dlr_zone_3_custom_house_dlr = [51.50922299, 0.028149357];
// locations.dlr_zone_3_cyprus_dlr = [51.50798477, 0.065567428];
// locations.dlr_zone_3_east_india_dlr = [51.50887121, -0.000674542];
// locations.dlr_zone_3_gallions_reach_dlr = [51.50846722, 0.073386821];
// locations.dlr_zone_3_greenwich_dlr = [51.47760944, -0.011836627];
// locations.dlr_zone_3_king_george_v_dlr = [51.50151128, 0.063920007];
// locations.dlr_zone_3_london_city_airport_dlr = [51.50315378, 0.04977043];
// locations.dlr_zone_3_pontoon_dock_dlr = [51.50176796, 0.03485088];
// locations.dlr_zone_3_prince_regent_dlr = [51.50885626, 0.035815177];
// locations.dlr_zone_3_pudding_mill_lane_dlr = [51.53368602, -0.012349897];
// locations.dlr_zone_3_royal_albert_dlr = [51.50789742, 0.047489859];
// locations.dlr_zone_3_royal_victoria_dlr = [51.50871834, 0.019349595];
// locations.dlr_zone_3_star_lane_dlr = [51.52030887, 0.005780604];
// locations.dlr_zone_3_stratford_dlr = [51.54086921, -0.001594174];
// locations.dlr_zone_3_stratford_high_street_dlr = [51.53752645, 0.000869889];
// locations.dlr_zone_3_stratford_international_dlr = [51.54433906, -0.007832275];
// locations.dlr_zone_3_west_ham_dlr = [51.52774122, 0.006640951];
// locations.dlr_zone_3_west_silvertown_dlr = [51.50237959, 0.023940282];
// locations.dlr_zone_4_woolwich_arsenal_dlr = [51.48946942, 0.070492592];
// locations.lu_zone_1_aldgate = [51.51398203, -0.0742363];
// locations.lu_zone_1_aldgate_east = [51.51491653, -0.069540402];
// locations.lu_zone_1_angel = [51.5309796, -0.103116359];
// locations.lu_zone_1_baker_street = [51.52249387, -0.155454387];
// locations.lu_zone_1_bank = [51.51291511, -0.08729695];
// locations.lu_zone_1_barbican = [51.51969921, -0.097189673];
// locations.lu_zone_1_bayswater = [51.51181507, -0.186322701];
// locations.lu_zone_1_blackfriars = [51.51111447, -0.102020251];
// locations.lu_zone_1_bond_street = [51.51387033, -0.148076884];
// locations.lu_zone_1_borough = [51.50067969, -0.091702818];
// locations.lu_zone_1_cannon_street = [51.51096254, -0.088801035];
// locations.lu_zone_1_chancery_lane = [51.5177395, -0.109960547];
// locations.lu_zone_1_charing_cross = [51.50686754, -0.125777173];
// locations.lu_zone_1_covent_garden = [51.51263471, -0.122759938];
// locations.lu_zone_1_earls_court = [51.4914734, -0.19157701];
// locations.lu_zone_1_edgware_road_bakerloo = [51.51996099, -0.168645951];
// locations.lu_zone_1_edgware_road_circle_line = [51.51936413, -0.166170742];
// locations.lu_zone_1_embankment = [51.50694137, -0.120562428];
// locations.lu_zone_1_euston = [51.52757668, -0.132992071];
// locations.lu_zone_1_euston_square = [51.52512499, -0.134270582];
// locations.lu_zone_1_farringdon = [51.51996102, -0.103582415];
// locations.lu_zone_1_gloucester_road = [51.49397763, -0.182135121];
// locations.lu_zone_1_goodge_street = [51.52009307, -0.132736642];
// locations.lu_zone_1_great_portland_street = [51.52333822, -0.142685711];
// locations.lu_zone_1_green_park = [51.50635747, -0.140937126];
// locations.lu_zone_1_high_street_kensington = [51.49993492, -0.190607248];
// locations.lu_zone_1_holborn = [51.51706879, -0.1188087];
// locations.lu_zone_1_hyde_park_corner = [51.50224103, -0.152546395];
// locations.lu_zone_1_kings_cross_st_pancras = [51.52927728, -0.123168404];
// locations.lu_zone_1_knightsbridge = [51.50073061, -0.159863737];
// locations.lu_zone_1_lambeth_north = [51.49833058, -0.110624882];
// locations.lu_zone_1_lancaster_gate = [51.51117805, -0.173843886];
// locations.lu_zone_1_leicester_square = [51.51089472, -0.126725567];
// locations.lu_zone_1_liverpool_street = [51.5168424, -0.081601363];
// locations.lu_zone_1_london_bridge = [51.50455372, -0.088037808];
// locations.lu_zone_1_mansion_house = [51.51130597, -0.092495313];
// locations.lu_zone_1_marble_arch = [51.51309055, -0.155755638];
// locations.lu_zone_1_marylebone = [51.52165079, -0.162637346];
// locations.lu_zone_1_monument = [51.51020898, -0.084502291];
// locations.lu_zone_1_moorgate = [51.5178533, -0.087700241];
// locations.lu_zone_1_notting_hill_gate = [51.5086469, -0.194491212];
// locations.lu_zone_1_old_street = [51.52457628, -0.086025441];
// locations.lu_zone_1_oxford_circus = [51.51481046, -0.140025246];
// locations.lu_zone_1_paddington = [51.51499491, -0.173789485];
// locations.lu_zone_1_paddington = [51.51605291, -0.174388339];
// locations.lu_zone_1_paddington_handc_line = [51.51800497, -0.17719615];
// locations.lu_zone_1_piccadilly_circus = [51.50955061, -0.132081484];
// locations.lu_zone_1_pimlico = [51.48856954, -0.132103672];
// locations.lu_zone_1_queensway = [51.50974305, -0.185538472];
// locations.lu_zone_1_regents_park = [51.52277011, -0.144708117];
// locations.lu_zone_1_russell_square = [51.52255053, -0.122662273];
// locations.lu_zone_1_sloane_square = [51.49182524, -0.15473274];
// locations.lu_zone_1_south_kensington = [51.49357736, -0.171564291];
// locations.lu_zone_1_southwark = [51.50377646, -0.103788452];
// locations.lu_zone_1_st_jamess_park = [51.49905006, -0.132021543];
// locations.lu_zone_1_st_pauls = [51.51444286, -0.095907533];
// locations.lu_zone_1_temple = [51.5104742, -0.112643564];
// locations.lu_zone_1_tottenham_court_road = [51.51594793, -0.128897348];
// locations.lu_zone_1_tower_hill = [51.50943419, -0.074913869];
// locations.lu_zone_1_victoria = [51.49588954, -0.141485017];
// locations.lu_zone_1_warren_street = [51.52401887, -0.136735811];
// locations.lu_zone_1_waterloo = [51.50291418, -0.112818812];
// locations.lu_zone_1_westminster = [51.50045311, -0.124052209];
// locations.lu_zone_2_archway = [51.56403452, -0.13344404];
// locations.lu_zone_2_arsenal = [51.55811105, -0.105674399];
// locations.lu_zone_2_barons_court = [51.48978737, -0.213088174];
// locations.lu_zone_2_belsize_park = [51.54982085, -0.163016956];
// locations.lu_zone_2_bermondsey = [51.49718984, -0.062745893];
// locations.lu_zone_2_bethnal_green = [51.52672839, -0.053074702];
// locations.lu_zone_2_bow_road = [51.52639287, -0.02358427];
// locations.lu_zone_2_brixton = [51.46215131, -0.113288835];
// locations.lu_zone_2_caledonian_road = [51.54801774, -0.116864262];
// locations.lu_zone_2_camden_town = [51.53872412, -0.141016888];
// locations.lu_zone_2_canada_water = [51.49740822, -0.048372238];
// locations.lu_zone_2_canary_wharf = [51.50291749, -0.016134819];
// locations.lu_zone_2_chalk_farm = [51.54335257, -0.151037017];
// locations.lu_zone_2_clapham_common = [51.46169503, -0.135588991];
// locations.lu_zone_2_clapham_north = [51.4652144, -0.127754372];
// locations.lu_zone_2_clapham_south = [51.45272059, -0.145610374];
// locations.lu_zone_2_east_acton = [51.51609001, -0.245569272];
// locations.lu_zone_2_east_putney = [51.45863492, -0.209468663];
// locations.lu_zone_2_elephant_and_castle = [51.4953253, -0.099577259];
// locations.lu_zone_2_finchley_road = [51.54672589, -0.179489511];
// locations.lu_zone_2_finsbury_park = [51.56406609, -0.105068129];
// locations.lu_zone_2_fulham_broadway = [51.48025536, -0.193168686];
// locations.lu_zone_2_goldhawk_road = [51.50148234, -0.225049873];
// locations.lu_zone_2_hammersmith_distandpicc_line = [51.49148885, -0.22144689];
// locations.lu_zone_2_hammersmith_handc_line = [51.49327356, -0.223334507];
// locations.lu_zone_2_hampstead = [51.55608598, -0.17692039];
// locations.lu_zone_2_highbury_and_islington = [51.54691824, -0.102125867];
// locations.lu_zone_2_holland_park = [51.50664438, -0.204062863];
// locations.lu_zone_2_holloway_road = [51.55225038, -0.111653531];
// locations.lu_zone_2_kennington = [51.48782707, -0.104357247];
// locations.lu_zone_2_kensal_green = [51.5300656, -0.222882378];
// locations.lu_zone_2_kensington_olympia = [51.49722528, -0.208533266];
// locations.lu_zone_2_kentish_town = [51.54978865, -0.13914119];
// locations.lu_zone_2_kilburn = [51.54644842, -0.203115567];
// locations.lu_zone_2_kilburn_park = [51.53444139, -0.192420271];
// locations.lu_zone_2_ladbroke_grove = [51.51681261, -0.209304449];
// locations.lu_zone_2_latimer_road = [51.51295039, -0.216257476];
// locations.lu_zone_2_maida_vale = [51.52922219, -0.184228557];
// locations.lu_zone_2_manor_house = [51.57024769, -0.094452148];
// locations.lu_zone_2_mile_end = [51.52472507, -0.032150165];
// locations.lu_zone_2_mornington_crescent = [51.53419787, -0.137143461];
// locations.lu_zone_2_oval = [51.48132384, -0.110799082];
// locations.lu_zone_2_parsons_green = [51.47447238, -0.200166803];
// locations.lu_zone_2_putney_bridge = [51.46774182, -0.207131382];
// locations.lu_zone_2_queens_park = [51.53347212, -0.204142926];
// locations.lu_zone_2_ravenscourt_park = [51.49365752, -0.234181724];
// locations.lu_zone_2_royal_oak = [51.51854003, -0.186186162];
// locations.lu_zone_2_shepherds_bush = [51.50384346, -0.217238899];
// locations.lu_zone_2_shepherds_bush_market = [51.50558155, -0.224700725];
// locations.lu_zone_2_st_johns_wood = [51.53469852, -0.172545248];
// locations.lu_zone_2_stamford_brook = [51.49440814, -0.244408726];
// locations.lu_zone_2_stepney_green = [51.52135166, -0.044974603];
// locations.lu_zone_2_stockwell = [51.47131386, -0.121436641];
// locations.lu_zone_2_swiss_cottage = [51.54319998, -0.173237239];
// locations.lu_zone_2_tufnell_park = [51.5563398, -0.136858377];
// locations.lu_zone_2_vauxhall = [51.48518446, -0.122646146];
// locations.lu_zone_2_warwick_avenue = [51.52269118, -0.182005998];
// locations.lu_zone_2_west_brompton = [51.48676791, -0.193973832];
// locations.lu_zone_2_west_hampstead = [51.54629707, -0.188568627];
// locations.lu_zone_2_west_kensington = [51.49027946, -0.203860054];
// locations.lu_zone_2_westbourne_park = [51.52041239, -0.199554267];
// locations.lu_zone_2_white_city = [51.51170695, -0.222866489];
// locations.lu_zone_2_whitechapel = [51.51902202, -0.059154123];
// locations.lu_zone_2_wood_lane = [51.50963208, -0.221994162];
// locations.lu_zone_3_acton_town = [51.50213702, -0.278432824];
// locations.lu_zone_3_balham = [51.44310998, -0.151090206];
// locations.lu_zone_3_blackhorse_road = [51.58633801, -0.040174342];
// locations.lu_zone_3_bounds_green = [51.60656487, -0.122731021];
// locations.lu_zone_3_brent_cross = [51.57616797, -0.212185251];
// locations.lu_zone_3_bromley_by_bow = [51.52424987, -0.009841042];
// locations.lu_zone_3_canning_town = [51.51360991, 0.009568884];
// locations.lu_zone_3_chiswick_park = [51.49415785, -0.266981606];
// locations.lu_zone_3_colliers_wood = [51.41763979, -0.176460893];
// locations.lu_zone_3_dollis_hill = [51.55145847, -0.237445148];
// locations.lu_zone_3_ealing_broadway = [51.51449777, -0.299418497];
// locations.lu_zone_3_ealing_common = [51.50903565, -0.286555479];
// locations.lu_zone_3_east_finchley = [51.58665344, -0.163438627];
// locations.lu_zone_3_golders_green = [51.57178437, -0.192420671];
// locations.lu_zone_3_gunnersbury = [51.49123204, -0.273547129];
// locations.lu_zone_3_hanger_lane = [51.52968038, -0.291095909];
// locations.lu_zone_3_harlesden = [51.53619355, -0.256997378];
// locations.lu_zone_3_hendon_central = [51.58267136, -0.224748399];
// locations.lu_zone_3_highgate = [51.577342, -0.144860652];
// locations.lu_zone_3_kew_gardens = [51.47648632, -0.283453589];
// locations.lu_zone_3_leyton = [51.55609689, -0.00386474];
// locations.lu_zone_3_neasden = [51.5539234, -0.24957656];
// locations.lu_zone_3_north_acton = [51.52310534, -0.258167978];
// locations.lu_zone_3_north_ealing = [51.51697561, -0.287236576];
// locations.lu_zone_3_north_greenwich = [51.50002099, 0.005908784];
// locations.lu_zone_3_northfields = [51.49914634, -0.311409865];
// locations.lu_zone_3_park_royal = [51.52597425, -0.282378071];
// locations.lu_zone_3_plaistow = [51.53072137, 0.018612643];
// locations.lu_zone_3_seven_sisters = [51.58289546, -0.070894139];
// locations.lu_zone_3_south_ealing = [51.50039136, -0.305919519];
// locations.lu_zone_3_south_wimbledon = [51.41446924, -0.191711278];
// locations.lu_zone_3_southfields = [51.4445635, -0.205058529];
// locations.lu_zone_3_stonebridge_park = [51.54368887, -0.27487576];
// locations.lu_zone_3_stratford = [51.54094802, -0.002182514];
// locations.lu_zone_3_tooting_bec = [51.4353811, -0.15763366];
// locations.lu_zone_3_tooting_broadway = [51.42715702, -0.166791248];
// locations.lu_zone_3_tottenham_hale = [51.58754655, -0.058547162];
// locations.lu_zone_3_turnham_green = [51.494448, -0.252958803];
// locations.lu_zone_3_turnpike_lane = [51.58975112, -0.101359413];
// locations.lu_zone_3_upton_park = [51.53487026, 0.036836325];
// locations.lu_zone_3_walthamstow_central = [51.58261626, -0.019895332];
// locations.lu_zone_3_west_acton = [51.51747345, -0.279364414];
// locations.lu_zone_3_west_ham = [51.52776913, 0.00590508];
// locations.lu_zone_3_willesden_green = [51.54886838, -0.221119357];
// locations.lu_zone_3_willesden_junction = [51.5318981, -0.242978972];
// locations.lu_zone_3_wimbledon = [51.42091587, -0.204921053];
// locations.lu_zone_3_wimbledon_park = [51.43353749, -0.19749098];
// locations.lu_zone_3_wood_green = [51.5969712, -0.108246806];
// locations.lu_zone_4_alperton = [51.54022715, -0.298361133];
// locations.lu_zone_4_arnos_grove = [51.61595478, -0.131434823];
// locations.lu_zone_4_barking = [51.53937511, 0.081813552];
// locations.lu_zone_4_barkingside = [51.58519895, 0.090259547];
// locations.lu_zone_4_boston_manor = [51.494711, -0.32401176];
// locations.lu_zone_4_burnt_oak = [51.60233699, -0.262398845];
// locations.lu_zone_4_chigwell = [51.61715195, 0.077229167];
// locations.lu_zone_4_colindale = [51.59494713, -0.248341905];
// locations.lu_zone_4_east_ham = [51.5388975, 0.054454908];
// locations.lu_zone_4_fairlop = [51.59505439, 0.092688126];
// locations.lu_zone_4_finchley_central = [51.60043321, -0.190951925];
// locations.lu_zone_4_gants_hill = [51.57602949, 0.067825538];
// locations.lu_zone_4_grange_hill = [51.61269646, 0.093957755];
// locations.lu_zone_4_greenford = [51.54208841, -0.34492109];
// locations.lu_zone_4_hainault = [51.60313737, 0.095143844];
// locations.lu_zone_4_hounslow_central = [51.470809, -0.364716069];
// locations.lu_zone_4_hounslow_east = [51.47275219, -0.3547554];
// locations.lu_zone_4_kenton = [51.58111281, -0.315140189];
// locations.lu_zone_4_kingsbury = [51.58414203, -0.277052309];
// locations.lu_zone_4_leytonstone = [51.56781496, 0.009807678];
// locations.lu_zone_4_mill_hill_east = [51.60773582, -0.208460194];
// locations.lu_zone_4_morden = [51.40201673, -0.193160282];
// locations.lu_zone_4_newbury_park = [51.57519974, 0.091554903];
// locations.lu_zone_4_north_wembley = [51.56189247, -0.302293996];
// locations.lu_zone_4_northwick_park = [51.57797585, -0.316478653];
// locations.lu_zone_4_osterley = [51.48073359, -0.350640896];
// locations.lu_zone_4_perivale = [51.53624702, -0.32183979];
// locations.lu_zone_4_preston_road = [51.57151381, -0.293539223];
// locations.lu_zone_4_queensbury = [51.59369962, -0.284629817];
// locations.lu_zone_4_redbridge = [51.5757446, 0.047039301];
// locations.lu_zone_4_richmond = [51.46260595, -0.300084253];
// locations.lu_zone_4_roding_valley = [51.61657815, 0.045340184];
// locations.lu_zone_4_snaresbrook = [51.58017276, 0.023019902];
// locations.lu_zone_4_south_kenton = [51.56971265, -0.306785037];
// locations.lu_zone_4_south_woodford = [51.59138934, 0.028990141];
// locations.lu_zone_4_southgate = [51.6317626, -0.126150933];
// locations.lu_zone_4_sudbury_hill = [51.55646384, -0.335039246];
// locations.lu_zone_4_sudbury_town = [51.55030341, -0.314159662];
// locations.lu_zone_4_totteridge_and_whetstone = [51.63009248, -0.177599794];
// locations.lu_zone_4_upney = [51.53784406, 0.103187503];
// locations.lu_zone_4_wanstead = [51.57509659, 0.030247766];
// locations.lu_zone_4_wembley_central = [51.55177912, -0.295237517];
// locations.lu_zone_4_wembley_park = [51.56325938, -0.278458638];
// locations.lu_zone_4_west_finchley = [51.60898928, -0.186738929];
// locations.lu_zone_4_woodford = [51.60635963, 0.035640856];
// locations.lu_zone_4_woodside_park = [51.61758971, -0.183907004];
// locations.lu_zone_5_becontree = [51.53983401, 0.128978641];
// locations.lu_zone_5_buckhurst_hill = [51.62548342, 0.048455336];
// locations.lu_zone_5_canons_park = [51.60721294, -0.293102561];
// locations.lu_zone_5_cockfosters = [51.65103526, -0.147553187];
// locations.lu_zone_5_dagenham_east = [51.54364955, 0.167617456];
// locations.lu_zone_5_dagenham_heathway = [51.54110645, 0.149158377];
// locations.lu_zone_5_eastcote = [51.57601384, -0.39578946];
// locations.lu_zone_5_edgware = [51.61311251, -0.273183711];
// locations.lu_zone_5_harrow_and_wealdstone = [51.59154651, -0.333300136];
// locations.lu_zone_5_harrow_on_the_hill = [51.57891586, -0.33516664];
// locations.lu_zone_5_high_barnet = [51.65002914, -0.192561468];
// locations.lu_zone_5_hounslow_west = [51.47310845, -0.384218262];
// locations.lu_zone_5_north_harrow = [51.58444941, -0.361021834];
// locations.lu_zone_5_northolt = [51.54775741, -0.367069735];
// locations.lu_zone_5_oakwood = [51.64683948, -0.129657109];
// locations.lu_zone_5_pinner = [51.59232907, -0.379580851];
// locations.lu_zone_5_rayners_lane = [51.57469667, -0.369864752];
// locations.lu_zone_5_ruislip_gardens = [51.56027575, -0.409140537];
// locations.lu_zone_5_south_harrow = [51.56404932, -0.350509518];
// locations.lu_zone_5_south_ruislip = [51.55635983, -0.39728854];
// locations.lu_zone_5_stanmore = [51.61921632, -0.30167142];
// locations.lu_zone_5_west_harrow = [51.57906815, -0.351706569];
// locations.lu_zone_6_debden = [51.64489405, 0.085403181];
// locations.lu_zone_6_elm_park = [51.54920911, 0.200311564];
// locations.lu_zone_6_epping = [51.69306818, 0.115641374];
// locations.lu_zone_6_hatton_cross = [51.4661174, -0.42189306];
// locations.lu_zone_6_heathrow_terminal_4 = [51.45802947, -0.444145672];
// locations.lu_zone_6_heathrow_terminal_5 = [51.47201647, -0.486475608];
// locations.lu_zone_6_heathrow_terminals_1_2_3 = [51.47079421, -0.450857772];
// locations.lu_zone_6_hillingdon = [51.55344939, -0.447812239];
// locations.lu_zone_6_hornchurch = [51.55353835, 0.220754707];
// locations.lu_zone_6_ickenham = [51.56146986, -0.440467266];
// locations.lu_zone_6_loughton = [51.6408144, 0.056970973];
// locations.lu_zone_6_northwood = [51.61052039, -0.422358538];
// locations.lu_zone_6_northwood_hills = [51.59969703, -0.407168137];
// locations.lu_zone_6_ruislip = [51.57079343, -0.420215108];
// locations.lu_zone_6_ruislip_manor = [51.57297789, -0.410235646];
// locations.lu_zone_6_theydon_bois = [51.67133739, 0.104967288];
// locations.lu_zone_6_upminster = [51.55857711, 0.252767235];
// locations.lu_zone_6_upminster_bridge = [51.55798569, 0.237476635];
// locations.lu_zone_6_uxbridge = [51.54596187, -0.4760666];
// locations.lu_zone_6_west_ruislip = [51.56913097, -0.436073394];
// locations.lu_zone_7_chorleywood = [51.65380677, -0.516985176];
// locations.lu_zone_7_croxley = [51.64658792, -0.44019171];
// locations.lu_zone_7_moor_park = [51.6293749, -0.430710233];
// locations.lu_zone_7_rickmansworth = [51.63979883, -0.472133393];
// locations.lu_zone_7_watford = [51.65699167, -0.415832512];
// locations.lu_zone_8_chalfont_and_latimer = [51.66754646, -0.559159868];
// locations.lu_zone_9_amersham = [51.67366188, -0.606146762];
// locations.lu_zone_9_chesham = [51.70474175, -0.609421076];
// locations.oground_zone_0_clapton = [51.56103029, -0.055484597];
// locations.oground_zone_0_crystal_palace = [51.41763277, -0.071128264];
// locations.oground_zone_0_willesden_junction = [51.5317515, -0.242688895];
// locations.oground_zone_0_woodgrange_park = [51.54871611, 0.045631091];
// locations.oground_zone_1_euston = [51.52774704, -0.131403702];
// locations.oground_zone_1_liverpool_street = [51.51752768, -0.080013644];
// locations.oground_zone_1_shoreditch_high_street = [51.52285471, -0.074700292];
// locations.oground_zone_2_bethnal_green = [51.52350343, -0.057862441];
// locations.oground_zone_2_brockley = [51.46411871, -0.035763775];
// locations.oground_zone_2_brondesbury = [51.5448108, -0.200631035];
// locations.oground_zone_2_brondesbury_park = [51.54030862, -0.208495753];
// locations.oground_zone_2_caledonian_road_and_barnsbury = [51.54261531, -0.114106929];
// locations.oground_zone_2_cambridge_heath = [51.53173049, -0.055565622];
// locations.oground_zone_2_camden_road = [51.54122083, -0.137154414];
// locations.oground_zone_2_canada_water = [51.49744864, -0.048105945];
// locations.oground_zone_2_canonbury = [51.54817851, -0.090522836];
// locations.oground_zone_2_clapham_high_street = [51.46503062, -0.131145084];
// locations.oground_zone_2_clapham_junction = [51.4629141, -0.16856542];
// locations.oground_zone_2_dalston_junction = [51.5448144, -0.07344152];
// locations.oground_zone_2_dalston_kingsland = [51.54783695, -0.074035153];
// locations.oground_zone_2_denmark_hill = [51.46758176, -0.088015106];
// locations.oground_zone_2_finchley_road_and_frognal = [51.54982406, -0.181637018];
// locations.oground_zone_2_gospel_oak = [51.55486145, -0.149494861];
// locations.oground_zone_2_hackney_central = [51.54652805, -0.055208719];
// locations.oground_zone_2_hackney_downs = [51.54844772, -0.059252378];
// locations.oground_zone_2_hackney_wick = [51.54302792, -0.021765777];
// locations.oground_zone_2_haggerston = [51.53852752, -0.073966769];
// locations.oground_zone_2_hampstead_heath = [51.55475816, -0.164099101];
// locations.oground_zone_2_highbury_and_islington = [51.54564126, -0.10209637];
// locations.oground_zone_2_homerton = [51.54649227, -0.040627028];
// locations.oground_zone_2_hoxton = [51.53093841, -0.074056385];
// locations.oground_zone_2_imperial_wharf = [51.47457995, -0.181347614];
// locations.oground_zone_2_kensal_green = [51.53001765, -0.223116997];
// locations.oground_zone_2_kensal_rise = [51.53413249, -0.218097094];
// locations.oground_zone_2_kensington_olympia = [51.49726439, -0.208397635];
// locations.oground_zone_2_kentish_town_west = [51.54596266, -0.145240267];
// locations.oground_zone_2_kilburn_high_road = [51.53680577, -0.190635722];
// locations.oground_zone_2_london_fields = [51.54052142, -0.056359095];
// locations.oground_zone_2_new_cross = [51.47590464, -0.030648703];
// locations.oground_zone_2_new_cross_gate = [51.47449297, -0.038716887];
// locations.oground_zone_2_peckham_rye = [51.46977879, -0.067330906];
// locations.oground_zone_2_queens_park = [51.53366092, -0.203104045];
// locations.oground_zone_2_queens_road_peckham = [51.47310519, -0.055827609];
// locations.oground_zone_2_rectory_road = [51.55800392, -0.066636749];
// locations.oground_zone_2_rotherhithe = [51.50053752, -0.050510094];
// locations.oground_zone_2_shadwell = [51.51070004, -0.055365921];
// locations.oground_zone_2_shepherds_bush = [51.50417089, -0.217219888];
// locations.oground_zone_2_south_hampstead = [51.54111829, -0.177570816];
// locations.oground_zone_2_stoke_newington = [51.56417453, -0.070536111];
// locations.oground_zone_2_surrey_quays = [51.49282777, -0.046055836];
// locations.oground_zone_2_upper_holloway = [51.56303879, -0.127532858];
// locations.oground_zone_2_wandsworth_road = [51.46943062, -0.136926893];
// locations.oground_zone_2_wapping = [51.50386599, -0.054345515];
// locations.oground_zone_2_west_hampstead = [51.54628297, -0.188759559];
// locations.oground_zone_2_westompton = [51.48661615, -0.193747112];
// locations.oground_zone_2_whitechapel = [51.51901529, -0.05838503];
// locations.oground_zone_3_acton_central = [51.50821824, -0.261566477];
// locations.oground_zone_3_blackhorse_road = [51.58647957, -0.039657577];
// locations.oground_zone_3_bruce_grove = [51.59336509, -0.068182034];
// locations.oground_zone_3_crouch_hill = [51.57086778, -0.115463356];
// locations.oground_zone_3_forest_hill = [51.43872534, -0.051690278];
// locations.oground_zone_3_gunnersbury = [51.49082016, -0.274027392];
// locations.oground_zone_3_harlesden = [51.53575292, -0.255902699];
// locations.oground_zone_3_harringay_green_lanes = [51.57659043, -0.096693484];
// locations.oground_zone_3_honor_oak_park = [51.44940041, -0.044096334];
// locations.oground_zone_3_kew_gardens = [51.47656919, -0.283465911];
// locations.oground_zone_3_leyton_midland_road = [51.56914561, -0.00583941];
// locations.oground_zone_3_leytonstone_high_road = [51.56347619, 0.009121703];
// locations.oground_zone_3_seven_sisters = [51.58359611, -0.073533739];
// locations.oground_zone_3_south_acton = [51.49891951, -0.268894276];
// locations.oground_zone_3_south_tottenham = [51.58009969, -0.070375895];
// locations.oground_zone_3_stamford_hill = [51.57418005, -0.074878256];
// locations.oground_zone_3_stonebridge_park = [51.54346498, -0.273853212];
// locations.oground_zone_3_stratford = [51.54107928, -0.002307264];
// locations.oground_zone_3_sydenham = [51.42659082, -0.052652564];
// locations.oground_zone_3_walthamstow_queens_road = [51.58097129, -0.022254511];
// locations.oground_zone_3_walthamstow_st_james_street = [51.58045909, -0.031370968];
// locations.oground_zone_3_wanstead_park = [51.55118604, 0.027694662];
// locations.oground_zone_3_white_hart_lane = [51.60447174, -0.069256013];
// locations.oground_zone_4_anerley = [51.411617, -0.06410424];
// locations.oground_zone_4_barking = [51.53890805, 0.082703641];
// locations.oground_zone_4_edmondton_green = [51.62445425, -0.059376907];
// locations.oground_zone_4_highams_park = [51.607873, 0.00150512];
// locations.oground_zone_4_kenton = [51.58134846, -0.315564441];
// locations.oground_zone_4_north_wembley = [51.56226767, -0.302663046];
// locations.oground_zone_4_norwood_junction = [51.39678711, -0.073428759];
// locations.oground_zone_4_penge_west = [51.41696823, -0.059203378];
// locations.oground_zone_4_richmond = [51.46271961, -0.30015416];
// locations.oground_zone_4_silver_street = [51.61440848, -0.065526104];
// locations.oground_zone_4_south_kenton = [51.56990367, -0.307068904];
// locations.oground_zone_4_walthamstow_wood_street = [51.58600285, -0.000741221];
// locations.oground_zone_4_wembley_central = [51.55214998, -0.295206549];
// locations.oground_zone_5_bush_hill_park = [51.64092455, -0.067751096];
// locations.oground_zone_5_chingford = [51.63278212, 0.011677573];
// locations.oground_zone_5_enfield_town = [51.65163779, -0.077733958];
// locations.oground_zone_5_harrow_and_wealdstone = [51.59176883, -0.333631214];
// locations.oground_zone_5_headstone_lane = [51.60209779, -0.355651952];
// locations.oground_zone_5_southbury = [51.64825562, -0.049888718];
// locations.oground_zone_5_west_croydon = [51.37780543, -0.101229704];
// locations.oground_zone_6_emerson_park = [51.56818654, 0.221721192];
// locations.oground_zone_6_hatch_end = [51.60890473, -0.367177631];
// locations.oground_zone_6_romford = [51.57454494, 0.184863954];
// locations.oground_zone_6_turkey_street = [51.67186641, -0.045735795];
// locations.oground_zone_6_upminster = [51.55850315, 0.25221358];
// locations.oground_zone_7_carpenders_park = [51.62780024, -0.384142381];
// locations.oground_zone_7_theobalds_grove = [51.69180047, -0.033083485];
// locations.oground_zone_8_bushey = [51.64433251, -0.38369919];
// locations.oground_zone_8_cheshunt = [51.70246665, -0.022373213];
// locations.oground_zone_8_watford_high_street = [51.6519637, -0.390612987];
// locations.oground_zone_8_watford_junction = [51.6634936, -0.394615064];
// locations.tfl_rail_zone_0_brentwood = [51.61307149, 0.301589064];
// locations.tfl_rail_zone_0_shenfield = [51.6300009, 0.331671253];
// locations.tfl_rail_zone_3_forest_gate = [51.54895648, 0.02615387];
// locations.tfl_rail_zone_3_maryland = [51.54554249, 0.007539167];
// locations.tfl_rail_zone_3_stratford = [51.54094802, -0.002182514];
// locations.tfl_rail_zone_4_goodmayes = [51.56500163, 0.112414564];
// locations.tfl_rail_zone_4_ilford = [51.55848898, 0.07080065];
// locations.tfl_rail_zone_4_manor_park = [51.55189321, 0.047651015];
// locations.tfl_rail_zone_4_seven_kings = [51.5634541, 0.098722803];
// locations.tfl_rail_zone_5_chadwell_heath = [51.56749975, 0.130973337];
// locations.tfl_rail_zone_6_gidea_park = [51.58117713, 0.2071101];
// locations.tfl_rail_zone_6_harold_wood = [51.59219909, 0.234666819];
// locations.tfl_rail_zone_6_romford = [51.57421472, 0.184308898];
// locations.tramlink_zone_3_dundonald_road = [51.41708633, -0.206116509];
// locations.tramlink_zone_3_merton_park = [51.41320626, -0.199772348];
// locations.tramlink_zone_3_wimbledon_tramlink = [51.42048966, -0.204395752];
// locations.tramlink_zone_4_ampere_way = [51.3818536, -0.122172554];
// locations.tramlink_zone_4_arena = [51.39105665, -0.056679487];
// locations.tramlink_zone_4_avenue_road = [51.40615963, -0.048118188];
// locations.tramlink_zone_4_beckenham_junction_tramlink = [51.41045194, -0.024636241];
// locations.tramlink_zone_4_beckenham_road = [51.40909636, -0.04159356];
// locations.tramlink_zone_4_beddington_lane = [51.38891199, -0.141260885];
// locations.tramlink_zone_4_belgrave_walk = [51.40044481, -0.176840028];
// locations.tramlink_zone_4_birkbeck_tramlink = [51.40304289, -0.054580141];
// locations.tramlink_zone_4_elmers_end_tramlink = [51.39779044, -0.047979561];
// locations.tramlink_zone_4_harrington_road = [51.3991503, -0.058885135];
// locations.tramlink_zone_4_mitcham = [51.39700089, -0.16947597];
// locations.tramlink_zone_4_mitcham_junction_tramlink = [51.39213248, -0.155733719];
// locations.tramlink_zone_4_morden_road = [51.408346, -0.191339995];
// locations.tramlink_zone_4_phipps_bridge = [51.40292944, -0.180769806];
// locations.tramlink_zone_4_therapia_lane = [51.38515495, -0.127515047];
// locations.tramlink_zone_5_addiscombe = [51.37934189, -0.07162576];
// locations.tramlink_zone_5_blackhorse_lane = [51.3844061, -0.06870387];
// locations.tramlink_zone_5_centrale = [51.37525458, -0.102295527];
// locations.tramlink_zone_5_church_street = [51.37319514, -0.102795537];
// locations.tramlink_zone_5_coombe_lane = [51.35927821, -0.058520648];
// locations.tramlink_zone_5_east_croydon_tramlink = [51.37431604, -0.09106147];
// locations.tramlink_zone_5_george_street = [51.37338118, -0.097458992];
// locations.tramlink_zone_5_lebanon_road = [51.37468254, -0.08389645];
// locations.tramlink_zone_5_lloyd_park = [51.36367068, -0.079087981];
// locations.tramlink_zone_5_reeves_corner = [51.37426316, -0.104688108];
// locations.tramlink_zone_5_sandilands = [51.37441486, -0.07612476];
// locations.tramlink_zone_5_waddon_marsh = [51.37647839, -0.116278811];
// locations.tramlink_zone_5_wandle_park = [51.37293871, -0.111770014];
// locations.tramlink_zone_5_wellesley_road = [51.37499854, -0.095978591];
// locations.tramlink_zone_5_west_croydon_tramlink = [51.37841469, -0.100095218];
// locations.tramlink_zone_5_woodside = [51.38645328, -0.063965962];
// locations.tramlink_zone_6_addington_village = [51.35570988, -0.031284121];
// locations.tramlink_zone_6_fieldway = [51.3504305, -0.022640017];
// locations.tramlink_zone_6_gravel_hill = [51.35401751, -0.041304236];
// locations.tramlink_zone_6_king_henrys_drive = [51.3448509, -0.018665196];
// locations.tramlink_zone_6_new_addington = [51.34195708, -0.015617483];




var args;

function init()
{
	args = []

	var hash = window.location.search;

	if (hash.length > 0)
	{
		var elements = hash.split('&');
		elements[0] = elements[0].substring(1); /* Remove the # */

		for(var i = 0; i < elements.length; i++)
		{
			var pair = elements[i].split('=');
			args[pair[0]] = pair[1];
		}
	}
	
	if ((args['lat'] && args['lon']) || args['location'])
	{
		setLocationURL();
	}
	else
	{
		$('#location').val('geo');
		setLocationFromGeo();							
	}

}

function setLocationFromGeo()
{
	$('#countdown').css('display', 'none');
	if (navigator.geolocation) 
	{
		navigator.geolocation.getCurrentPosition(function(position)
		{
			lat = position.coords.latitude;
			lon = position.coords.longitude;
			//if (lat > 52 && lat < 52 && lon > 1 && lon < 1) //Test for defaulting.
			if (lat > 51 && lat < 52 && lon > -1 && lon < 1)			
			{
				requestCams();
				$('#locationText').html("Location: " + lat + ', ' + lon + '');
			}
			else
			{
				alert("It looks like you aren't near London. The Panopticon will therefore default to Trafalgar Square.");
				useDefaultLocation(null);
			}
		}, useDefaultLocation, { enableHighAccuracy: true, timeout: 5000, maximumAge: 300000 });
	}
	else
	{
		useDefaultLocation(null);
	}
}

function useDefaultLocation(error)
{
	$('#location').val('trafalgarsq');
	lat = locations.trafalgarsq[0];
	lon = locations.trafalgarsq[1];
	requestCams();
	$('#locationText').html("Location: " + lat + ', ' + lon + ' (default)');
}

function setLocationManual()
{
	if ($('#location').val() == "geo")
	{
		setLocationFromGeo();
	}
	else
	{	
		lat = locations[$('#location').val()][0];
		lon = locations[$('#location').val()][1];
		requestCams();
	}
	$('#locationText').html("Location: " + lat + ', ' + lon + '');
}

function setLocationURL()
{
	if (args['lat'] && args['lon'])
	{
		lat = args['lat'];
		lon = args['lon'];
	}
	else
	{
		for (var location in locations)
		{
			if (location === args['location'])
			{
				lat = locations[location][0];
				lon = locations[location][1];
				$('#location').val(location);
				continue;
			}
		}
	}
	requestCams();
	$('#locationText').html("Location: " + lat + ', ' + lon + '');
}

function requestCams()
{
	clearInterval(counterInterval);
	counterInterval = null;
	
	$('#countdown').css('display', 'none');
	$('#loadingDisruption').css('display', 'block');
	
	$.ajax(
	{
		url: "jamcams-camera-list.xml",
		//url: "https://s3-eu-west-1.amazonaws.com/jamcams.tfl.gov.uk/jamcams-camera-list.xml",
		//url: "https://s3-eu-west-1.amazonaws.com/jamcams.tfl.gov.uk/jamcams-camera-list.xml",
		success: function(data)
		{
			handleCams(data);
		},
		dataType: 'xml',
		async:true
	});

}

function sortCamsbydistance(a, b)
{
	if (a[3] == b[3]) return 0;
	if (a[3] < b[3]) return -1;
	else return 1;
}

var cams;

function handleCams(data)
{
	
	var camlist = [];
	cams = data.getElementsByTagName('syndicatedFeed')[0].getElementsByTagName('cameraList')[0].getElementsByTagName('camera');
	for (var i = 0; i < cams.length; i++)
	{
		var cam = cams[i];
	
		var camlat = cam.getElementsByTagName('lat')[0].innerHTML;
		var camlon = cam.getElementsByTagName('lng')[0].innerHTML;
		var camname = cam.getElementsByTagName('location')[0].innerHTML;
		var camid = cam.getAttribute('id');
		var hacklat = 1.607*lat; // 1/cos 51.51 degrees.
		var camhacklat = 1.607*camlat;
		var opp = camlon-lon;
		var adj = camhacklat-hacklat;
		var hackanglec = Math.atan(opp/adj)*180/Math.PI;
		var hackdistance = (adj*adj) + (opp*opp);
		
		if (opp > 0 && adj > 0) { hackanglec = hackanglec; } 
		if (opp < 0 && adj > 0) { hackanglec = 360 + hackanglec } 
		if (opp > 0 && adj < 0) { hackanglec = 180 + hackanglec } 
		if (opp < 0 && adj < 0) { hackanglec = 180 + hackanglec } 
		
		camlist.push([camid+".mp4", camname, hackanglec, hackdistance]);			
	}
	
	camlist.sort(sortCamsbydistance);
	
	// N 337.5 - 22.5
	// NE 22.5 - 67.5
	// E 67.5 - 112.5
	// SE 112.5 - 157.5
	// S 157.5 - 202.5
	// SW 202.5 - 247.5
	// W 247.5 - 292.5
	// NW 292.5 - 337.5
	var wincams = { };
	var wincount = 0;
	
	for (var j = 0; j < camlist.length; j++)
	{		
		if (wincount > 7) { break; }

		var hackangle = camlist[j][2];
				
		if (((hackangle > 337.5 && hackangle < 360) || (hackangle >= 0 && hackangle <= 22.5)) && !wincams.N)
		{
			wincams.N = [camlist[j][0], camlist[j][1]];
			wincount++;
		}
		else if (hackangle > 22.5 && hackangle <=67.5 && !wincams.NE)
		{
			wincams.NE = [camlist[j][0], camlist[j][1]];
			wincount++;
		}
		else if (hackangle > 67.5 && hackangle <=112.5 && !wincams.E)
		{
			wincams.E = [camlist[j][0], camlist[j][1]];
			wincount++;
		}
		else if (hackangle > 112.5 && hackangle <=157.5 && !wincams.SE)
		{
			wincams.SE = [camlist[j][0], camlist[j][1]];
			wincount++;
		}
		else if (hackangle > 157.5 && hackangle <=202.5 && !wincams.S)
		{
			wincams.S = [camlist[j][0], camlist[j][1]];
			wincount++;
		}
		else if (hackangle > 202.5 && hackangle <=247.5 && !wincams.SW)
		{
			wincams.SW = [camlist[j][0], camlist[j][1]];
			wincount++;
		}
		else if (hackangle > 247.5 && hackangle <=295.5 && !wincams.W)
		{
			wincams.W = [camlist[j][0], camlist[j][1]];
			wincount++;
		}
		else if (hackangle > 295.5 && hackangle <=337.5 && !wincams.NW)
		{
			wincams.NW = [camlist[j][0], camlist[j][1]];
			wincount++;
		}
		//console.log(camlist[j][0] + ", " + camlist[j][1] + ", " + camlist[j][2] + ", " + camlist[j][3])
	}

	var time = new Date().getTime();
	
	if (!wincams.NW) { wincams.NW = ["", "No camera"]; }
	if (!wincams.N) { wincams.N = ["", "No camera"]; }
	if (!wincams.NE) { wincams.NE = ["", "No camera"]; }
	if (!wincams.E) { wincams.E = ["", "No camera"]; }
	if (!wincams.SE) { wincams.SE = ["", "No camera"]; }
	if (!wincams.S) { wincams.S = ["", "No camera"]; }
	if (!wincams.SW) { wincams.SW = ["", "No camera"]; }
	if (!wincams.W) { wincams.W = ["", "No camera"]; }
	$('#camimgNW').html('<video autoplay="true" width="100%" height="100%" loop="true" src="https://s3-eu-west-1.amazonaws.com/jamcams.tfl.gov.uk/' + wincams.NW[0] + '?t=' + time + '">');
	$('#camimgN').html('<video autoplay="true" width="100%" height="100%" loop="true" src="https://s3-eu-west-1.amazonaws.com/jamcams.tfl.gov.uk/' + wincams.N[0] + '?t=' + time + '">');
	$('#camimgNE').html('<video autoplay="true" width="100%" height="100%" loop="true" src="https://s3-eu-west-1.amazonaws.com/jamcams.tfl.gov.uk/' + wincams.NE[0] + '?t=' + time + '">');
	$('#camimgW').html('<video autoplay="true" width="100%" height="100%" loop="true" src="https://s3-eu-west-1.amazonaws.com/jamcams.tfl.gov.uk/' + wincams.W[0] + '?t=' + time + '">');
	$('#camimgE').html('<video autoplay="true" width="100%" height="100%" loop="true" src="https://s3-eu-west-1.amazonaws.com/jamcams.tfl.gov.uk/' + wincams.E[0] + '?t=' + time + '">');
	$('#camimgSW').html('<video autoplay="true" width="100%" height="100%" loop="true" src="https://s3-eu-west-1.amazonaws.com/jamcams.tfl.gov.uk/' + wincams.SW[0] + '?t=' + time + '">');
	$('#camimgS').html('<video autoplay="true" width="100%" height="100%" loop="true" src="https://s3-eu-west-1.amazonaws.com/jamcams.tfl.gov.uk/' + wincams.S[0] + '?t=' + time + '">');
	$('#camimgSE').html('<video autoplay="true" width="100%" height="100%" loop="true" src="https://s3-eu-west-1.amazonaws.com/jamcams.tfl.gov.uk/' + wincams.SE[0] + '?t=' + time + '">');
	$('#camnameNW').html(wincams.NW[1]);
	$('#camnameN').html(wincams.N[1]);
	$('#camnameNE').html(wincams.NE[1]);
	$('#camnameW').html(wincams.W[1]);
	$('#camnameE').html(wincams.E[1]);
	$('#camnameSW').html(wincams.SW[1]);
	$('#camnameS').html(wincams.S[1]);
	$('#camnameSE').html(wincams.SE[1]);

	
	$('#loadingDisruption').css('display', 'none');
	$('#countdown').css('display', 'block');
	currcount = 120;
	counterInterval = setInterval(decrementCounter, 1000);
}

function decrementCounter()
{
	$('#countdowntimer').html(currcount--);
	if (currcount === 0)
	{
		clearInterval(counterInterval);
		counterInterval = null;
		$('#loadingDisruption').css('display', 'block');
		$('#countdown').css('display', 'none');
		requestCams();
	}
	
}

$(document).ready(function() {
	init();
});
