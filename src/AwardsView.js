import React from "react";
import "./css/Awards.css";

const Awards = () => {
  const Card = (props) => (
    <article class="card">
      <div class="card-header">
        <h5 style={{ color: "gray", margin: 0 }}>{props.date}</h5>
        <h2 style={{ margin: 0 }}>{props.title}</h2>

        <h4>{props.content}</h4>
      </div>

      <div class="card-footer">{props.footer}</div>
    </article>
  );

  return (
    <main>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          overflowX: "scroll",
        }}
      >
        <h1 style={{ margin: 0 }}>Honours and Awards</h1>
        <section class="card-list">
          <Card
            date="23 May 2022"
            title="International Science Project Competition"
            content='INTOC is an annual global competiton that allows students to showcase their science research projects that they&apos;ve embarked on. My group project on the "Investigation of how the angle of light hitting a solar panel changes the voltage output of the solar panel" managed to win the silver medal in the Physics and Engineering category for this competiton.'
            footer="INTOC Global"
          />

          <Card
            date="6 June 2022"
            title="Opportunity X"
            content='Opportunity X is an organisation based in the US, and they hosted a global science competition in 2022. My group project on the "Investigation of how the angle of light hitting a solar panel changes the voltage output of the solar panel" managed to win 3rd place in this competiton.'
            footer="Opportunity X"
          />
          <Card
            date="7-9 March 2023"
            title="Singapore Science and Engineering Fair (SSEF)"
            content='My group project on the "Investigation of how the angle of light hitting a solar panel changes the voltage output of the solar panel" was accepted as one of the 2023 SSEF projects. Through this experience, I&apos;ve managed to talk to a lot of like-minded individuals and understood a lot about the different projects they did.'
            footer="Singapore Science and Engineering Fair"
          />

          <Card
            date="10 May 2023"
            title="2023 Swift Student Challenge"
            content="I was one of 350 people worldwide, and one of 5 people in Singapore who won Apple's Swift Student Challenge in 2023. My app submission is called StudyLog. StudyLog is a one-stop platform for all your studying needs, allowing students to take charge of their learning, and allowing them to focus and study better."
            footer=" Apple"
          />
        </section>
      </div>
    </main>
  );
};

export default Awards;
