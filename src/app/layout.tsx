import "./globals.scss";

export const metadata = {
  title: "MyOlimp",
  description: "...",

  signup: {
    title: "Регистрация",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
