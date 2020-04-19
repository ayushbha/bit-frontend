import React from 'react';
import styled from 'styled-components';
import resumeIcon from '../../../assets/icons/resume-pie.png';
import startIcon from '../../../assets/icons/start-flag.svg';
import Icon from '../low/Icon.js';

const BlueCard = styled.div`
  text-align: center;
  background-color: rgba(44,114,223, 0.85);
  border-radius: 8px;
  margin: 1em 1em;
  padding: 0.25em 1em;
  max-width: 600px;
`

const WhiteIcon = styled.div`
  color: white;
  margin: 2em 1em 1em 1em;
  padding: 0.25em 1em;
`

const CardText = styled.h1`
  color: white;
  margin: 1em 1em;
  padding: 0.25em 1em;
`

const ActionCard = (props) => {
    var text, icon, width='48', height='48';
    if (props.type === 'resume'){
      text = 'Resume Activity';
      icon = resumeIcon;
    } else if (props.type === 'start') {
      text = 'Start Activity';
      icon = startIcon;
    } else {
      // Invalid style property, you should not be here.
    }

    return (
        <BlueCard onClick={props.onClick}>
          <Icon src={icon} height={height} width={width}></Icon>
          <CardText>{text}</CardText>
        </BlueCard>
    )
}

export default ActionCard;
