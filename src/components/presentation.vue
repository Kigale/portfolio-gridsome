<template>
  <div class="wrapper__pres">
    <g-image src="~/assets/images/portrait.jpg" />
    <div>
      <p>
        I am a curious and questioning designer who loves to challenge norms. So far this has resulted in that I have crushed the stigma surrounding hearing aids, that I have helped making the sea rescue society autonomously airborne and that I have created a service for commercial real estate brokers so that they don’t have to go to Cannes to find new investors.
        I am driven by making the world more kind and have a deep belief in the dialogue. I am at my best when I am part of a high valued design process.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "presentation",
};
</script>

<style lang="scss" scoped>
.wrapper__pres {
  display: grid;
  grid-template-columns: 1fr 2fr;
  //max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 10%;
}
img {
  padding-right: 1rem;
}
@media screen and (max-width: 1240px) {
  .wrapper__pres {
    grid-template-columns: auto;
  }
  img {
    padding: 0rem;
    padding-bottom: 1rem;
    max-width: 400px;
    margin: auto;
  }
}
</style>