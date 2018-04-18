'use strict';

module.exports = function() {
  $.gulp.task('copy:bitrix:js', function() {
    return $.gulp.src('./build/assets/js/*.*')
      .pipe($.gp.ftp({
          host: "83.239.2.238",
          user: "itsmart.io",
          pass: "kfbwoexO",
          remotePath: "/www/test.itsmart.io/local/build/assets/js/"
      }))
    .pipe($.gp.notify());
  });
};
