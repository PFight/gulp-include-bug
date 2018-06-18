const gulp = require("gulp");
const gulpInclude = require("gulp-include");

gulp.task("run", () => {
	gulp.src(["test1.js", "test2.js"])
		.pipe(gulpInclude())
		.pipe(gulp.dest("./out"));
})