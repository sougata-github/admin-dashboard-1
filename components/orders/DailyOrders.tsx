"use client";

import { dailyOrdersData } from "@/constants";

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

const DailyOrders = () => {
  return (
    <Container className="section-container">
      <h2 className="text-heading mb-4">Daily Orders</h2>

      <div className="h-80">
        <ResponsiveContainer>
          <LineChart data={dailyOrdersData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="date" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Line
              dataKey="orders"
              type="monotone"
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{
                r: 8,
                strokeWidth: 2,
              }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Container>
  );
};

export default DailyOrders;
