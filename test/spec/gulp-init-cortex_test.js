describe("gulp-init-cortex", function(){
    describe("gulp-init-cortex.my_method()", function(){
        it("should return 1", function(done){
            _use('gulp-init-cortex@latest', function(exports) {
                expect('my_method' in exports);
                done();
            });
        });
    });
});