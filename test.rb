# Test file used to test the ruby plugin

class Something
  EDITOR = "LightTable"

  def with_a_method(and_params)
    puts "#{EDITOR} Ruby Mode is here!"
  end
end



a = Something.new
a.with_a_method(1, 3.14159)