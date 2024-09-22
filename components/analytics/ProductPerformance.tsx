"use client";

import { productPerformanceData } from "@/constants";

import Container from "../Container";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const ProductPerformance = () => {
  return (
    <Container className="section-container">
      <h2 className="text-heading mb-4">Product Performance</h2>

      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={productPerformanceData}>
            <XAxis
              dataKey="name"
              stroke="#9CA3AF"
              axisLine={false}
              tickLine={false}
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
            <Bar dataKey="sales" fill="#8884D8" radius={4} />
            <Bar dataKey="revenue" fill="#10B981" radius={4} />
            <Bar dataKey="profit" fill="#F59E0B" radius={4} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Container>
  );
};

export default ProductPerformance;
