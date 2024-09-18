import Navbar from "@/app/components/hospitals/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>
        <Navbar />
        {children}
      </main>
    </>
  );
}
