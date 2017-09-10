module.exports = {
  globals: {
    server: true,
    moment: true,
    Handsontable: true,
    esperar: true,
    login: true,
    clickSobreElTexto: true,
    cargarDatosDePrueba: true,
    selectSearch: true,
    selectChoose: true
  },
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  extends: "eslint:recommended",
  env: {
    browser: true,
    jquery: true
  },
  rules: {}
};
