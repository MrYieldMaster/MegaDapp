import React, { PureComponent } from "react";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
// const C = dynamic(() => import("recharts"));
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  render() {
    const data = this.props.data.map((d) => {
      return {
        ...d,
        date: dayjs(`${d.timeInterval.hour}`).format("M/D, H A"),
      };
    });

    return (
      <div
        style={{ width: "100%", height: 250 }}
        className="order-1 md:order-2"
      >
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            {/* <CartesianGrid
              strokeDasharray="1"
              horizontal={false}
              stroke={["#2C2C2C"]}
            /> */}
            <XAxis
              padding={{ left: 10 }}
              left="5"
              dataKey="date"
              tick={{ fontSize: "10px" }}
              stroke="#fff"
            />
            <YAxis
              padding={{ bottom: 10 }}
              orientation="right"
              tick={{ fontSize: "10px" }}
              stroke="#fff"
            />
            {/* <Tooltip /> */}
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFB413" stopOpacity={1} />
                <stop offset="95%" stopColor="#811343" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="price"
              stroke="#fff"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
