import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Email = () => {
    const form = useRef(null);

    const [sending, setSending] = useState(false);
    const [message, setMessage] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault();

        console.log("FORM SUBMITTED");

        setSending(true);
        setMessage("");

        try {
            const response = await emailjs.sendForm(
                "service_aezaotk",
                "template_kqplblh",
                form.current,
                {
                    publicKey: "iLLUO7fXq__m8TSsdn",
                }
            );

            console.log("EMAIL SENT:", response.status, response.text);

            setMessage("Message sent successfully! 🎉");

            form.current.reset();
        } catch (error) {
            console.error("EMAILJS ERROR:", error);
            console.error("ERROR TEXT:", error?.text);

            setMessage(
                error?.text || "Failed to send message. Please try again."
            );
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="contact-container" id="contact">

            <h2>Send me a message</h2>

            <form
                ref={form}
                onSubmit={sendEmail}
                className="emailForm"
            >

                {/* NAME */}
                <label htmlFor="from_name">
                    Your Name
                </label>

                <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    placeholder="Priyanka Rawat"
                    required
                />


                {/* EMAIL */}
                <label htmlFor="from_email">
                    Your Email
                </label>

                <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    placeholder="rawatpia@example.com"
                    required
                />


                {/* MESSAGE */}
                <label htmlFor="message">
                    Message
                </label>

                <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Hello Priyanka..."
                    required
                />


                {/* BUTTON */}
                <button
                    type="submit"
                    disabled={sending}
                >
                    {sending ? "Sending..." : "Send Message"}
                </button>


                {/* STATUS */}
                {message && (
                    <p className="email-status">
                        {message}
                    </p>
                )}

            </form>

        </section>
    );
};

export default Email;