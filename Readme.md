
# split-at-cursor

  split element blocks at the cursor. useful for inserting elements in between content.

## Installation

  Install with [component(1)](http://component.io):

    $ component install component/split-at-cursor

## Example

```js
var editor = document.getElementById('editor');
var parent = editor.parentNode;

btn.onclick = function() {
  var el = split(editor);
  var hr = document.createElement('hr');

gca   parent.appendChild(hr);
  parent.appendChild(el);
}
```

## API

### split(el)

Split the element at the cursor. Returns a document fragment containing the right half of the DOM tree.

## Test

```
npm install
make test
```

## License

  MIT
