<?php

/****************
	RECIPES
****************/

//	GET ALL route
$app->get('/recipes', function($request, $response, $args) {

	$db = new Recipes();
	$items = $db->get_all_recipes();
	$results = array();

	if($items) {
		foreach($items as $row) {

			$itemArray = array(
				'id' => $row['id'],
				'name' => $row['name'],
			);
			array_push($results, $itemArray);
		}
		return $response->withStatus(200)->withHeader('Content-Type', 'application/json')->write(json_encode($results));

	} else {
		return $response->status(500);

	}
});