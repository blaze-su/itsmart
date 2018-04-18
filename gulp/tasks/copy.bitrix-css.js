'use strict';

module.exports = function() {
  $.gulp.task('copy:bitrix:css', function() {
    return $.gulp.src('./build/assets/css/*.*')
      .pipe($.gp.ftp({
          host: "83.239.2.238",
          user: "itsmart.io",
          pass: "kfbwoexO",
          remotePath: "/www/test.itsmart.io/local/build/assets/css/"
      }))
    .pipe($.gp.notify());
  });
};
