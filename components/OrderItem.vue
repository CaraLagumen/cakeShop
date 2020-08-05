<template>
  <div class="order-item">
    <img
      :src="img"
      class="order-item__img"
    />

    <h3>{{ name }}</h3>

    <p class="order-item__attr">
      Size:
      <select>
        <option
          @click="onSelectSize(i)"
          v-for="(size, i) in sizes"
          :key="size"
          :value="size"
        >{{ size }}"</option>
      </select>
    </p>

    <p
      :show="selectedPrice"
      class="order-item__attr"
    >Price: ${{ selectedPrice }}</p>

    <button
      @click="onSelectOrder(index)"
      class="order-item__btn"
    >Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "OrderItem",
  data() {
    return {
      selectedSize: this.sizes[0],
      selectedPrice: this.prices[0],
    };
  },
  props: {
    index: { type: Number, required: true },
    name: { type: String, required: true },
    img: { type: String, required: true },
    sizes: { type: Array, required: true },
    prices: { type: Array, required: true },
  },
  methods: {
    onSelectSize(i) {
      this.selectedSize = this.sizes[i];
      this.selectedPrice = this.prices[i];
    },
    onSelectOrder(index) {
      const selectedOrder = {
        index,
        size: this.selectedSize,
        price: this.selectedPrice,
      };

      this.$store.dispatch("selectOrder", selectedOrder);
    },
  },
};
</script>

<style lang="scss">
.order-item {
  display: grid;
  align-content: flex-start;
  justify-content: center;
  justify-items: center;
  gap: 0.5rem;

  &__img {
    height: 30rem;
  }

  &__attr {
    font-size: 1.8rem;

    select {
      color: #552e1f;
    }
  }

  &__btn {
    margin-top: 1rem;
    padding: 1.5rem;

    background-color: #552e1f;
    color: white;
    font-size: 1.6rem;
    text-transform: uppercase;

    &:hover {
      background-color: #e27976;
    }
  }
}
</style>