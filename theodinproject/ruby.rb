if string_to_check.include? "substring"
string_to_change.gsub!(/s/, "th")

my_string = "muchachos"
print "Adios, #{my_string}!"

for num in 1...10
  puts num
end
The reason Ruby counted to 9 and not 10 was because we used three dots in the range; this tells Ruby to exclude the final number in the count: for num in 1...10 means "go up to but don't include 10." If we use two dots, this tells Ruby to include the highest number in the range.

10.times { print "Chunky bacon!" }

.split; it takes in a string and returns an array. If we pass it a bit of text in parentheses, .split will divide the string wherever it sees that bit of text, called a delimiter. For example,
	text.split(",") 
		tells Ruby to split up the string text whenever it sees a comma.

hash = {
  key1 => value1,
  key2 => value2,
  key3 => value3
}




-----Histogram-----
puts "Text please: "
text = gets.chomp

words = text.split(" ")
frequencies = Hash.new(0)
words.each { |word| frequencies[word] += 1 }
frequencies = frequencies.sort_by {|a, b| b }
frequencies.reverse!
frequencies.each { |word, frequency| puts word + " " + frequency.to_s }
-----

Method Syntax
Methods are defined using the keyword def

The argument is the piece of code you actually put between the method's parentheses when you call it, and the parameter is the name you put between the method's parentheses when you define it.

-----
The Combined Comparison Operator
The combined comparison operator looks like this: <=>. It returns 0 if the first operand (item to be compared) equals the second, 1 if first operand is greater than the second, and -1 if the first operand is less than the second.

-----
grades = { alice: 100,
  bob: 92,
  chris: 95,
  dave: 97
}

grades.select {|name, grade| grade < 97}
# ==> {:bob=>92, :chris=>95}

grades.select { |k, v| k == :alice }
# ==> {:alice=>100}

-----
When and Then: The Case Statement

case language
  when "JS" then puts "Websites!"
  when "Python" then puts "Science!"
  when "Ruby" then puts "Web apps!"
  else puts "I don't know!"
end

-----
Conditional Assignment

We've seen that we can use the = operator to assign a value to a variable. But what if we only want to assign a variable if it hasn't already been assigned? For this, we can use the conditional assignment operator: ||=. It's made up of the or (||) logical operator and the normal = assignment operator. '

-----
Up the Down Staircase

If we know the range of numbers we'd like to include, we can use .upto and .downto. This is a much more Rubyist solution than trying to use a for loop that stops when a counter variable hits a certain value. '
and we can use .downto to do the same thing with descending values.
Do you think .upto and .downto work on the alphabet? Only one way to find out!

-----
.respond_to? 

takes a symbol and returns true if an object can receive that method and false otherwise. 
[1, 2, 3].respond_to?(:push)  => true
[1, 2, 3].respond_to?(:to_sym) => false

-----
Push 

Speaking of pushing to arrays, Ruby has some nice shortcuts for common method names. As luck would have it, one is for .push!
Instead of typing out the .push method name, you can simply use <<, the concatenation operator (also known as "the shovel") to add an element to the end of an array:

[1, 2, 3] << 4
# ==> [1, 2, 3, 4]
Good news: it also works on strings! You can do:

"Yukihiro " << "Matsumoto"
# ==> "Yukihiro Matsumoto"

-----
string interpolation. 

The syntax looks like this:
drink = "espresso"
"I love #{drink}."
# ==> I love espresso.
"I am #{age} years old."
# ==> I am 26 years old.

-----
Collect

The collect method takes a block and applies the expression in the block to every element in an array. Check it out:
my_nums = [1, 2, 3]
my_nums.collect { |num| num ** 2 }
# ==> [1, 4, 9]
If we look at the value of my_nums, though, we'll see it hasn't changed:

-----
Yield

-----
scope resolution operator

Math::PI and Circle::PI
See that double colon we just used? That's called the scope resolution operator, which is a fancy way of saying it tells Ruby where you're looking for a specific bit of code. If we say Math::PI, Ruby knows to look inside the Math module to get that PI, not any other PI (such as the one we created in Circle).

-----
require

Some modules, like Math, are already present in the interpreter. Others need to be explicitly brought in, however, and we can do this using require. We can do this simply by typing

require 'module'

-----
include

We can do more than just require a module, however. We can also include it!

Any class that includes a certain module can use those module's methods!

A nice effect of this is that you no longer have to prepend your constants and methods with the module name. Since everything has been pulled in, you can simply write PI instead of Math::PI '

-----
mixin

When a module is used to mix additional behavior and information into a class, it's called a mixin. Mixins allow us to customize a class without having to rewrite code! '

-----
extend

Whereas include mixes a module's methods in at the instance level (allowing instances of a particular class to use the methods), the extend keyword mixes a module's methods at the class level. This means that class itself can use the methods, as opposed to instances of the class.




