# solarlunar-es：强大的公历农历转换库
## 简介
`solarlunar-es` 是一款支持 `esmodule` 的公历农历（阳历阴历）转换库，能够在 1900 年至 2100 年这个区间内实现公历与农历之间的相互转换。



**关键术语**：
- **Solar**：即公历、阳历
- **Lunar**：即农历、阴历

## 支持范围
本库支持的年份范围为 `1900-2100`。

## 用法示例
通过以下方式引入库并进行转换操作：
```js
import solarLunar from 'solarlunar-es';
// 公历转农历
const solar2lunarData = solarLunar.solar2lunar(2015, 10, 8); 
// 农历转公历
const lunar2solarData = solarLunar.lunar2solar(2015, 8, 26); 
```

转换后返回的数据示例：
```js
{
    lYear: 2015,
    lMonth: 8,
    lDay: 26,
    animal: '羊',
    monthCn: '八月',
    dayCn: '廿六',
    cYear: 2015,
    cMonth: 10,
    cDay: 8,
    gzYear: '乙未',
    gzMonth: '丙戌',
    gzDay: '丁巳',
    isToday: false,
    isLeap: false,
    nWeek: 4,
    ncWeek: '星期四',
    isTerm: true,
    term: '寒露',
    lunarFestival:'',
    festival: ''
}
```

## API 详细介绍
### 日期转换相关 API
1. **`solarLunar.solar2lunar`**：将公历日期转换为农历日期。
    - **参数**：(Number)年,(Number)月,(Number)日
    - **示例**：
    ```js
    solarLunar.solar2lunar(2015, 10, 8);
    solarLunar.solar2lunar(2015, 10, 08); // 与上者等价
    ```
2. **`solarLunar.lunar2solar`**：将农历日期转换为公历日期。
    - **参数**：(Number)年,(Number)月,(Number)日,(bool)是否闰月（可选）
    - **示例**：
    ```js
    solarLunar.lunar2solar(2015, 8, 26);
    solarLunar.lunar2solar(2015, 08, 26); // 与上者等价
    solarLunar.lunar2solar(2015, 8, 26, true);  // 表示闰月
    ```

### 数据信息相关 API
1. **`solarLunar.lunarInfo`**：返回农历 1900-2100 的闰大小信息表，类型为数组。
2. **`solarLunar.solarMonth`**：返回公历每个月份的天数普通表，类型为数组。
3. **`solarLunar.gan`**：天干地支之天干速查表，内容为 `["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]`，类型为数组。
4. **`solarLunar.zhi`**：天干地支之地支速查表，内容为 `["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]`，类型为数组。
5. **`solarLunar.animals`**：生肖表，内容为 `["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]`，类型为数组。
6. **`solarLunar.lunarTerm`**：24 节气速查表，内容为 `["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]`，类型为数组。
7. **`solarLunar.lTermInfo`**：1900-2100 各年的 24 节气日期速查表，类型为数组。
8. **`nStr1`**：数字转中文速查表，内容为 `['日','一','二','三','四','五','六','七','八','九','十']`，类型为数组。
9. **`nStr2`**：日期转农历称呼速查表，内容为 `['初','十','廿','卅']`，类型为数组。
10. **`nStr3`**：月份转农历称呼速查表，内容为 `['正','一','二','三','四','五','六','七','八','九','十','冬','腊']`，类型为数组。

### 计算相关 API
1. **`lYearDays`**：返回农历 `y` 年一整年的总天数。
    - **示例**：
    ```js
    const count = solarLunar.lYearDays(1987); //count=387
    ```
2. **`leapMonth`**：返回农历 `y` 年闰月是哪个月；若 `y` 年没有闰月 则返回 0。
    - **示例**：
    ```js
    const leapMonth = solarLunar.leapMonth(1987); //leapMonth=6
    ```
3. **`leapDays`**：返回农历 `y` 年闰月的天数，若该年没有闰月则返回 0。
    - **示例**：
    ```js
    const leapMonthDay = solarLunar.leapDays(1987); //leapMonthDay=29
    ```
4. **`monthDays`**：返回农历 `y` 年 `m` 月（非闰月）的总天数，计算 `m` 为闰月时的天数请使用 `leapDays` 方法。
    - **示例**：
    ```js
    const MonthDay = solarLunar.monthDays(1987, 9); //MonthDay=29
    ```
5. **`solarDays`**：返回公历 `y` 年 `m` 月的天数。
    - **示例**：
    ```js
    const solarMonthDay = solarLunar.solarDays(1987, 10); // 假设此处返回31，具体根据实际情况
    ```

### 特殊功能相关 API
1. **`toGanZhi`**：传入 `offset` 偏移量返回干支。
2. **`getTerm`**：传入公历 `y` 年获得该年第 `n` 个节气的公历日期。
    - **参数**：
      - 第一个参数为公历年(1900-2100)；
      - 第二个参数为二十四节气中的第几个节气(1~24)；从 `n=1(小寒)` 算起
    - **示例**：
    ```js
    const _24 = solarLunar.getTerm(1987, 3); //_24=4;意即1987年2月4日立春
    ```
3. **`toChinaMonth`**：传入农历数字月份返回汉语通俗表示法。
    - **示例**：
    ```js
    const cnMonth = solarLunar.toChinaMonth(12); //cnMonth='腊月'
    ```
4. **`toChinaDay`**：传入农历日期数字返回汉字表示法。
    - **示例**：
    ```js
    const cnDay = solarLunar.toChinaDay(21); //cnMonth='廿一'
    ```
5. **`getAnimal`**：年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”。
    - **示例**：
    ```js
    const animal = solarLunar.getAnimal(1987); //animal='兔'
    ```

## 返回值说明
1. **`lYear`**：农历年，类型为 `Number`。
2. **`lMonth`**：农历月，类型为 `Number`。
3. **`lDay`**：农历日，类型为 `Number`。
4. **`monthCn`**：农历月中文名称，如果为闰月，则会在月份前增加 `闰` 字，类型为 `String`。
5. **`dayCn`**：农历日中文名称，类型为 `String`。
6. **`animal`**：生肖，类型为 `String`。
7. **`gzYear`**：年的农历叫法（干支），类型为 `String`。
8. **`gzMonth`**：月的农历叫法（干支），类型为 `String`。
9. **`gzDay`**：日的农历叫法(干支)，类型为 `String`。
10. **`cYear`**：公历年，类型为 `Number`。
11. **`cMonth`**：公历月，类型为 `Number`。
12. **`cDay`**：公历日，类型为 `Number`。
13. **`nWeek`**：周几，类型为 `Number`。
14. **`ncWeek`**：中文周几，类型为 `String`。
15. **`isLeap`**：是否是闰月，类型为 `Boolean`。
16. **`isToday`**：是否是今天，类型为 `Boolean`。
17. **`isTerm`**：是否有节气，类型为 `Boolean`。
18. **`term`**：节气，如果没有则返回空字符串，类型为 `String`。
19. **`lunarFestival`**：农历节日，如果没有则返回空字符串，类型为 `String`。
20. **`festival`**：公历节日，如果没有则返回空字符串，类型为 `String`。 