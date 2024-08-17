import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <div className="container mx-auto flex-1 py-10 ">{children}</div>
      <Footer />
    </div>
  );
}
