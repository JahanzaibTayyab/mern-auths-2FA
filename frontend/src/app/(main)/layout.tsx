import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import Asidebar from "./_components/Asidebar";
import { AuthProvider } from "@/context/auth-provider";
import Header from "./_components/Header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <SidebarProvider>
        <Asidebar />
        <SidebarInset>
          <main className="w-full">
            <Header />
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </AuthProvider>
  );
}
