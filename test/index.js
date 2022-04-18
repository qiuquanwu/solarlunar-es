var solarLunar = require("../dist/solarlunar.cjs")
var chai = require('chai'),
    expect = chai.expect
describe('公农历互转测试', function () {
    describe('常规测试1', function () {
        it('should return empty string', function () {
            const solar2lunarData = solarLunar.solar2lunar(2022, 1, 31);
            console.log(solar2lunarData)
            expect(solar2lunarData.lunarFestival).to.eq('除夕')
        });
    });
    describe('常规测试2', function () {
        it('should return empty string', function () {
            const solar2lunarData = solarLunar.solar2lunar(2022, 6, 3);
            console.log(solar2lunarData)
            expect(solar2lunarData).to.have.any.keys('lYear', 'lMonth')
        });
    });
    describe('常规测试3', function () {
        it('should return empty string', function () {
            const solar2lunarData =solarLunar.solar2lunar(2022, 7, 1);
            console.log(solar2lunarData)
            expect(solar2lunarData).to.have.any.keys('lYear', 'lMonth')
            // return true
        });
    });
    describe('常规测试4', function () {
        it('should return empty string', function () {
            const solar2lunarData =solarLunar.solar2lunar(2022, 5, 1);
            console.log(solar2lunarData)
            expect(solar2lunarData.festival).to.eq('劳动节')
            // return true
        });
    });
});