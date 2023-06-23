import { Section } from "./TasksPage.style";
import { useParams } from "react-router-dom";
import { TasksList } from "components/Tasks/TaskList/TaskList";

const TasksPage = () => {
    const { id } = useParams();

  return (
    <Section>
      <TasksList categoryId={ id } />
    </Section>
  );
};

export default TasksPage;
