import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";
import { FolderPlus } from "lucide-react";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <>
      <div className="mt-2 text-center w-2/3 mx-auto">
        <img
          src={noProjectImage}
          alt="No Project Selected"
          className="w-16 h-16 object-contain mx-auto"
        />

        <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
          No Project Selected
        </h2>

        <p className="text-stone-400 mb-4">
          Please select a project or get started with a new one.
        </p>

        <p className="mt-8">
          <Button
            onClick={onStartAddProject}
            className="flex items-center gap-2 mx-auto"
          >
            <FolderPlus size={18} />
            Create a new Project
          </Button>
        </p>
      </div>
    </>
  );
}
