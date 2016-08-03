<?php

/**
 * Step 1: Require the Slim Framework using Composer's autoloader
 *
 * If you are not using Composer, you need to load Slim Framework with your own
 * PSR-4 autoloader.
 */
require 'vendor/autoload.php';

require 'config.php';
require 'Database/Database.php';
require 'Database/Users.php';
require 'Database/Recipes.php';
require 'Database/Ingredients.php';
require 'Database/Instructions.php';
require 'vendor/tuupola/slim-basic-auth/src/HttpBasicAuthentication.php';

/**
 * Step 2: Instantiate a Slim application
 *
 * This example instantiates a Slim application using
 * its default settings. However, you will usually configure
 * your Slim application now by passing an associative array
 * of setting names and values into the application constructor.
 */
// use \Slim\Middleware\HttpBasicAuthentication\PdoAuthenticator;

// $pdo = new \PDO('mysql:dbname=recipebook;host=127.0.0.1', 'root', 'Tressi06');

$app = new \Slim\App();
// $app->add(new \Slim\Middleware\HttpBasicAuthentication(array(
//  	'realm' => 'Protected',
//  	// 'users' => array(
//  	// 	'demo' => '$2a$07$R.gJb2U2N.FmZ4hPp1y2C.ZUmqvrlAGa455cM31VavSLP3t59EUGq',
//  	// )
// 	'authenticator' => new PdoAuthenticator([
// 		'pdo' => $pdo,
// 		'table' => 'users',pearm i
// 		'user' => 'username',
// 		'hash' => 'password',
// 	])
// )));

/**
 * Step 3: Define the Slim application routes
 *
 * Here we define several Slim application routes that respond
 * to appropriate HTTP request methods. In this example, the second
 * argument for `Slim::get`, `Slim::post`, `Slim::put`, `Slim::patch`, and `Slim::delete`
 * is an anonymous function.
 */

require 'app/users.php';
require 'app/recipes.php';
require 'app/ingredients.php';
require 'app/instructions.php';

$app->get('/', function ($request, $response, $args) {
    $response->write("Welcome to Slim 3.0 based API");
    return $response;
});

/**
 * Step 4: Run the Slim application
 *
 * This method should be called last. This executes the Slim application
 * and returns the HTTP response to the HTTP client.
 */
$app->run();