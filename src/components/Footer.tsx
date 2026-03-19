import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 md:flex-row md:justify-between">
        <a href="/" className="flex items-center">
          <Image src="/logo.png" alt="ScaleMint" width={150} height={36} className="h-9 w-auto" />
        </a>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="transition-colors hover:text-foreground">Privacy Policy</a>
          <a href="#" className="transition-colors hover:text-foreground">Terms</a>
          <a href="mailto:scalemintsolutions@gmail.com" className="transition-colors hover:text-foreground">scalemintsolutions@gmail.com</a>
        </div>

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Scale Mint. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
