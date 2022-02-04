<template>
  <Header title="contact us" />

  <!-- ContactCard -->
  <ContactCard />
</template>

<script>
import Header from "@/components/base/Header";
import ContactCard from "@/components/layouts/contact/ContactCard.vue";

export default {
  components: {
    Header,
    ContactCard,
  },
};
</script>
