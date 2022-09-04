import { makeObservable, action, observable } from "mobx";
import { Alert } from "react-native";

// Types
import { taskProps } from "../types/task";

class TasksStore {
  tasks: taskProps[] = [];
  constructor() {
    makeObservable(this, {
      tasks: observable,
      addTask: action,
      removeTask: action,
      toggleTask: action,
    });
  }
  addTask = (task: taskProps) => {
    if (this.tasks.find((t) => t.id === task.id)) return;
    if (task.text.length === 0) {
      Alert.alert("Erro", "A tarefa não pode estar vazia!");
      return;
    }
    if (task.text.length > 70) {
      Alert.alert("Erro", "A tarefa não pode conter mais de 70 caracteres!");
      return;
    }
    this.tasks.push(task);
  };

  removeTask = (id: number) => {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  };

  toggleTask = (id: number) => {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        task.isChecked = !task.isChecked;
      }
      return task;
    });
  };
}

export default new TasksStore();
