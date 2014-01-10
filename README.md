# Ruby plugin for Light Table

This is a yet simple (but soon powerful) Ruby plugin for the [Light Table](http://lighttable.com/) editor.

![demo](http://i.imgur.com/pFtzOw3.gif)

# Installation

Make sure you have the `rcodetools` gem installed (`gem install rcodetools`) and `xmpfilter` (executable which comes with rcodetools) is available in your `$PATH`

# Usage

As the plugin uses `xmpfilter` to do the evaluation, it's not yet as powerful as the builtin clojure support. But you can already evaluate Ruby inline by adding `# =>` at the end of the line where you want to see the result, and then run the eval. For example

```ruby
a = 3 + 4 # =>

puts a
```

When you invoke the eval the buffer will get replaced with the result

```ruby
a = 4 + 7 # => 11

puts a
# >> 11
```

**MAKE SURE YOU SAVE THE FILE FIRST, OTHERWISE THE UNSAVED CHANGES WILL GET OVERRIDEN**, because `xmpfilter` reads the contents from the actual file. (TODO - fix this)

You can run the evaluation either by invoking the behavior directly via `Ctrl-Space -> Ruby: eval current buffer`, or by making a keyboard shortcut (see below). After the eval you can clear the results using `Ruby: clear eval results`.

```
:editor.ruby {
  "ctrl-l" [:ruby.eval-buffer]
  "ctrl-shift-l" [:ruby.clear-eval-results]
}
```