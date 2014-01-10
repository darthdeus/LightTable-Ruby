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

(object/object* ::ruby-lang
                :tags #{:ruby.lang})

(def ruby (object/create ::ruby-lang))

(scl/add-connector {:name "Ruby"
                    :desc" Select a directory to serve as a root for your Ruby project"
                    :connect (fn []
                               (dialogs/dir ruby :connect))})
