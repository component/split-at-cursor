/**
 * Module Dependencies
 */

var assert = require('assert');
var split = require('split-at-cursor');
var domify = require('domify');
var selection = window.getSelection;

/**
 * Tests
 */

describe('split(el)', function() {
  var el = document.createElement('div');
  var sel;

  beforeEach(function() {
    el = el.cloneNode();
    document.body.appendChild(el);
    sel = selection();
    sel.removeAllRanges();
  });

  afterEach(function() {
    document.body.removeChild(el);
  });

  it('should split tags into two at the cursor', function() {
    var p = domify('<p>hi there</p>');
    el.appendChild(p);
    selectAt(p, 't');
    var half = split(p);

    assert('P' == p.nodeName);
    assert('hi ' == p.textContent);
    assert('P' == half.nodeName);
    assert('there' == half.textContent);
  })

  it('should split complex html at the cursor', function() {
    var p = domify('<p>hi <strong> there, <a href="mat.io">matt</a> mueller</strong>.</p>')
    el.appendChild(p);
    selectAt(p.querySelector('a'), 'att');
    var half = split(p);

    assert('P' == p.nodeName);
    assert('P' == half.nodeName);
    assert('hi <strong> there, <a href="mat.io">m</a></strong>', p.innerHTML);
    assert('<strong><a href="mat.io">att</a> mueller</strong>.', half.innerHTML);
  });

  function selectAt(elem, str) {
    var range = document.createRange();
    var i = elem.textContent.indexOf(str);
    range.setStart(elem.firstChild, i);
    range.setEnd(elem.firstChild, i);
    sel.addRange(range);
  }
});
