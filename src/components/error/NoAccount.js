import Link from "next/link";

const NoAccount = ({ error }) => {
  return (
    <div className="h-screen flex justify-center items-center w-screen p-4">
      <div className="bg-slate-200 rounded-2xl p-6 border-2 flex flex-col items-center gap-6">
        <p>{error.message}</p>
        <Link
          href="/sign-up"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Opret profil
        </Link>
        <p>Har du allerede en profil?</p>
        <Link
          href={"/login"}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Log ind
        </Link>
      </div>
    </div>
  );
};

export default NoAccount;
