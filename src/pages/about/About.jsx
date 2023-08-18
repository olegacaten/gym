import React from "react";
import MainLayout from "../../layout/MainLayout";
import Aboutus from "../../sections/aboutus/Aboutus";
import TextOverflow from "../../components/textoverflow/TextOverflow";
function About() {
  return (
    <MainLayout>
    <TextOverflow title="ABOUT US"/>
    <Aboutus />
    </MainLayout>
  );
}

export default About;
