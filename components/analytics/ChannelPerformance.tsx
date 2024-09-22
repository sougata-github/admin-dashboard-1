"use client";

import { channelData, channelColors } from "@/constants";

import Container from "../Container";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const ChannelPerformance = () => {
  return (
    <Container className="section-container overflow-x-clip">
      <h2 className="text-heading">Channel Performance</h2>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={channelData}
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
              {channelData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={channelColors[index % channelColors.length]}
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

export default ChannelPerformance;
