Vue.component('passenger-view', {
    template: '<div> \
    <div class="client-info text-align-center">\
    Hi <b>{{userInfo.clientName}}!</b>\
    </>\
  </div>\
  <br>\
  <h2>Your Next Trip</h2><br>\
  <div v-for="(booking, index) in userInfo.bookings" class="booking" :id="\'booking\' + index">\
        <passenger-booking :booking="booking" :idx="index"></passenger-booking>\
  </div>\
  </div>\
    ',
    data: function() {
        return {}
    },
    props: ['userInfo'],
    methods: {

    }
});