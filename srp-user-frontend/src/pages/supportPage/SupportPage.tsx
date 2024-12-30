import React, { useState } from "react";
import "./supportPage.css";
import Banner from "../../components/banner/Banner";
import SearchContact from "../../components/searchContact/SearchContact";
import bellIcon from "../../img/icon/bell.svg";

function SupportPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleQuestionToggle = (index) => {
    setActiveQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  const questions = [
    "What features are available with Pro?",
    "How can I change or update my Adobe ID?",
    "How can I follow interesting creatives?",
    "How do I switch from a business profile to a personal profile in Adobe ID?",
    "What should I do if I can’t log into my account?",
    "How do I edit a draft or a published project?",
    "How can I protect myself from job scams?",
  ];

  const filteredQuestions = questions.filter((question) =>
    question.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <main>
        <Banner text="Support" />
        <SearchContact
          link="/contact"
          text="Contact Us"
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />

        <section className="information-section">
          <div className="information-row">
            <div className="info-card">
              <h2>Platform Basics</h2>
              <p>
                Key articles to help you get started with the platform and learn
                its features.
              </p>
            </div>
            <div className="info-card">
              <h2>Account, Profile, and Community</h2>
              <p>
                Learn how to manage your account, customize your profile, and
                interact with other users.
              </p>
            </div>
            <div className="info-card">
              <h2>Creating, Editing, and Publishing</h2>
              <p>
                Documentation on setting up projects, creating content, and
                promoting it on the platform.
              </p>
            </div>
          </div>
          <div className="information-row">
            <div className="info-card">
              <h2>Files and Resources</h2>
              <p>
                How to attach files, images, and other resources to your
                projects.
              </p>
            </div>
            <div className="info-card">
              <h2>Safety and Legal Center</h2>
              <p>
                Information about account security, data privacy, and legal
                aspects of using the platform.
              </p>
            </div>
            <div className="info-card">
              <h2>Subscriptions and Payments</h2>
              <p>
                Information about subscriptions, paid features, and payment
                methods.
              </p>
            </div>
          </div>
          <div className="information-row">
            <div className="info-card">
              <h2>Subscriptions and Payments</h2>
              <p>
                Information about subscriptions, paid features, and payment
                methods.
              </p>
            </div>
            <div className="info-card">
              <h2>Livestreaming and Webinars</h2>
              <p>
                Learn how to use livestreaming features and participate in
                webinars.
              </p>
            </div>
            <div className="info-card">
              <h2>Troubleshooting and FAQs</h2>
              <p>
                A section with frequently asked questions and solutions to
                common issues.
              </p>
            </div>
          </div>
        </section>

        <section className="questions-section">
          {filteredQuestions.map((question, index) => (
            <div
              className={`question-main ${activeQuestion === index ? "open" : ""}`}
              onClick={() => handleQuestionToggle(index)}
              key={index}
            >
              <h2>{question}</h2>
              <p
                className={`question-text ${activeQuestion === index ? "visible" : "hidden"}`}
              >
                A section with frequently asked questions and solutions to
                common issues. A section with frequently asked questions and
                solutions to common issues. A section with
                <br />
                frequently asked questions and solutions to common issues. A
                section with frequently asked questions and solutions to common
                issues.
              </p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default SupportPage;
