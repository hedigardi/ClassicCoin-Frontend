import { NavLink } from 'react-router-dom';

export default function Page404() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Unfortunately, this page cannot be found.
          </p>
          <p className="text-base font-semibold">404</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <NavLink
              to={'/'}
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full"
            >
              {' '}
              Go Back to the Homepage
            </NavLink>{' '}
          </div>
        </div>
      </main>
    </>
  );
}
