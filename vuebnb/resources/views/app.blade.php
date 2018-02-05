<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Vuebnb</title>
  <link rel="stylesheet" href="{{ asset('css/style.css') }}" type="text/css">
</head>
<body>
<div id="toolbar">
  <img class="icon" src="{{ asset('images/logo.png') }}">
  <h1>vuebnb</h1>
</div>
<div id="app">
  <div class="header">
    <div
      class="header-img"
      v-bind:style="headerImageStyle"
      v-on:click="modalOpen = true"
    >
      <button class="view-photos">View Photos</button>
    </div>
  </div>
  <div class="container">
      <div class="heading">
          <h1>@{{ title }}</h1>
          <p>@{{ address }}</p>
      </div>
      <hr>
      <div class="about">
          <h3>About this listing</h3>
          <p v-bind:class="{ contracted: contracted }">@{{ about }}</p>
          <button class="more" v-if="contracted" v-on:click="contracted = false">+ More</button>
          <button class="more" v-if="!contracted" v-on:click="contracted = true">- Less</button>
      </div>
      <div class="lists">

        <hr>
        <div class="amenities list">

          <div class="title">
            <strong>Amenities</strong>
          </div>

          <div class="content">
            <div class="list-item" v-for="amenity in amenities" v-bind:key="amenity.id">
              <i class="fa fa-lg" v-bind:class="amenity.icon"></i>
              <span>@{{ amenity.title }}</span>
            </div>
          </div>

        </div>

        <hr>
        <div class="prices list">
          <div class="title">
            <strong>Prices</strong>
          </div>
          <div class="content">
            <div class="list-item" v-for="price in prices">
              @{{ price.title }} <strong>@{{ price.value }}</strong>
            </div>
          </div>
        </div>

      </div>
  </div>

  <div id="modal" v-bind:class="{ show : modalOpen }">
    <button v-on:click="modalOpen = false" class="modal-close">&times;</button>
    <div class="modal-content">
      <img src="{{ asset('images/header.png') }}" alt="Header">
    </div>
  </div>

</div>

<script src="{{ asset('js/app.js') }}"></script>

@if (env('APP_ENV')=='local')
<script id="__bs_script__">//<![CDATA[
    document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.23.6'><\/script>".replace("HOST", location.hostname));
//]]></script>
@endif

</body>
</html>