import React, { useState, useEffect, useRef } from 'react';
import { Heart, Music, Stars, PartyPopper, HeartCrack, Volume2, VolumeX, Sparkles, Sun, Moon, User, User2 } from 'lucide-react';

// Enhanced floating hearts with blinking effect
const FloatingHearts = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`
          }}
        >
          <Heart 
            className={`text-pink-200/30 animate-pulse ${
              Math.random() > 0.5 ? 'text-red-200/40' : 'text-pink-300/40'
            }`}
            style={{ 
              width: `${20 + Math.random() * 20}px`,
              height: `${20 + Math.random() * 20}px`,
              animationDuration: `${1 + Math.random() * 2}s`
            }} 
          />
        </div>
      ))}
    </div>
  );
};


// New shooting stars background effect
const ShootingStars = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute h-px bg-white animate-shooting-star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${50 + Math.random() * 100}px`,
            transform: `rotate(${45 + Math.random() * 30}deg)`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );
};

// Enhanced logo animation
const AnimatedLogo = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
      <div className="relative flex items-center space-x-2 bg-white rounded-lg p-2">
        <div className="relative">
          <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
          <Stars className="w-4 h-4 text-purple-400 absolute -top-1 -right-1 animate-spin-slow" />
        </div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
         Cupid's Calculator
        </h1>
      </div>
    </div>
  );
};

const Celebration = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-10%`,
            transform: `scale(${0.5 + Math.random()})`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 2}s`
          }}
        >
          <PartyPopper 
            className="text-gold-400" 
            style={{
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        </div>
      ))}
    </div>
  );
};

const Clouds = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-gray-200/40 rounded-full animate-float-slow"
          style={{
            width: `${100 + Math.random() * 100}px`,
            height: `${60 + Math.random() * 60}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${20 + Math.random() * 10}s`,
            filter: 'blur(8px)'
          }}
        />
      ))}
    </div>
  );
};

const Lightning = () => {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlash(true);
      setTimeout(() => setFlash(false), 200);
    }, 3000 + Math.random() * 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed inset-0 bg-white/60 pointer-events-none transition-opacity duration-100 ${
      flash ? 'opacity-100' : 'opacity-0'
    }`} />
  );
};

const WeddingKnot = ({ name1, name2 }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative w-96 h-96 animate-scale-in">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-200 to-gold-400 rounded-full animate-spin-slow opacity-75"></div>
        <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="font-script text-4xl text-gold-600">{name1}</div>
            <div className="font-script text-5xl text-gold-500">&</div>
            <div className="font-script text-4xl text-gold-600">{name2}</div>
            <div className="mt-4">
              <img src="/api/placeholder/100/100" alt="Wedding Rings" className="mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HAPPY_SONGS = ['/public/songs/Aajse.mp3', '/public/songs/Tumsehi.mp3', '/public/songs/Tumse.mp3'];
const MEDIUM_SONGS = ['/public/songs/Tuaisa.mp3', '/public/songs/SuniyaXTere.mp3', '/public/songs/Jaana.mp3'];
const SAD_SONGS = ['/public/songs/Kyunkhuda.mp3'];

const getRandomSong = (songArray) => {
  return songArray[Math.floor(Math.random() * songArray.length)];
};

const calculateLove = (name1, name2) => {
  const getName = (str) => str.toLowerCase().replace(/\s/g, '');
  const n1 = getName(name1);
  const n2 = getName(name2);
  
  let common = 0;
  for (let i = 0; i < n1.length; i++) {
    if (n2.includes(n1[i])) common++;
  }
  
  const nameLength = (n1.length + n2.length) % 10;
  const vowelMatch = Math.abs(
    (n1.match(/[aeiou]/gi)?.length || 0) - (n2.match(/[aeiou]/gi)?.length || 0)
  );
  const commonLetters = common * 10;
  
  const date = new Date();
  const dayLuck = date.getDate() % 5;
  const monthInfluence = (date.getMonth() + 1) % 7;
  
  let loveScore = (commonLetters + nameLength * 5 + dayLuck * 3 + monthInfluence * 2 - vowelMatch * 2);
  loveScore = Math.min(Math.max(loveScore, 0), 100);
  
  return Math.round(loveScore);
};

const getAILoveAdvice = async (name1, name2, score) => {
  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAJ7SSBvAQlGPfKOOKEUDhXo-BHlcW-f4s', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Act as a wise and funny love guru. Give a short, witty love prediction and advice (max 2 sentences) for ${name1} and ${name2}. Their love compatibility score is ${score}%. Make it entertaining and positive, even if the score is low. Include some fun emojis.`
          }]
        }]
      })
    });
    
    const data = await response.json();
    if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    } else {
      return getBackupAdvice(score);
    }
  } catch (error) {
    console.error('AI advice error:', error);
    return getBackupAdvice(score);
  }
};

const BACKUP_LOVE_ADVICE = [
  {
    minScore: 85,
    messages: [
      "The cosmos has blessed this union! Your love story could make even the stars jealous! 🌟💑✨",
      "Like a perfectly aligned constellation, you two were written in the stars! 💫❤️🌙",
      "Even Cupid's taking notes on this perfect match! Keep spreading that cosmic love! 🎯💘✨"
    ]
  },
  {
    minScore: 50,
    messages: [
      "There's more chemistry here than in a galaxy of stardust! Keep exploring! 🔮💫",
      "The stars are rooting for you two! Take it one moonlit walk at a time! 🌙💕",
      "Love is like a comet - rare and spectacular! Your path looks promising! ☄️❤️"
    ]
  },
  {
    minScore: 0,
    messages: [
      "Even the Moon and Sun started as strangers! Give time a chance to work its magic! 🌞🌙💫",
      "Sometimes the best relationships start as unexpected cosmic events! Keep an open heart! 🌠💝",
      "The universe works in mysterious ways! Focus on building a constellation of memories! ⭐️🤗"
    ]
  }
];

const getBackupAdvice = (score) => {
  const category = BACKUP_LOVE_ADVICE.find(cat => score >= cat.minScore);
  return category.messages[Math.floor(Math.random() * category.messages.length)];
};

const InputField = ({ label, value, onChange, icon: Icon, placeholder }) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
    <div className="relative bg-black/20 backdrop-blur-sm rounded-lg p-4">
      <label className="block text-sm font-medium text-pink-300 mb-2 flex items-center gap-2">
        <Icon className="w-4 h-4" />
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="block w-full rounded-md border-pink-300/20 bg-white/10 text-white shadow-sm focus:border-pink-500 focus:ring-pink-500 pl-4 pr-10 py-2.5 transition-all duration-300"
          placeholder={placeholder}
        />
        <Heart className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-300 animate-pulse" />
      </div>
    </div>
  </div>
);


const LoveStats = ({ score }) => (
  <div className="grid grid-cols-3 gap-4 mt-6">
    {[
      { label: 'Compatibility', value: `${score}%`, icon: Heart },
      { label: 'Romance Level', value: score > 75 ? 'High' : score > 50 ? 'Medium' : 'Growing', icon: Stars },
      { label: 'Destiny Points', value: Math.round(score * 1.5), icon: Sparkles },
    ].map((stat, index) => (
      <div key={index} className="bg-white/10 rounded-lg p-3 text-center backdrop-blur-sm">
        <stat.icon className="w-5 h-5 mx-auto mb-2 text-pink-300" />
        <div className="text-xs text-pink-300 mb-1">{stat.label}</div>
        <div className="text-lg font-semibold text-white">{stat.value}</div>
      </div>
    ))}
  </div>
);

const LoveCalculator = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [score, setScore] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [aiAdvice, setAIAdvice] = useState('');
  const audioRef = useRef(null);

  const handleCalculate = async () => {
    if (!name1 || !name2) return;
    
    setIsCalculating(true);
    setShowResult(false);
    
    setTimeout(async () => {
      const loveScore = calculateLove(name1, name2);
      setScore(loveScore);
      
      try {
        const advice = await getAILoveAdvice(name1, name2, loveScore);
        setAIAdvice(advice);
      } catch (error) {
        setAIAdvice(getBackupAdvice(loveScore));
      }

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = loveScore >= 85 
          ? getRandomSong(HAPPY_SONGS)
          : loveScore >= 50 
            ? getRandomSong(MEDIUM_SONGS)
            : getRandomSong(SAD_SONGS);
        if (!isMuted) audioRef.current.play();
      }

      setIsCalculating(false);
      setShowResult(true);
    }, 3000);
  };


  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const getResultContent = () => {
    if (score === null) return null;
    
    if (score >= 85) {
      return (
        <>
          <Celebration />
          <WeddingKnot name1={name1} name2={name2} />
          <div className="relative z-10 flex flex-col items-center space-y-6 animate-fadeIn">
            <p className="text-3xl font-bold text-gold-600">Perfect Match! 💑</p>
            <div className="text-xl text-gold-500">The stars have aligned! 💫</div>
          </div>
        </>
      );
    } else if (score >= 50) {
      return (
        <div className="flex flex-col items-center space-y-4">
          <Heart className="w-16 h-16 text-pink-500 animate-pulse" />
          <p className="text-2xl font-bold text-pink-500">There's potential! ❤️</p>
          <div className="text-lg">Keep the romance alive!</div>
        </div>
      );
    } else {
      return (
        <>
          <Clouds />
          <Lightning />
          <div className="relative z-10 flex flex-col items-center space-y-4">
            <HeartCrack className="w-16 h-16 text-pink-400 animate-shake" />
            <p className="text-2xl font-bold text-gray-600">Maybe just friends... 💔</p>
            <div className="text-lg text-gray-500">The storms shall pass...</div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-pink-900 relative">
      <FloatingHearts />
      <ShootingStars />
      <audio ref={audioRef} loop />

      <header className="fixed top-0 w-full bg-white/10 backdrop-blur-md shadow-lg z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <AnimatedLogo />
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleMute} 
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6 text-pink-300" />
                ) : (
                  <Volume2 className="w-6 h-6 text-pink-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-8 space-y-8 border border-white/20">
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 p-1 animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-white/90 flex items-center justify-center overflow-hidden">
                <div className="relative">
                  <Moon className="w-16 h-16 text-purple-600 absolute animate-ping opacity-30" />
                  <Sun className="w-16 h-16 text-pink-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <InputField
              label="Your Name"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              icon={User}
              placeholder="Enter your name"
            />
            <InputField
              label="Your Crush's Name"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              icon={User2}  // Changed to User2 icon
              placeholder="Enter their name"
            />
            <button
              onClick={handleCalculate}
              disabled={isCalculating || !name1 || !name2}
              className="w-full py-4 px-6 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
            >
              {isCalculating ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Consulting the stars...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <span>Calculate Love</span>
                  <Heart className="w-5 h-5 animate-pulse" />
                </div>
              )}
            </button>
          </div>

          {/* Results Section */}
          {showResult && (
            <div className="mt-8 space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 animate-pulse rounded-lg backdrop-blur-sm"></div>
                <div className="relative p-6">
                  <div className="text-6xl font-bold text-white mb-4 text-center">
                    {score}%
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${score}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <LoveStats score={score} />
              
              {getResultContent()}
              
              {/* AI Love Guru Advice */}
              <div className="p-6 bg-white/10 rounded-lg border border-white/20 backdrop-blur-md transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-6 h-6 text-pink-300 animate-spin-slow" />
                  <h3 className="text-xl font-medium text-pink-300">Love Guru's Wisdom</h3>
                </div>
                <p className="text-white/90 italic text-lg leading-relaxed">{aiAdvice}</p>
                
                <div className="mt-4 text-sm text-pink-300/70 flex items-center gap-2">
                  <Stars className="w-4 h-4" />
                  <span>Trust in the cosmic connection!</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <footer className="fixed bottom-0 w-full bg-white/10 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center space-x-2">
            <Music className="w-5 h-5 text-pink-300 animate-bounce" />
            <p className="text-sm text-pink-300">✨ Made with ❤️ by Sankalpa ✨</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default LoveCalculator;