import "./globals.css";
import { DM_Sans as Font } from 'next/font/google'

export const metadata = {
  title: "Neuros | Revolutionizing Business Decisions with AI-Powered Analytics",
  description: "Harnesses the power of artificial intelligence to transform your business data into actionable insights, propelling you to new heights of success",
};

const font = Font({
  subsets: ['latin'],
  weight: [ '300', '400', '500', '600', '700', '800' ]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
