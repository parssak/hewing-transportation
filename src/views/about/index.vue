<template>
  <Header title="about" />
  <Container>
    <h2>Maintenance</h2>
    <p>
      Our home base ls a custom-built 10,000 sq. ft. (3048 sq. m.) office and cross docking
      facility, with an 8,100 sq. ft. (2468 sq. m.) full service building for onsite tractor and
      trailer repairs.

      <br />

      Our service includes LTL and truckload service to points in Southern Ontario. While we are not
      limited to definitive traffic lanes, we have gained the reputation of being Midwest and Great
      Lakes LTL Specialists. Our professional and courteous staff and team of skilled and reliable
      drivers have made us the winning choice.

      <br />

      Our well maintained fleet of new and up-to-date equipment includes Internationals, Macks and
      Volvos, as well as 53 ft. (16 m.) air ride Dry Van trailers and 53 ft. (16 m.) air ride
      elimate-controlted trailers, ensuring that your shipment gets to its destination on schedule
      and in pristine condition.
    </p>
  </Container>

  <SimpleBrandCTA />
</template>

<script>
import SimpleBrandCTA from "../../components/layouts/cta/SimpleBrandCTA.vue";
import Container from "../../components/layouts/Container.vue";
import Header from "@/components/base/Header";
import FeatureGrid from "@/components/layouts/features/FeatureGrid.vue";

export default {
  components: {
    Header,
    FeatureGrid,
    Container,
    SimpleBrandCTA,
  },
};
</script>
