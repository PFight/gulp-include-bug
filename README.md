### Steps to reproduce

1. npm install
2. gulp run
3. Look at out/test2.js. It contains:

        //=require to-include.js

But should contain same as out/test1.js, i.e:
	
        // It is included content!
		
So, when we process several files like this:

       gulp.src(["test1.js", "test2.js"])
		 .pipe(gulpInclude())
		 .pipe(gulp.dest("./out"));
		 
Only first file is processed by gulp-include. All other files are ignored.