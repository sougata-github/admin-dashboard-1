"use client";

import { colors, productPerformanceData } from "@/constants";

import Container from "../Container";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ProductPerformance = () => {
  return (
    <Container className="section-container">
      <h2 className="text-heading mb-4">Product Performance</h2>

      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={productPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#485563" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey="sales" fill="#8884D8" />
            <Bar dataKey="revenue" fill="#10B981" />
            <Bar dataKey="profit" fill="#F59E0B" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Container>
  );
};

export default ProductPerformance;
