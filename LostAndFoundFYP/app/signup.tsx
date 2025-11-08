import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";
import { router } from "expo-router";
import { useState } from "react";

export default function SignUp() {
  const [studentId, setStudentId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Error states
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Validate email format
  const validateEmail = (text: string) => {
    setEmail(text);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (text && !emailRegex.test(text)) {
      setEmailError("❌ Email must be in format: example@domain.com");
    } else {
      setEmailError("");
    }
  };

  // Validate password strength
  const validatePassword = (text: string) => {
    setPassword(text);
    const hasLetter = /[a-zA-Z]/.test(text);
    const hasNumber = /[0-9]/.test(text);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(text);
    
    if (text && (!hasLetter || !hasNumber || !hasSymbol)) {
      setPasswordError("❌ Password must contain letters, numbers, and symbols");
    } else if (text && text.length < 8) {
      setPasswordError("❌ Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
    
    // Re-check confirm password match when password changes
    if (confirmPassword && text !== confirmPassword) {
      setConfirmPasswordError("❌ Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  // Validate password match
  const validateConfirmPassword = (text: string) => {
    setConfirmPassword(text);
    if (text && text !== password) {
      setConfirmPasswordError("❌ Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSignUp = () => {
    // Final validation check
    if (!studentId || !email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }
    
    if (emailError || passwordError || confirmPasswordError) {
      alert("Please fix all errors before signing up");
      return;
    }
    
    // Add your sign-up logic here
    console.log("Sign up successful:", { studentId, email, password });
    alert("Account created successfully! ✅");
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.iconCircle}>
            <Text style={styles.iconText}>📝</Text>
          </View>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Sign up to get started</Text>
        </View>

        {/* Sign Up Form */}
        <View style={styles.form}>
          {/* Student ID Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Student ID</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your student ID"
              placeholderTextColor="#adb5bd"
              value={studentId}
              onChangeText={setStudentId}
              autoCapitalize="none"
            />
          </View>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={[styles.input, emailError && styles.inputError]}
              placeholder="example@domain.com"
              placeholderTextColor="#adb5bd"
              value={email}
              onChangeText={validateEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            {emailError ? (
              <Text style={styles.errorText}>{emailError}</Text>
            ) : null}
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <View style={[styles.passwordContainer, passwordError && styles.inputError]}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Enter your password"
                placeholderTextColor="#adb5bd"
                value={password}
                onChangeText={validatePassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity 
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeButton}
              >
                <Text style={styles.eyeIcon}>{showPassword ? "👁️" : "👁️‍🗨️"}</Text>
              </TouchableOpacity>
            </View>
            {passwordError ? (
              <Text style={styles.errorText}>{passwordError}</Text>
            ) : (
              <Text style={styles.hintText}>
                ✓ Must contain letters, numbers, and symbols (min. 8 characters)
              </Text>
            )}
          </View>

          {/* Confirm Password Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={[styles.passwordContainer, confirmPasswordError && styles.inputError]}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Re-enter your password"
                placeholderTextColor="#adb5bd"
                value={confirmPassword}
                onChangeText={validateConfirmPassword}
                secureTextEntry={!showConfirmPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity 
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                style={styles.eyeButton}
              >
                <Text style={styles.eyeIcon}>{showConfirmPassword ? "👁️" : "👁️‍🗨️"}</Text>
              </TouchableOpacity>
            </View>
            {confirmPasswordError ? (
              <Text style={styles.errorText}>{confirmPasswordError}</Text>
            ) : confirmPassword && !confirmPasswordError ? (
              <Text style={styles.successText}>✓ Passwords match</Text>
            ) : null}
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity 
            style={styles.signupButton}
            onPress={handleSignUp}
            activeOpacity={0.8}
          >
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>

          {/* Login Link */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/login')}>
                <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#4c6ef5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#4c6ef5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  iconText: {
    fontSize: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#212529",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6c757d",
  },
  form: {
    width: "100%",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#495057",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#dee2e6",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#212529",
  },
  inputError: {
    borderColor: "#fa5252",
    borderWidth: 2,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#dee2e6",
    borderRadius: 12,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#212529",
  },
  eyeButton: {
    padding: 12,
  },
  eyeIcon: {
    fontSize: 20,
  },
  errorText: {
    color: "#fa5252",
    fontSize: 12,
    marginTop: 6,
    fontWeight: "500",
  },
  successText: {
    color: "#51cf66",
    fontSize: 12,
    marginTop: 6,
    fontWeight: "500",
  },
  hintText: {
    color: "#6c757d",
    fontSize: 12,
    marginTop: 6,
  },
  signupButton: {
    backgroundColor: "#4c6ef5",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  signupButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  loginText: {
    color: "#6c757d",
    fontSize: 14,
  },
  loginLink: {
    color: "#4c6ef5",
    fontSize: 14,
    fontWeight: "600",
  },
});