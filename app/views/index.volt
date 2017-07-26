<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Phalcon eCommerce</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Latest compiled and minified Stylesheet -->
        {{ assets.outputCss('header') }}
    </head>
    <body>
        {{ content() }}
        <!-- Latest compiled and minified JavaScript -->
         {{ assets.outputJs('footer') }} 
    </body>
</html>
