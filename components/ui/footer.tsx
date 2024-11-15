import Link from "next/link";
import Logo from "./logo";
import FooterText from "@/components/footer-text";

export default function Footer({ border = false }: { border?: boolean }) {
  const isDisabled = true; // Переключите на false, чтобы активировать ссылки

  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo/>
            </div>
            <div className="text-sm text-gray-600">
              &copy; fieldflow.lu - All rights reserved 2024.
            </div>
            <div className="text-sm text-gray-600 flex items-center space-x-2">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    d="M2.8 4h18.4c1 0 1.8.8 1.8 1.8v12.4c0 1-.8 1.8-1.8 1.8H2.8A1.8 1.8 0 011 18.2V5.8C1 4.8 1.8 4 2.8 4zm18.4 1.5H2.8a.3.3 0 00-.3.3v.3l9.5 6.7a.5.5 0 00.6 0l9.5-6.7v-.3a.3.3 0 00-.3-.3zM12 12.2L2.5 5.9v10.2c0 .2.1.3.3.3h18.4a.3.3 0 00.3-.3V5.9L12 12.2z"/>
              </svg>
              <a href="mailto:moien@fieldflow.lu" className="hover:text-blue-500">
                moien@fieldflow.lu
              </a>
            </div>
          </div>

          {/* 2nd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className={`text-sm font-medium ${isDisabled ? "text-gray-400 opacity-70" : "text-gray-800"}`}>
              Product
            </h3>
            <ul className={`space-y-2 text-sm ${isDisabled ? "pointer-events-none opacity-50" : ""}`}>
              <li>
                <Link className={`${isDisabled ? "text-gray-500 opacity-60" : "text-gray-600 transition hover:text-gray-900"}`} href="#0">
                  Features
                </Link>
              </li>
              <li>
                <Link className={`${isDisabled ? "text-gray-500 opacity-60" : "text-gray-600 transition hover:text-gray-900"}`} href="#0">
                  Integrations
                </Link>
              </li>
              <li>
                <Link className={`${isDisabled ? "text-gray-500 opacity-60" : "text-gray-600 transition hover:text-gray-900"}`} href="#0">
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link className={`${isDisabled ? "text-gray-500 opacity-60" : "text-gray-600 transition hover:text-gray-900"}`} href="#0">
                  Changelog
                </Link>
              </li>
              <li>
                <Link className={`${isDisabled ? "text-gray-500 opacity-60" : "text-gray-600 transition hover:text-gray-900"}`} href="#0">
                  Our method
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className={`text-sm font-medium ${isDisabled ? "text-gray-400 opacity-70" : "text-gray-800"}`}>
              Company
            </h3>
            <ul className={`space-y-2 text-sm ${isDisabled ? "pointer-events-none opacity-50" : ""}`}>
              <li>
                <Link className={`${isDisabled ? "text-gray-500 opacity-60" : "text-gray-600 transition hover:text-gray-900"}`} href="#0">
                  About us
                </Link>
              </li>
              <li>
                <Link className={`${isDisabled ? "text-gray-500 opacity-60" : "text-gray-600 transition hover:text-gray-900"}`} href="#0">
                  Diversity & Inclusion
                </Link>
              </li>
              <li>
                <Link className={`${isDisabled ? "text-gray-500 opacity-60" : "text-gray-600 transition hover:text-gray-900"}`} href="#0">
                  Blog
                </Link>
              </li>
              <li>
                <Link className={`${isDisabled ? "text-gray-500 opacity-60" : "text-gray-600 transition hover:text-gray-900"}`} href="#0">
                  Careers
                </Link>
              </li>
              <li>
                <Link className={`${isDisabled ? "text-gray-500 opacity-60" : "text-gray-600 transition hover:text-gray-900"}`} href="#0">
                  Financial statements
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className={`text-sm font-medium ${isDisabled ? "text-gray-400 opacity-70" : "text-gray-800"}`}>
              Resources
            </h3>
            <ul className={`space-y-2 text-sm ${isDisabled ? "pointer-events-none opacity-50" : ""}`}>
              <li>
                <Link className={`${isDisabled ? "text-gray-500 opacity-60" : "text-gray-600 transition hover:text-gray-900"}`} href="#0">
                  Community
                </Link>
              </li>
              <li>
                <Link className={`${isDisabled ? "text-gray-500 opacity-60" : "text-gray-600 transition hover:text-gray-900"}`} href="#0">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link className={`${isDisabled ? "text-gray-500 opacity-60" : "text-gray-600 transition hover:text-gray-900"}`} href="#0">
                  Report a vulnerability
                </Link>
              </li>
            </ul>
          </div>


          {/* 5th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="flex gap-1">
              <li>
                <Link
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                  href="https://x.com/fieldfl0w"
                  aria-label="Twitter"
                  target="_blank"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                    className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                    href="https://www.linkedin.com/company/fieldflow/" // замените на нужную ссылку LinkedIn
                    aria-label="LinkedIn"
                    target="_blank"
                >
                  <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" transform="translate(8, 8)"></path>
                  </svg>
                </Link>

              </li>
              <li>
                <Link
                    className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                    href="https://github.com/FieldFlow"
                    aria-label="Github"
                    target="_blank"
                >
                  <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <FooterText/>
    </footer>
  );
}
