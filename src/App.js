import * as React from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import Header from "./pages/Header";
import Menu from "./pages/Menu";
import Footer from "./pages/Footer";
import i from "./locales/i18n";

const contacts = {
  name: "Ono",
  slogan: "Seaside Dining, Elevated.",
  tel: "+306998469136",
  email: "vluxurysuitespefkochori@gmail.com",
  schedule: "Mon-Sat: 11AM - 23PM",
  address: "Mikoniaty str, 1,  Nea Kallikratia, Halchidiki, Greece 60380",
};

function App() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = React.useState(i18n.language);

  return (
    <I18nextProvider i18n={i}>
      <Header
        setLanguage={setLanguage}
        language={language}
        contacts={contacts}
      />
      <Menu />
      <Footer contacts={contacts} />
    </I18nextProvider>
  );
}

export default App;
