import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import SessionProvider2 from "@/components/SessionProvider";
import HandleLogin from "@/components/HandleLogin";

export default async function Home() {
  // const session = useSession();
  const session = await getServerSession(authOptions);

  return (
    <SessionProvider2>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="text-center">
          <p>{session && `Name:- ${session?.user?.name}`}</p>
          <p>{session && `Email:- ${session?.user?.email}`}</p>
        </div>

        <HandleLogin session={session} />
      </main>
    </SessionProvider2>
  );
}
