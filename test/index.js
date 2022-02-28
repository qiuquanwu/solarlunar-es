var solarLunar = require("../dist/bundle.cjs")
var chai = require('chai'),
    expect = chai.expect
describe('公农历互转测试', function () {
    describe('常规测试', function () {
        it('should return empty string', function () {
            const solar2lunarData = solarLunar.solar2lunar(2015, 10, 8);
            console.log(solar2lunarData)
            expect(solar2lunarData).to.have.any.keys('lYear', 'lMonth')
        });
    });
});