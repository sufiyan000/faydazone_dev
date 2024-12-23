import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import Header from './ui/front-end/header';
import Footer from './ui/front-end/footer';
import Pagination from '@/app/ui/dashboard/invoices/pagination';
import Productshow from '@/app/ui/front-end/showProduct';
import { lusitana } from '@/app/ui/fonts';
import { fetchProductPages } from '@/app/lib/data';

export default async function Page(
  {
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }
) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchProductPages(query);
  return (
    <>
      <Header />
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row mb-2">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to FaydaZone.</strong>FaydaZone Bole To faydey Ki<strong> 100%</strong> Guarantee<br />
          </p>
          <Link
            href="/signin"
            className="flex items-center gap-5 self-start rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
        src="/hero-mobile.png"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />
        </div>
      </div>
       <div className="flex justify-center">
       <p className={`${lusitana.className} text-center text-xl text-gray-800 md:text-3xl md:leading-normal`}>
           All Products
          </p>
       </div>
      
         <Productshow query={query} currentPage={currentPage} />
          <div className="mt-5 flex w-full justify-center mb-4">
              <Pagination totalPages={totalPages} />
            </div>
            <Footer />
      </>

    
  );
}
