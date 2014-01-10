CodeMirror.defineMode("ruby", function(conf, parserConf) {

  var exports = {
    token: function(stream, state) {
      return null; // so far we don't really care about this
    },

    indent: function(state) {
      return 0;
    },

    lineComment: "#",
    fold: "indent"
  };

  return exports;
});

CodeMirror.defineMIME("text/x-ruby", "ruby");