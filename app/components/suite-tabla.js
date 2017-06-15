import Ember from "ember";

const customMessages = Ember.Object.create({
  searchLabel: "Filtro:",
  searchPlaceholder: "",
  "columns-title": "Columns",
  "columns-showAll": "Show All",
  "columns-hideAll": "Hide All",
  "columns-restoreDefaults": "Restore Defaults",
  tableSummary: "Mostrando registros desde %@ hasta %@",
  allColumnsAreHidden:
    "All columns are hidden. Use <strong>columns</strong>-dropdown to show some of them",
  noDataToShow: "No hay datos para mostrar"
});

export default Ember.Component.extend({
  customMessages: customMessages,
  cantidad: 10,
  columnas: [],
  filas: []
});
