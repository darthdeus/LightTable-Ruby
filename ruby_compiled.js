if(!lt.util.load.provided_QMARK_('lt.plugins.ruby')) {
goog.provide('lt.plugins.ruby');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');

lt.plugins.ruby.ruby_herp_derp = (function ruby_herp_derp(){var cm = lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));return cm.setLine(0,"herp derp");
});

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"herpderp-with-ruby","herpderp-with-ruby",3082244320),new cljs.core.Keyword(null,"desc","desc",1016984067),"Ruby: herp derp all the things",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ruby.ruby_herp_derp], null));

}

//# sourceMappingURL=