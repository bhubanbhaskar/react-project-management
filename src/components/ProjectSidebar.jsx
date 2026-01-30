import { FolderPlus } from "lucide-react";
import Button from "./Button";

export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="uppercase font-bold mb-8 md:text-xl text-stone-200">
        Your Projects
      </h2>

      <Button onClick={onStartAddProject} className="flex items-center gap-2">
        <FolderPlus size={16} />
        Create a new Project
      </Button>

      <ul className="mt-8 space-y-2">
        {projects.length === 0 && (
          <p className="text-stone-500 text-sm">No projects Yet</p>
        )}
        {projects.map((project) => (
          <li key={project.id}>
            <button
              onClick={() => onSelectProject(project.id)}
              className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:bg-stone-800 hover:text-stone-200"
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
