<template lang="html">
  <div class="uk-card uk-card-default" data-simplebar>
    <h3 class="uk-heading-line uk-padding-remove-bottom uk-padding-small uk-margin-left uk-margin-right uk-margin-remove-bottom">
      <span>
        <i class="fa fa-user uk-text-primary" aria-hidden="true"></i>
        Apie mane
      </span>
    </h3>
    <div class="uk-card uk-grid-collapse uk-grid-match uk-child-width-1-2@s uk-padding" uk-grid>

      <div class="uk-card-media-left uk-box-shadow-medium uk-cover-container" >
        <img src="../assets/photo.jpg" alt="my photo" uk-cover>
        <canvas width="563" height="397"></canvas>
      </div>

      <div>
        <div class="uk-card-body uk-card-default uk-padding-small">
          <h3 class="uk-card-title">Sveiki,</h3>
          <p>
            Aš esu <strong>Vytautas Narkevičius</strong>. Man yra <strong>25</strong> metai, gyvenu <strong>Vilniuje</strong>.
          </p>
          <p>
            Programuoti mokinuosi savarankiškai.
            Domiuosi tiek <em>frontend</em>, tiek <em>backend</em> puslapių kūrimo aspektais.
            Stengiuosi kasdien vis labiau plėsti savo žinias.
          </p>
          <p>
            Šiuo metu ieškau programuotojo darbo. Taip pat esu atviras pasiūlymams ir idėjoms.
            Su manimi susisiekti galite spausdami <router-link :to="{name: 'contact'}">čia</router-link>.
          </p>

          <div class="uk-flex-center uk-grid-small uk-child-width-auto" uk-grid>
            <div>
              <a href="https://www.facebook.com/vytautasns">
                <i class="fa fa-facebook-square fa-3x" aria-hidden="true"></i>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/vytautas-narkevi%C4%8Dius-a87725121/">
                <i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
              </a>
            </div>
            <div>
              <a href="https://github.com/Vytautasns">
                <i class="fa fa-github-square fa-3x" aria-hidden="true"></i>
              </a>
            </div>

          </div>

        </div>
      </div>

    </div>

    <hr class="uk-divider-icon uk-margin-left uk-margin-right">

    <div class="uk-section uk-section-default uk-padding" uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 500">
      <div class="uk-container">
        <h3 class="uk-heading-bullet">Patirtis</h3>
        <div class="uk-grid-divider uk-child-width-1-3@m uk-flex-center" uk-grid>
          <div v-for="spec in experience" :key="spec.name">
            <p class="uk-text-center">
              <i :class="`fa fa-${spec.icon} fa-5x`" aria-hidden="true"></i>
              <span class="uk-text-meta uk-display-block">{{ spec.name }}</span>
            </p>
            <dl class="uk-description-list" v-for="item in spec.levels">
              <dt>{{ item.title }}</dt>
              <dd>
                <progress id="progressbar" class="uk-progress" :value="item.level" max="100"></progress>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <hr class="uk-divider-icon uk-margin-left uk-margin-right">

    <div class="uk-section uk-section-default uk-padding" uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 500">
      <div class="uk-container">
        <h3 class="uk-heading-bullet">Pomėgiai</h3>

        <div class="uk-grid-small uk-flex-center uk-child-width-1-4@s uk-child-width-1-2" uk-grid>

          <div class="uk-text-center uk-h4 uk-animation-toggle" v-for="item in hobbies" :key="item.name">
            <i :class="`fa ${item.icon} fa-4x uk-animation-shake`" aria-hidden="true"></i>
            <span class="uk-display-block uk-text-primary uk-text-muted">{{ item.name }}</span>
          </div>

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
      hobbies: [
        { name: 'Važinėti dviračiu', icon: 'fa-bicycle' },
        { name: 'Fotografija', icon: 'fa-camera' },
        { name: 'Kelionės', icon: 'fa-plane' },
        { name: 'Programavimas', icon: 'fa-code' },



      ],

      experience: [

        {
          name: 'Frontend',
          icon: 'desktop',
          levels: [
            { title: 'JavaScript', level: 65 },
            { title: 'HTML5', level: 85 },
            { title: 'CSS3', level: 77 },


          ]
        },

        {
          name: 'Backend',
          icon: 'database',
          levels: [
            { title: 'PHP', level: 53 },
            { title: 'MySql', level: 48 },
            { title: 'Java', level: 22 },
          ]
        },

        {
          name: 'Tools',
          icon: 'wrench',
          levels: [
            { title: 'Git', level: 75 },
            { title: 'Linux', level: 58 },
            { title: 'Photoshop', level: 62 },


          ]
        }

      ],
    }
  }
}
</script>

<style lang="scss">

</style>
