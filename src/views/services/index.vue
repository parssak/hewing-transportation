<template>
  <Header title="services" />
  <Container>
    <p>
      As a family-owned trucking company our image within our community and our industry is sacred.
      Our unparalleled service stems from our commitment to customer service excellence in the safe,
      secure and reliable transportation of our customers' freight. We offer the same level of
      personal service to orders of 1 skid to full truckloads. Although we have earned the
      reputation of being specialists in the movement of freight to/from the Great Lakes, we also
      provide transportation services as follows:
    </p>
    <br />
    <ul>
      <li>All points within the Golden Horseshoe</li>
      <li>All points from GTA to London Corridor and return</li>
      <li>Full truckloads to the North and Southwest</li>
      <li>
        We offer partial load transportation (LTL) with almost daily runs to/from most of the Great
        Lakes (IL, IN, WI, MI) and weekly runs to Minnesota
      </li>
      <li>Logisitics services for a single source transportation management system</li>
      <li>
        We provide dry van air ride service with the majority of our trailers being high cube.
      </li>
      <li>
        C-TPAT (Outbound-Fast certified) with gated/fenced secure yard in Branford U.S. and Cdn.
        Bonded carrier
      </li>
      <li>Cross-dock, consolidation and short-term warehouse services</li>
      <li>Stellar accident and cargo loss experience history</li>
      <li>Proven safety record with a CVOR safety rating of well below 10% violation threshold</li>
    </ul>
  </Container>
  <FeatureList />
  <SimpleBrandCTA />
</template>

<script>
import SimpleBrandCTA from "../../components/layouts/cta/SimpleBrandCTA.vue";
import Container from "../../components/layouts/Container.vue";
import Header from "@/components/base/Header";
import FeatureList from "@/components/layouts/features/FeatureList.vue";

export default {
  components: {
    Header,
    FeatureList,
    Container,
    SimpleBrandCTA,
  },
};
</script>
