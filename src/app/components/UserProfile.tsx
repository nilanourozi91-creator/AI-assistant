
"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserProfile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className="text-sm text-slate-500">Loading profile...</p>;
  }

  if (!session?.user) {
    return null;
  }

  return (
    <div className="flex items-center gap-3">
      {session.user.image && (
        <Image
          src={session.user.image}
          alt={session.user.name ?? "User profile"}
          width={44}
          height={44}
          className="rounded-full"
        />
      )}

      <div>
        <p className="font-semibold">
          {session.user.name ?? "DayAI Student"}
        </p>
        <p className="text-sm text-slate-500">
          {session.user.email}
        </p>
      </div>
    </div>
  );
}
