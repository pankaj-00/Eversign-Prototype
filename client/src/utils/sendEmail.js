import emailjs from "@emailjs/browser";

export const sendEmail = async (
  serviceId,
  templateId,
  templateParams,
  publicKey
) => {
  emailjs.send(serviceId, templateId, templateParams, publicKey).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
    },
    (err) => {
      console.log("FAILED...", err);
    }
  );
};
