import AcmeLogo from '@/app/ui/acme-logo';
import SignInPage from "@/app/ui/signin-form";
import GoogleLoginButton from '../ui/GoogleLoginButton';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-gray-900 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <SignInPage />
        <GoogleLoginButton />
      </div>
    </main>
  );
}