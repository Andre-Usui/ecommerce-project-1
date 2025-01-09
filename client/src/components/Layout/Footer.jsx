export default function Footer() {

  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-white rounded-lg shadow-lg shadow-black/70 dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mt-0 lg:mb-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="http://localhost:5173/"
            className="flex py-3 px-4 items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse bg-orange-500 rounded-xl">
            <img
              src="/shop-cart2.svg"
              className="h-8"
              alt="Lojinha Livre Logo" />
            <span
              className="self-center text-2xl whitespace-nowrap text-slate-50">
              Lojinha Livre
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-orange-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="#"
                className=" me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span
          className="block text-sm text-gray-400 sm:text-center dark:text-gray-400 whitespace-break-spaces">
          © {year} - "
          <a
            href="http://localhost:5173/"
            className="">
            LojinhaLivre™
          </a>
          ". All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}