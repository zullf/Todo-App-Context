import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import DraggableFlatList, {ScaleDecorator,} from "react-native-draggable-flatlist";

import { useTodos } from "../hooks/useTodos";
import { useFilter } from "../hooks/useFilter";
import { useTheme } from "../context/ThemeContext";

import AddTodoForm from "../components/AddTodoForm";
import TodoItem from "../components/TodoItem";
import FilterBar from "../components/FilterBar";

const HomeScreen = () => {
  // Theme Context
  const { colors, toggleTheme, theme } = useTheme();

  // Filter Hook
  const { activeFilter, setFilter } = useFilter();

  // Todo Hook
  const {
    todos,
    stats,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearDone,
    reorderTodos,
  } = useTodos(activeFilter);

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <StatusBar barStyle="light-content" />

      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.text }]}>My Todos</Text>

          <Text style={[styles.subtitle, { color: colors.text }]}>
            {stats.completed} dari {stats.total} selesai
          </Text>

          {/* Toggle Dark Mode */}
          <TouchableOpacity style={styles.themeBtn} onPress={toggleTheme}>
            <Text style={{ color: colors.text }}>
              {theme === "light" ? "Tema Gelap" : "Tema Terang"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Form tambah todo */}
        <AddTodoForm onAdd={addTodo} />

        {/* Filter */}
        <FilterBar
          activeFilter={activeFilter}
          onFilterChange={setFilter}
          stats={stats}
        />

        {/* List Todo */}
        <DraggableFlatList
          data={todos}
          onDragEnd={({ data }) => reorderTodos(data)} // Simpan urutan baru saat jari dilepas
          keyExtractor={(item) => item.id}
          renderItem={({ item, drag, isActive }) => (
            <ScaleDecorator>
              <TouchableOpacity
                onLongPress={drag} // Aktifkan drag SAAT DITEKAN LAMA (Long Press)
                disabled={isActive}
                style={[
                  isActive && {
                    elevation: 5,
                    shadowColor: "#000",
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                  }, // Efek melayang saat di-drag
                ]}
              >
                <TodoItem
                  todo={item}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              </TouchableOpacity>
            </ScaleDecorator>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              Tidak ada todo{""}
              {activeFilter !== "all" ? ` dengan filter '${activeFilter}'` : ""}
            </Text>
          }
          showsVerticalScrollIndicator={false}
        />

        {/* Clear Done */}
        {stats.completed > 0 && (
          <Text style={styles.clearBtn} onPress={clearDone}>
            Hapus {stats.completed} item selesai
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },

  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    marginBottom: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 14,
    marginBottom: 10,
  },

  themeBtn: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 6,
    width: 120,
    alignItems: "center",
  },

  emptyText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
  },

  clearBtn: {
    textAlign: "center",
    color: "#F97316",
    padding: 12,
  },
});

export default HomeScreen;
