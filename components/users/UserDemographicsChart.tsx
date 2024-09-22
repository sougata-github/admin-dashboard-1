"use client";

import { userDemographicsData, userChartColors } from "@/constants";

import Container from "../Container";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const UserDemographicsChart = () => {
  return (
    <Container className="section-container lg:col-span-2">
      <h2 className="text-heading mb-4">User Demographics</h2>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={userDemographicsData}
              cx={"50%"}
              cy={"50%"}
              labelLine={false}
              outerRadius={80}
              fill="#8884D8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              innerRadius={60}
              strokeWidth={2}
            >
              {userDemographicsData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={userChartColors[index % userChartColors.length]}
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

export default UserDemographicsChart;
