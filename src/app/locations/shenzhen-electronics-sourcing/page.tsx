import type { Metadata } from "next";
import LocationPageContent from "@/components/LocationPageContent";
import { locationPages } from "@/data/locationPages";

const data = locationPages[0];
export const metadata: Metadata = { title: data.seoTitle, description: data.seoDescription, alternates: { canonical: "/locations/shenzhen-electronics-sourcing" } };
export default function Page() { return <LocationPageContent data={data} />; }
