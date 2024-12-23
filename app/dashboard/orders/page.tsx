import { requireAdminSession } from "@/app/lib/actions";
export default async function Page() {
  const session = await requireAdminSession();
    return <p>Orders Page</p>;
  }