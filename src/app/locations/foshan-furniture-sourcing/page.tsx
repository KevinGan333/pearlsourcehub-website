import type { Metadata } from "next";
import LocationPageContent from "@/components/LocationPageContent";
import { locationPages } from "@/data/locationPages";

const data = locationPages[3];
export const metadata: Metadata = { title: data.seoTitle, description: data.seoDescription, alternates: { canonical: "/locations/foshan-furniture-sourcing" } };
export default function Page() { return <LocationPageContent data={data} />; }
