<template>
  <div class="order">
    <h1 class="order__heading">Order now</h1>

    <OrderList :cakes="cakes"></OrderList>
  </div>
</template>

<script>
import OrderList from "~/components/OrderList";

export default {
  components: { OrderList },
  computed: {
    cakes() {
      return this.$store.getters.cakes;
    },
  },
};
</script>

<style lang="scss">
.order {
  display: grid;
  align-content: center;
  justify-content: center;
  justify-items: center;

  margin-top: 8rem;
  margin-bottom: 16rem;

  &__heading {
    margin-bottom: 4rem;
  }
}
</style>