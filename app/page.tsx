import { CategoryCard } from '@/components/category-card/category-card';
import Display from '@/components/display/display-new';
// import Display from '@/components/display/display';
// import { Heading } from '@/components/heading/heading';
import MainBanner from '@/components/main-banner/main-banner';
import RecommendedProducts from '@/components/recommended-products/recommended-products';
import { Button } from '@/components/ui/button';
import { getConfig } from '@/sdk/queries/auth';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next/types';
import { Suspense } from 'react';
import SaleList from './sale-items/page';

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  const { config } = await getConfig();

  return {
    title: config.name + ' - Нүүр хуудас',
    openGraph: {
      title: config.name + ' - Нүүр хуудас',
    },
  };
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <MainBanner />
      <CategoryCard />
      <Display />
      <div className="container flex items-center justify-end">
      <Button
        asChild
        variant="link"
        className="mt-8 py-2 px-4 text-lg"
      >
        <Link href="/sale-items" className="flex items-center">
          Бүгдийг үзэх
          <ChevronRight className="h-6 w-6 ml-2 -mr-2" strokeWidth={1.5} />
        </Link>
      </Button>
      </div>
      <div className="container mb-6 lg:mb-16">
        <Suspense>
          {/* <RecommendedProducts categoryId='_XSGanUrzPJxMXV0PlbYY' /> */}
          <SaleList />
        </Suspense>
      </div>
    </div>
  );
}
