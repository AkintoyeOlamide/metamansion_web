import Image from "next/image";
import {
  LandingHero,
  LandingOffers,
  LandingMansions,
  LandingFooter,
} from "../components/index";

export default function Home() {
  return (
    <main style={{ maxWidth: '100vw', minHeight: '100vh', background: 'white' }}>
      <LandingHero />
      {/* <LandingOffers /> */}
      <LandingMansions />
      <LandingFooter />
    </main>
  );
}
