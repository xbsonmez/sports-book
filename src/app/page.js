import BetSlip from "@/features/betslip/components/BetSlip";
import BulletinList from "@/features/bulletin/components/BulletinList";
import CustomErrorBoundary from "@/shared/components/ErrorBoundary";

export default function Home() {
  return (
    <div className="flex h-full relative">
      <div className="flex-1 pr-2">
        <CustomErrorBoundary>
          <BulletinList />
        </CustomErrorBoundary>
      </div>

      <div className="fixed z-20 right-0 w-[428px] h-fit bottom-0 bg-gray-100 border-2 border-black-100">
        <CustomErrorBoundary>
          <BetSlip />
        </CustomErrorBoundary>
      </div>
    </div>
  );
}
