import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleAddProject(newProject) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: newProject.id,
      projects: [...prevState.projects, newProject],
    }));
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleSelectProject(projectId) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  }

  function handleDeleteProject(id){
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== id
      ),
    }
      ));
    }


  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content;

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onSave={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected onStartAddProject={handleStartAddProject} />
    );
  } else {
    content = <SelectedProject project={selectedProject} 
    onDelete={handleDeleteProject}
    />;
  }

  return (
    <main className="h-screen my-8 flex gap-8 px-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
