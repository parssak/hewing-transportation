<template>
  <!-- HeroImageOverlay -->
  <HeroImageOverlay>
    <h1 className="text-white mt-16 md:mt-24">
      Hewings <br />Transportation Inc.
    </h1>
    <p className="text-gray-100 max-w-2xl mt-12 text-xl">
      Hewings Transportation Inc is a family-owned company that has been serving
      customers in Southern Ontario for over 25 years. We are based in Branford,
      Ontario, and operate of a custom-built 10,000-sq ft office and warehouse
      facility with an-8,100-sq-ft service building on 6 acres.
    </p>
  </HeroImageOverlay>

  <!-- Split -->
  <Split
    title="Who we are"
    description="We are a medium-sized Canada and US Customs Bonded Carrier with 2 trucks operating between points in Ontario and the United States. We offer trailer load and less-than-trailer load service to and from many States on a daily basis (from Minnesota, Indiana, Wisconsin, Michigan, to Ohio)."
  >
    <img
      className="w-full"
      src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
      alt="unsplash"
    />
  </Split>

  <!-- Split -->
  <Split
    title="Our Services"
    description="Our service also includes warehousing, freight brokerage, LTL and Truckload service to points in southern Ontario. We believe in catering to our customers needs and are not limited to definitive traffic lanes. Our professional and courteous staff and team of skilled and reliable drivers have made us the winning choice among many transportation companies offering similar services."
    :flip="true"
  >
    <img
      className="w-full"
      src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
      alt="unsplash"
    />
  </Split>

  <!-- Split -->
  <Split
    title="Our Fleet"
    description="Our well maintained fleet of new and up-to-date equipment includes Freightliners and Volvos, as well as 53' air ride dry van trailers, ensuring that your shipment will get to the destination on schedule and in pristine condition. Our transportation software along with the ELO's ensures minute by minute positioning and immediate updates on pick-ups and deliveries."
  >
    <img
      className="w-full"
      src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
      alt="unsplash"
    />
  </Split>

  <!-- Banner -->
  <Banner
    title="Our Reputation"
    description="Our reputation speaks for itself because we strongly believe that service is more than delivering your shipment, it's our business."
  >
  </Banner>

  <SimpleBrandCTA />
</template>

<script>
import SimpleBrandCTA from "@/components/layouts/cta/SimpleBrandCTA.vue";
import Header from "@/components/base/Header";
import HeroImageOverlay from "@/components/layouts/hero/HeroImageOverlay.vue";
import Split from "@/components/layouts/Split.vue";
import Banner from "@/components/layouts/banners/Banner.vue";

export default {
  components: {
    Header,
    HeroImageOverlay,
    Split,
    Banner,
    SimpleBrandCTA,
  },
};
</script>
