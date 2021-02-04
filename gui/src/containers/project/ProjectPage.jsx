import React, { useEffect } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Header, ProjectsList } from "../../components";
import { Api } from "../../services";
import { MdNoteAdd } from "react-icons/md";
import { Formik } from "formik";

const api = new Api();

const ProjectPage = () => {
  const [projects, setProjects] = React.useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);

  useEffect(() => {
    async function getData() {
      const projectsList = await api.getProjects();
      setProjects(projectsList);
    }
    getData();
  }, []);

  const handleEdit = (proj) => {
    setSelectedProject(proj);
    setIsEditModalOpen(true);
  };

  const editProject = (data) => {
    const response = api.updateProject(selectedProject.id, data);
    if (response === 201) {
      setSuccess("Projekt został edytowany pomyślnie");
    } else {
      setError("Coś poszło nie tak, spróbuj ponownie");
    }
    setIsEditModalOpen(false);
    setSuccess(null);
    setError(null);
  };

  const handleDelete = (proj) => {
    setSelectedProject(proj);
    setIsDeleteModalOpen(true);
  };

  const handleCreate = () => {
    setIsCreateModalOpen(true);
  };

  const deleteProject = () => {
    const response = api.deleteProject(selectedProject.id);
    if (response === 201) {
      setSuccess("Projekt został usuniety pomyślnie");
    } else {
      setError("Coś poszło nie tak, spróbuj ponownie");
    }
    setIsDeleteModalOpen(false);
    setSuccess(null);
    setError(null);
  };

  const createProject = (data) => {
    const response = api.createProject(data);
    if (response === 201) {
      setSuccess("Projekt został utworzony pomyślnie");
    } else {
      setError("Coś poszło nie tak, spróbuj ponownie");
    }
    setIsCreateModalOpen(false);
    setSuccess(null);
    setError(null);
  };

  return (
    <>
      <Header label={"PROJEKTY"} />
      <Container
        style={{
          backgroundColor: "#f2f7f7",
          minHeight: "60vh",
          position: "relative",
        }}
      >
        {error && <Alert color="error">{error}</Alert>}
        {success && <Alert color="success">{success}</Alert>}
        <ProjectsList
          projects={projects}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <Row style={{ position: "absolute", bottom: 20, right: 20 }}>
          <Col>
            <MdNoteAdd
              onClick={() => handleCreate()}
              color="#0ec7c7"
              size={70}
              style={{ cursor: "pointer" }}
            />
          </Col>
        </Row>
        {isDeleteModalOpen && (
          <Modal
            isOpen={isDeleteModalOpen}
            toggle={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
            centered={true}
          >
            <ModalHeader
              toggle={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
            >
              Jesteś pewnien że chcesz usunąć projekt: {selectedProject.name}{" "}
            </ModalHeader>
            <ModalFooter>
              <Button color="primary" onClick={() => deleteProject()}>
                Tak, usuń
              </Button>{" "}
              <Button
                color="secondary"
                onClick={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
              >
                Cofnij
              </Button>
            </ModalFooter>
          </Modal>
        )}
        {isEditModalOpen && (
          <Formik
            initialValues={{
              id: selectedProject.id,
              name: selectedProject.name,
              description: selectedProject.description,
              localization: {
                id: selectedProject.localization.id,
                city: selectedProject.localization.city,
                district: selectedProject.localization.district,
                coordinates: selectedProject.localization.coordinates,
              },
            }}
            onSubmit={(form) => editProject(form)}
          >
            {(form) => (
              <Modal
                isOpen={isEditModalOpen}
                toggle={() => setIsEditModalOpen(!isEditModalOpen)}
                centered={true}
              >
                <ModalHeader
                  toggle={() => setIsEditModalOpen(!isEditModalOpen)}
                >
                  Edytuj projekt: {selectedProject.name}{" "}
                </ModalHeader>
                <Form onSubmit={form.handleSubmit}>
                  <ModalBody>
                    <FormGroup>
                      <Label for="name">Nazwa Projektu</Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        value={form.values.name}
                        onChange={form.handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="name">Opis Projektu</Label>
                      <Input
                        type="text"
                        name="description"
                        id="description"
                        value={form.values.description}
                        onChange={form.handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="name">Lokalizacja Projektu</Label>
                      <Label for="name" classNmae="d-flex">
                        Miasto
                      </Label>
                      <Input
                        type="text"
                        name="localization.city"
                        id="city"
                        value={form.values.localization.city}
                        onChange={form.handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="name">Rejon</Label>
                      <Input
                        type="text"
                        name="district"
                        id="district"
                        value={form.values.localization.district}
                        onChange={form.handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="name">Współrzędne Geograficzne</Label>
                      <Input
                        type="text"
                        name="localization.coordinates"
                        id="coordinates"
                        value={form.values.localization.coordinates}
                        onChange={form.handleChange}
                      />
                    </FormGroup>
                  </ModalBody>
                  <ModalFooter>
                    <Button type="submit" color="primary">
                      Edytuj
                    </Button>{" "}
                    <Button
                      color="secondary"
                      onClick={() => setIsEditModalOpen(!isEditModalOpen)}
                    >
                      Cofnij
                    </Button>
                  </ModalFooter>
                </Form>
              </Modal>
            )}
          </Formik>
        )}
        {isCreateModalOpen && (
          <Formik
            initialValues={{
              id: projects.length + 1,
              name: "",
              description: "",
              district: "",
              localization: {
                city: "",
                coordinates: "",
              },
            }}
            onSubmit={(form) => createProject(form)}
          >
            {(form) => (
              <Modal
                isOpen={isCreateModalOpen}
                toggle={() => setIsCreateModalOpen(!isCreateModalOpen)}
                centered={true}
              >
                <ModalHeader
                  toggle={() => setIsCreateModalOpen(!isCreateModalOpen)}
                >
                  Stwórz nowy projekt:
                </ModalHeader>
                <Form onSubmit={form.handleSubmit}>
                  <ModalBody>
                    <FormGroup>
                      <Label for="name">Nazwa Projektu</Label>

                      <Input
                        type="text"
                        name="name"
                        id="name"
                        value={form.values.name}
                        onChange={form.handleChange}
                      />
                      <Label for="name">Opis Projektu</Label>
                      <Input
                        type="text"
                        name="description"
                        id="description"
                        value={form.values.description}
                        onChange={form.handleChange}
                      />
                      <Label for="name">Lokalizacja Projektu</Label>
                      <Input
                        type="text"
                        name="localization.city"
                        id="localization_city"
                        placeholder="Miasto"
                        value={form.values.localization.city}
                        onChange={form.handleChange}
                      />
                      <Input
                        type="text"
                        name="district"
                        id="localization_district"
                        placeholder="Rejon"
                        className="my-2"
                        value={form.values.localization.district}
                        onChange={form.handleChange}
                      />
                      <Input
                        type="text"
                        name="localization.coordinates"
                        id="localization_coordinates"
                        placeholder="Współrzędne geograficzne"
                        value={form.values.localization.coordinates}
                        onChange={form.handleChange}
                      />
                    </FormGroup>
                  </ModalBody>
                  <ModalFooter>
                    <Button type="submit" color="primary">
                      Stwórz
                    </Button>{" "}
                    <Button
                      color="secondary"
                      onClick={() => setIsCreateModalOpen(!isCreateModalOpen)}
                    >
                      Cofnij
                    </Button>
                  </ModalFooter>
                </Form>
              </Modal>
            )}
          </Formik>
        )}
      </Container>
    </>
  );
};

export default ProjectPage;
