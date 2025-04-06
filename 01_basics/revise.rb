class QuoteGenerator
    def initialize
      @quotes = [
        "The only limit to our realization of tomorrow is our doubts of today. – FDR",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
        "Life is what happens when you're busy making other plans. – John Lennon",
        "In the middle of difficulty lies opportunity. – Albert Einstein",
        "Dream big and dare to fail. – Norman Vaughan"
      ]
    end
  
    def show_random_quote
      puts "\n💡 Quote of the Moment:"
      puts @quotes.sample
    end
  end
  
  generator = QuoteGenerator.new
  generator.show_random_quote

#this is the first ruby file revision.
#using case choice could be used 
# when 1
#     print "enter quote number"

# when 2
#     print "Enter way of writing you want?"