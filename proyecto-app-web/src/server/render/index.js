const render = (html) => {
    return (`
        <!DOCTYPE html>
        <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>App Web - Asignatura Diseño de Aplicaciones Web</title>
                <link rel="stylesheet" href="assets/app.css" type="text/css" />
            </head>
            <body>
                <div id="app">
                    ${html}
                </div>
                <script src="assets/app.js" type="text/javascript"></script>
                <script src="assets/vendor.js" type="text/javascript"></script>
            </body>
        </html>
    `);
};

export default render;