import { moduleFor, test } from "ember-qunit";
import Ember from "ember";

moduleFor("service:perfil", "Unit | Service | perfil", {
  needs: ["service:ajax", "model:group"]
});

test("it exists", function(assert) {
  let service = this.subject({
    store: {
      findRecord: function(/*id*/) {
        var mockedModel = Ember.Object.create({});
        return mockedModel;
      }
    }
  });

  assert.ok(service);
});
