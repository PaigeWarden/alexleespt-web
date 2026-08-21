import { Header } from "../components/organism/Header";
import { Provider } from "../components/ui/provider";
import { Monda } from "next/font/google";
import type { Metadata } from 'next'
import { Footer } from "../components/organism/Footer";

export const metadata: Metadata = {
  title: 'Alex Lees - Personal Trainer',
  description: 'Personalised personal training, online coaching and nutrition support in Colchester, Essex, helping you build a body that you are proud of.',
}

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
          <main>
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
