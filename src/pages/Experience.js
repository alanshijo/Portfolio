import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Amal Jyothi College of Engineering, Kanjirappally
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            CGPA:- 7.02
          </h5>
          <p> Master of Computer Applications</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            St. George's College Aruvithura
          </h3>

          <h5 className="vertical-timeline-element-subtitle">
            CCPA:- 5.75
          </h5>

          <p> Bachelor of Computer Applications </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            St. Joseph's Higher Seconday School
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Science stream
          </h5>
          <p>Percentage of Marks: 89%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Little Flower High School, Chemmalamattom
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            SSLC
          </h5>
          <p>Percentage of Marks: 88%</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
