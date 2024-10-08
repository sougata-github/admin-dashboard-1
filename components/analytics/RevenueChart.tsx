"use client";

import { revenueData } from "@/constants";

import Container from "../Container";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const RevenueChart = () => {
  return (
    <Container className="section-container mt-8 lg:col-span-2">
      <h2 className="text-heading mb-4">Revenue vs Target</h2>

      <div className="w-full h-80">
        <ResponsiveContainer>
          <AreaChart data={revenueData}>
            <XAxis
              dataKey="month"
              stroke="#9CA3AF"
              tickLine={false}
              tickMargin={8}
            />
            <YAxis stroke="#9CA3AF" tickLine={false} tickMargin={2} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Area
              type="natural"
              dataKey="revenue"
              stroke="#8B5Cf6"
              fill="#8B5CF6"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="target"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Container>
  );
};

export default RevenueChart;
