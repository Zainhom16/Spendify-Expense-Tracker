import { SignUp } from "@clerk/nextjs";

import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="/mockup.svg"
            className="absolute inset-0 object-cover mt-36"
            width={500}
            height={500}
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <a className="block text-blue-600" href="#">
              <span className="sr-only">Home</span>
              <Image
                src={"./logo.svg"}
                alt="Website Logo"
                width={40}
                height={35}
                className="mb-1"
              />
            </a>

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl mb-10">
              Welcome to Spendify 💸
            </h1>

            <SignUp path="/sign-up" />
          </div>
        </main>
      </div>
    </section>
  );
}
