import Note from "components/molecules/Note/Note";
import React from "react";
import { Wrapper, WidgetHeader, NotesWrapper } from "./NotesWidget.styles";
import { useSelector } from "react-redux";

const NotesWidget = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const notes = useSelector((state) => state.notes);

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);
  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHeader onClick={handleToggleWidget}>notes</WidgetHeader>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ title, content, id }) => (
            <Note id={id} key={id} title={title} content={content} />
          ))
        ) : (
          <p>Create your first note</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default NotesWidget;
