/**
 * Module dependencies
 */

var selection = window.getSelection;

/**
 * Export `split`
 */

module.exports = split;

/**
 * Initialize `split`
 *
 * @param {Element} el
 * @return {Element} right half of DOM tree
 * @api public
 */

function split(el) {
  if (!selection) return null;

  var sel = selection();
  var offset = sel.focusOffset;
  var node = sel.focusNode;
  var clone = el.cloneNode();
  clone.innerHTML = '';

  var range = document.createRange();
  range.setStart(node, offset);

  var endrange = document.createRange();
  endrange.selectNodeContents(el);

  range.setEnd(endrange.endContainer, endrange.endOffset);
  clone.appendChild(range.extractContents());

  return clone;
}
