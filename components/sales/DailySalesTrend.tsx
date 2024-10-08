"use client";

import { colors, dailySalesData } from "@/constants";

import Container from "../Container";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const DailySalesTrend = () => {
  return (
    <Container className="section-container">
      <h2 className="text-heading mb-4">Daily Sales Trend</h2>

      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={dailySalesData}>
            <XAxis
              dataKey="name"
              stroke="#9CA3AF"
              tickLine={false}
              axisLine={false}
              tickMargin={2}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey={"sales"} fill="#8884D8" radius={4}>
              {dailySalesData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Container>
  );
};

export default DailySalesTrend;
