import Button from "./Button";

export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectedProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/4 px-8 py-16 bg-orange-500 text-stone-50 md:w=72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-50">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:bg-orange-700"

          if (project.id === selectedProjectId) {
            cssClasses += ' bg-orange-700 text-stone-50'
          } else {
            cssClasses += ' text-stone-50'
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectedProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
