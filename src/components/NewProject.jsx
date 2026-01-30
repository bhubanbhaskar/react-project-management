import { useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";
import { validateProject } from "../utils/validateProject";

export default function NewProject({ onSave, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const modalRef = useRef();
  const [errors, setErrors] = useState([]);

  function handleSave() {
    const projectData = {
      title: titleRef.current.value.trim(),
      description: descriptionRef.current.value.trim(),
      dueDate: dueDateRef.current.value,
    };

    const validationResult = validateProject(projectData);

    if (!validationResult.isValid) {
      setErrors(validationResult.errors);
      modalRef.current.open();
      return;
    }

    const newProject = {
      id: crypto.randomUUID(),
      ...projectData,
    };

    onSave(newProject);
  }

  return (
    <>
      {/* 🔔 Error Modal */}
      <Modal ref={modalRef}>
        <h2 className="text-xl font-bold text-stone-800 mb-4">Invalid Input</h2>

        <ul className="list-disc pl-5">
          {errors.map((err, index) => (
            <li key={index} className="text-stone-600">
              {err}
            </li>
          ))}
        </ul>

        <div className="mt-6 text-right">
          <button
            className="px-4 py-2 bg-stone-800 text-stone-50 rounded-md hover:bg-stone-950"
            onClick={() => modalRef.current.close()}
          >
            Okay
          </button>
        </div>
      </Modal>

      {/* 🧩 Form */}
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              type="button"
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              type="button"
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input ref={titleRef} label="Title" />
          <Input ref={descriptionRef} label="Description" textarea />
          <Input ref={dueDateRef} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}
