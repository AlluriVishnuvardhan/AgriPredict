'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

const translations = {
  en: {
    title: '🌾 KISAN SAFE 🚜',
    home: 'Home',
    about: 'About',
    helplines: 'Helplines',
    news: 'News',
    farmTitle: '🌱 Tell us about your farm 🌾',
    locationLabel: '🏡 Where is your farm located?',
    locationHint: 'We automatically detected your location, or enter manually',
    locationPlaceholder: 'Search worldwide locations (e.g., New York, Mumbai, London, Tokyo)',
    refreshLocation: '🔄 Refresh My Location',
    cropLabel: '🌾 What crop are you growing?',
    cropPlaceholder: 'Search for your crop (e.g., Rice, Wheat, Tomato)',
    farmSizeLabel: '🚜 Farm Size (acres)',
    farmSizePlaceholder: 'Enter farm size',
    submitButton: '🚀 Start Farming Dashboard',
    gettingLocation: '📍 Getting your location...',
    selected: '✅ Selected:',
    noLocationsFound: 'No locations found. You can still type your custom location.',
    noCropsFound: 'No crops found',
    dashboard: 'Dashboard',
    yieldPrediction: 'Yield Prediction',
    weatherAlerts: 'Weather Alerts',
    marketPrices: 'Market Prices',
    recommendations: 'Recommendations',
    aboutTitle: 'About KisanSafe',
    aboutDescription: 'AI-powered smart farming solution for better crop yields',
    contactTitle: 'Emergency Helplines',
    farmerHelpline: 'Farmer Helpline',
    weatherHelpline: 'Weather Helpline',
    newsTitle: 'Agricultural News',
    latestNews: 'Latest News'
  },
  hi: {
    title: '🌾 किसान सेफ 🚜',
    home: 'होम',
    about: 'हमारे बारे में',
    helplines: 'हेल्पलाइन',
    news: 'समाचार',
    farmTitle: '🌱 अपने खेत के बारे में बताएं 🌾',
    locationLabel: '🏡 आपका खेत कहाँ स्थित है?',
    locationHint: 'हमने आपका स्थान स्वचालित रूप से पता लगाया है, या मैन्युअल रूप से दर्ज करें',
    locationPlaceholder: 'विश्वव्यापी स्थान खोजें (जैसे, नई दिल्ली, मुंबई, लंदन, टोक्यो)',
    refreshLocation: '🔄 मेरा स्थान रीफ्रेश करें',
    cropLabel: '🌾 आप कौन सी फसल उगा रहे हैं?',
    cropPlaceholder: 'अपनी फसल खोजें (जैसे, चावल, गेहूँ, टमाटर)',
    farmSizeLabel: '🚜 खेत का आकार (एकड़)',
    farmSizePlaceholder: 'खेत का आकार दर्ज करें',
    submitButton: '🚀 फार्मिंग डैशबोर्ड शुरू करें',
    gettingLocation: '📍 आपका स्थान प्राप्त कर रहे हैं...',
    selected: '✅ चयनित:',
    noLocationsFound: 'कोई स्थान नहीं मिला। आप अभी भी अपना कस्टम स्थान टाइप कर सकते हैं।',
    noCropsFound: 'कोई फसल नहीं मिली',
    dashboard: 'डैशबोर्ड',
    yieldPrediction: 'फसल पूर्वानुमान',
    weatherAlerts: 'मौसम चेतावनी',
    marketPrices: 'बाजार भाव',
    recommendations: 'सुझाव',
    aboutTitle: 'किसानसेफ के बारे में',
    aboutDescription: 'बेहतर फसल उत्पादन के लिए AI-संचालित स्मार्ट खेती समाधान',
    contactTitle: 'आपातकालीन हेल्पलाइन',
    farmerHelpline: 'किसान हेल्पलाइन',
    weatherHelpline: 'मौसम हेल्पलाइन',
    newsTitle: 'कृषि समाचार',
    latestNews: 'ताजा खबरें'
  },
  te: {
    title: '🌾 కిసాన్ సేఫ్ 🚜',
    home: 'హోమ్',
    about: 'మా గురించి',
    helplines: 'హెల్ప్లైన్స్',
    news: 'వార్తలు',
    farmTitle: '🌱 మీ వ్యవసాయం గురించి చెప్పండి 🌾',
    locationLabel: '🏡 మీ వ్యవసాయ భూమి ఎక్కడ ఉంది?',
    locationHint: 'మేము మీ స్థానాన్ని స్వయంచాలకంగా గుర్తించాము, లేదా మాన్యువల్గా నమోదు చేయండి',
    locationPlaceholder: 'ప్రపంచవ్యాప్త స్థానాలను వెతకండి (ఉదా., న్యూయార్క్, ముంబై, లండన్, టోక్యో)',
    refreshLocation: '🔄 నా స్థానాన్ని రిఫ్రెష్ చేయండి',
    cropLabel: '🌾 మీరు ఏ పంట పండిస్తున్నారు?',
    cropPlaceholder: 'మీ పంటను వెతకండి (ఉదా., వరి, గోధుమలు, టమాటో)',
    farmSizeLabel: '🚜 వ్యవసాయ భూమి పరిమాణం (ఎకరాలు)',
    farmSizePlaceholder: 'వ్యవసాయ భూమి పరిమాణం నమోదు చేయండి',
    submitButton: '🚀 వ్యవసాయ డాష్బోర్డ్ ప్రారంభించండి',
    gettingLocation: '📍 మీ స్థానాన్ని పొందుతున్నాము...',
    selected: '✅ ఎంచుకున్నది:',
    noLocationsFound: 'స్థానాలు కనుగొనబడలేదు. మీరు ఇప్పటికీ మీ కస్టమ్ స్థానాన్ని టైప్ చేయవచ్చు.',
    noCropsFound: 'పంటలు కనుగొనబడలేదు',
    dashboard: 'డాష్బోర్డ్',
    yieldPrediction: 'పంట అంచనా',
    weatherAlerts: 'వాతావరణ హెచ్చరికలు',
    marketPrices: 'మార్కెట్ ధరలు',
    recommendations: 'సిఫార్సులు',
    aboutTitle: 'కిసాన్సేఫ్ గురించి',
    aboutDescription: 'మెరుగైన పంట దిగుబడి కోసం AI-శక్తితో కూడిన స్మార్ట్ వ్యవసాయ పరిష్కారం',
    contactTitle: 'అత్యవసర హెల్ప్లైన్లు',
    farmerHelpline: 'రైతు హెల్ప్లైన్',
    weatherHelpline: 'వాతావరణ హెల్ప్లైన్',
    newsTitle: 'వ్యవసాయ వార్తలు',
    latestNews: 'తాజా వార్తలు'
  },
  ta: {
    title: '🌾 கிசான் சேஃப் 🚜',
    home: 'முகப்பு',
    about: 'எங்களைப் பற்றி',
    helplines: 'உதவி எண்கள்',
    news: 'செய்திகள்',
    farmTitle: '🌱 உங்கள் பண்ணையைப் பற்றி சொல்லுங்கள் 🌾',
    locationLabel: '🏡 உங்கள் பண்ணை எங்கே அமைந்துள்ளது?',
    locationHint: 'நாங்கள் உங்கள் இருப்பிடத்தை தானாகவே கண்டறிந்துள்ளோம், அல்லது கைமுறையாக உள்ளிடவும்',
    locationPlaceholder: 'உலகளாவிய இடங்களைத் தேடுங்கள் (எ.கா., நியூயார்க், மும்பை, லண்டன், டோக்கியோ)',
    refreshLocation: '🔄 எனது இருப்பிடத்தை புதுப்பிக்கவும்',
    cropLabel: '🌾 நீங்கள் என்ன பயிர் வளர்க்கிறீர்கள்?',
    cropPlaceholder: 'உங்கள் பயிரைத் தேடுங்கள் (எ.கா., அரிசி, கோதுமை, தக்காளி)',
    farmSizeLabel: '🚜 பண்ணை அளவு (ஏக்கர்)',
    farmSizePlaceholder: 'பண்ணை அளவை உள்ளிடவும்',
    submitButton: '🚀 விவசாய டாஷ்போர்டைத் தொடங்கவும்',
    gettingLocation: '📍 உங்கள் இருப்பிடத்தைப் பெறுகிறோம்...',
    selected: '✅ தேர்ந்தெடுக்கப்பட்டது:',
    noLocationsFound: 'இடங்கள் எதுவும் கிடைக்கவில்லை. நீங்கள் இன்னும் உங்கள் தனிப்பயன் இருப்பிடத்தை தட்டச்சு செய்யலாம்.',
    noCropsFound: 'பயிர்கள் எதுவும் கிடைக்கவில்லை',
    dashboard: 'டாஷ்போர்டு',
    yieldPrediction: 'பயிர் முன்னறிவிப்பு',
    weatherAlerts: 'வானிலை எச்சரிக்கைகள்',
    marketPrices: 'சந்தை விலைகள்',
    recommendations: 'பரிந்துரைகள்',
    aboutTitle: 'கிசான்சேஃப் பற்றி',
    aboutDescription: 'சிறந்த பயிர் விளைச்சலுக்கான AI-இயங்கும் ஸ்மார்ட் விவசாய தீர்வு',
    contactTitle: 'அவசர உதவி எண்கள்',
    farmerHelpline: 'விவசாயி உதவி எண்',
    weatherHelpline: 'வானிலை உதவி எண்',
    newsTitle: 'விவசாய செய்திகள்',
    latestNews: 'சமீபத்திய செய்திகள்'
  },
  bn: {
    title: '🌾 কিসান সেফ 🚜',
    home: 'হোম',
    about: 'আমাদের সম্পর্কে',
    helplines: 'হেল্পলাইন',
    news: 'সংবাদ',
    farmTitle: '🌱 আপনার খামার সম্পর্কে বলুন 🌾',
    locationLabel: '🏡 আপনার খামার কোথায় অবস্থিত?',
    locationHint: 'আমরা স্বয়ংক্রিয়ভাবে আপনার অবস্থান সনাক্ত করেছি, বা ম্যানুয়ালি প্রবেশ করান',
    locationPlaceholder: 'বিশ্বব্যাপী অবস্থান অনুসন্ধান করুন (যেমন, নিউইয়র্ক, মুম্বাই, লন্ডন, টোকিও)',
    refreshLocation: '🔄 আমার অবস্থান রিফ্রেশ করুন',
    cropLabel: '🌾 আপনি কী ফসল চাষ করছেন?',
    cropPlaceholder: 'আপনার ফসল অনুসন্ধান করুন (যেমন, চাল, গম, টমেটো)',
    farmSizeLabel: '🚜 খামারের আকার (একর)',
    farmSizePlaceholder: 'খামারের আকার প্রবেশ করান',
    submitButton: '🚀 কৃষি ড্যাশবোর্ড শুরু করুন',
    gettingLocation: '📍 আপনার অবস্থান পাচ্ছি...',
    selected: '✅ নির্বাচিত:',
    noLocationsFound: 'কোনো অবস্থান পাওয়া যায়নি। আপনি এখনও আপনার কাস্টম অবস্থান টাইপ করতে পারেন।',
    noCropsFound: 'কোনো ফসল পাওয়া যায়নি',
    dashboard: 'ড্যাশবোর্ড',
    yieldPrediction: 'ফসল পূর্বাভাস',
    weatherAlerts: 'আবহাওয়া সতর্কতা',
    marketPrices: 'বাজার দাম',
    recommendations: 'সুপারিশ',
    aboutTitle: 'কিসানসেফ সম্পর্কে',
    aboutDescription: 'উন্নত ফসল উৎপাদনের জন্য AI-চালিত স্মার্ট কৃষি সমাধান',
    contactTitle: 'জরুরি হেল্পলাইন',
    farmerHelpline: 'কৃষক হেল্পলাইন',
    weatherHelpline: 'আবহাওয়া হেল্পলাইন',
    newsTitle: 'কৃষি সংবাদ',
    latestNews: 'সর্বশেষ সংবাদ'
  },
  gu: {
    title: '🌾 કિસાન સેફ 🚜',
    home: 'હોમ',
    about: 'અમારા વિશે',
    helplines: 'હેલ્પલાઇન',
    news: 'સમાચાર',
    farmTitle: '🌱 તમારા ખેતર વિશે કહો 🌾',
    locationLabel: '🏡 તમારું ખેતર ક્યાં આવેલું છે?',
    locationHint: 'અમે તમારું સ્થાન આપોઆપ શોધી કાઢ્યું છે, અથવા મેન્યુઅલી દાખલ કરો',
    locationPlaceholder: 'વિશ્વવ્યાપી સ્થાનો શોધો (જેમ કે, ન્યૂયોર્ક, મુંબઈ, લંડન, ટોક્યો)',
    refreshLocation: '🔄 મારું સ્થાન રિફ્રેશ કરો',
    cropLabel: '🌾 તમે કયો પાક ઉગાડો છો?',
    cropPlaceholder: 'તમારો પાક શોધો (જેમ કે, ચોખા, ઘઉં, ટામેટાં)',
    farmSizeLabel: '🚜 ખેતરનું કદ (એકર)',
    farmSizePlaceholder: 'ખેતરનું કદ દાખલ કરો',
    submitButton: '🚀 ખેતી ડેશબોર્ડ શરૂ કરો',
    gettingLocation: '📍 તમારું સ્થાન મેળવી રહ્યા છીએ...',
    selected: '✅ પસંદ કરેલ:',
    noLocationsFound: 'કોઈ સ્થાન મળ્યું નથી. તમે હજુ પણ તમારું કસ્ટમ સ્થાન ટાઈપ કરી શકો છો.',
    noCropsFound: 'કોઈ પાક મળ્યો નથી',
    dashboard: 'ડેશબોર્ડ',
    yieldPrediction: 'પાક આગાહી',
    weatherAlerts: 'હવામાન ચેતવણી',
    marketPrices: 'બજાર ભાવ',
    recommendations: 'ભલામણો',
    aboutTitle: 'કિસાનસેફ વિશે',
    aboutDescription: 'વધુ સારા પાક ઉત્પાદન માટે AI-સંચાલિત સ્માર્ટ ખેતી સમાધાન',
    contactTitle: 'કટોકટી હેલ્પલાઇન',
    farmerHelpline: 'ખેડૂત હેલ્પલાઇન',
    weatherHelpline: 'હવામાન હેલ્પલાઇન',
    newsTitle: 'કૃષિ સમાચાર',
    latestNews: 'તાજા સમાચાર'
  }
}

type Language = keyof typeof translations
type TranslationKey = keyof typeof translations.en

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  // Load saved language on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('kisanSafeLanguage') as Language
      if (saved && translations[saved]) {
        setLanguage(saved)
      }
    }
  }, [])

  // Save language when changed
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('kisanSafeLanguage', lang)
    }
  }

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}