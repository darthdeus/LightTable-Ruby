(ns lt.plugins.ruby
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.objs.proc :as proc]
            [lt.object :as object]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.dialogs :as dialogs]
            )
  (:require-macros [lt.macros :refer [behavior]]))

(defn ruby-herp-derp []
  (let [cm (editor/->cm-ed (pool/last-active))]
    (.setLine cm 0 "herp derp")))

(cmd/command {:command :herpderp-with-ruby
              :desc "Ruby: herp derp all the things"
              :exec ruby-herp-derp})

(cmd/command {:command :eval-ruby-buffer
              :desc "Ruby: eval current buffer"
              :exec eval-ruby-buffer})

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
    (.getRange cm #js {:line 0 :ch 0} #js {:line (.lineCount cm) :ch 0})))

(defn replace-ruby-contents [err stdout stderr]
  "Replaces content of the current buffer from an output of an external process"
  (when-let [ed (pool/last-active)]
    (js/CodeMirror.commands.selectAll (editor/->cm-ed ed))
    (editor/replace-selection ed (str stdout stderr))))

(defn current-file-name [] (-> @(pool/last-active) :info :path))

(defn eval-ruby-buffer []
  (.exec (js/require "child_process") (str "xmpfilter " (current-file-name)) replace-ruby-contents))

;; (when-let [ed (pool/last-active)]
;;   (js/CodeMirror.commands.selectAll (editor/->cm-ed ed))
;;   (editor/replace-selection ed "your string"))
