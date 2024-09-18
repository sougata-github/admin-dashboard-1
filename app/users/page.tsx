import { userStats } from "@/constants";

import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import Container from "@/components/Container";
import UsersTable from "@/components/users/UsersTable";
import UserGrowthChart from "@/components/users/UserGrowthChart";
import UserActivityHeatmap from "@/components/users/UserActivityHeatmap";
import UserDemographicsChart from "@/components/users/UserDemographicsChart";

export default function Home() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Stats */}
        <Container className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-2 xl:grid-cols-4 mb-8">
          {userStats.map((stat) => (
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

        <UsersTable />

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <UserGrowthChart />
          <UserActivityHeatmap />
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  );
}
