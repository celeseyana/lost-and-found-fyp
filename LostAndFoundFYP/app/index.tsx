import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useState } from "react";

export default function Index() {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(true);
    console.log("Navigating to login...");
    router.push('/login');
  };

  return (
    <View style={styles.container}>
      {/* App Logo/Title Section */}
      <View style={styles.logoContainer}>
        <View style={styles.iconCircle}>
          <Text style={styles.iconText}>🔍</Text>
        </View>
        <Text style={styles.title}>Lost & Found</Text>
        <Text style={styles.subtitle}>Reuniting items with their owners</Text>
      </View>

      {/* Tap to Continue Button */}
      <TouchableOpacity 
        style={[styles.tapButton, pressed && styles.tapButtonPressed]}
        onPress={handlePress}
        activeOpacity={0.8}
      >
        <Text style={styles.tapText}>Tap to Login</Text>
        <Text style={styles.tapSubtext}>Get started →</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footer}>Your campus lost & found solution</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#4c6ef5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    shadowColor: "#4c6ef5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  iconText: {
    fontSize: 48,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#212529",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6c757d",
    textAlign: "center",
  },
  tapButton: {
    backgroundColor: "#4c6ef5",
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    transform: [{ scale: 1 }],
  },
  tapButtonPressed: {
    backgroundColor: "#3b5bdb",
    transform: [{ scale: 0.95 }],
  },
  tapText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#ffffff",
    textAlign: "center",
  },
  tapSubtext: {
    fontSize: 14,
    color: "#e7f5ff",
    textAlign: "center",
    marginTop: 4,
  },
  footer: {
    fontSize: 12,
    color: "#adb5bd",
    textAlign: "center",
  },
});