<?php

/******************
	Instructions
******************/

//	Get ALL route
$app->get('/instructions', function ($request, $response, $args) {

	$db = new Instructions();
	$items = $db->get_all_instructions();
	$results = array();

	if($items) {
		foreach($items as $row) {

			$itemArray = array(
				'id' => $row['id'],
				'recipeId' => $row['recipe_id'],
				'name' => $row['name'],
			);
			array_push($results, $itemArray);
		}
		return $response->withStatus(200)->withHeader('Content-Type', 'application/json')->write(json_encode($results));

	} else {
		return $response->status(500);

	}
});