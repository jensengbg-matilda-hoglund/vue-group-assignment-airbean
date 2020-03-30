<template>
  <div class="about">
    <Nav v-if="openNav" @closeNav="nav" class="nav-overlay" />

    <section class="content">
      <div class="header">
        <button @click="nav" class="nav-btn">
          <img src="../assets/graphics/navicon.svg" alt />
        </button>
      </div>
      <section class="main">
        <h1 class="headline">Vårt Kaffe</h1>
        <p
          class="ingress"
        >Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</p>
        <p>Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.</p>
        <p>Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.</p>
        <section class="author">
          <img src="../assets/graphics/eva-cortado.jpg" alt="author image" class="author-img" />
          <h2 class="name">Eva Cortado</h2>
          <p class="role">VD & Grundare</p>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import Nav from "../components/nav";
export default {
  components: {
    Nav
  },
  data: () => {
    return {
      openNav: false
    };
  },
  methods: {
    nav() {
      if (this.openNav === true) {
        this.openNav = false;
      } else {
        this.openNav = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.nav-overlay {
  position: absolute;
  height: 100rem;
  background-color: $black;
}

.about {
  background: $latte;
  height: 100rem;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    color: $black;
    background: url("../assets/graphics/graphics-header.svg") top no-repeat,
      url("../assets/graphics/graphics-footer.svg") bottom no-repeat;

    .header {
      display: flex;
      margin-bottom: auto;

      .nav-btn {
        height: 4.8rem;
        width: 4.8rem;
        border-radius: 100%;
        border: none;
        cursor: pointer;
      }
    }

    .main {
      padding: 3.2rem;
      display: flex;
      flex-direction: column;
      margin-bottom: auto;

      .headline {
        font-size: 4.2rem;
        font-family: $PT;
        margin: 1rem 0;
        align-self: flex-start;
      }

      .ingress {
        font-weight: 600;
        font-size: 1.4rem;
        font-family: $worksans;
        line-height: 160%;
        margin: 1rem 0;
      }

      p {
        font-size: 1.2rem;
        font-family: $worksans;
        line-height: 160%;
        margin: 1rem 0;
      }

      .author {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 2rem;
        height: 12rem;

        .author-img {
          border-radius: 100%;
        }

        .name {
          font-size: 2.2rem;
          font-family: $PT;
          align-self: inherit;
        }

        .role {
          margin: 0;
          font-size: 1.2rem;
          font-family: $worksans;
        }
      }
    }
  }
}
</style>