import { observer } from "mobx-react";
import { useState } from "react";

// Components
import { View, TouchableHighlight } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

// Icons
import { Ionicons } from "@expo/vector-icons";

// Stores
import TasksStore from "../../store/tasks";

// Types
import { taskProps } from "../../types/task";

// Styles
import { styles } from "./styles";

export const Task = observer(({ text, isChecked, id }: taskProps) => {
  const [isPress, setIsPress] = useState(false);

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={25}
        fillColor="#5E60CE"
        unfillColor="transparent"
        text={text}
        innerIconStyle={{
          borderWidth: 2,
          borderColor: isChecked ? "#5E60CE" : "#4EA8DE",
        }}
        onPress={() => TasksStore.toggleTask(id)}
        isChecked={isChecked}
        style={{
          flex: 1,
          padding: 10,
        }}
        textStyle={{
          color: isChecked ? "#5E60CE" : "#FFF",
          textDecorationLine: isChecked ? "line-through" : "none",
        }}
        iconStyle={{
          marginLeft: 12,
          marginRight: -6,
        }}
      />

      <TouchableHighlight
        activeOpacity={1}
        underlayColor={"#262626"}
        style={isPress ? styles.removeIconActive : styles.removeIcon}
        onHideUnderlay={() => setIsPress(false)}
        onShowUnderlay={() => setIsPress(true)}
        onPress={() => TasksStore.removeTask(id)}
      >
        <Ionicons
          name="trash-outline"
          style={isPress ? styles.removeIconActive : styles.removeIcon}
        />
      </TouchableHighlight>
    </View>
  );
});
