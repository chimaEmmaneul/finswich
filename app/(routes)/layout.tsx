import TabNavigation from "@/components/TabNavigation/indext";

export default function RoutesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-4 my-8 min-h-screen">
      <TabNavigation />
      {children}
    </div>
  );
}