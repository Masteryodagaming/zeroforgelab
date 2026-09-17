export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-xs font-bold text-accent">
            ZF
          </span>
          <div>
            <p className="font-display text-sm font-semibold text-foreground">ZeroForge</p>
            <p className="text-xs text-muted">zeroforgelab.com</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted" aria-label="Footer">
          <a href="#about" className="focus-ring rounded-md hover:text-foreground">
            About
          </a>
          <a href="#services" className="focus-ring rounded-md hover:text-foreground">
            Services
          </a>
          <a href="#work" className="focus-ring rounded-md hover:text-foreground">
            Work
          </a>
          <a href="#contact" className="focus-ring rounded-md hover:text-foreground">
            Contact
          </a>
          <a
            href="mailto:contact@zeroforgelab.com"
            className="focus-ring rounded-md hover:text-foreground"
          >
            contact@zeroforgelab.com
          </a>
        </nav>
        <p className="text-xs text-muted">© {year} ZeroForge. All rights reserved.</p>
      </div>
    </footer>
  );
}
