(ns lt.plugins.ruby
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.objs.proc :as proc]
            [lt.object :as object]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.dialogs :as dialogs]
            [lt.objs.console :as console]
            )
  (:require-macros [lt.macros :refer [behavior]]))

(object/object* ::ruby-lang
                :tags #{:ruby.lang})

(def ruby (object/create ::ruby-lang))

(scl/add-connector {:name "Ruby"
                    :desc" Select a directory to serve as a root for your Ruby project"
                    :connect (fn []
                               (dialogs/dir ruby :connect))})

(defn current-buffer-content []
  "Returns content of the current buffer"
  (let [cm (editor/->cm-ed (pool/last-active))]
    (.getRange cm #js {:line 0 :ch 0} #js {:line (.lineCount (editor/->cm-ed (pool/last-active))) :ch 0})))

(defn replace-buffer [string]
  (when-let [ed (pool/last-active)]
    (.replaceRange (editor/->cm-ed ed)
                   string
                   #js {:line 0 :ch 0}
                   #js {:line (.lineCount (editor/->cm-ed (pool/last-active))) :ch 0})))

(defn current-file-name [] (-> @(pool/last-active) :info :path))

(defn strip-xmpfilter-result [line]
  "Removes results of applying xmpfilter (see below for examples)"
  (clojure.string/replace (clojure.string/replace line #"# =>.+$" "# =>") #"^# >>.+$" ""))

(= "1 + 1 # =>" (strip-xmpfilter-result "1 + 1 # => 2"))
(= "" (strip-xmpfilter-result "# >> 2"))


(defn replace-ruby-contents [err stdout stderr]
  "Replaces content of the current buffer from an output of an external process"
  (replace-buffer (str stdout stderr)))

(defn ruby-clear-eval-results []
  "Clears results from previous eval"
  (replace-buffer (clojure.string/join "\n"
                                       (map strip-xmpfilter-result
                                            (clojure.string/split (current-buffer-content) #"\n")))))

(defn ruby-eval-buffer []
  "Evaluates the current buffer using xmpfilter"
  ((.log js/console "eval-ruby-buffer")
   (.exec (js/require "child_process") (str "xmpfilter " (current-file-name)) replace-ruby-contents)))

;; TODO - add command for inserting # => on the current line

(cmd/command {:command :ruby.eval-buffer
              :desc "Ruby: eval current buffer"
              :exec ruby-eval-buffer})

(cmd/command {:command :ruby.clear-eval-results
              :desc "Ruby: clear eval results"
              :exec ruby-clear-eval-results})