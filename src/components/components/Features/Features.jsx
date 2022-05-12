import React from "react";
import Cards from "./Cards";
import "./features.css";
import img from "../../img/github.png";

const Features = () => {
  return (
    <section className="featuresSection">
      <div className="featuresMain">
        <div className="featuresFlex">
          <div>
            <span className="key">KEY FEATURES</span>
            <h2 className="featuresText">
              Everything you need to start blogging as a developer!
            </h2>
          </div>
          <div>
            <img
              className="wordImg"
              src="https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1643362175006%2FIgPo-NlO9.png%3Fauto%3Dcompress&w=1200&q=75"
              alt=""
            />
          </div>
        </div>
        <div className="cards">
          <Cards
            img={img}
            name="Automatic GitHub Backup"
            text="Every time you publish an article on your tech blog, a markdown version of the post is pushed to your private GitHub repo as a backup."
          />
          <Cards
            img={img}
            name="Write in Markdown"
            text="Bring your custom domain, and get up and running within minutes. We issue, and renew SSL cert for you automatically."
          />
          <Cards
            img={img}
            name="Map a custom domain"
            text="Bring your custom domain, and get up and running within minutes. We issue, and renew SSL cert for you automatically."
          />
          <Cards
            img={img}
            name="Superfast Next.js Powered Tech Blogs"
            text="Hashnode blogs are powered by Next.js, and are served via Vercel's word class CDN."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
