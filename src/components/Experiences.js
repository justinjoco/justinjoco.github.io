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
          date="April 2023 - Present"
          icon={<Image fluid src={obviohealth} alt="Logo" roundedCircle />}
        >
          <h3 className="vertical-timeline-element-title">ObvioHealth</h3>
          <h5 className="vertical-timeline-element-subtitle">
            Software Engineer
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Seattle, WA</h6>
          <p>
            {" "}
            Develop a platform and a set of shared services, patterns, and
            libraries in the digital platform team at a fast-paced, high-growth
            health technology startup to accelerate application development
            teams by reducing technical debt and burden{" "}
          </p>
          <hr color="white" />
          <p> Typescript | Node.js | Docker | Kubernetes (K8s) | GCP </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#ffffff", color: "#ffffff" }}
          date="Sept 2021 - Mar 2023"
          icon={<Image fluid src={lessen} alt="Logo" roundedCircle />}
        >
          <h3 className="vertical-timeline-element-title">Lessen, Inc.</h3>
          <h5 className="vertical-timeline-element-subtitle">
            Software Engineer III
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Seattle, WA</h6>
          <p>
            {" "}
            Spearheaded multiple teams to architect, deploy, and maintain
            microservices in a fast-paced B2B proptech startup, including a
            message-driven push notification service, a state-managing work
            order offer service, event-driven task and metrics services, and
            third-party integrated services in AWS Elastic Kubernetes Service{" "}
          </p>
          <p>
            {" "}
            Accelerated dozens of projects by building initiatives, such as
            infrastructure pipelines, common libraries, and service templates,
            to expedite delivery of reliable, scalable, and maintainable
            microservices{" "}
          </p>
          <p>
            {" "}
            Established and upheld strong engineering processes that require
            static and dynamic code analysis with 85\% minimum test coverage,
            structured logging and custom metrics, and CICD with automated
            integration/E2E testing{" "}
          </p>
          <p>
            {" "}
            Applied subject matter expertise of significant portions of the
            company backend and knowledge of industry practices to mentor junior
            engineers, influence peers, and present regularly at company-wide
            engineering roundtables
          </p>
          <hr color="gray" />
          <p>
            {" "}
            Kotlin | Java | Typescript | Python | Node | Docker | Kubernetes |
            Helm | AWS | S3 | EC2 | Lambda | CDK | Minikube | REST | GraphQL |
            Kafka | Spring Boot | PostgreSQL | Terraform | Behavior-Driven
            Development{" "}
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#ffffff", color: "#ffffff" }}
          date="Jan 2020 - Sept 2021"
          icon={<Image fluid src={tmo} alt="Logo" roundedCircle />}
        >
          <h3 className="vertical-timeline-element-title">T-Mobile US, Inc.</h3>
          <h5 className="vertical-timeline-element-subtitle">
            Software Engineer
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Bellevue, WA</h6>
          <p>
            {" "}
            Led development, monitoring, and deployment of Visual Voicemail's
            (VVM) new distributed microservices to scale to handle 25M active
            users at 600 TPS, featuring FFmpeg audio transcoding and enforcing
            90% API handler test coverage via unit and integration testing{" "}
          </p>
          <p>
            {" "}
            Developed the new VVM Android client, handling API integration and
            implementing features such as push notifications, accessibility,
            metrics reporting, and app activation
          </p>
          <p>
            {" "}
            Developed new Consumer Digits desktop client, improving messaging
            and group call functionality{" "}
          </p>
          <hr color="gray" />
          <p>
            {" "}
            Kotlin for Android | Golang (Go) | Python | Docker | API Development
            | Unit and Integration Testing | Git (Bitbucket) | Typescript |
            React | Electron | Redux{" "}
          </p>
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
          <p>
            Led recitations of 30-40 students, aided design of course content
            with the professor and peer teaching assistants, and held office
            hours for material review and code debugging
          </p>
          <hr color="gray" />
          <p>
            Computer Systems Programming (C/C++) | Intro to Probability Theory
            for Signals and Systems | Math of Signals and Systems
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May - August 2019"
          iconStyle={{ background: "#dc3545", color: "#ffffff" }}
          icon={<Image fluid src={tmo} alt="Logo" roundedCircle />}
        >
          <h3 className="vertical-timeline-element-title">T-Mobile US, Inc.</h3>
          <h5 className="vertical-timeline-element-subtitle">
            System Architecture Engineering Intern
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Bellevue, WA</h6>
          <p>
            Built an MVC Android/iOS app and a desktop app end-to-end that
            integrate cloud storage APIs to streamline the internal releases of
            T-Mobile DIGITS' builds to QA
          </p>
          <hr color="gray" />
          <p>
            Android SDK (Kotlin) | React Native (JSX) | Electron | AWS-Amplify |
            HockeyApp API | Git (Bitbucket)
          </p>
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
          <p>
            Developed a B2B web portal that streamlined account opening for
            commercial clients in 23+ countries
          </p>
          <hr color="gray" />
          <p>
            HTML/CSS/Javascript (JS) | jQuery | Ember Bootstrap | Handlebars |
            Git (Bitbucket)
          </p>
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
          <p>
            Refactored majority of email service legacy codebase (Java); liaised
            Lincoln with SaaS providers to improve operational efficiency
          </p>
          <hr color="gray" />
          <p>Java | SVN | Market Research </p>
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
