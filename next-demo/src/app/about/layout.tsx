export const metadata = {
  title: "About",
  description: "Generated by about layout",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>About Header</h1>
      <hr />
      {children}
      <hr />
      <h1> About Footer</h1>
    </>
  );
}