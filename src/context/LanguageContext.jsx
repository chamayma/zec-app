import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  sw: {
    // Nav & Common
    home: 'Nyumbani',
    education: 'Elimu',
    stations: 'Vituo',
    contact: 'Mawasiliano',
    more: 'Zaidi',
    
    // Home Dashboard
    motto: 'Kumuwezesha mwananchi kupata huduma zote za uchaguzi kwa urahisi, uwazi na kwa wakati kupitia simu yake.',
    findStation: 'Tafuta Kituo Chako',
    verifyVoter: 'Hakiki Taarifa za Mpiga Kura',
    schedule: 'Ratiba ya Uchaguzi',
    results: 'Matokeo ya Uchaguzi',
    news: 'Habari za Tume',
    voterEducation: 'Elimu ya Mpiga Kura',
    verifyPrompt: 'Ingiza Namba ya Kitambulisho cha Mzanzibari Mkaazi/Kitambulisho cha kupigia kura.',

    // Contact
    contactDesc: 'Tuko hapa kukuhudumia. Wasiliana na Tume ya Uchaguzi Zanzibar (ZEC).',
    headquarters: 'Makao Makuu',
    workingHours: 'Saa za Kazi',
    workingDays: 'Jumatatu-Ijumaa: 02:00-10:00',
    socialMedia: 'Mitandao ya Kijamii',
    sendMessage: 'Tuma Ujumbe Moja kwa Moja',
    fullName: 'Jina Kamili',
    fullNamePlaceholder: 'Weka jina lako',
    phoneNumber: 'Namba ya Simu',
    phoneNumberPlaceholder: 'Mfano: 077... au 065...',
    msgType: 'Aina ya Ujumbe',
    msgTypePlaceholder: 'Chagua aina ya ujumbe...',
    msgType1: 'Ushauri',
    msgType2: 'Malalamiko',
    msgType3: 'Maulizo',
    msgType4: 'Pongezi',
    yourMsg: 'Ujumbe Wako',
    yourMsgPlaceholder: 'Andika ujumbe wako hapa...',
    sendMsgBtn: 'Tuma Ujumbe',

    // About ZEC
    aboutZec: 'Kuhusu ZEC',
    aboutSubtitle: 'Tume ya Uchaguzi ya Zanzibar',
    aboutIntro: 'Tume ya Uchaguzi ya Zanzibar (ZEC) ni chombo huru kilichoundwa kwa mujibu wa Katiba ya Zanzibar ya mwaka 1984, kikiwa na jukumu kuu la kusimamia na kuendesha michakato yote ya uchaguzi ndani ya Visiwa vya Zanzibar kwa uadilifu na uwazi.',
    vision: 'Dira',
    visionText: '"Kuwa taasisi bora na yenye kuaminika katika kusimamia uchaguzi huru na wa haki."',
    mission: 'Dhima',
    missionText: '"Kusimamia na kuendesha uchaguzi kwa kufuata misingi ya demokrasia, uwazi, na uadilifu kwa ajili ya maendeleo ya Zanzibar."',
    coreValues: 'Maadili ya Msingi',
    value1: 'Uhuru',
    value2: 'Uadilifu',
    value3: 'Uwazi',
    value4: 'Usawa',
    mandateHistory: 'Mamlaka na Historia',
    established: 'Kuanzishwa',
    establishedText: 'ZEC ilianzishwa kwa mujibu wa kifungu cha 119 cha Katiba ya Zanzibar ya mwaka 1984 ili kusimamia uchaguzi wa Rais wa Zanzibar, Wajumbe wa Baraza la Wawakilishi na Madiwani.',
    legalMandate: 'Mamlaka ya Kisheria',
    legalMandateText: 'Majukumu yake yameainishwa pia katika Sheria ya Uchaguzi Na. 4 ya mwaka 2018, inayotoa mwongozo wa uandikishaji wa wapiga kura na uendeshaji wa kura.',
    leadership: 'Uongozi wa Tume',
    chairman: 'Mwenyekiti',
    viceChairman: 'Makamu Mwenyekiti',
    commissioners: 'Makomishna',
    zecHq: 'ZEC Headquarters',
    commissionMembers: 'Wajumbe wa Tume',

    // More Menu
    voter: 'Mpiga Kura',
    location: 'Zanzibar, Tanzania',
    electionServices: 'Huduma za Uchaguzi',
    verifyInfo: 'Hakiki Taarifa Zako',
    electionResults: 'Matokeo ya Uchaguzi',
    infoAndHelp: 'Taarifa na Msaada',
    aboutUs: 'Kuhusu ZEC',
    newsEvents: 'Habari na Matukio',
    announcements: 'Matangazo',
    zecBotHelp: 'ZEC Bot',
    faq: 'Maswali Yanayoulizwa Sana',
    settings: 'Mipangilio',
    changeLang: 'Badili Lugha (English)',
    terms: 'Vigezo na Masharti',
    logout: 'Ondoka (Log Out)',

    // Smart Map
    mapTitle: 'Tafuta Kituo',
    searchMap: 'Tafuta kituo, shehia, au jimbo...',
    showRoute: 'Onyesha Njia (Ramani)',
    closeRoute: 'Funga Njia',
    yourLocation: 'Eneo Lako',
    searchPrompt: 'Tafadhali tumia sehemu ya utafutaji hapo juu kupata kituo chako au shehia yako.',
    nearbyStations: 'Vituo Vinavyokaribiana',
    noStationFound: 'Hakuna kituo kilichopatikana.',
    distance: 'Umbali',
    duration: 'Muda',

    // New Screens
    newsSubtitle: 'Pata taarifa na habari mpya kutoka Tume ya Uchaguzi.',
    readMore: 'Soma Zaidi',
    otherNews: 'Habari Nyingine',
    views: 'views',

    announcementsSubtitle: 'Matangazo rasmi na taarifa muhimu kutoka ZEC.',
    tabAll: 'Yote',
    downloadDoc: 'Pakua Nyaraka (PDF)',
    readFull: 'Soma Kamili',

    faqSubtitle: 'Majibu kwa maswali yanayoulizwa mara kwa mara kuhusu uchaguzi na ZEC.',
    searchFaq: 'Tafuta swali lako...',
    noFaqFound: 'Hakuna swali lililopatikana.',

    termsSubtitle: 'Sera ya Faragha na Matumizi ya Mfumo wa ZEC.',
    lastUpdated: 'Ilisasishwa Mwisho: Oktoba 2025',
    termsIntroTitle: '1. Utangulizi',
    termsIntroDesc: 'Karibu kwenye mfumo rasmi wa Tume ya Uchaguzi ya Zanzibar (ZEC). Kwa kutumia programu hii, unakubaliana na vigezo na masharti yaliyoainishwa hapa chini.',
    termsDataTitle: '2. Matumizi ya Taarifa Binafsi',
    termsDataDesc: 'Huduma ya "Hakiki Taarifa" inahitaji utoe namba yako ya Kitambulisho cha Mzanzibari Mkaazi (ZANID). Tunatumia taarifa hii Kipekee kwa ajili ya kutafuta na kuhakiki kituo chako.',
    termsSecurityTitle: '3. Usalama wa Mtumiaji',
    termsSecurityDesc: 'ZEC imeweka hatua madhubuti za kiusalama kulinda taarifa zinazopita kwenye mfumo huu dhidi ya ufikiaji usioidhinishwa.',
    termsLawTitle: '4. Sheria na Mamlaka',
    termsLawDesc: 'Matumizi ya mfumo huu yanasimamiwa na Sheria za Uchaguzi za Zanzibar pamoja na Sheria za Ulinzi wa Taarifa Binafsi.',
    iAgree: 'Nimeelewa na Kukubaliana',

    electionCalendar: 'Ratiba ya Uchaguzi',
    calendarSubtitle: 'Matukio muhimu na ratiba kuelekea Uchaguzi Mkuu.',
    completed: 'Imekamilika',
    active: 'Inaendelea',
    upcoming: 'Inakuja',

    liveUpdates: 'Matokeo ya Moja kwa Moja',
    nationalProgress: 'Maendeleo ya Kitaifa',
    reporting: 'Yameripotiwa',
    currentProjectedWinner: 'Mgombea Anayeongoza',
    leading: 'Anaongoza',
    certifiedResults: 'Matokeo Rasmi ya ZEC',
    totalVotes: 'Jumla ya Kura',
    viewProfile: 'Tazama Wasifu',
  },
  en: {
    // Nav & Common
    home: 'Home',
    education: 'Education',
    stations: 'Stations',
    contact: 'Contact',
    more: 'More',
    
    // Home Dashboard
    motto: 'Empowering citizens to access all electoral services easily, transparently and timely via their mobile phones.',
    findStation: 'Find Your Station',
    verifyVoter: 'Verify Voter Info',
    schedule: 'Election Schedule',
    results: 'Election Results',
    news: 'Commission News',
    voterEducation: 'Voter Education',
    verifyPrompt: 'Enter your Zanzibar Resident ID / Voter ID Number.',

    // Contact
    contactDesc: 'We are here to serve you. Contact the Zanzibar Electoral Commission (ZEC).',
    headquarters: 'Headquarters',
    workingHours: 'Working Hours',
    workingDays: 'Monday-Friday: 02:00-10:00',
    socialMedia: 'Social Media',
    sendMessage: 'Send a Direct Message',
    fullName: 'Full Name',
    fullNamePlaceholder: 'Enter your name',
    phoneNumber: 'Phone Number',
    phoneNumberPlaceholder: 'E.g. 077... or 065...',
    msgType: 'Message Type',
    msgTypePlaceholder: 'Select message type...',
    msgType1: 'Suggestion',
    msgType2: 'Complaint',
    msgType3: 'Inquiry',
    msgType4: 'Compliment',
    yourMsg: 'Your Message',
    yourMsgPlaceholder: 'Write your message here...',
    sendMsgBtn: 'Send Message',

    // About ZEC
    aboutZec: 'About ZEC',
    aboutSubtitle: 'Zanzibar Electoral Commission',
    aboutIntro: 'The Zanzibar Electoral Commission (ZEC) is an independent body established under the 1984 Constitution of Zanzibar, with the core mandate of managing and conducting all electoral processes within Zanzibar with integrity and transparency.',
    vision: 'Vision',
    visionText: '"To be an excellent and reliable institution in managing free and fair elections."',
    mission: 'Mission',
    missionText: '"To manage and conduct elections adhering to democratic principles, transparency, and integrity for the development of Zanzibar."',
    coreValues: 'Core Values',
    value1: 'Independence',
    value2: 'Integrity',
    value3: 'Transparency',
    value4: 'Equality',
    mandateHistory: 'Mandate & History',
    established: 'Establishment',
    establishedText: 'ZEC was established under Article 119 of the 1984 Constitution of Zanzibar to oversee the election of the President of Zanzibar, Members of the House of Representatives, and Councilors.',
    legalMandate: 'Legal Mandate',
    legalMandateText: 'Its responsibilities are also outlined in the Election Act No. 4 of 2018, providing guidelines for voter registration and the conduct of voting.',
    leadership: 'Commission Leadership',
    chairman: 'Chairman',
    viceChairman: 'Vice Chairman',
    commissioners: 'Commissioners',
    zecHq: 'ZEC Headquarters',
    commissionMembers: 'Commission Members',

    // More Menu
    voter: 'Voter',
    location: 'Zanzibar, Tanzania',
    electionServices: 'Election Services',
    verifyInfo: 'Verify Your Information',
    electionResults: 'Election Results',
    infoAndHelp: 'Information & Help',
    aboutUs: 'About ZEC',
    newsEvents: 'News & Events',
    announcements: 'Announcements',
    zecBotHelp: 'ZEC Bot',
    faq: 'Frequently Asked Questions',
    settings: 'Settings',
    changeLang: 'Change Language (Swahili)',
    terms: 'Terms & Conditions',
    logout: 'Log Out',

    // Smart Map
    mapTitle: 'Find Station',
    searchMap: 'Search station, ward, or constituency...',
    showRoute: 'Show Route (Map)',
    closeRoute: 'Close Route',
    yourLocation: 'Your Location',
    searchPrompt: 'Please use the search bar above to find your polling station or ward.',
    nearbyStations: 'Nearby Stations',
    noStationFound: 'No station found.',
    distance: 'Distance',
    duration: 'Duration',

    // New Screens
    newsSubtitle: 'Get the latest news and updates from the Electoral Commission.',
    readMore: 'Read More',
    otherNews: 'Other News',
    views: 'views',

    announcementsSubtitle: 'Official announcements and important updates from ZEC.',
    tabAll: 'All',
    downloadDoc: 'Download Document (PDF)',
    readFull: 'Read Full Story',

    faqSubtitle: 'Answers to frequently asked questions about elections and ZEC.',
    searchFaq: 'Search for a question...',
    noFaqFound: 'No questions found.',

    termsSubtitle: 'Privacy Policy and Terms of Use for the ZEC System.',
    lastUpdated: 'Last Updated: October 2025',
    termsIntroTitle: '1. Introduction',
    termsIntroDesc: 'Welcome to the official system of the Zanzibar Electoral Commission (ZEC). By using this application, you agree to the terms and conditions outlined below.',
    termsDataTitle: '2. Use of Personal Information',
    termsDataDesc: 'The "Verify Information" service requires you to provide your Zanzibar Resident ID (ZANID). We use this information Exclusively to locate and verify your polling station.',
    termsSecurityTitle: '3. User Security',
    termsSecurityDesc: 'ZEC has implemented strict security measures to protect data transmitted through this system against unauthorized access.',
    termsLawTitle: '4. Law and Jurisdiction',
    termsLawDesc: 'The use of this system is governed by the Election Laws of Zanzibar and the Personal Data Protection Laws.',
    iAgree: 'I Understand and Agree',

    electionCalendar: 'Election Schedule',
    calendarSubtitle: 'Key events and timetable leading to the General Election.',
    completed: 'Completed',
    active: 'In Progress',
    upcoming: 'Upcoming',

    liveUpdates: 'Live Results',
    nationalProgress: 'National Progress',
    reporting: 'Reporting',
    currentProjectedWinner: 'Leading Candidate',
    leading: 'Leading',
    certifiedResults: 'ZEC Certified Results',
    totalVotes: 'Total Votes',
    viewProfile: 'View Profile',
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('sw');

  const t = (key) => {
    return translations[lang][key] || key;
  };

  const toggleLang = () => {
    setLang(lang === 'sw' ? 'en' : 'sw');
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
