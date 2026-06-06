import React from "react";
import { Container, Image } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experiences.css";
import lessen from "./assets/lessen.jpeg";
import tmo from "./assets/tmo.png";
import jpmc from "./assets/jpmc.png";
import lfg from "./assets/lfg.jpeg";
import cornell from "./assets/cornell.png";
import purdue from "./assets/purdue.jpeg";
import stony from "./assets/stonybrook.png";
import obviohealth from "./assets/obviohealth.png";
import disney from "./assets/disney_d_logo.png";
const Experiences = () => {
  return (
    <Container fluid style={{ padding: "20px" }}>
      <h1 className="display-3" style={{ textAlign: "center" }}>
        Experience
      </h1>
      <h5 style={{ textAlign: "center" }}>My work experiences and education</h5>

      <hr
        style={{
          color: "#ffffff",
          backgroundColor: "#ffffff",
          borderColor: "#ffffff",
        }}
      />
      <br />

      <h2 style={{ textAlign: "center" }}>Professional Experience</h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work--head"
          contentStyle={{ color: "#ffffff" }}
          iconStyle={{ background: "#ffffff", color: "#ffffff" }}
          contentArrowStyle={{ borderRight: "7px solid  #dc3545" }}
          date="June 2024 - Present"
          icon={<Image fluid src={disney} alt="Logo" roundedCircle />}
        >
          <h3 className="vertical-timeline-element-title">Disney</h3>
          <h5 className="vertical-timeline-element-subtitle">
            Senior Software Engineer
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Seattle, WA</h6>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#ffffff", color: "#ffffff" }}
          contentArrowStyle={{ borderRight: "7px solid  #dc3545" }}
          date="April 2023 - June 2024"
          icon={<Image fluid src={obviohealth} alt="Logo" roundedCircle />}
        >
          <h3 className="vertical-timeline-element-title">ObvioHealth</h3>
          <h5 className="vertical-timeline-element-subtitle">
            Software Engineer
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Seattle, WA</h6>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#ffffff", color: "#ffffff" }}
          date="Sept 2021 - Mar 2023"
          icon={<Image fluid src={lessen} alt="Logo" roundedCircle />}
        >
          <h3 className="vertical-timeline-element-title">Lessen</h3>
          <h5 className="vertical-timeline-element-subtitle">
            Software Engineer III
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Seattle, WA</h6>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#ffffff", color: "#ffffff" }}
          date="Jan 2020 - Sept 2021"
          icon={<Image fluid src={tmo} alt="Logo" roundedCircle />}
        >
          <h3 className="vertical-timeline-element-title">T-Mobile</h3>
          <h5 className="vertical-timeline-element-subtitle">
            Software Engineer
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Bellevue, WA</h6>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#dc3545", color: "#ffffff" }}
          date="Aug 2018 - May 2019, Aug - Dec 2019"
          icon={<Image fluid src={cornell} alt="Logo" roundedCircle />}
        >
          <h3 className="vertical-timeline-element-title">
            Cornell University, ECE
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Graduate Teaching Assistant
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Ithaca, NY</h6>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May - August 2019"
          iconStyle={{ background: "#dc3545", color: "#ffffff" }}
          icon={<Image fluid src={tmo} alt="Logo" roundedCircle />}
        >
          <h3 className="vertical-timeline-element-title">T-Mobile</h3>
          <h5 className="vertical-timeline-element-subtitle">
            System Architecture Engineering Intern
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Bellevue, WA</h6>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June - Aug 2017"
          iconStyle={{ background: "#dc3545", color: "#ffffff" }}
          icon={<Image fluid src={jpmc} alt="Logo" roundedCircle />}
        >
          <h3 className="vertical-timeline-element-title">
            JPMorgan Chase & Co.{" "}
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Software Engineering Intern
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Chicago, IL</h6>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June - Aug 2016"
          iconStyle={{ background: "#dc3545", color: "#ffffff" }}
          icon={<Image fluid src={lfg} alt="Logo" roundedCircle />}
        >
          <h3 className="vertical-timeline-element-title">
            Licoln Financial Group
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Enterprise Architecture Intern
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Fort Wayne, IN</h6>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <br />

      <h2 style={{ textAlign: "center" }}>Education</h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education--head"
          date="Aug 2018 - Dec 2019"
          contentStyle={{ color: "#ffffff" }}
          contentArrowStyle={{ borderRight: "7px solid  #292929" }}
          iconStyle={{ background: "#6c757d", color: "#ffffff" }}
          icon={<Image fluid src={cornell} alt="Logo" roundedCircle />}
        >
          <h3 className="vertical-timeline-element-title">
            Cornell University
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Master of Engineering in Electrical and Computer Engineering
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Ithaca, NY</h6>
          <p>
            MEng Design Project: Acoustic Localization and Tracking via Machine
            Learning
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2015 - May 2018"
          iconStyle={{ background: "#6c757d", color: "#ffffff" }}
          icon={<Image fluid src={purdue} alt="Logo" roundedCircle />}
        >
          <h3 className="vertical-timeline-element-title">Purdue University</h3>
          <h5 className="vertical-timeline-element-subtitle">
            Bachelor of Science in Electrical Engineering
          </h5>
          <h6 className="vertical-timeline-element-subtitle">
            West Lafayette, IN
          </h6>
          <p>
            Organization(s): Purdue IEEE (Learning Chair), Purdue Filipino
            Association, Purdue Ballroom and Latin, Purdue Hackers
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2014 - May 2015"
          iconStyle={{ background: "#6c757d", color: "#ffffff" }}
          icon={<Image fluid src={stony} alt="Logo" roundedCircle />}
        >
          <h3 className="vertical-timeline-element-title">
            Stony Brook University
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Attended, Transferred Out
          </h5>
          <h6 className="vertical-timeline-element-subtitle">
            Stony Brook, NY
          </h6>
          <p>Organization(s): Philippine United Student Organization</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
};

export default Experiences;
