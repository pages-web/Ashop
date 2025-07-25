import { Button } from '@/components/ui/button';
import { Metadata } from 'next/types';
import Link from 'next/link';
import { getConfig } from '@/sdk/queries/auth';
import LoginComp from '@/containers/auth/login-comp';
import AuthPage from '@/app/(checkout)/auth/page';

export async function generateMetadata(): Promise<Metadata> {
  const { config } = await getConfig();

  return {
    title: config.name + ' - Тавтай морил',
    openGraph: {
      title: config.name + ' - Тавтай морил',
    },
  };
}

const Login = () => {
  return (
    <>
      <div className="text-lg lg:text-2xl font-semibold mx-auto relative lg:mt-20">
        Тавтай морил
      </div>
      <div className="">
        {/* <LoginComp className="lg:border lg:rounded-xl sm:py-10 px-3 sm:px-10" /> */}
        <AuthPage />
      </div>
      <div className="mt-8 text-center text-sm relative lg:mb-20">
        <Button variant="link" className="text-sm" asChild>
          <Link href="/signup">Бүртгэл үүсгэх?</Link>
        </Button>
      </div>
    </>
  );
};

export default Login;
