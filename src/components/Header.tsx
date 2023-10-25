import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Logo from "./Logo";

const navItems = [
  {
    text: "Who We Are",
    href: "/who-we-are",
  },
  {
    text: "Thrift Store",
    href: "/thrift-store",
  },
  {
    text: "Events",
    href: "/blog?category=Event Upcoming",
  },
  {
    text: "Blog",
    href: "/blog",
  },
  {
    text: "Apply",
    href: "/apply",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 bg-white z-50 py-4">
      <nav
        className="flex items-center w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/">
            <span className="sr-only">Trinity Life Ministry</span>
            <div className="w-16 lg:w-32 lg:-mt-2">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 153 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  y="0.5"
                  width="152.105"
                  height="85"
                  fill="url(#pattern0)"
                ></rect>
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_16_268"
                      transform="matrix(0.00274725 0 0 0.00491614 0 -0.00144595)"
                    ></use>
                  </pattern>
                  <image
                    id="image0_16_268"
                    width="364"
                    height="204"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </div>
          </a>
        </div>
        <div className="flex ml-auto lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navItems.map((item) => (
            <a
              key={item.text}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.text}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/donate"
            className="px-4 py-2 bg-teal text-white rounded-md shadow justify-center items-center inline-flex"
          >
            Donate
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/">
              <span className="sr-only">Trinity Life Ministry</span>
              <Logo />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navItems.map((item) => (
                  <a
                    key={item.text}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/donate"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
