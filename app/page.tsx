import { AppExperience } from "@/components/sections/AppExperience";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { Contact } from "@/components/sections/Contact";
import { Delivery } from "@/components/sections/Delivery";
import { DownloadCTA } from "@/components/sections/DownloadCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LiveOnStores } from "@/components/sections/LiveOnStores";
import { Materials } from "@/components/sections/Materials";
import { ProductDiscovery } from "@/components/sections/ProductDiscovery";
import { Promo } from "@/components/sections/Promo";
import { Trust } from "@/components/sections/Trust";
import { WhyBajriwala } from "@/components/sections/WhyBajriwala";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <LiveOnStores />
      <AppShowcase />
      <Materials />
      <WhyBajriwala />
      <HowItWorks />
      <ProductDiscovery />
      <Delivery />
      <Features />
      <Promo />
      <AppExperience />
      <Trust />
      <FAQ />
      <Contact />
      <DownloadCTA />
    </main>
  );
}
