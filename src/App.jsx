import NewProject from "./components/NewProject";
import ProjectsSideBar from "./components/ProjectsSidebar";
function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar />
      <NewProject />
    </main>
  );
}

export default App;
