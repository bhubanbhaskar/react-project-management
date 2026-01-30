export default function ProjectDetails({ project }) {
  return (
    <section>
      <h1 className="text-3xl font-bold text-stone-800 mb-4">
        {project.title}
      </h1>
      <p className="text-stone-600 mb-2">
        Due Date: {new Date(project.dueDate).toLocaleDateString()}
      </p>
      <p className="text-stone-700">{project.description}</p>
    </section>
  );
}
