import HeroSection from "../components/home/HeroSection";
import BrandIntroduction from "../components/home/BrandIntroduction";
import CollectionGrid from "../components/home/CollectionGrid";
import ProductShowcase from "../components/home/ProductShowcase";
import CampaignFeature from "../components/home/CampaignFeature";
import DiamondStory from "../components/home/DiamondStory";
import CraftsmanshipSection from "../components/home/CraftsmanshipSection";
import BespokeSection from "../components/home/BespokeSection";
import InstagramGallery from "../components/home/InstagramGallery";
import FinalCTA from "../components/home/FinalCTA";
import { usePageMeta } from "../hooks/usePageMeta";

export default function HomePage() {
  usePageMeta({
    description:
      "DEEVA — lab-grown diamond jewellery in Raipur. IGI-certified diamonds, BIS-hallmarked gold and fully customised rings, earrings, pendants, necklaces and bracelets.",
  });
  return (
    <>
      <HeroSection />
      <BrandIntroduction />
      <CollectionGrid />
      <ProductShowcase />
      <CampaignFeature />
      <DiamondStory />
      <CraftsmanshipSection />
      <BespokeSection />
      <InstagramGallery />
      <FinalCTA />
    </>
  );
}
