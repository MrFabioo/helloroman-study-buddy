import React from "react";
import PropTypes from "prop-types";
import Button from "components/atoms/Button/Button";
import { StyledAverage, StyledInfo, Wrapper } from "./UsersListItem.styled";

const UsersListItem = ({
  index,
  userData: { name, average, attendance = "0%" },
}) => {
  const showIndex = (index) => alert(`This is student#${index + 1}`);
  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>
          {name}
          <Button onClick={() => showIndex(index)} />
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
