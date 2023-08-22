//miski overrideb layouti, arvatavasti clerk, kuna auth suunatakse sinna. Seega seda layouti logimiseks ei pruugi vaja minna.

export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-full">{children}</div>
  );
}
