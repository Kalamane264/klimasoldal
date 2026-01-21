

export default function KeszulekekLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
        <h1>
            Klímák layout
        </h1>
        { children }
    </>;
}