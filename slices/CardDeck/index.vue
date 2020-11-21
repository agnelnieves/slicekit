<template>
  <section ref="cardDeckSection" class="section py-20 px-4 bg-gradient-to-t from-blue-100">
    <prismic-rich-text class="text-center text-sm uppercase text-blue-600 font-semibold sticky" style="top: 3rem;" :field="slice.primary.title" />
    <prismic-rich-text class="text-center text-5xl font-bold max-w-2xl mx-auto leading-tight mb-12 sticky" style="top: 4rem;" :field="slice.primary.description" />
    <div ref="cardDeck">
      <div style="top: 16rem;" class="sk-card-item origin-top flex box-content px-4 justify-between items-center relative text-base bg-white shadow-lg rounded-2xl p-5 max-w-3xl mx-auto sticky  sm:text-lg text-center mb-3 flex-col sm:flex-row-reverse" v-for="(card,i) in slice.primary.items" :key="i">
        <div class="block sm:max-w-md max-w-full">
          <prismic-image class="max-w-full rounded-2xl" :field="card.image" />
        </div>
        <div class="px-5 box-content mx-auto">
          <prismic-rich-text class="text-3xl leading-8 font-semibold mt-4 sm:mt-0" :field="card.cardTitle" />
          <prismic-rich-text :field="card.cardDescription" />
          <prismic-link class="text-white bg-blue-600  font-bold py-3 px-5 mb-4 sm:mb-0 rounded-full inline-block hover:bg-blue-700 box-content text-base mt-4" :field="card.cardCTALink">
            {{ card.cardCTALabel }}
          </prismic-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    }
  },
  mounted() {
    this.animateCards()
  },
  methods: {
    animateCards() {
       // Getting all cards
    const items = this.$refs.cardDeck.querySelectorAll(".sk-card-item");

    window.addEventListener("scroll", () => {
      console.log('hellloooo')
      const arr = [].slice.call(items).reverse();

      arr.reduce((total, item, i) => {
        const height =
          item.clientHeight +
          parseInt(
            window.getComputedStyle(item).getPropertyValue("margin-bottom")
          );
        const offset = arr[i - 1]
          ? arr[i - 1].offsetTop - item.offsetTop
          : height;
        const progress = total + (height - offset) / height;

        if (progress !== total) {
          const card = item;
          const cardInner = card.firstElementChild;
          const translate = "calc(-1rem * " + progress + ")";
          const opacity = "calc(1 - .2 * " + progress + ")";
          const scale = "calc(1 - .03 * " + progress + ")";

          card.style.transform =
            "translateY(" + translate + ") scale(" + scale + ")";
          cardInner.style.opacity = opacity;
        }

        console.log('progress', progress)
        return progress;
      }, 0);
    });
    }
  }
}
</script>
