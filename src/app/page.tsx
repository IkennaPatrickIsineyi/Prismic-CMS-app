import HomePage from "@/components/organisms/HomePage";
import { createClient } from "@/prismicio";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("home_page");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home_page");

  return (
    <HomePage
      title={page.data.page_title || ""}
      slogan={page.data.page_slogan || ""}
    />
  );
}
