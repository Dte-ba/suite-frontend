import Ember from "ember";
import moment from "moment";
import UiCalendarComponent from "ember-semantic-ui-calendar/components/ui-calendar";

const UiCalendarMoment = UiCalendarComponent.extend({
  moment: Ember.inject.service("moment"),

  init() {
    this._super(...arguments);
  },

  localizedText: Ember.computed(function() {
    return {
      days: moment.weekdaysMin(),
      months: moment.months(),
      monthsShort: moment.monthsShort()
    };
  }).volatile(),

  willInitSemantic(settings) {
    this._super(...arguments);
    let minDate = undefined;

    if (this.get("min")) {
      minDate = moment(this.get("min")).toDate();
    }

    Ember.merge(settings, {
      text: this.get("localizedText"),
      minDate: minDate,
      formatter: {
        date(date) {
          return date ? moment(date).format("L") : "";
        },
        time(date) {
          return date ? moment(date).format("LT") : "";
        }
      }
    });
  }
});

export default UiCalendarMoment;
