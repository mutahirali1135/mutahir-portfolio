import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                  <h4>Creative Technologist & Brand Strategist</h4>
                <h5>SK Cyber Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            As a Graphic Designer and Social Media Handler at SK Cyber Technologies, I leverage over 6 months of design
            expertise to manage and elevate the company's digital brand identity. My role involves crafting high-impact 
            visual content using Canva while simultaneously integrating HTML, CSS, and Bootstrap to build functional, aesthetic web elements. 
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Growth & Frontend Lead</h4>
                <h5>RHA Digital Solutions</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
            At RHA Digital Solutions, I drive digital growth by blending professional Canva-based design with strategic
            social media management. I complement these creative skills with a foundational expertise in HTML, CSS, and
            Bootstrap to build cohesive, user-centric web experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Media Architect & Graphic Designer</h4>
                <h5>KaiRiz Cyber Technologies</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            Since joining KaiRiz Cyber Technologies years ago, I have spearheaded the company’s visual and social identity
            as a Graphic Designer and lead handler for LinkedIn and other platforms. I blend years of Canva design expertise with
            HTML, CSS, and Bootstrap to build a cohesive, professional digital presence that drives corporate growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
