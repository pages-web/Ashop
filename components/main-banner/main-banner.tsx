import { getKbArticlesByCode } from '@/sdk/queries/kb';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '../ui/carousel';
import { IArticle } from '@/types/kb.types';
import Link from 'next/link';
import Image from '../ui/image';

const MainBanner = async () => {
  const { articles } = await getKbArticlesByCode('main-banner');

  if (!(articles || []).length) return <div className="mt-6 lg:mt-12" />;

  return (
    <div className="lg:container">
      <Carousel className=" mb-4 lg:mt-4 lg:mb-8">
        <CarouselContent className="ml-0">
          {articles.map((article) => (
            <BannerItem key={article._id} {...article} />
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

const BannerItem = ({ _id, image, summary, attachments }: IArticle) => {
  return (
    <CarouselItem key={_id}>
      <Link
        className="aspect-[4/5] lg:aspect-[13/5] block"
        href={summary || '/'}
      >
        <Image
          src={image?.url}
          alt=""
          width={900}
          height={600}
          className="absolute object-cover inset-0 object-center lg:mt-0 mt-2 lg:ml-56 sm:ml-0"
          skipAnimation
        />
        <Image
          src={(attachments || [])[0]?.url || ''}
          alt=""
          width={1536}
          height={600}
          skipAnimation
          className="absolute object-cover inset-0 object-center hidden"
        />
      </Link>
    </CarouselItem>
  );
};

export default MainBanner;
