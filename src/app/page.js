import AppAreaChart from "@/components/charts/AppAreaChart";
import AppBarChart from "@/components/charts/AppBarChart";
import AppPieChart from "@/components/charts/AppPieChart";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        Test
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        Test
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        Test
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppPieChart />
      </div>
    </div>
  );
}
