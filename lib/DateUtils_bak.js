const DateUtils = {
    AddDays: function(day, n) {
        var t = new Date(day);
        t.setDate(t.getDate() + n);
        return t;
    },
    getFutureYearDays: function(n) {
        var t = new Date();
        var newDateStr = t.getFullYear() + n + "-" + (t.getMonth() + 1) + "-" + t.getDate();
        return new Date(newDateStr);
    },
    getFirstWeekBegDay: function(year) {
        var tempdate = new Date(year, 0, 1);
        var temp = tempdate.getDay();
        if (temp === 1) {
            return tempdate;
        }
        temp = temp === 0 ? 7 : temp;
        tempdate = tempdate.setDate(tempdate.getDate() + (8 - temp));
        return new Date(tempdate);
    },
    getWeekStartDate: function(paraYear, weekIndex) {
        var firstDay = DateUtils.getFirstWeekBegDay(paraYear); //7*24*3600000 是一星期的时间毫秒数,(JS中的日期精确到毫秒)
        var time = (weekIndex - 1) * 7 * 24 * 3600000;
        var beginDay = firstDay; //为日期对象 date 重新设置成时间 time
        beginDay.setTime(firstDay.valueOf() + time);
        return beginDay;
    },
    getWeekEndDate: function(paraYear, weekIndex) {
        var firstDay = DateUtils.getFirstWeekBegDay(paraYear); //7*24*3600000 是一星期的时间毫秒数,(JS中的日期精确到毫秒)
        var time = (weekIndex - 1) * 7 * 24 * 3600000;
        var weekTime = 6 * 24 * 3600000;
        var endDay = firstDay; //为日期对象 date 重新设置成时间 time
        endDay.setTime(firstDay.valueOf() + weekTime + time);
        return endDay;
    },
    getMonthStartDate: function(year, month) {
        return new Date(year, month, 1);
    },
    getMonthEndDate: function(year, month) {
        return DateUtils.AddDays(DateUtils.AddMonths(DateUtils.getMonthStartDate(year, month), 1), -1);
    },
    getQuarterStartDate: function(year, quarter) {
        return new Date(year, DateUtils.getQuarterStartMonth(quarter), 1);
    },
    getQuarterEndDate: function(year, quarter) {
        return DateUtils.AddDays(DateUtils.AddMonths(DateUtils.getQuarterStartDate(year, quarter), 3), -1);
    },
    getCurrentQuertar: function() {
        const currentQuertar = Math.floor(
            (new Date().getMonth() + 1) % 3 === 0 ? (new Date().getMonth() + 1) / 3 : (new Date().getMonth() + 1) / 3 + 1
        );

        return currentQuertar;
    },
    AddMonths: function(day, n) {
        var t = new Date(day);
        t.setMonth(t.getMonth() + n);
        if (t.getDate() !== day.getDate()) {
            t.setDate(0);
        }

        return t;
    },
    getQuarterStartMonth: function(quarter) {
        if (quarter === 1) return 0;
        else if (quarter === 2) return 3;
        else if (quarter === 3) return 6;
        else {
            return 9;
        }
    }
};

module.exports = DateUtils;
