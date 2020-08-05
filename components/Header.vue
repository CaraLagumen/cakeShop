<template>
  <div class="header">
    <div class="header__logo">Ana's</div>

    <div class="header__links">
      <h3 class="header__links--item">
        <nuxt-link to="/">Home</nuxt-link>
      </h3>

      <h3 class="header__links--item">
        <nuxt-link to="/order">Order</nuxt-link>
      </h3>

      <h3 class="header__links--item">
        <nuxt-link to="/about">About</nuxt-link>
      </h3>

      <h3 class="header__links--item">
        <nuxt-link to="/contact">Contact</nuxt-link>
      </h3>

      <h3 class="header__links--item">
        <nuxt-link to="/cart">Cart</nuxt-link>
        <span>{{ cartItems.length }}</span>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>

<style lang="scss">
.header {
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 4rem;

  padding: 2rem 4rem;

  &__logo {
    border: solid 1rem #e27976;
    border-radius: 100%;
    padding: 3rem 2rem;

    background-color: #e27976;
    color: white;
    font-family: Georgia, serif;
    font-size: 3rem;
    font-style: italic;
  }

  &__links {
    display: flex;
    justify-content: space-between;

    width: 60vw;

    @media only screen and (max-width: 86em) {
      //1366W
      width: 80vw;
    }

    &--item span {
      padding: 0.3rem 0.6rem;

      background-color: #552e1f;
      color: white;
    }
  }
}
</style>
