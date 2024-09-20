import { salesStats } from "@/constants";

import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import Container from "@/components/Container";
import DailySalesTrend from "@/components/sales/DailySalesTrend";
import SalesOverviewChart from "@/components/sales/SalesOverviewChart";
import SalesByCategoryChart from "@/components/sales/SalesByCategoryChart";

export default function Home() {
  return (
    <div className="flex-1 overflow-auto overflow-x-clip relative z-10">
      <Header title="Sales" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Stats */}
        <Container className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-2 xl:grid-cols-4 mb-8">
          {salesStats.map((stat) => (
            <StatCard
              key={stat.name}
              name={stat.name}
              icon={
                <stat.icon
                  className="mr-2 size-5"
                  style={{
                    color: `${stat.color}`,
                  }}
                />
              }
              value={stat.value}
              color={stat.color}
            />
          ))}
        </Container>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SalesOverviewChart />
          <SalesByCategoryChart />
          <DailySalesTrend />
        </div>
      </main>
    </div>
  );
}
