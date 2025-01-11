import "./globals.css";

export const metadata = {
  title: "Neuros | Revolutionizing Business Decisions with AI-Powered Analytics",
  description: "Harnesses the power of artificial intelligence to transform your business data into actionable insights, propelling you to new heights of success",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
