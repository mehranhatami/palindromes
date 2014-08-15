require.config({
  // make components more sensible
  // expose jquery 
  paths: {
    'components': '../bower_components',
    'jquery': '../bower_components/jquery/dist/jquery'
  }
});

require(['main'], function () {});