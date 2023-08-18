import React from "react";
import MainLayout from "./layout/MainLayout";
import Header from "./sections/header/Header";
import Aboutus from "./sections/aboutus/Aboutus";
import OurTeam from "./sections/ourteam/OurTeam";
import InfoLine from "./components/infoline/InfoLine";
import TextOverflow from "./components/textoverflow/TextOverflow";
import "./App.css";
function App() {
  return (
    <MainLayout>
    <Header />
    <InfoLine />
    <TextOverflow title="1. ABOUT US"/>
    <Aboutus />
    <TextOverflow title="2. OUR TEAM" description="Of professional trainers"
     align='left'/>
     <OurTeam />
    <TextOverflow title="3. MEMBERSHIPS"/>
    </MainLayout>
  );
}

export default App;

