import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[url('/forside.jpg')] bg-cover min-h-screen">
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-white opacity-90 min-h-screen">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Velkommen til Andorrabloggen
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              På denne side vil jeg lave opslag om min tur til Andorra. For at
              kunne benytte dig af bloggen skal du oprette en profil. Herefter
              vil jeg kunne godkende dig til at læse mine opslag. Har du
              allerede en profil så tryk på `Gå til indhold`.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/sign-up"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Opret profil
              </Link>
              <Link
                href={"/content"}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Gå til indhold <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
