<template lang="html">
  <div class="uk-card uk-card-default" data-simplebar>
    <h3 class="uk-heading-line uk-padding-small uk-margin-left uk-margin-right">
      <span>
        <i class="fa fa-envelope-o uk-text-primary" aria-hidden="true"></i>
        Kontaktai
      </span>
    </h3>

    <div class="uk-padding">
      <div class="uk-grid-divider" uk-grid>

          <div class="uk-width-1-3@m">
            <h1 class="uk-text-lead">Kontaktine informacija</h1>
            <p><span class="uk-text-primary" uk-icon="icon: location;"></span> <span>Vilnius, Lietuva</span></p>
            <p><span class="uk-text-primary" uk-icon="icon: mail;"></span> <span>vytautasns@gmail.com</span></p>
            <p><span class="uk-text-primary" uk-icon="icon: phone;"></span> <span>+370 605 74 307</span></p>
          </div>

          <div class="uk-width-expand@m">
            <hr class="uk-hidden@s uk-divider-icon uk-margin-left uk-margin-right uk-padding">

            <form>
                  <fieldset class="uk-fieldset">

                      <legend><h1 class="uk-text-lead">Žinutė man</h1></legend>


                      <div class="uk-margin">
                           <div class="uk-inline uk-width-1-1">
                               <input class="uk-input" type="text" placeholder="Vardas">
                           </div>
                       </div>

                       <div class="uk-margin">
                            <div class="uk-inline uk-width-1-1">
                                <input class="uk-input" type="text" placeholder="El. paštas">
                            </div>
                        </div>

                        <div class="uk-margin">
                          <div class="uk-inline uk-width-1-1">
                              <textarea class="uk-textarea" rows="5" placeholder="Žinutė"></textarea>
                          </div>
                        </div>

                        <div class="uk-margin">
                           <button class="uk-button uk-button-primary">
                             <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                             Siūsti
                           </button>
                        </div>
                  </fieldset>
              </form>
          </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

</style>
