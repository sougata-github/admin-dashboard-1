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
            <XAxis
              dataKey="date"
              stroke="#9CA3AF"
              tickLine={false}
              tickMargin={8}
            />
            <YAxis stroke="#9CA3AF" tickLine={false} tickMargin={2} />
            <Line dot={false} dataKey="orders" type="natural" strokeWidth={3} />

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
