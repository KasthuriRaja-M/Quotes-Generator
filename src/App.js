import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, Smile, Zap, RefreshCw, BookOpen, Camera } from 'lucide-react';
import './App.css';

const quotes = {
  motivational: [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "Don't count the days, make the days count.", author: "Muhammad Ali" }
  ],
  funny: [
    { text: "I'm on a seafood diet. I see food and I eat it.", author: "Anonymous" },
    { text: "I'm not lazy, I'm just conserving energy.", author: "Anonymous" },
    { text: "I'm not arguing, I'm just explaining why I'm right.", author: "Anonymous" },
    { text: "I'm not short, I'm concentrated awesome.", author: "Anonymous" },
    { text: "I'm not a morning person. I'm a coffee person.", author: "Anonymous" },
    { text: "I'm not procrastinating, I'm prioritizing my tasks.", author: "Anonymous" },
    { text: "I'm not weird, I'm limited edition.", author: "Anonymous" },
    { text: "I'm not antisocial, I'm selectively social.", author: "Anonymous" },
    { text: "I'm not late, I'm just running on my own time.", author: "Anonymous" },
    { text: "I'm not a control freak, I'm just detail-oriented.", author: "Anonymous" },
    { text: "I'm not stubborn, I'm persistent.", author: "Anonymous" },
    { text: "I'm not a perfectionist, I'm just particular.", author: "Anonymous" },
    { text: "I'm not a workaholic, I'm just passionate about my job.", author: "Anonymous" },
    { text: "I'm not a shopaholic, I'm just helping the economy.", author: "Anonymous" },
    { text: "I'm not a foodie, I'm just passionate about eating.", author: "Anonymous" },
    { text: "I'm not a night owl, I'm just a day person who stays up late.", author: "Anonymous" }
  ],
  mixed: [
    { text: "Life is like a box of chocolates. You never know what you're gonna get, but you hope it's not the coconut one.", author: "Anonymous" },
    { text: "The best revenge is massive success, but also maybe a really good comeback line.", author: "Anonymous" },
    { text: "Life is 10% what happens to you and 90% how you react to it, and 100% better with coffee.", author: "Anonymous" },
    { text: "Dream big, work hard, stay focused, and surround yourself with good people who believe in you.", author: "Anonymous" },
    { text: "Life is short, make it sweet, but not too sweet because diabetes is real.", author: "Anonymous" },
    { text: "Be the change you wish to see in the world, but also bring snacks.", author: "Anonymous" },
    { text: "Success is not about being the best, it's about being better than you were yesterday, and having fun while doing it.", author: "Anonymous" },
    { text: "Life is what happens while you're busy making other plans, and sometimes those plans involve Netflix.", author: "Anonymous" },
    { text: "The only way to do great work is to love what you do, and occasionally take breaks to pet your dog.", author: "Anonymous" },
    { text: "Believe you can and you're halfway there, but also bring a map just in case.", author: "Anonymous" },
    { text: "Life is like riding a bicycle. To keep your balance, you must keep moving, and maybe wear a helmet.", author: "Anonymous" },
    { text: "The future belongs to those who believe in the beauty of their dreams, and have a good alarm clock.", author: "Anonymous" },
    { text: "Don't watch the clock; do what it does. Keep going, but also remember to eat lunch.", author: "Anonymous" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm, and maybe a few good memes.", author: "Anonymous" },
    { text: "Life is not about waiting for the storm to pass, it's about learning to dance in the rain, and maybe bringing an umbrella.", author: "Anonymous" },
    { text: "The only limit to our realization of tomorrow is our doubts of today, and sometimes our Netflix queue.", author: "Anonymous" }
  ],
  authors: [
    { text: "It is our choices that show what we truly are, far more than our abilities.", author: "J.K. Rowling" },
    { text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.", author: "Albert Camus" },
    { text: "It does not do to dwell on dreams and forget to live.", author: "J.K. Rowling" },
    { text: "The unexamined life is not worth living.", author: "Socrates" },
    { text: "To be or not to be, that is the question.", author: "William Shakespeare" },
    { text: "All that we see or seem is but a dream within a dream.", author: "Edgar Allan Poe" },
    { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { text: "To thine own self be true.", author: "William Shakespeare" },
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "What we think, we become.", author: "Buddha" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "The road not taken.", author: "Robert Frost" },
    { text: "Two roads diverged in a wood, and I—I took the one less traveled by.", author: "Robert Frost" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It is our choices that show what we truly are, far more than our abilities.", author: "J.K. Rowling" },
    { text: "It does not do to dwell on dreams and forget to live.", author: "J.K. Rowling" },
    { text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.", author: "Albert Camus" },
    { text: "The unexamined life is not worth living.", author: "Socrates" },
    { text: "To be or not to be, that is the question.", author: "William Shakespeare" },
    { text: "All that we see or seem is but a dream within a dream.", author: "Edgar Allan Poe" },
    { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { text: "To thine own self be true.", author: "William Shakespeare" }
  ],
  actors: [
    { text: "I'll be back.", author: "Arnold Schwarzenegger" },
    { text: "May the Force be with you.", author: "Harrison Ford" },
    { text: "Here's looking at you, kid.", author: "Humphrey Bogart" },
    { text: "I'm the king of the world!", author: "Leonardo DiCaprio" },
    { text: "Life is like a box of chocolates. You never know what you're gonna get.", author: "Tom Hanks" },
    { text: "I see dead people.", author: "Haley Joel Osment" },
    { text: "You had me at hello.", author: "Renée Zellweger" },
    { text: "I'm gonna make him an offer he can't refuse.", author: "Marlon Brando" },
    { text: "I'm walking here!", author: "Dustin Hoffman" },
    { text: "I'm the greatest!", author: "Muhammad Ali" },
    { text: "I'll have what she's having.", author: "Meg Ryan" },
    { text: "You talkin' to me?", author: "Robert De Niro" },
    { text: "I'm not a morning person.", author: "Meryl Streep" },
    { text: "I'm ready for my close-up.", author: "Gloria Swanson" },
    { text: "I'm the one who knocks.", author: "Bryan Cranston" },
    { text: "I'm Batman.", author: "Christian Bale" }
  ]
};

function App() {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('random');
  const [isLoading, setIsLoading] = useState(false);

  const getRandomQuote = (category = 'random') => {
    setIsLoading(true);
    
    setTimeout(() => {
      let selectedCategory;
      if (category === 'random') {
        const categories = Object.keys(quotes);
        selectedCategory = categories[Math.floor(Math.random() * categories.length)];
      } else {
        selectedCategory = category;
      }
      
      const categoryQuotes = quotes[selectedCategory];
      const randomQuote = categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
      
      setCurrentQuote({ ...randomQuote, category: selectedCategory });
      setCurrentCategory(selectedCategory);
      setIsLoading(false);
    }, 300);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'motivational':
        return <Heart size={20} />;
      case 'funny':
        return <Smile size={20} />;
      case 'mixed':
        return <Zap size={20} />;
      case 'authors':
        return <BookOpen size={20} />;
      case 'actors':
        return <Camera size={20} />;
      default:
        return <Sparkles size={20} />;
    }
  };

  const getCategoryBadgeClass = (category) => {
    switch (category) {
      case 'motivational':
        return 'badge-motivational';
      case 'funny':
        return 'badge-funny';
      case 'mixed':
        return 'badge-mixed';
      case 'authors':
        return 'badge-authors';
      case 'actors':
        return 'badge-actors';
      default:
        return 'badge-motivational';
    }
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="container">
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>
      
      <div className="header">
        <h1>✨ Quotes Generator</h1>
        <p>Discover the wisdom of the ages</p>
        <div className="subtitle">
          From motivational leaders to famous actors, from witty humor to profound wisdom - 
          find the perfect quote to inspire, entertain, and enlighten your day.
        </div>
      </div>

      <div className={`quote-card ${isLoading ? 'loading' : 'fade-in'}`}>
        {isLoading ? (
          <div className="loading-spinner">
            <RefreshCw size={40} className="spinning" />
            <p>Loading quote...</p>
          </div>
        ) : currentQuote ? (
          <>
            <div className={`category-badge ${getCategoryBadgeClass(currentQuote.category)}`}>
              {getCategoryIcon(currentQuote.category)} {currentQuote.category}
            </div>
            <div className="quote-text">"{currentQuote.text}"</div>
            <div className="quote-author">— {currentQuote.author}</div>
          </>
        ) : (
          <div className="quote-text">Click a button to generate a quote!</div>
        )}
      </div>

      <div className="controls">
        <button 
          className={`btn btn-motivational ${currentCategory === 'motivational' ? 'active' : ''}`}
          onClick={() => getRandomQuote('motivational')}
        >
          <Heart size={18} />
          Motivational
        </button>
        
        <button 
          className={`btn btn-funny ${currentCategory === 'funny' ? 'active' : ''}`}
          onClick={() => getRandomQuote('funny')}
        >
          <Smile size={18} />
          Funny
        </button>
        
        <button 
          className={`btn btn-mixed ${currentCategory === 'mixed' ? 'active' : ''}`}
          onClick={() => getRandomQuote('mixed')}
        >
          <Zap size={18} />
          Mixed
        </button>
        
        <button 
          className={`btn btn-authors ${currentCategory === 'authors' ? 'active' : ''}`}
          onClick={() => getRandomQuote('authors')}
        >
          <BookOpen size={18} />
          Authors
        </button>
        
        <button 
          className={`btn btn-actors ${currentCategory === 'actors' ? 'active' : ''}`}
          onClick={() => getRandomQuote('actors')}
        >
          <Camera size={18} />
          Actors
        </button>
        
        <button 
          className={`btn btn-random ${currentCategory === 'random' ? 'active' : ''}`}
          onClick={() => getRandomQuote('random')}
        >
          <Sparkles size={18} />
          Random
        </button>
      </div>
    </div>
  );
}

export default App; 