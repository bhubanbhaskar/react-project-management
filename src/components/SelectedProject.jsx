import Task from "./Tasks";

export default function SelectedProject({ project, onDelete }) {
  if (!project) {
    return (
      <div className="flex-1 flex items-center justify-center text-stone-500">
        <p>No project selected.</p>
      </div>
    );
  }

  const formattedDate = project.dueDate
    ? new Date(project.dueDate).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <div className="flex-1 p-8">
      <div className="bg-white rounded-xl shadow-md p-8">
        <header className="flex justify-between items-start border-b border-stone-200 pb-4 mb-4">
          <div>
            <h2 className="text-3xl font-bold text-stone-800 mb-2">
              {project.title}
            </h2>

            {formattedDate && (
              <p className="text-sm text-stone-400">
                📅 Due Date: {formattedDate}
              </p>
            )}
          </div>

          <button
            onClick={() => onDelete(project.id)}
            className="text-red-600 hover:text-red-800 font-medium"
          >
            Delete
          </button>
        </header>

        <section>
          <h3 className="text-lg font-semibold text-stone-700 mb-2">
            Description
          </h3>
          <p className="text-stone-600 leading-relaxed whitespace-pre-wrap">
            {project.description || "No description provided."}
          </p>
          <Task></Task>
        </section>
      </div>
    </div>
  );
}
