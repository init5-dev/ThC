const fs = require('fs');
const path = require('path');

const appDirectory = path.join(__dirname, 'app');
const outputFilePath = path.join(__dirname, 'routes.json');

function generateRoutes(dir, routePrefix = '') {
  let routes = [];

  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      const nestedRoutes = generateRoutes(filePath, `${routePrefix}/${file}`);
      routes = routes.concat(nestedRoutes);
    } else if (stat.isFile() && path.extname(file) === '.tsx') {
      let route = `${routePrefix}/${path.basename(file, '.tsx')}`;
      if (route.endsWith('/page')) {
        route = route.replace('/page', '') || '/';
      }

      if (!route.endsWith('/layout')) routes.push(route); //exclude layout.tsx file
    }
  });

  return routes;
}

// Generar las rutas
const routes = generateRoutes(appDirectory);

// Guardar las rutas en un archivo JSON
fs.writeFileSync(outputFilePath, JSON.stringify(routes, null, 2));

console.log(`Routes have been saved to ${outputFilePath}`);