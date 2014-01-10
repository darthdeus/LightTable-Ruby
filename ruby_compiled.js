if(!lt.util.load.provided_QMARK_('lt.plugins.ruby')) {
goog.provide('lt.plugins.ruby');
goog.require('cljs.core');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.proc');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.proc');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');

lt.plugins.ruby.ruby_herp_derp = (function ruby_herp_derp(){var cm = lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));return cm.setLine(0,"herp derp");
});

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"herpderp-with-ruby","herpderp-with-ruby",3082244320),new cljs.core.Keyword(null,"desc","desc",1016984067),"Ruby: herp derp all the things",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ruby.ruby_herp_derp], null));

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ruby","ruby-lang","lt.plugins.ruby/ruby-lang",2073567340),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ruby.lang","ruby.lang",3458842868),null], null), null));

lt.plugins.ruby.ruby = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.ruby","ruby-lang","lt.plugins.ruby/ruby-lang",2073567340));

lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Ruby",new cljs.core.Keyword(null,"desc","desc",1016984067)," Select a directory to serve as a root for your Ruby project",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.dialogs.dir.call(null,lt.plugins.ruby.ruby,new cljs.core.Keyword(null,"connect","connect",1965255772));
})], null));

}

//# sourceMappingURL=