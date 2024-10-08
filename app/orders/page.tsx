import { orderStats } from "@/constants";

import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import Container from "@/components/Container";
import OrdersTable from "@/components/orders/OrdersTable";
import DailyOrders from "@/components/orders/DailyOrders";
import OrderDistribution from "@/components/orders/OrderDistribution";

export default function Home() {
  return (
    <div className="flex-1 overflow-auto relative z-10 overflow-x-clip">
      <Header title="Orders" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Stats */}
        <Container className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-2 xl:grid-cols-4 mb-8">
          {orderStats.map((stat) => (
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <DailyOrders />
          <OrderDistribution />
          <OrdersTable />
        </div>
      </main>
    </div>
  );
}
