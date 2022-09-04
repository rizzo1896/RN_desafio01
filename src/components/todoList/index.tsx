import { observer } from "mobx-react";

// Components
import { FlatList, Text, View } from "react-native";
import { Task } from "../task";

// Icons
import { MaterialIcons } from "@expo/vector-icons";

// Stores
import TasksStore from "../../store/tasks";

// Styles
import { styles } from "./styles";

export const ToDoList = observer(() => {
  return (
    <>
      <View style={styles.listHeader}>
        <View style={styles.ListDescription}>
          <Text style={styles.created}>Criadas</Text>
          <Text style={styles.createdNumber}>{TasksStore.tasks.length}</Text>
        </View>

        <View style={styles.ListDescription}>
          <Text style={styles.done}>Concluidas</Text>
          <Text style={styles.doneNumber}>
            {TasksStore.tasks.filter((item) => item.isChecked === true).length}
          </Text>
        </View>
      </View>

      <FlatList
        keyboardShouldPersistTaps="handled"
        data={TasksStore.tasks}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            text={item.text}
            isChecked={item.isChecked}
            id={item.id}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.listBody}>
            <View style={styles.listBodyInfo}>
              <MaterialIcons
                name="assignment"
                size={56}
                color="#36363658"
                style={styles.icon}
              ></MaterialIcons>

              <Text style={styles.title}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.subtitle}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          </View>
        )}
      />
    </>
  );
});
