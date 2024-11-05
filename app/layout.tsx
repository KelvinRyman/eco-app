import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// 这里是根布局，根布局的任何 UI 将会在应用程序的每个页面中共享
// 可以通过修改根布局来更改 <html> 和 <body> 标记，也可以添加元数据
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
