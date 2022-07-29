import React from "react";
import "./App.css";

import Header from "./components/Header";
import Foooter from "./components/Footer";
import People from "./components/people/People";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Intro from "./components/Intro";
import EventCard from "./components/events/EventCard";
import Notification from "./components/Notification";
import Faq from "./components/Faq";
import Trail from "./components/Trail";
import StudentCard from "./components/people/StudentCard";
import Peopletrail from "./components/people/Peopletrail";
import Expert from "./components/people/expert";
import {
  FcAbout,
  FcInspection,
  FcOnlineSupport,
  FcContacts,
} from "react-icons/fc";

import Fab from "./components/FAB";

function App() {
  const actions = [
    { label: "About", icon: <FcAbout />, target: "about" },
    { label: "Events", icon: <FcInspection />, target: "events" },
    { label: "FAQ", icon: <FcOnlineSupport />, target: "faq" },
    { label: "Contact", icon: <FcContacts />, target: "contact" },
  ];
  return (
    <React.StrictMode>
      <main>
        <Fab actions={actions} />
      </main>

      <Header />
      <Notification />
      <Intro />
      <About />
      <Trail />
      <Events />
      
      <Gallery />
      <Peopletrail />
      {/* <People /> */}
      <Expert />
      <StudentCard />
      <Faq />
      <Contact />
      <Foooter />
    </React.StrictMode>
  );
}
export default App;
