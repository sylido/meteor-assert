Package.describe({
  summary : "Make code assertions to assure your code works as expected",
  version : "0.4.0",
  name    : "sylido:assert",
  git     : "https://github.com/sylido/meteor-assert.git"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@3.2.2");

  api.export("assert");

  api.addFiles([
    "server.js"
  ], "server");

  api.addFiles([
    "client/assert.js",
    "export-assert.js"
  ], "client");
});

Package.onTest(function (api) {
  api.versionsFrom("METEOR@3.2.2");

  api.use([
    "sylido:assert",
    "tinytest",
    "test-helpers"
  ], ["client", "server"]);

  api.addFiles([
    "tests.js"
  ], ["client", "server"]);
});
