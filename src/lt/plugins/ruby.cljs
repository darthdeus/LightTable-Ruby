(ns lt.plugins.ruby
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [behavior]]))

(defn ruby-herp-derp []
  (let [cm (editor/->cm-ed (pool/last-active))]
        (.setLine cm 0 "herp derp")))

(cmd/command {:command :herpderp-with-ruby
              :desc "Ruby: herp derp all the things"
              :exec ruby-herp-derp})