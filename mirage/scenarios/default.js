export default function(server) {
  server.loadFixtures('eventos');
  server.loadFixtures('users');
  server.loadFixtures('perfiles');
  server.loadFixtures('regiones');
  server.loadFixtures('municipios');
}
