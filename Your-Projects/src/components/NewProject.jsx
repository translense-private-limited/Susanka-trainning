import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onCancel, onSave }) => {
  const modal = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSave = () => {
    const newProject = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
    };

    if (
      newProject.title.trim() === "" ||
      newProject.description.trim() === "" ||
      newProject.dueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    if (onSave) onSave(newProject);
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h1>Invalid Input</h1>
        <p>Oops ...Looks that you forgot to enter a value. </p>
        <p>Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="w-full max-w-3xl mx-auto mt-8 sm:mt-16">
        <menu className="flex items-center justify-end gap-4 mb-8">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div className="space-y-6">
          <Input ref={titleRef} label="Title" />
          <Input ref={descriptionRef} label="Description" textarea={true} />
          <Input ref={dueDateRef} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
