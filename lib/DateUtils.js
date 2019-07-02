/**
 * 获取未来某几天
 * @param {*} day
 * @param {*} n
 */
export function AddDays(day, n) {
    var t = new Date(day);
    t.setDate(t.getDate() + n);
    return t;
}

/**
 * 有几天
 * @param {*} n 整数
 */
export function getFutureYearDays(n) {
    var t = new Date();
    var newDateStr = t.getFullYear() + n + "-" + (t.getMonth() + 1) + "-" + t.getDate();
    return new Date(newDateStr);
}

/**
 * 获取某年的第一天
 * @param {*} year
 */
export function getFirstWeekBegDay(year) {
    var tempdate = new Date(year, 0, 1);
    var temp = tempdate.getDay();
    if (temp === 1) {
        return tempdate;
    }
    temp = temp === 0 ? 7 : temp;
    tempdate = tempdate.setDate(tempdate.getDate() + (8 - temp));
    return new Date(tempdate);
}

/**
 * 获取某年某周开始日期
 * @param {*} paraYear
 * @param {*} weekIndex
 */
export function getWeekStartDate(paraYear, weekIndex) {
    var firstDay = getFirstWeekBegDay(paraYear); //7*24*3600000 是一星期的时间毫秒数,(JS中的日期精确到毫秒)
    var time = (weekIndex - 1) * 7 * 24 * 3600000;
    var beginDay = firstDay; //为日期对象 date 重新设置成时间 time
    beginDay.setTime(firstDay.valueOf() + time);
    return beginDay;
}

/**
 * 获取某年某周结束日期
 * @param {*} paraYear
 * @param {*} weekIndex
 */
export function getWeekEndDate(paraYear, weekIndex) {
    var firstDay = getFirstWeekBegDay(paraYear); //7*24*3600000 是一星期的时间毫秒数,(JS中的日期精确到毫秒)
    var time = (weekIndex - 1) * 7 * 24 * 3600000;
    var weekTime = 6 * 24 * 3600000;
    var endDay = firstDay; //为日期对象 date 重新设置成时间 time
    endDay.setTime(firstDay.valueOf() + weekTime + time);
    return endDay;
}

/**
 * 获取某年某月开始日期
 * @param {*} year
 * @param {*} month
 */
export function getMonthStartDate(year, month) {
    return new Date(year, month, 1);
}

/**
 * 获取某年某月结束日期
 * @param {*} year
 * @param {*} month
 */
export function getMonthEndDate(year, month) {
    return AddDays(AddMonths(getMonthStartDate(year, month), 1), -1);
}

/**
 * 获取某年某季度的开始日期
 * @param {*} year
 * @param {*} quarter
 */
export function getQuarterStartDate(year, quarter) {
    return new Date(year, getQuarterStartMonth(quarter), 1);
}

/**
 * 获取某年某季度的结束日期
 * @param {*} year
 * @param {*} quarter
 */
export function getQuarterEndDate(year, quarter) {
    return AddDays(AddMonths(getQuarterStartDate(year, quarter), 3), -1);
}

/**
 * 获取本季度
 */
export function getCurrentQuertar() {
    const currentQuertar = Math.floor(
        (new Date().getMonth() + 1) % 3 === 0 ? (new Date().getMonth() + 1) / 3 : (new Date().getMonth() + 1) / 3 + 1
    );

    return currentQuertar;
}

/**
 * 获取未来某几个月的日期
 * @param {*} day
 * @param {*} n
 */
export function AddMonths(day, n) {
    var t = new Date(day);
    t.setMonth(t.getMonth() + n);
    if (t.getDate() !== day.getDate()) {
        t.setDate(0);
    }

    return t;
}

/**
 * 获取季度的开始月份
 * @param {*} quarter
 */
export function getQuarterStartMonth(quarter) {
    if (quarter === 1) return 0;
    else if (quarter === 2) return 3;
    else if (quarter === 3) return 6;
    else {
        return 9;
    }
}
