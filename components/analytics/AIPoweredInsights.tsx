"use client";

import { cn } from "@/lib/utils";
import { insights } from "@/constants";

import Container from "../Container";

const AIPoweredInsights = () => {
  return (
    <Container className="section-container mt-8">
      <h2 className="text-heading mb-4">AI Powered Insights</h2>

      <div className="space-y-4">
        {insights.map((insight) => (
          <div key={insight.insight} className="flex items-center space-x-3">
            <div
              className={cn("p-2 rounded-full bg-opacity-20", insight.color)}
            >
              <insight.icon className={cn("size-6", insight.color)} />
            </div>
            <p className="text-gray-300">{insight.insight}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AIPoweredInsights;
