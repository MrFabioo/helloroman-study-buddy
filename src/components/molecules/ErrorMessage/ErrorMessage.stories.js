import ErrorMesage from "./ErrorMesage";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden !important;
`;

export default {
  title: "Components/Molecules/ErrorMesage",
  component: ErrorMesage,
};

const Template = (args) => (
  <Wrapper>
    <ErrorMesage {...args} />
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {};
