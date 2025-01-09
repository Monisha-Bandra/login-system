import sgMail from "@sendgrid/mail";
import {
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_SUCCESS,
  VERIFY_EMAIL,
} from "./Templates.js";


// Set the SendGrid API Key - export this later (should not be hard-coded)
//sgMail.setApiKey('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')

const sender = {
	email: "harsha@happyharsha.com",  // borrowed domain for email SMTP
	name: "Monisha Bandra",  // Sender name
  };

export const sendVerificationEmail = async (email, verificationToken) => {
  const msg = {
    to: email,
    from: sender,
    subject: "Verify your email",
    html: VERIFY_EMAIL.replace("{verificationCode}", verificationToken),
    categories: ["Email Verification"],
  };

  try {
    const response = await sgMail.send(msg);
    console.log("Email sent successfully", response);
  } catch (error) {
    console.error(`Error sending verification email`, error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const msg = {
    to: email,
    from: sender,
    templateId: "258dc8af-be15-4bda-bf50-8e1bd6ad746b",  // Replace with your SendGrid template ID
    dynamicTemplateData: {
      company_info_name: "Monisha",
      name: name,
    },
  };

  try {
    const response = await sgMail.send(msg);
    console.log("Welcome email sent successfully", response);
  } catch (error) {
    console.error(`Error sending welcome email`, error);
    throw new Error(`Error sending welcome email: ${error}`);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const msg = {
    to: email,
    from: sender,
    subject: "Reset your password",
    html: PASSWORD_RESET_REQUEST.replace("{resetURL}", resetURL),
    categories: ["Password Reset"],
  };

  try {
    const response = await sgMail.send(msg);
    console.log("Password reset email sent successfully", response);
  } catch (error) {
    console.error(`Error sending password reset email`, error);
    throw new Error(`Error sending password reset email: ${error}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const msg = {
    to: email,
    from: sender,
    subject: "Password Reset Successful",
    html: PASSWORD_RESET_SUCCESS,
    categories: ["Password Reset"],
  };

  try {
    const response = await sgMail.send(msg);
    console.log("Password reset success email sent successfully", response);
  } catch (error) {
    console.error(`Error sending password reset success email`, error);
    throw new Error(`Error sending password reset success email: ${error}`);
  }
};
