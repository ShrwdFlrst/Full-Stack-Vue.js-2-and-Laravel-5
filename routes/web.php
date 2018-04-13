<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Listing;

Auth::routes();

Route::get('/', function () {
    return view('app');
});

Route::get('/', 'ListingController@get_home_web');
Route::get('/saved', 'ListingController@get_home_web')->middleware('auth');
Route::get('listing/{listing}', function (Listing $listing) {
    $model = $listing->toArray();

    return view('app', ['model' => $model]);
});
Route::get('listing/{listing}', 'ListingController@get_listing_web');
