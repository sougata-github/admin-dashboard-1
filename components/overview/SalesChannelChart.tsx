"use client";

import Container from "../Container";
import { colors, salesChannelData } from "@/constants";

import {
  Bar,
  BarChart,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const SalesChannelChart = () => {
  return (
    <Container className="section-container lg:col-span-2">
      <h2 className="text-heading mb-4">Sales by channel</h2>

      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={salesChannelData}>
            <XAxis
              dataKey="name"
              stroke="#9CA3AF"
              tickLine={false}
              tickMargin={2}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey={"value"} fill="#8884D8" radius={4}>
              {salesChannelData.map((_, index) => (
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

export default SalesChannelChart;
