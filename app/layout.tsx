import { Header } from "../components/organism/Header";
import { Provider } from "../components/ui/provider";
import { Monda } from "next/font/google";

const monda = Monda({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-monda",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={monda.variable}
    >
      <body suppressHydrationWarning
      >
        <Provider>
          <Header />
            {children}
        </Provider>
      </body>
    </html>
  );
}
