<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Vuebnb</title>
    <link rel="stylesheet" href="{{ cdn('css/style.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ cdn('css/vue-style.css') }}" type="text/css">

    <script type="text/javascript">
        window.vuebnb_server_data = "{!! addslashes(json_encode($data)) !!}";
        window.csrf_token = "{{ csrf_token() }}";
        window.cdn_url = "{{ cdn('') }}";
    </script>
</head>
<body>
<div id="app"></div>
<script src="{{ cdn('js/app.js') }}"></script>

@if (env('APP_ENV')=='local')
    <script id="__bs_script__">//<![CDATA[
        document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.23.6'><\/script>".replace("HOST", location.hostname));
        //]]></script>
@endif

</body>
</html>
