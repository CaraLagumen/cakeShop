<template>
  <div class="home">
    <div class="home__tile tile-1">
      <div class="home__tile--text">
        <h3>As seen</h3>
        <h4>on Food Network</h4>
      </div>
      <img src="@/assets/img/cake2.jpg" class="home__tile--img" />
    </div>

    <div class="home__tile tile-2">
      <div class="home__tile--text">
        <h3>Easy online ordering</h3>
        <h4>cakes, cake pops, cupcakes, and more</h4>
      </div>
      <img src="@/assets/img/cake1.jpg" class="home__tile--img" />
    </div>

    <div class="home__tile tile-3">
      <div class="home__tile--text">
        <h3>Custom cakes</h3>
        <h4>birthdays, weddings, and more</h4>
      </div>
      <img src="@/assets/img/cake3.jpg" class="home__tile--img" />
    </div>

    <div class="home__tile tile-4">
      <div class="home__tile--text">
        <h3>Now open</h3>
        <h4>in Las Vegas</h4>
      </div>
      <img src="@/assets/img/cake4.jpg" class="home__tile--img" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.home {
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50% 50%;
  align-items: center;
  justify-items: center;
  gap: 2rem;

  width: 60vw;
  padding: 1rem 2rem;

  &__tile {
    display: grid;
    align-items: center;
    justify-items: center;

    height: 40rem;

    overflow: hidden;

    &--text {
      grid-row: 1 / -1;
      grid-column: 1 / -1;
      z-index: 1;

      padding: 0.5rem 1rem;

      background-color: #77bee7;
      opacity: 0.9;
      color: white;
      text-align: center;

      h3 {
        text-transform: uppercase;
      }
    }

    &--img {
      grid-row: 1 / -1;
      grid-column: 1 / -1;

      display: block;
      object-fit: cover;

      height: 100%;
      width: 100%;
    }
  }

  .tile-1 {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .tile-2 {
    grid-column: 2 / 4;
    grid-row: 1 / 2;
  }

  .tile-3 {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }

  .tile-4 {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }
}
</style>
