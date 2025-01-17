export interface FormTechStatesEntity {
  tech: {
    id: string | null;
    name: string;
    link: string;
    linkName: string;
    fileUrl: string | null;
  },

  techSubmitLoading: boolean,

  techDeleteLoading: boolean,

  loadProjectFilesLoading: boolean,

  createProjectFileLoading: boolean

  deleteProjectFileLoading: boolean

  createProjectTechLoading: boolean
  
  deleteProjectTechLoading: boolean
};