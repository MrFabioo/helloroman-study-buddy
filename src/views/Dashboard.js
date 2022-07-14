import React, { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import StudentsList from "components/organisms/StudentsList/StudentsList";
import { useStudents } from "hooks/useStudents";
import { GroupWrapper, TitleWrapper, Wrapper } from "./Dashboard.styles";
import { Title } from "components/atoms/Title/Title";
import useModal from "components/organisms/Modal/useModal";
import StudentsDetails from "components/molecules/StudentDetails/StudentDetails";
import Modal from "components/organisms/Modal/Modal";
import { useGetGroupsQuery } from "store";

const Dashboard = () => {
  const [currentStudent, setCurrentStudent] = useState([]);
  const { getStudentsById } = useStudents();
  const { id } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { data, isLoading } = useGetGroupsQuery();

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentsById(id);
    setCurrentStudent(student);
    handleOpenModal();
  };

  if (isLoading) {
    return (
      <Wrapper>
        <TitleWrapper>Loading...</TitleWrapper>
      </Wrapper>
    );
  }

  if (!id && data.groups.length > 0)
    return <Navigate to={`/group/${data.groups[0]}.id`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {data.groups.map(({ id }) => (
            <Link key={id} to={`/group/${id}`}>
              {id}{" "}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
        <Modal isOpen={isOpen} handleClose={handleCloseModal}>
          <StudentsDetails student={currentStudent} />
        </Modal>
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
