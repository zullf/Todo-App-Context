import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const AddTodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = () => {
    if (text.trim()) {
      onAdd({
        text: text,
        dueDate: dueDate,
      });
      setText("");
      setDueDate(""); 
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Tambahkan todo baru..."
        placeholderTextColor="#94A3B8"
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
      />

      <TextInput
        style={styles.deadlineInput}
        value={dueDate}
        onChangeText={setDueDate}
        placeholder="Deadline"
        placeholderTextColor="#94A3B8"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 16,
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 10,
    fontSize: 16,
    color: "#1E293B",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  deadlineInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 6,
    fontSize: 14,
    width: "25%",
    marginTop: 5,
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: "#38BDF8",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: { color: "#FFFFFF", fontSize: 26, fontWeight: "bold" },
});
export default AddTodoForm;
