import '#/styles/globals.css';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next.js App Directory Playground</title>
        <meta
          name="description"
          content="Next.js App Directory Playground"
          key="desc"
        />
      </head>
      <body className="">
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}
