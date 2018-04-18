'use strict';

module.exports = function() {
  $.gulp.task('copy:bitrix', function() {
    return $.gulp.src('./build/**/*.*')
      .pipe($.gp.ftp({
          host: "83.239.2.238",
          user: "itsmart.io",
          pass: "kfbwoexO",
          remotePath: "/www/test.itsmart.io/local/build/"
      }))
    .pipe($.gp.notify());
  });
};
