import { 
  Text, 
  View, 
  TouchableOpacity, 
  StyleSheet 
} from "react-native";
import { useState } from "react";

export default function Main() {
  const [activeTab, setActiveTab] = useState("Home");

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <Text style={styles.contentText}>Home Content</Text>;
      case "Item Status":
        return <Text style={styles.contentText}>Item Status Content</Text>;
      case "Messages":
        return <Text style={styles.contentText}>Messages Content</Text>;
      case "Profile":
        return <Text style={styles.contentText}>Profile Content</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Main Content Area */}
      <View style={styles.content}>
        {renderContent()}
      </View>

      {/* Bottom Tab Navigation */}
      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={styles.tab}
          onPress={() => setActiveTab("Home")}
        >
          <Text style={styles.tabIcon}>🏠</Text>
          <Text style={[
            styles.tabText,
            activeTab === "Home" && styles.tabTextActive
          ]}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.tab}
          onPress={() => setActiveTab("Item Status")}
        >
          <Text style={styles.tabIcon}>📦</Text>
          <Text style={[
            styles.tabText,
            activeTab === "Item Status" && styles.tabTextActive
          ]}>
            Item Status
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.tab}
          onPress={() => setActiveTab("Messages")}
        >
          <Text style={styles.tabIcon}>💬</Text>
          <Text style={[
            styles.tabText,
            activeTab === "Messages" && styles.tabTextActive
          ]}>
            Messages
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.tab}
          onPress={() => setActiveTab("Profile")}
        >
          <Text style={styles.tabIcon}>👤</Text>
          <Text style={[
            styles.tabText,
            activeTab === "Profile" && styles.tabTextActive
          ]}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    fontSize: 18,
    color: "#495057",
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#dee2e6",
    paddingVertical: 8,
    paddingBottom: 20,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  tabText: {
    fontSize: 12,
    color: "#6c757d",
  },
  tabTextActive: {
    color: "#4c6ef5",
    fontWeight: "600",
  },
});