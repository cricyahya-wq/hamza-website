import { PageTransition } from "@/components/providers/PageTransition";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageTransition>{children}</PageTransition>;
}
