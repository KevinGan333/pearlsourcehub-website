import type { Metadata } from "next";
import LocationPageContent from "@/components/LocationPageContent";
import { locationPages } from "@/data/locationPages";

const data = locationPages[5];
export const metadata: Metadata = { title: data.seoTitle, description: data.seoDescription, alternates: { canonical: "/locations/huizhou-electronics-assembly" } };
export default function Page() { return <LocationPageContent data={data} />; }
