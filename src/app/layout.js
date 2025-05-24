import './globals.css';

export const metadata = {
  title: 'Personal Dashboard',
  description: 'A personal dashboard showcasing my profile and skills',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}