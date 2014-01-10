# Test file used to test the ruby plugin

class Something
  EDITOR = "LightTable"

  def with_a_method(and_params, with_stuff)
    "#{EDITOR} Ruby Mode is here! #{and_params + with_stuff}"
  end
end

a = Something.new
a.with_a_method(1, 2.14159) # =>

a = 4 + 7 # =>

puts a
