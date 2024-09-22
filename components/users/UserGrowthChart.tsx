"use client";

import { userGrowthData } from "@/constants";

import Container from "../Container";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const UserGrowthChart = () => {
  return (
    <Container className="section-container">
      <h2 className="text-heading mb-4">User Growth</h2>
      <div className="h-80">
        <ResponsiveContainer>
          <LineChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis
              dataKey="month"
              stroke="#9CA3AF"
              tickLine={false}
              tickMargin={8}
            />
            <YAxis stroke="#9CA3AF" tickLine={false} tickMargin={2} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line dot={false} type="natural" dataKey="users" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Container>
  );
};

export default UserGrowthChart;
