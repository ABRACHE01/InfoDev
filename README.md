## Contexte du projet

En tant que spécialiste Full Stack en JavaScript, nous vous invitons à intégrer notre équipe de développement. Votre mission sera de jouer un rôle central dans notre projet de blog axé sur L'Actualité au Cœur du Développement Informatique. Votre maîtrise en développement web, notamment en Node.js associé à un moteur de templates, enrichira notre projet d'une expérience utilisateur remarquable et efficace.

## Project folder structure   

project-root/
  ├── src/
  |    ├── controllers/
  |    |  
  |    |   
  |    |
  |    ├── models/
  |    |   
  |    |    
  |    |
  |    ├── views/
  |    |    ├── partials/
  |    |    |    ├── header.ejs
  |    |    |    ├── footer.ejs
  |    |    |    └── navigation.ejs
  |    |    |
  |    |    ├── index.ejs
  |    |    |
  |    |    └── other...
  |    |
  |    ├── routes/
  |    |    
  |    |
  |    ├── app.js
  |    ├── database.js
  |    └── server.js
  |
  ├── migrations/
  |    ├── ...
  |
  ├── public/
  |    ├── css/
  |    |    ├── style.css
  |    |
  |    ├── js/
  |    |    ├── script.js
  |    |
  |    ├── images/
  |    |    ├── ...
  |    |
  |    ├── fonts/
  |    |    ├── ...
  |
  ├── node_modules/
  |
  ├── package.json
  ├── package-lock.json
  └── .gitignore



src/: This is where your application's source code resides.
controllers/: Controllers handle the logic for your routes.
models/: Define your database models using Prisma here.
views/: EJS templates for rendering views.
routes/: Define your Express.js routes here.
app.js: Main application setup file.
database.js: Database connection setup.
server.js: Start your Express server here.
migrations/: Store database migration files for Prisma.

public/: Public assets like stylesheets, JavaScript files, images, and fonts.

node_modules/: Node.js modules installed via npm.

package.json and package-lock.json: Manage your project's dependencies.

.gitignore: Ignore files and directories for version control.

