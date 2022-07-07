import React from "react";
import { Title } from "components/atoms/Title/Title";
import { Average } from "components/atoms/Average/Average";
import {
  Wrapper,
  BigAverage,
  StyledDetails,
  StyledInfo,
  StyledLabel,
  StyledSubtractInfo,
} from "./StudentDetails.styles";

const StudentsDetails = ({ student }) => {
  return (
    <Wrapper>
      <BigAverage value={student.average}>{student.average}</BigAverage>
      <Title isBig>{student.name}</Title>
      <StyledDetails>
        <StyledLabel>Course:</StyledLabel>
        <StyledInfo isBig>{student.course}</StyledInfo>
        <StyledLabel>Average grades:</StyledLabel>
        {student.grades.map(({ subject, average }) => (
          <StyledSubtractInfo key={subject}>
            <StyledInfo>{subject}</StyledInfo>
            <Average value={average}>{average}</Average>
          </StyledSubtractInfo>
        ))}
      </StyledDetails>
    </Wrapper>
  );
};

export default StudentsDetails;
