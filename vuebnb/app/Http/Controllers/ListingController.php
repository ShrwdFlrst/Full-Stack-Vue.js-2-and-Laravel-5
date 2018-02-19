<?php

namespace App\Http\Controllers;

use App\Listing;

class ListingController extends Controller
{
    public function get_listing_api(Listing $listing)
    {
        $model = $listing->toArray();
        $model = $this->add_image_urls($model, $listing->id);

        return response()->json($model);
    }

    public function get_listing_web(Listing $listing)
    {
        $model = $listing->toArray();
        $model = $this->add_image_urls($model, $listing->id);

        return view('app', ['model' => $model]);
    }

    public function add_image_urls($model, $id)
    {
        for ($i = 1; $i <= 4; $i++) {
            $image = sprintf('/images/%s/Image_%s.jpg', $id, $i);
            $model['image_' . $i] = asset($image);
        }

        return $model;
    }
}
