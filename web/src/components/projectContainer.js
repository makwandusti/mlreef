import React from "react";
import ProjectInfo from "./projectInfo";
import ProjectNav from "./projectNav";
import { Link } from "react-router-dom";

class ProjectContainer extends React.Component {

  componentDidMount() {
    document.getElementById(this.props.activeFeature).classList.add("active");
  }

  render() {
    const project = this.props.project;
    const folders = this.props.folders;
    return (
      <div className="project-container">
        <div className="project-details main-content">
          <ProjectNav projectId={project.id} folders={folders} />

          <ProjectInfo info={project} />
          {
            <p className="project-desc">
              {project.description ? project.description : "No description"}
            </p>
          }
          <div className="feature-list">
            <Link to={`/my-projects/${project.id}`} className="feature" id="data">
              Data
            </Link>
            <Link to={`/my-projects/${project.id}/experiments-overview`} className="feature" id="experiments">
              <p>Experiments</p>
            </Link>
            <Link className="feature ">
              <p>Inference</p>
            </Link>
            <Link className="feature ">
              <p>Insights</p>
            </Link>
            <Link className="feature ">
              <p>Pull Requests</p>
            </Link>
            <Link className="feature ">
              <p>Settings</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectContainer;
