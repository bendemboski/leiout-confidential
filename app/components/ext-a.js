import Component from '@ember/component';

const ExtA = Component.extend({
  tagName: 'a',
  attributeBindings: [ 'href', 'target', 'rel' ],
  target: '_blank',
  rel: 'noopener'
});

ExtA.reopenClass({
  positionalParams: [ 'href' ]
});

export default ExtA;
