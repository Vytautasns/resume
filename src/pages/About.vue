<template lang="html">
  <div class="uk-card uk-card-default" data-simplebar>
    <h3 class="uk-heading-line uk-padding-small uk-margin-left uk-margin-right">
      <span>
        <i class="fa fa-user uk-text-primary" aria-hidden="true"></i>
        Apie mane
      </span>
    </h3>

      <div class="uk-card  uk-grid-small uk-child-width-1-2@s uk-padding" uk-grid>
            <div class="uk-card-media-left uk-cover-container" >
                <img src="assets/photo.jpg" alt="" uk-cover>
                <canvas width="400" height="400"></canvas>
            </div>
            <div  >
                <div class="uk-card-body uk-padding-remove">
                    <h3 class="uk-card-title">Sveiki, </h3>
                    <p>
                      Aš esu <strong>Vytautas Narkevičius</strong>. Man yra <strong>25</strong> metai, gyvenu <strong>Vilniuje</strong>. Programuoti išmokau savarankiškai ir toliau kasdien gilinu savo žinias.
                      Esu atviras naujovėms bei iššūkiams.

                      Domiuosi tiek <em>frontend</em>, tiek <em>backend</em> puslapių kūrimo aspektais.

                    </p>
                    <p>
                      Dirbu su CSS karkasais:
                      <ul>
                        <li>Bootstrap</li>
                        <li>Materialize-CSS</li>
                        <li>Bulma</li>
                        <li>Uikit</li>
                      </ul>
                    </p>
                    <p>
                      Taip pat su JavaScript karkasais:
                      <ul>
                        <li>jQuery</li>
                        <li>VueJs (Vuex)</li>
                      </ul>
                    </p>

                </div>
            </div>
        </div>

        <hr class="uk-divider-icon uk-margin-left uk-margin-right">

        <div class="uk-section uk-section-default uk-padding" uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 500">
    <div class="uk-container">

        <h3 class="uk-heading-bullet">Patirtis</h3>

        <div class="uk-grid-divider uk-child-width-1-3@m" uk-grid>
          <div>
            <p class="uk-text-center">
              <i class="fa fa-database fa-5x" aria-hidden="true"></i>
              <span class="uk-text-meta uk-display-block">Backend</span>
              <!-- <img src="https://www.shareicon.net/data/512x512/2015/09/25/107049_html_512x512.png" width="150" height="150" alt=""> -->
            </p>
            <dl class="uk-description-list">
                <dt>Php</dt>
                <dd>
                  <progress id="progressbar" class="uk-progress" value="63" max="100"></progress>
                </dd>
                <dt>MySql</dt>
                <dd>
                  <progress id="progressbar" class="uk-progress" value="52" max="100"></progress>
                </dd>
                <dt>Laravel</dt>
                <dd>
                  <progress id="progressbar" class="uk-progress" value="70" max="100"></progress>
                </dd>
                <dt>Java</dt>
                <dd>
                  <progress id="progressbar" class="uk-progress" value="20" max="100"></progress>
                </dd>
            </dl>
          </div>

          <div>
            <p class="uk-text-center">
              <i class="fa fa-desktop fa-5x" aria-hidden="true"></i>
              <span class="uk-text-meta uk-display-block">Frontend</span>

              <!-- <img src="https://www.shareicon.net/data/512x512/2015/09/25/107049_html_512x512.png" width="150" height="150" alt=""> -->
            </p>
            <dl class="uk-description-list">
                <dt>JavaScript</dt>
                <dd>
                  <progress id="progressbar" class="uk-progress" value="76" max="100"></progress>
                </dd>
                <dt>VueJs</dt>
                <dd>
                  <progress id="progressbar" class="uk-progress" value="90" max="100"></progress>
                </dd>
                <dt>jQuery</dt>
                <dd>
                  <progress id="progressbar" class="uk-progress" value="79" max="100"></progress>
                </dd>
                <dt>HTML5</dt>
                <dd>
                  <progress id="progressbar" class="uk-progress" value="63" max="100"></progress>
                </dd>
                <dt>CSS3 / SASS</dt>
                <dd>
                  <progress id="progressbar" class="uk-progress" value="88" max="100"></progress>
                </dd>
            </dl>
          </div>

          <div>
            <p class="uk-text-center">
              <i class="fa fa-wrench fa-5x" aria-hidden="true"></i>
              <span class="uk-text-meta uk-display-block">Įrankiai</span>

              <!-- <img src="https://www.shareicon.net/data/512x512/2015/09/25/107049_html_512x512.png" width="150" height="150" alt=""> -->
            </p>
            <dl class="uk-description-list">
                <dt>Git</dt>
                <dd>
                  <progress id="progressbar" class="uk-progress" value="80" max="100"></progress>
                </dd>
                <dt>NPM</dt>
                <dd>
                  <progress id="progressbar" class="uk-progress" value="80" max="100"></progress>
                </dd>
                <dt>Linux</dt>
                <dd>
                  <progress id="progressbar" class="uk-progress" value="43" max="100"></progress>
                </dd>
                <dt>Adobe Photoshop</dt>
                <dd>
                  <progress id="progressbar" class="uk-progress" value="66" max="100"></progress>
                </dd>
                <dt>Adobe Illustrator</dt>
                <dd>
                  <progress id="progressbar" class="uk-progress" value="20" max="100"></progress>
                </dd>
                <!-- <dt>CSS3</dt>
                <dd>
                  <progress id="progressbar" class="uk-progress" value="88" max="100"></progress>
                </dd> -->
            </dl>
          </div>




        </div>

    </div>
</div>


<!--
        <hr class="uk-divider-icon uk-margin-left uk-margin-right">

        <div class="uk-section uk-section-default uk-padding" uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 500">
    <div class="uk-container">

        <h3>Pomegiai</h3>

        <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
          <div>
            <p class="uk-text-center"><i class="fa fa-camera fa-5x" aria-hidden="true"></i></p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
            <div>
              <p class="uk-text-center"><i class="fa fa-code-fork fa-5x" aria-hidden="true"></i></p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
              <p class="uk-text-center"><i class="fa fa-github-square fa-5x" aria-hidden="true"></i></p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div> -->

    </div>
</div>



  </div>
</template>

<script>
export default {
  data() {
    return {
      details: [
        {
          key: 'Vardas',
          value: 'Vytautas Narkevicius',
        },
        {
          key: 'Amzius',
          value: '25',
        },
        {
          key: 'Vieta',
          value: 'Vilnius',
        },
        {
          key: 'Mobilus',
          value: '+370 605 74 307',
        }
      ],
    }
  }
}
</script>

<style lang="scss">

</style>
