import Navbar from "@/app/components/hospitals/Navbar";
import AdminInfoBar from "@/app/components/hospitals/AdminInfoBar";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>
        <div className="flex h-screen">
          {/* Full height flex container */}
          {/* Left sidebar (Navbar) */}
          <div className="w-1/6">
            {/* Adjust width as needed */}
            <Navbar />
          </div>
          {/* Right content section (AdminInfoBar and Page Content) */}
          <div className="flex flex-col w-5/6">
            {/* AdminInfoBar and Page content in a column */}
            {/* Top section (AdminInfoBar) */}
            <div className="w-full">
              <AdminInfoBar />
            </div>
            {/* Bottom section (Page content under AdminInfoBar) */}
            <div className="flex-grow p-4 bg-blue-50">
              {/* Use padding and flex-grow for page content */}
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
