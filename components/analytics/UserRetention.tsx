"use client";

import { userRetentionData } from "@/constants";

import Container from "../Container";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const UserRetention = () => {
  return (
    <Container className="section-container">
      <h2 className="text-heading mb-4">User Retention</h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={userRetentionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="name"
              stroke="#9CA3AF"
              tickLine={false}
              tickMargin={8}
              axisLine={false}
            />
            <YAxis
              stroke="#9CA3AF"
              tickLine={false}
              tickMargin={2}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Line
              dot={false}
              type="natural"
              dataKey="retention"
              stroke="#8B5CF6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Container>
  );
};

export default UserRetention;
