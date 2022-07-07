import Modal from "./Modal";
import StudentsDetails from "components/molecules/StudentDetails/StudentDetails";

export default {
  title: "Components/Organisms/Modal",
  component: Modal,
};

const Template = (args) => (
  <Modal {...args}>
    <StudentsDetails
      student={{
        id: "11",
        name: "Paweł Adamczyk",
        attendance: "66%",
        average: "4.5",
        group: "B",
        course: "Business Philosophy",
        grades: [
          {
            subject: "Business Philosophy",
            average: "3.3",
          },
          {
            subject: "Marketing",
            average: "4.7",
          },
          {
            subject: "Modern Economy",
            average: "2.5",
          },
        ],
      }}
    />
  </Modal>
);

export const Default = Template.bind({});
