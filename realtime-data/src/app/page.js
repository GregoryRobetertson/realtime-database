
import RealTimeDisplay from "./RealTimeDisplay";
import RealTimeForm from "./RealTimeForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RealTimeForm/>
      <RealTimeDisplay/>
    </main>
  );
}
