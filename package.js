Package.describe({
  "summary": "Metro UI CSS 2.x packaged for MeteorJS",
  "version": "2.0.32_1",
  "git": "https://github.com/chrismbeckett/meteor-metro-ui2.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@0.9.4");
  api.use("jquery","client");

  api.addFiles("lib/fonts/iconFont.dev.svg", "client");
  api.addFiles("lib/fonts/iconFont.eot", "client");
  api.addFiles("lib/fonts/iconFont.svg", "client");
  api.addFiles("lib/fonts/iconFont.ttf", "client");
  api.addFiles("lib/fonts/iconFont.woff", "client");
  api.addFiles("lib/fonts/metroSysIcons.svg", "client");
  api.addFiles("lib/fonts/metroSysIcons.ttf", "client");
  api.addFiles("lib/fonts/metroSysIcons.woff", "client");
  api.addFiles("lib/fonts/OpenSans-Bold.woff", "client");
  api.addFiles("lib/fonts/OpenSans-Light.woff", "client");
  api.addFiles("lib/fonts/OpenSans.woff", "client");
  api.addFiles("lib/fonts/PTSerif-Caption.woff", "client");

  api.addFiles("lib/images/meter-210.png", "client");

  api.addFiles("lib/css/iconFont.min.css", "client");
  api.addFiles("lib/css/metro-bootstrap.min.css", "client");
  api.addFiles("lib/css/metro-bootstrap-responsive.min.css", "client");
  api.addFiles("metroui-overrides.css", "client");

  api.addFiles("lib/js/jquery.widget.min.js", "client");
  api.addFiles("lib/js/metro.min.js", "client");

});