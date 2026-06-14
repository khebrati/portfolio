import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-8">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Erfan Khebrati. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-text-muted">
          <Link href="https://github.com/khebrati" className="hover:text-text transition-colors">
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/mohammad-erfan-khebrati"
            className="hover:text-text transition-colors"
          >
            LinkedIn
          </Link>
          <a href="mailto:khebrati@gmail.com" className="hover:text-text transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
