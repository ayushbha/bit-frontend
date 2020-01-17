import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 1em;
`;

const Dot = styled.div`
  display: inline-block;
  margin-right: 0.4em;
  width: 0.3em;
  height: 0.3em;
  vertical-align: middle;
  ${props => (props.type !== "BOX" ? "border-radius: 50%" : "")}

  background-color: ${props => (props.filled ? props.onColor : props.offColor)};
`;
// 007BED

/**
 * 
 * @param {filled} props 
 */
const Rating = props => {
  const renderedDots = [...Array(props.outOf || 5)].map((project, index) => {
    return (
      <Dot
        key={`dots-${index}`}
        filled={index < props.rating}
        type={props.type}
        onColor={props.onColor}
        offColor={props.offColor}
      />
    );
  });

  return <Container>{renderedDots}</Container>;
};

export default Rating;
