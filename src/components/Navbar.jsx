import { useState } from 'react';
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import logoImage from '../assets/img/logo2.png';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header sticky-nav">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center lg:flex-1">
          <NavLink
            to={'/'}
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">Classic Coin</span>
            <img
              className="h-8 w-auto"
              src={logoImage}
              alt="ClassicCoin-Logo"
            />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Main menu</span>
            <Bars3Icon
              className="h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <div className="flex-grow">
            <NavLink
              to={'/'}
              className="flex items-center justify-center text-sm font-semibold leading-6 text-gray-900"
            >
              Blockchain
            </NavLink>
          </div>
          <div className="flex-grow">
            <NavLink
              to={'/transact'}
              className="flex items-center justify-center text-sm font-semibold leading-6 text-gray-900"
            >
              Transact
            </NavLink>
          </div>
          <div className="flex-grow">
            <NavLink
              to={'/signin'}
              className="flex items-center justify-center text-sm font-semibold leading-6 text-gray-900"
            >
              Sign In
            </NavLink>
          </div>
          <div className="flex-grow">
            <NavLink
              to={'/signup'}
              className="flex items-center justify-center text-sm font-semibold leading-6 text-gray-900"
            >
              Sign Up
            </NavLink>
          </div>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* Placeholder */}
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink
              to={'/'}
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">Classic Coin</span>
              <img
                className="h-8 w-auto"
                src={logoImage}
                alt="ClassicCoin-Logo"
              />
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to={'/'}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blockchain
                </NavLink>
                <NavLink
                  to={'/transact'}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Transact
                </NavLink>
                <NavLink
                  to={'/signin'}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to={'/signup'}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Sign Up
                </NavLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
