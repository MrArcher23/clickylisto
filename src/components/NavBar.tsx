import Link from "next/link";

// import { ThemeToggle } from '@/components/navbar/theme-toggle';

export const Navbar = async () => {
  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-sm font-thin">
          <p>
            By <span>Mr.Archer</span>
          </p>
        </Link>
        <div className="flex items-center gap-2">{/* <ThemeToggle /> */}</div>
      </div>
    </header>
  );
};
