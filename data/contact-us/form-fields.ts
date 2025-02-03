export const formFields = {
  personal: [
    {
      id: "name",
      label: "Your Name",
      type: "text",
      placeholder: "Enter your name",
      required: true
    },
    {
      id: "email",
      label: "Your Email",
      type: "email",
      placeholder: "Enter your email address",
      required: true
    }
  ],
  contact: {
    id: "phone",
    label: "Your Phone",
    type: "tel",
    countryCode: "+91",
    flag: "🇮🇳",
    required: false
  },
  service: {
    id: "service",
    label: "Services",
    placeholder: "Select your service",
    required: true
  },
  message: {
    id: "message",
    label: "How can we help?",
    type: "textarea",
    placeholder: "Tell us about your project",
    rows: 12,
    required: true
  }
};