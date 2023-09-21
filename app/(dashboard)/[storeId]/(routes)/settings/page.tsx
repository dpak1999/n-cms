import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect, useParams } from "next/navigation";
import { FC } from "react";
import SettingsForm from "./components/SettingsForm";

interface SettingsProps {
  params: { storeId: string };
}

const Settings: FC<SettingsProps> = async ({ params }) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 space-y-4 pt-6">
        <SettingsForm store={store} />
      </div>
    </div>
  );
};

export default Settings;
