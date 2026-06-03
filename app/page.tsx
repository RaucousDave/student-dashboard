import { createClient } from "@/lib/supabase/server";
import DashboardGrid from "./components/DashboardGrid";

export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
}
export default async function Page() {
  const supabase = createClient();

  const { data: courses, error } = await (await supabase)
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error("Something went wrong");
  }

  return <DashboardGrid courses={courses ?? []} />;
}
