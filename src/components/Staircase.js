import React from 'react';

import StaircaseCard from './StaircaseCard';
import brandRecognitionIcon from '../images/icon-brand-recognition.svg';
import detailedRecordsIcon from '../images/icon-detailed-records.svg';
import fullyCustomizableIcon from '../images/icon-fully-customizable.svg';

function Staircase() {
  return (
    <section class="staircase-container">
      <div class="staircase-header">
        <h3 class="staircase-header-title">Advanced Statistics</h3>
        <span class="staircase-header-text">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </span>
      </div>
      <div class="staircase">
        <StaircaseCard
          icon={brandRecognitionIcon}
          alt="brand-recognition-icon"
          title="Brand Recognition"
          text="Boost your brand recognition with each click.
          Generic links don’t mean a thing. Branded links help instil confidence in
          your content."
          />
        <StaircaseCard
          icon={detailedRecordsIcon}
          alt="detailed-records-icon"
          title="Detailed Records"
          text="Gain insights into who is clicking your
          links. Knowing when and where people engage with your content helps inform
          better decisions."
          />
        <StaircaseCard
          icon={fullyCustomizableIcon}
          alt="fully-customizable-icon"
          title="Fully Customizable"
          text="Improve brand awareness and content
      discoverability through customizable links, supercharging audience
      engagement."
        />
      </div>
    </section>
  );
}

export default Staircase;
