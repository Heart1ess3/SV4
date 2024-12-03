import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function LearnMorePage() {
  const [subscribed, setSubscribed] = useState(false);

  const handleCheckboxChange = (event) => {
    setSubscribed(event.target.checked);
  };

  return (
<div>
  <h1>Learn More About Ski Resorts</h1>
  <p>
    Discover fascinating facts about ski resorts around the world. From their rich history and global appeal to famous destinations and slopes, there's so much to explore!
  </p>
  <h2>Featured Ski Resorts</h2>
  <ul>
    <li>
      <strong>Chamonix:</strong> Known for its stunning views of Mont Blanc and a variety of slopes for all skill levels.
    </li>
    <li>
      <strong>Aspen:</strong> A popular resort in the USA, renowned for its top-notch conditions and elite atmosphere.
    </li>
    <li>
      <strong>Kitzbühel:</strong> Famous for its ski competitions and picturesque Alpine scenery.
    </li>
    <li>
      <strong>Zermatt:</strong> A unique resort at the foot of the Matterhorn, offering excellent slopes and a car-free environment.
    </li>
  </ul>
  <h2>Stay Updated</h2>
  <p>
    Subscribe to our newsletter to receive the latest updates on ski resorts, slopes, and news.
  </p>
  <Checkbox
    {...label}
    checked={subscribed}
    onChange={handleCheckboxChange}
  />
  <span>
    {subscribed ? "You are subscribed!" : "Subscribe to our newsletter"}
  </span>
</div>
  );
}

export default LearnMorePage;