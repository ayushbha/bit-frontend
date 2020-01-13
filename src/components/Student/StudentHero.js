import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import ActivityCard from "./ActivityCard";

const HeroBackground = styled.div`
  background-color: #0a192f;
  position: absolute;
  left: 0;
  right: 0;
  height: 40em;
  z-index: -99;
  clip-path: ellipse(110% 70% at 63% 25%);
`;

const HeroContainer = styled.div`
  padding: 2.5em;
  padding-bottom: 2em;
  display: flex;
  flex-flow: row wrap;
  color: white;
`;

const DescriptionWrapper = styled.div`
  flex: 6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
  width: 70%;
`;

const CardWrapper = styled.div`
  flex: 4;
  display: flex;
  justify-content: center;
`;

const ProgressBar = styled.div`
  margin-top: 2em;
  width: 90%;
  height: 0.5em;
  background-color: #eee;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: ${props => props.progress};
    background-color: #4788ff;
  }
`;

const StudentHero = props => {
  const resumeClickedHandler = () => {
    // go to current lab
  };

  return (
    <>
      <HeroBackground />
      <HeroContainer>
        <DescriptionWrapper>
          <Description>
            <p>&#8249; Back to modules</p>
            <h1 style={{ margin: 0 }}>Programming Principles</h1>
            <p>
              Coding Best Practices are a set of informal rules that the
              software development community has learned over time which can
              help improve the quality of software
            </p>
            <ProgressBar progress={"69%"} />
          </Description>
        </DescriptionWrapper>
        <CardWrapper>
          <ActivityCard
            type="VERTICAL"
            image={props.suggestedActivity.image}
            name={props.suggestedActivity.name}
            description={props.suggestedActivity.description}
            buttonClicked={() => props.resumeClicked}
          />
        </CardWrapper>
      </HeroContainer>
    </>
  );
};

/**
 * ===================== DEPRECATED =======================
 * Component will update two times (at least). Further updates are caused by
 * subscription feature and updates elsewhere in application
 *    > [FIRST] when student_data will be loaded (causing update):
 *        - request already has been dispatched in 'Student.js' for suggested_activity
 *        - suggested_activity does not exist yet...
 *        - everything will be empty except 'required' object
 *    > [SECOND] when suggested_activity will be loaded by dispatch earlier (causing update):
 *        - everything will be rendered
 */
const mapStateToProps = (state, ownProps) => {
  const studentData = state.studentData; // creating reference for less typing
  const newProps = {};

  let studentName = "";
  if (studentData.is_student_data_loaded) {
    studentName = studentData.name;
  }
  newProps.studentName = studentName;

  // if (ownProps.for === "CURRENT") {
  let suggestedActivity = {};
  if (!studentData.suggested_activity) {
    suggestedActivity = {
      image: "",
      name: "",
      description: ""
    };
  } else {
    suggestedActivity = {
      image: "github",
      name: studentData.suggested_activity.name,
      description:
        "Bacon ipsum dolor amet pancetta short ribs pig shankle chicken. Kielbasa ribeye salami jerky ham hock short ribs."
    };
  }
  newProps.suggestedActivity = suggestedActivity;
  // }
  return newProps;
};

export default connect(mapStateToProps)(StudentHero);
