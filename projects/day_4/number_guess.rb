   puts "Welcome to the Number Guessing Game! 🎮"
   random_number = rand(1..10)

   loop do
     print "Guess a number between 1 and 10: "
     guess = gets.to_i

     if guess == random_number
       puts "Congratulations! You guessed the right number! 🎉"
       break
     else
       puts "Try again! 😬"
     end
   end
