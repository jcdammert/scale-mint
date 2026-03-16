const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
            <span className="font-heading text-xs font-bold text-primary-foreground">SM</span>
          </div>
          <span className="font-heading text-lg font-bold text-foreground">
            Scale<span className="text-gradient">Mint</span>
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="transition-colors hover:text-foreground">Privacy Policy</a>
          <a href="#" className="transition-colors hover:text-foreground">Terms</a>
          <a href="mailto:hello@scalemint.com" className="transition-colors hover:text-foreground">hello@scalemint.com</a>
        </div>

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Scale Mint. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
