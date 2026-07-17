import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';

import HomeDashboard from './views/HomeDashboard';
import VoterEducation from './views/VoterEducation';
import SmartMap from './views/SmartMap';
import VoterVerification from './views/VoterVerification';
import ResultsDashboard from './views/ResultsDashboard';
import ZecBot from './views/ZecBot';
import Contact from './views/Contact';
import MoreMenu from './views/MoreMenu';
import AboutZec from './views/AboutZec';
import CalendarScreen from './views/CalendarScreen';
import NewsScreen from './views/NewsScreen';
import AnnouncementsScreen from './views/AnnouncementsScreen';
import FAQScreen from './views/FAQScreen';
import TermsScreen from './views/TermsScreen';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomeDashboard />} />
              <Route path="education" element={<VoterEducation />} />
              <Route path="stations" element={<SmartMap />} />
              <Route path="contact" element={<Contact />} />
              <Route path="more" element={<MoreMenu />} />
              <Route path="about" element={<AboutZec />} />
              
              {/* Quick Search Routes */}
              <Route path="verify" element={<VoterVerification />} />
              <Route path="results" element={<ResultsDashboard />} />
              <Route path="news" element={<NewsScreen />} />
              <Route path="announcements" element={<AnnouncementsScreen />} />
              <Route path="faq" element={<FAQScreen />} />
              <Route path="terms" element={<TermsScreen />} />
              <Route path="calendar" element={<CalendarScreen />} />
              <Route path="bot" element={<ZecBot />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
