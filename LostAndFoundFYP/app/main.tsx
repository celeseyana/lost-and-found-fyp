import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function Main() {
  const [activeTab, setActiveTab] = useState("Home");

  // Placeholder student profile data (replace with real data when available)
  const student = {
    name: "Alex Tan",
    tpNumber: "TP042178",
    email: "alex.tan@university.edu",
    outgoingLostItems: 2,
    foundItems: 7,
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <Text style={styles.contentText}>Home Content</Text>;
      case "Item Status":
        return <Text style={styles.contentText}>Item Status Content</Text>;
      case "Messages":
        return <Text style={styles.contentText}>Messages Content</Text>;
      case "Profile":
        return (
          <View style={styles.profileRoot}>
            {/* Header Card */}
            <View style={styles.profileHeaderCard}>
              <View style={styles.avatarCircle}>
                <Text style={styles.avatarEmoji}>🧑‍🎓</Text>
              </View>
              <Text style={styles.profileName}>{student.name}</Text>
              <Text style={styles.profileSubText}>{student.tpNumber}</Text>
              <Text style={styles.profileEmail}>{student.email}</Text>
            </View>

            {/* Stats */}
            <View style={styles.statsRow}>
              <View style={[styles.statCard, styles.statCardBlue]}>
                <View style={styles.statIconPill}>
                  <Text style={styles.statIconText}>📤</Text>
                </View>
                <Text style={styles.statNumber}>{student.outgoingLostItems}</Text>
                <Text style={styles.statLabel}>Outgoing Lost Items</Text>
              </View>
              <View style={[styles.statCard, styles.statCardGreen]}>
                <View style={styles.statIconPill}>
                  <Text style={styles.statIconText}>✅</Text>
                </View>
                <Text style={styles.statNumber}>{student.foundItems}</Text>
                <Text style={styles.statLabel}>Found Items</Text>
              </View>
            </View>

            {/* Action buttons placeholder (future) */}
            <View style={styles.quickActions}>
              <View style={styles.actionChip}>
                <Text style={styles.actionChipText}>Edit Profile</Text>
              </View>
              <View style={styles.actionChipSecondary}>
                <Text style={styles.actionChipSecondaryText}>View History</Text>
              </View>
            </View>
          </View>
        );
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
  profileRoot: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 16,
    gap: 16,
  },
  profileHeaderCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#edf2ff",
  },
  avatarCircle: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: "#e7f5ff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "#d0ebff",
  },
  avatarEmoji: {
    fontSize: 42,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#212529",
  },
  profileSubText: {
    marginTop: 4,
    fontSize: 14,
    color: "#748ffc",
    fontWeight: "600",
  },
  profileEmail: {
    marginTop: 4,
    fontSize: 14,
    color: "#6c757d",
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
  },
  statCard: {
    flex: 1,
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e9ecef",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  statCardBlue: {
    backgroundColor: "#edf2ff",
    borderColor: "#dbe4ff",
  },
  statCardGreen: {
    backgroundColor: "#e6fcf5",
    borderColor: "#c3fae8",
  },
  statIconPill: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  statIconText: {
    fontSize: 16,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: "800",
    color: "#212529",
  },
  statLabel: {
    marginTop: 2,
    fontSize: 12,
    color: "#495057",
    fontWeight: "600",
  },
  quickActions: {
    flexDirection: "row",
    gap: 10,
    marginTop: 4,
  },
  actionChip: {
    backgroundColor: "#4c6ef5",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionChipText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700",
  },
  actionChipSecondary: {
    backgroundColor: "#f1f3f5",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#e9ecef",
  },
  actionChipSecondaryText: {
    color: "#343a40",
    fontSize: 14,
    fontWeight: "700",
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