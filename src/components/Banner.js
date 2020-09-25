import React from "react";
import bgBoostDesktop from "../images/illustration-working.svg";

function Banner() {
  return (
    <section class="banner">
      <div class="cta-container">
        <h1 class="cta-header">More than just shorter links</h1>
        <span class="cta-tagline">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </span>
        <button class="cta-button">Get Started</button>
      </div>
      <img src={bgBoostDesktop} alt="person-at-computer-desk"></img>
    </section>
  );
}

export default Banner;
