<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
   <head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <meta name="csrf-token" content="{{ csrf_token() }}">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
      
   <title>Laravel</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/test.css') }}">
</head>
<body>
   <div id="app"></div>
   <script src="{{ asset('js/manifest.js') }}"></script>
   <script src="{{ asset('js/js/vendor.js') }}"></script>
   <script src="{{ asset('js/js/app.js') }}"></script>
</body>
</html>