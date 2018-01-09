import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);

    this.$('[data-collapse]').collapse();
  },

  click(e) {
    let href = e.target.getAttribute('href');
    if (!href || href === '#') {
      return;
    }

    let el = document.querySelector(href);
    if (!el) {
      return;
    }

    e.preventDefault();
    $('html,body').animate({
      scrollTop: el.offsetTop
    }, 500);
  }
});
