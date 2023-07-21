import "./globals.scss";

export const metadata = {
  title: "MyOlimp",
  description: "...",
  icons: {
    icon: ['/icon.ico?v=4'],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
       <link rel="icon" href="/icon.ico" sizes="any" />
      <body>{children}</body>
    </html>
  );
}
