<?php

/****************
	USERS
****************/

//	GET ALL route
$app->get('/users', function($request, $response, $args) {

	$db = new Users();
	$items = $db->get_all_users();
	$results = array();

	if($items) {
		foreach($items as $row) {

			$itemArray = array(
				'username' => $row['username'],
		    	'password' => $row['password'],
			);
			array_push($results, $itemArray);
		}
		return $response->withStatus(200)->withHeader('Content-Type', 'application/json')->write(json_encode($results));

	} else {
		return $response->status(500);

	}
});