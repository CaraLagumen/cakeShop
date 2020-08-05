<template>
  <div class="order-list">
    <OrderItem
      v-for="(cake, i) in cakes"
      :key="i"
      :index="i"
      :name="cake.name"
      :img="cake.img"
      :sizes="cake.sizes"
      :prices="cake.prices"
    ></OrderItem>
  </div>
</template>

<script>
import OrderItem from "~/components/OrderItem";
export default {
  components: { OrderItem },
  props: {
    cakes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.order-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  justify-content: center;
  gap: 8rem 4rem;
}
</style>