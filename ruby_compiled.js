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
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ruby","ruby-lang","lt.plugins.ruby/ruby-lang",2073567340),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ruby.lang","ruby.lang",3458842868),null], null), null));

lt.plugins.ruby.ruby = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.ruby","ruby-lang","lt.plugins.ruby/ruby-lang",2073567340));

lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Ruby",new cljs.core.Keyword(null,"desc","desc",1016984067)," Select a directory to serve as a root for your Ruby project",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.dialogs.dir.call(null,lt.plugins.ruby.ruby,new cljs.core.Keyword(null,"connect","connect",1965255772));
})], null));

lt.plugins.ruby.current_buffer_content = (function current_buffer_content(){var cm = lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));return cm.getRange({"ch": 0, "line": 0},{"ch": 0, "line": lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null)).lineCount()});
});

lt.plugins.ruby.replace_buffer = (function replace_buffer(string){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.objs.editor.__GT_cm_ed.call(null,ed).replaceRange(string,{"ch": 0, "line": 0},{"ch": 0, "line": lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null)).lineCount()});
} else
{return null;
}
});

lt.plugins.ruby.current_file_name = (function current_file_name(){return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null))));
});

lt.plugins.ruby.strip_xmpfilter_result = (function strip_xmpfilter_result(line){return clojure.string.replace.call(null,clojure.string.replace.call(null,line,/# =>.+$/,"# =>"),/^# >>.+$/,"");
});

cljs.core._EQ_.call(null,"1 + 1 # =>",lt.plugins.ruby.strip_xmpfilter_result.call(null,"1 + 1 # => 2"));

cljs.core._EQ_.call(null,"",lt.plugins.ruby.strip_xmpfilter_result.call(null,"# >> 2"));

lt.plugins.ruby.replace_ruby_contents = (function replace_ruby_contents(err,stdout,stderr){return lt.plugins.ruby.replace_buffer.call(null,[cljs.core.str(stdout),cljs.core.str(stderr)].join(''));
});

lt.plugins.ruby.ruby_clear_eval_results = (function ruby_clear_eval_results(){return lt.plugins.ruby.replace_buffer.call(null,clojure.string.join.call(null,"\n",cljs.core.map.call(null,lt.plugins.ruby.strip_xmpfilter_result,clojure.string.split.call(null,lt.plugins.ruby.current_buffer_content.call(null),/\n/))));
});

lt.plugins.ruby.ruby_eval_buffer = (function ruby_eval_buffer(){return console.log("eval-ruby-buffer").call(null,require("child_process").exec([cljs.core.str("xmpfilter "),cljs.core.str(lt.plugins.ruby.current_file_name.call(null))].join(''),lt.plugins.ruby.replace_ruby_contents));
});

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ruby.eval-buffer","ruby.eval-buffer",2831282159),new cljs.core.Keyword(null,"desc","desc",1016984067),"Ruby: eval current buffer",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ruby.ruby_eval_buffer], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ruby.clear-eval-results","ruby.clear-eval-results",3893404491),new cljs.core.Keyword(null,"desc","desc",1016984067),"Ruby: clear eval results",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.ruby.ruby_clear_eval_results], null));

}

//# sourceMappingURL=