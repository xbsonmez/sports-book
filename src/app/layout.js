import ReduxProvider from "@/shared/components/ReduxProvider";
import "./globals.css";

export const metadata = {
  title: "Nesine ",
  description: "Bulletin board for sports betting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
