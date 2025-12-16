export const metadata = {
  title: "POIJU AI – Osaamistarvekartta (demo)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
