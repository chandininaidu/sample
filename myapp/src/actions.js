import { VIEWPROJECT, VIEWSUBPROJECTS } from "./actionTypes";

export function viewProjects(payload) {
    return {
      type: VIEWPROJECT,
      data:payload
    };
  }
export function viewSubprojects() {
  return{
    type: VIEWSUBPROJECTS,
  };
}

