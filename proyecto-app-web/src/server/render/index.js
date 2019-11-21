const render = (html, styles) => {
    return (`
        <!DOCTYPE html>
        <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>App Web - Asignatura Diseño de Aplicaciones Web</title>
                <style id="jss-server-side">
                    ${styles}
                </style>
                <link rel="stylesheet" href="assets/app.css" type="text/css" />
            </head>
            <body>
                <div id="app">
                    ${html}
                </div>
                <script src="assets/app.js" type="text/javascript"></script>
                <script src="assets/vendor.js" type="text/javascript"></script>
                <!-- Google Fonts [ASYNC] -->
                <script type="text/javascript">
                    WebFontConfig = {
                        google: { families: [ 'Roboto:300,400,500', 'Material Icons', 'Source+Sans+Pro:400,500,600', 'Lato:300,400,500' ] }
                    };
                    (function() {
                        var wf = document.createElement('script');
                        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
                        wf.type = 'text/javascript';
                        wf.async = 'true';
                        var s = document.getElementsByTagName('script')[0];
                        s.parentNode.insertBefore(wf, s);
                    })();
                </script>
            </body>
        </html>
    `);
};

export default render;