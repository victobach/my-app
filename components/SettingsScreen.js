// This screen is outdated

/*import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const SECTIONS = [
  {
    header: "Preferences",
    items: [
      { id: "language", icon: "globe", label: "Language", type: "select" },
      { id: "darkMode", icon: "moon", label: "Dark Mode", type: "toggle" },
    ],
  },
  {
    header: "Help",
    items: [
      { id: "bug", icon: "flag", label: "Report Bug", type: "link" },
      { id: "contact", icon: "mail", label: "Contact Us", type: "link" },
    ],
  },
];

const languageOptions = {
  en: "English",
  da: "Danish",
};

export default function SettingsScreen() {
  const [form, setForm] = useState({
    language: "English",
    darkMode: true,
  });

  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: "",
  });

  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const toggleLanguage = () => {
    setShowLanguageOptions(!showLanguageOptions);
  };


  useEffect(() => {
    // Fetch user data from randomuser.me API
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        const userData = data.results[0];
        setUser({
          name: `${userData.name.first} ${userData.name.last}`,
          email: userData.email,
          avatar: userData.picture.large,
        });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  // Toggle function to switch between dark and light modes
  const toggleDarkMode = () => {
    setForm({ ...form, darkMode: !form.darkMode });
  };

  const navigation = useNavigation();

  const lightStyles = StyleSheet.create({
    container: {
      paddingVertical: 24,
      backgroundColor: "#f6f6f6",
    },
  });

  const darkStyles = StyleSheet.create({
    container: {
      paddingVertical: 24,
      backgroundColor: "#121212",
    },
    sectionHeader: {
      backgroundColor: "#121212",
    },
    rowWrapper: {
      backgroundColor: "#121212",
    },
    blackTopBar: {
      backgroundColor: "#000",
    },
    whiteText: {
      color: "#fff",
    },
  });

  return (
    <SafeAreaView
      style={form.darkMode ? darkStyles.container : lightStyles.container}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View
          style={[
            form.darkMode
              ? [styles.header, darkStyles.blackTopBar]
              : [styles.header, styles.lightTopBar],
          ]}
        >
          <Text style={[styles.title, darkStyles.whiteText]}>Your settings</Text>
        </View>

        <View
          style={
            form.darkMode
              ? [
                  styles.profile,
                  { backgroundColor: "#121212", borderColor: "#e3e3e3" },
                ]
              : styles.profile
          }
        >
          <Image
            alt=""
            source={{
              uri: user.avatar,
            }}
            style={styles.profileAvatar}
          />

          <Text
            style={[
              styles.profileName,
              { color: form.darkMode ? "#fff" : "#090909" },
            ]}
          >
            {user.name}
          </Text>

          <Text
            style={[
              styles.profileEmail,
              { color: form.darkMode ? "#ababab" : "#848484" },
            ]}
          >
            {user.email}
          </Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("EditUser");
            }}
          >
            <View
              style={[
                styles.profileAction,
                { backgroundColor: form.darkMode ? "#fff" : "#007bff" },
              ]}
            >
              <Text
                style={[
                  styles.profileActionText,
                  { color: form.darkMode ? "#007bff" : "#fff" },
                ]}
              >
                Edit Profile
              </Text>

              <FeatherIcon
                color={form.darkMode ? "#007bff" : "#fff"}
                name="edit"
                size={16}
              />
            </View>
          </TouchableOpacity>
        </View>

        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <View
              style={
                form.darkMode
                  ? [styles.sectionHeader, darkStyles.sectionHeader]
                  : styles.sectionHeader
              }
            >
              <Text
                style={[
                  styles.sectionHeaderText,
                  { color: form.darkMode ? "#fff" : "#a7a7a7" },
                ]}
              >
                {header}
              </Text>
            </View>
            <View style={styles.sectionBody}>
              {items.map(({ id, label, icon, type, value }, index) => {
                return (
                  <View
                    key={id}
                    style={[
                      styles.rowWrapper,
                      form.darkMode && darkStyles.rowWrapper,
                      index === 0 && { borderTopWidth: 0 },
                    ]}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        if (type === "toggle") {
                          toggleDarkMode();
                        } else if (type === "link" && id === "bug") {
                          navigation.navigate("Report Bug");
                        } else if (type === "link" && id === "contact") {
                          navigation.navigate("ContactUs");
                        } else {
                          console.log("Toggled");
                        }
                      }}
                    >
                      <View style={styles.row}>
                        <FeatherIcon
                          color={form.darkMode ? "#fff" : "#616161"}
                          name={icon}
                          style={styles.rowIcon}
                          size={22}
                        />

                        <Text
                          style={[
                            styles.rowLabel,
                            { color: form.darkMode ? "#fff" : "#000" },
                          ]}
                        >
                          {label}
                        </Text>

                        <View style={styles.rowSpacer} />

                        {type === "select" && (
                          <TouchableOpacity onPress={toggleLanguage}>
                            <Text
                              style={[
                                styles.rowValue,
                                { color: form.darkMode ? "#fff" : "#616161" },
                              ]}
                            >
                              {languageOptions[form.language]}
                            </Text>
                          </TouchableOpacity>
                        )}
                        {showLanguageOptions && type === "select" && (
                          <View style={styles.languageOptions}>
                            {Object.keys(languageOptions).map((key) => (
                              <TouchableOpacity
                                key={key}
                                onPress={() => {
                                  setForm({ ...form, language: key });
                                  setShowLanguageOptions(false);
                                }}
                              >
                                <Text
                                  style={[
                                    styles.rowValue,
                                    { color: form.darkMode ? "#fff" : "#616161" },
                                  ]}
                                >
                                  {languageOptions[key]}
                                </Text>
                              </TouchableOpacity>
                            ))}
                          </View>
                        )}
                        {type === "toggle" && (
                          <Switch
                            onChange={toggleDarkMode}
                            value={form.darkMode}
                          />
                        )}
                        {(type === "select" || type === "link") && (
                          <FeatherIcon
                            color={form.darkMode ? "#fff" : "#ababab"}
                            name="chevron-right"
                            size={22}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  section: {
    paddingTop: 12,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  sectionBody: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#e3e3e3",
  },
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
    backgroundColor: "#f6f6f6",
  },
  lightTopBar: {
    backgroundColor: "#f6f6f6",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
  },
  profile: {
    padding: 16,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#e3e3e3",
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: "600",
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "400",
  },
  profileAction: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: 24,
    height: 50,
  },
  rowWrapper: {
    paddingLeft: 24,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#e3e3e3",
  },
  rowIcon: {
    marginRight: 12,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: "500",
  },
  rowValue: {
    fontSize: 17,
    marginRight: 4,
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  languageOptions: {
    backgroundColor: "#fff",
    borderColor: "#e3e3e3",
    borderWidth: 1,
    position: "absolute",
    top: 50,
    right: 10,
    width: 150,
    zIndex: 1,
  },
});
*/
