// Install SASS compiler and compile code some command in terminal.

1. npm init // npm initiate and create package.json file
2. npm install node-sass --save-dev // Install sass compiller
3. npm audit
4. npm audit fix --force
5.npm install / Reinstall node-sass

6.npm run compile:sass // Compile scss to css 
7. npm install live-server -g
8. live-server
9.npm install concat --save-dev
10. npm install autoprefixer --save-dev
11.  npm install postcss-cli --save-dev
12. npm install npm-run-all --save-dev

{
  "name": "fylo-landing-page-with-two-column-layout-master",
  "version": "1.0.0",
  "description": "Fylo Fylo landing page with to column layout",
  "main": "index.js",
  "scripts": {
    "watch:sass": "node-sass sass/main.scss css/style.css -w",
    "start": "npm-run-all watch:sass",
    "compile:sass": "node-sass sass/main.scss css/style.comp.css",
    "concat:css": "concat -o css/style.concat.css css/style.comp.css",
    "prefix:css": "postcss --use autoprefixer -b 'last 10 versions' css/style.concat.css -o css/style.prefix.css",
    "compress:css": "node-sass css/style.prefix.css css/style.css --output-style compressed",
    "build:css": "npm-run-all compile:sass concat:css prefix:css compress:css"
  },
  "author": "Sabbir Ahmed",
  "license": "ISC",
  "devDependencies": {
    "autoprefixer": "^10.4.12",
    "concat": "^1.0.3",
    "node-sass": "^7.0.1",
    "npm-run-all": "^4.1.5",
    "postcss-cli": "^10.0.0"
  }
}

1. npm install //install all package
2. npm run start // Development server
3. npm run build:css // For Production Server 
