"use client";

import { colors, salesByCategory } from "@/constants";

import Container from "../Container";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const SalesByCategoryChart = () => {
  return (
    <Container className="section-container">
      <h2 className="text-heading mb-4">Sales by Category</h2>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={salesByCategory}
              cx={"50%"}
              cy={"50%"}
              outerRadius={80}
              fill="#8884D8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {salesByCategory.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Container>
  );
};

export default SalesByCategoryChart;
