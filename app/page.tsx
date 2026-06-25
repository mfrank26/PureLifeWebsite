import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AudienceSelector } from "@/components/AudienceSelector";
import { CredibilityBar } from "@/components/CredibilityBar";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Phase 1 sections */}
        <Hero />
        <AudienceSelector />
        <CredibilityBar />

        {/* Phase 2+ sections will be added after approval */}
      </main>
    </>
  );
}
