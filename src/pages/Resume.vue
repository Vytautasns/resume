<template lang="html">
  <div class="uk-card uk-card-default" data-simplebar>
    <h3 class="uk-heading-line uk-padding-small uk-margin-left uk-margin-right">
      <span>
        <i class="fa fa-user uk-text-primary" aria-hidden="true"></i>
        Resume
      </span>
    </h3>

    <div class="uk-padding-small">
      <div class="uk-margin">
        <a href="../assets/vytautas_narkevicius_resume.pdf" target="_blank" type="button" class="uk-button uk-button-default uk-text-capitalize">
          <i class="fa fa-download" aria-hidden="true"></i>
          Parsisiųsti CV
        </a>
      </div>
      <div class="" style="border-left: 1px solid #cddceb;" v-for="item in resume" :key="item.title" uk-scrollspy="target: > div; cls:uk-animation-slide-right; delay: 500">
        <span class="uk-label">{{ item.year }}</span>
        <div class="uk-padding-small">
          <div class="uk-margin-small-left">
            <h2 class="uk-h2 uk-margin-remove uk-padding-remove">{{ item.title }}</h2>
            <span class="uk-text-meta">{{ item.meta }}</span>
            <p class="">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resume: [
        {
          year: '2016/12 - Dabar',
          title: 'Savarankiškas mokslas',
          meta: 'Frontend, Backend programuotojas',
          description: 'Šiuo laikotarpiu visą savo laiką skiriu programavimui. Mokinuosi dirbti su šiuolaikinėmis web technologijomis.',
        },
        {
          year: '2012/5 - 2016/12',
          meta: 'Auto-krautuvo vairuotojas',
          title: 'Skagerak Pelagic A/S',
          description: 'Vairuotojas. Atsakingas už produktų sandėliavimą, pakrovimą.',
        },
        {
          year: '2009/07 - 2012/5',
          meta: 'Administratorius',
          title: 'UAB Kart-1',
          description: 'Kartodromo administratorius, bendravimas su klientais. Renginių vedimas.',
        },
        {
          year: '1997/09 - 2009/07',
          meta: 'Vidurinis mokslas',
          title: 'Baltijos gimnazija',
          description: 'Vidurinė mokykla. Įgytas vidurinis išsilavinimas.',
        },
      ],
    }
  }
}
</script>

<style lang="css">

</style>
