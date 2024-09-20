import Header from "@/components/Header";
import RevenueChart from "@/components/analytics/RevenueChart";
import OverviewCards from "@/components/analytics/OverviewCards";
import UserRetention from "@/components/analytics/UserRetention";
import AIPoweredInsights from "@/components/analytics/AIPoweredInsights";
import ProductPerformance from "@/components/analytics/ProductPerformance";
import ChannelPerformance from "@/components/analytics/ChannelPerformance";
import CustomerSegmentation from "@/components/analytics/CustomerSegmentation";

export default function Home() {
  return (
    <div className="flex-1 overflow-auto relative z-10 overflow-x-clip">
      <Header title="Analytics" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <OverviewCards />

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RevenueChart />
          <ChannelPerformance />
          <ProductPerformance />
          <UserRetention />
          <CustomerSegmentation />
        </div>

        <AIPoweredInsights />
      </main>
    </div>
  );
}
