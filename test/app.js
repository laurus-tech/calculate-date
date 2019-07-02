import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import {
    getCurrentQuertar,
    getQuarterStartMonth,
    AddDays,
    AddMonths,
    getFutureYearDays,
    getFirstWeekBegDay,
    getWeekStartDate,
    getWeekEndDate,
    getMonthStartDate,
    getMonthEndDate,
    getQuarterStartDate,
    getQuarterEndDate
} from "../lib/DateUtils";

require("./app.css");

const dateFormat = "YYYY-MM-DD";
const dateTimeFormat = "YYYY-MM-DD hh:mm:ss";

class DateUtilsTest extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Mean</th>
                            <th>Value</th>
                            <th>Code</th>
                            <th>Method</th>
                            <th>Params</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Current Date</td>
                            <td>{moment(new Date()).format(dateFormat)}</td>
                            <td>
                                <code>{`{moment(new Date()).format(dateFormat)}`}</code>
                            </td>
                            <td> - </td>
                            <td> - </td>
                        </tr>
                        <tr>
                            <td>Current Quarter</td>
                            <td>{getCurrentQuertar()}</td>
                            <td>
                                <code>{`{getCurrentQuertar()}`}</code>
                            </td>
                            <td>
                                <code>{`getCurrentQuertar()`}</code>
                            </td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Quarter 3's start Month</td>
                            <td>{getQuarterStartMonth(3)}</td>
                            <td>
                                <code>{`{getQuarterStartMonth(3)}`}</code>
                            </td>
                            <td>
                                <code>{`getQuarterStartMonth(quarter)`}</code>
                            </td>
                            <td>
                                p1. quarter - Int - <span style={{ color: "red" }}> 3 (Tips: only in [1, 2, 3,4])</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Add 1 Day's Date</td>
                            <td>{moment(AddDays(new Date(), 1)).format(dateFormat)}</td>
                            <td>
                                <code>{`{moment(AddDays(new Date(), 1)).format(dateFormat)}`}</code>
                            </td>
                            <td>
                                <code>{`AddDays(day, n)`}</code>
                            </td>
                            <td>
                                p1. day - Date/String - 2019-09-20 <hr /> p2. n - Int - 1 / -1
                            </td>
                        </tr>
                        <tr>
                            <td>Add 1 Month's Date</td>
                            <td>{moment(AddMonths(new Date(), 1)).format(dateFormat)}</td>
                            <td>
                                <code>{`{moment(AddMonths(new Date(), 1)).format(dateFormat)}`}</code>
                            </td>
                            <td>
                                <code>{`AddMonths(day, n)`}</code>
                            </td>
                            <td>
                                p1. day - Date/String - 2019-09-20 <hr /> p2. n - Int - 1 / -1
                            </td>
                        </tr>
                        <tr>
                            <td>Future One Year's Day</td>
                            <td>{moment(getFutureYearDays(1)).format(dateFormat)}</td>
                            <td>
                                <code>{`{moment(getFutureYearDays(1)).format(dateFormat)}`}</code>
                            </td>
                            <td>
                                <code>{`getFutureYearDays(n)`}</code>
                            </td>
                            <td>p1. n - Int - 1 / -1</td>
                        </tr>
                        <tr>
                            <td> Year 2019 first Week's Day</td>
                            <td>{moment(getFirstWeekBegDay(2019)).format(dateFormat)}</td>
                            <td>
                                <code>{`{moment(getFirstWeekBegDay(2019)).format(dateFormat)}`}</code>
                            </td>
                            <td>
                                <code>{`getFirstWeekBegDay(year)`}</code>
                            </td>
                            <td>p1. year -Int - 2019</td>
                        </tr>

                        <tr>
                            <td> Year 2019 Week 20's Start Day </td>
                            <td>{moment(getWeekStartDate(2019, 20)).format(dateFormat)}</td>
                            <td>
                                <code>{`{moment(getWeekStartDate(2019, 20)).format(dateFormat)}`}</code>
                            </td>
                            <td>
                                <code>{`getWeekStartDate(year, n)`}</code>
                            </td>
                            <td>
                                p1. year - Int - 2019 <hr /> p2. n - Int - 20
                            </td>
                        </tr>

                        <tr>
                            <td> Year 2019 Week 20's End Day </td>
                            <td>{moment(getWeekEndDate(2019, 20)).format(dateFormat)}</td>
                            <td>
                                <code>{`{moment(getWeekEndDate(2019, 20)).format(dateFormat)}`}</code>
                            </td>
                            <td>
                                <code>{`getWeekEndDate(year, n)`}</code>
                            </td>
                            <td>
                                p1. year - Int - 2019 <hr /> p2. n - Int - 20
                            </td>
                        </tr>

                        <tr>
                            <td> Year 2019 Month 5's Start Day </td>
                            <td>{moment(getMonthStartDate(2019, 4)).format(dateFormat)}</td>
                            <td>
                                <code>{`{moment(getMonthStartDate(2019, 4)).format(dateFormat)}`}</code>
                            </td>
                            <td>
                                <code>{`getMonthStartDate(year, n)`}</code>
                            </td>
                            <td>
                                p1. year - Int - 2019 <hr /> p2. n - Int -{" "}
                                <span style={{ color: "red" }}>4 (Tips: default Date's Month need + 1)</span>
                            </td>
                        </tr>
                        <tr>
                            <td> Year 2019 Month 5's End Day </td>
                            <td>{moment(getMonthEndDate(2019, 4)).format(dateFormat)}</td>
                            <td>
                                <code>{`{moment(getMonthEndDate(2019, 4)).format(dateFormat)}`}</code>
                            </td>
                            <td>
                                <code>{`getMonthEndDate(year, n)`}</code>
                            </td>
                            <td>
                                p1. year - Int - 2019 <hr /> p2. n - Int -{" "}
                                <span style={{ color: "red" }}>4 (Tips: default Date's Month need + 1)</span>
                            </td>
                        </tr>

                        <tr>
                            <td> Year 2019 Quarter 4's Start Day </td>
                            <td>{moment(getQuarterStartDate(2019, 4)).format(dateFormat)}</td>
                            <td>
                                <code>{`{moment(getQuarterStartDate(2019, 4)).format(dateFormat)}`}</code>
                            </td>
                            <td>
                                <code>{`getQuarterStartDate(year, n)`}</code>
                            </td>
                            <td>
                                p1. year - Int - 2019 <hr /> p2. n - Int - 4
                            </td>
                        </tr>
                        <tr>
                            <td> Year 2019 Quarter 4's End Day </td>
                            <td>{moment(getQuarterEndDate(2019, 4)).format(dateFormat)}</td>
                            <td>
                                <code>{`{moment(getQuarterEndDate(2019, 4)).format(dateFormat)}`}</code>
                            </td>
                            <td>
                                <code>{`getQuarterEndDate(year, n)`}</code>
                            </td>
                            <td>
                                p1. year - Int - 2019 <hr /> p2. n - Int - 4
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

ReactDOM.render(<DateUtilsTest />, document.getElementById("app"));
