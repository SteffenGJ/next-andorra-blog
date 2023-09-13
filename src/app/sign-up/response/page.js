import Link from "next/link";

export default function Response() {
  return (
    <div className="h-screen flex justify-center items-center w-screen p-4">
      <div className="bg-slate-200 rounded-2xl p-6 border-2">
        <p>
          Tak! Du har nu oprettet en profil. Du har nu gjort dit. <br />
          Kom tilbage på siden senere for at se om du har fået adgang. Der kan
          godt gå nogle timer eller dage alt efter hvor travlt jeg har. <br />
          Hvis du er en utålmodig sjæl kan du jo allerede nu prøve at se om
          <Link href="/content" className="text-blue-500">
            {` du har adgang`}
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
