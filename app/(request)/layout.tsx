import { LightRays } from "@/components/ui/atoms/light-rays";

export default function RequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center justify-center h-screen overflow-hidden bg-linear-to-b to-[#B50909] from-[#C91B1C] w-full relative">
      <LightRays color="#f04e4e" />
      <div className="relative z-10 h-full w-full ">{children}</div>
    </main>
  );
}
