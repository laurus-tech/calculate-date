# JavaScript Awesome Calculate Date Utils

JavaScript Awesome Calculate Date Utils. AddDays, AddMonths etc...

# Installation

<code> npm install calculate-date</code>

_or_

<code>yarn add calculate-date</code>

# Usage - Sample

```jsx
import { getCurrentQuertar } from "calculate-date";

<div>{getCurrentQuertar()}</div>;
```

### 使用效果图如下

<img src="https://github.com/laurus-tech/calculate-date/blob/master/public/images/allFuncs.png" alt='效果图' />

<img src="https://github.com/laurus-tech/calculate-date/blob/master/public/images/dateUtilsFuncs.png" alt='效果图' />

# Functions

<table>
    <thead>
        <tr>
            <th>
                Function
            </th>
            <th>
                Desc
            </th>
            <th>
                Params Desc
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>getCurrentQuertar()</code></td>
            <td>获取当前时间的季度</td>
            <td>-</td>
        </tr>
        <tr>
            <td><code>getQuarterStartMonth(quarter)</code></td>
            <td>获取季度开始的月份</td>
            <td>quarter只能是1,2,3,4;返回对应的开始月份</td>
        </tr>
        <tr>
            <td><code>AddDays(day, n)</code></td>
            <td>获取某天的前几天或者后几天的日期</td>
            <td>
                p1. 某天日期 <br />
                p2. 后几天的天数，负值代表前几天
            </td>
        </tr>
        <tr>
            <td><code>AddMonths(day, n)</code></td>
            <td>获取某天的前几个月或者后几个月的日期</td>
            <td>
                p1. 某天日期 <br />
                p2. 后几个月的月数，负值代表前几个月
            </td>
        </tr>
        <tr>
            <td><code>getFutureYearDays(n)</code></td>
            <td>获取未来几年的日期</td>
            <td>
                p1. 年数，负值代表之前
            </td>
        </tr>
        <tr>
            <td><code>getFutureYearDays(n)</code></td>
            <td>获取未来几年的日期</td>
            <td>
                p1. 年数，负值代表之前
            </td>
        </tr>
        <tr>
            <td><code>getFirstWeekBegDay(year)</code></td>
            <td>获取某年的第一周开始日期</td>
            <td>
                p1. 年份
            </td>
        </tr>
        <tr>
            <td><code>getWeekStartDate(year, n)</code></td>
            <td>获取某年某一周的开始日期</td>
            <td>
                p1. 年份<br />
                p2. 周数 (一般为 1 - 52)
            </td>
        </tr>
        <tr>
            <td><code>getWeekEndDate(year, n)</code></td>
            <td>获取某年某一周的结束日期</td>
            <td>
                p1. 年份<br />
                p2. 周数 (一般为 1 - 52)
            </td>
        </tr>
        <tr>
            <td><code>getMonthStartDate(year, n)</code></td>
            <td>获取某年某一月的开始日期</td>
            <td>
                p1. 年份<br />
                p2. 月数
            </td>
        </tr>
        <tr>
            <td><code>getMonthEndDate(year, n)</code></td>
            <td>获取某年某一月的结束日期</td>
            <td>
                p1. 年份<br />
                p2. 月数
            </td>
        </tr>
        <tr>
            <td><code>getQuarterStartDate(year, n)</code></td>
            <td>获取某年某一季度的开始日期</td>
            <td>
                p1. 年份<br />
                p2. 季度
            </td>
        </tr>
        <tr>
            <td><code>getQuarterStartDate(year, n)</code></td>
            <td>获取某年某一季度的结束日期</td>
            <td>
                p1. 年份<br />
                p2. 季度
            </td>
        </tr>
    </tbody>
</table>

# Playground

```
git clone https://github.com/laurus-tech/js-awesome-date-utils.git

cd js-awesome-date-utils

npm install

npm run dev
```

```
访问地址 http://localhost:11000/
```

即可看到效果如上图所示

# License

MIT
Copyright (c) 2019 Laurus-Tech
