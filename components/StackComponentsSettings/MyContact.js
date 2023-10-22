

import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import qs from 'qs';

// Define the sendEmail function
const sendEmail = async (to, subject, body, options = {}) => {
    const { cc, bcc } = options;

    let url = `mailto:${to}`;

    // Create email link query
    const query = qs.stringify({
        subject: subject,
        body: body,
        cc: cc,
        bcc: bcc
    });

    if (query.length) {
        url += `?${query}`;
    }

    // Check if we can use this link
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
        throw Error('Provided URL can not be handled');
    }

    return Linking.openURL(url);
};

export default function ContactUsScreen({ navigation }) {
    const [message, setMessage] = useState("");
    const [showCharacterCount, setShowCharacterCount] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleMessageChange = (text) => {
        if (text.length <= 500) {
            setMessage(text);
        }
    };

    const toggleCharacterCount = () => {
        setShowCharacterCount(!showCharacterCount);
    };

    const handleSubmission = async () => {
        if (message.length > 0) {
            try {
                // Use the sendEmail function to send an email
                await sendEmail(
                    'Thenightowl.noreply@gmail.com',
                    'Contact Us',
                    message
                );

                setSubmissionMessage('Thank you for your message!');
                setIsError(false);
            } catch (error) {
                console.error(error);
                setSubmissionMessage('There was an issue sending your bug report.');
                setIsError(true);
            }
        } else {
            setSubmissionMessage('Please enter a bug report message.');
            setIsError(true);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.goBackButton}
                >
                    <Ionicons name="ios-arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Report Bug</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.bugText}>
                    If you Want to contact us, please write a message!
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Your Message"
                    onFocus={toggleCharacterCount}
                    onBlur={toggleCharacterCount}
                    onChangeText={handleMessageChange}
                    value={message}
                    multiline
                    placeholderTextColor="gray"
                    textAlignVertical="top"
                />
                {showCharacterCount && (
                    <Text style={styles.characterCount}>
                        {message.length}/500 characters
                    </Text>
                )}
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={handleSubmission}
                >
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
                {submissionMessage ? (
                    <Text style={isError ? styles.errorMessage : styles.successMessage}>
                        {submissionMessage}
                    </Text>
                ) : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f6f6",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 16,
    },
    goBackButton: {
        marginRight: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    content: {
        flex: 1,
        padding: 16,
    },
    bugText: {
        fontSize: 16,
        marginVertical: 16,
    },
    input: {
        height: 40,
        borderColor: "#d4d4d4",
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        fontSize: 16,
        textAlign: "center", // Centered placeholder text
    },
    characterCount: {
        color: "gray",
        alignSelf: "flex-end",
    },
    submitButton: {
        backgroundColor: "#007bff",
        borderRadius: 5,
        padding: 15,
        alignItems: "center",
    },
    submitButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    errorMessage: {
        color: "red",
    },
    successMessage: {
        color: "green",
    },
});

