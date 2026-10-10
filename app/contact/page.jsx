"use client"
import Image from "next/image";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from 'react';
import contactImage from "../../public/images/contact.png";

const CONTACT_EMAIL = "mageshmarch@gmail.com";

// EmailJS keys come from .env.local (see README section "Contact form").
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", value: "+91 9345236199", href: "tel:+919345236199" },
  { icon: <FaEnvelope />, title: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: <FaMapMarkerAlt />, title: "Location", value: "Bengaluru, Karnataka" },
];

const services = [
  "Frontend Engineering",
  "Backend Development",
  "Full Stack Development",
  "Vibe Coding with AI",
];

const emptyForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  message: ''
};

const Contact = () => {
  const [formData, setFormData] = useState(emptyForm);
  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      service: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, service, message } = formData;

    // Without EmailJS keys, fall back to opening the visitor's mail app.
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      const subject = `Inquiry: ${service || "General"}`;
      const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: `${firstName} ${lastName}`.trim(),
          reply_to: email,
          phone,
          service: service || "General",
          message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      setFormData(emptyForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 text-center xl:text-left">
              <h3 className="text-4xl font-extrabold">
                Let&apos;s Work <span className="text-accent">Together</span>
              </h3>
              <p className="text-white/60">
                Have a project, role, or idea in mind? Send me a message and I&apos;ll get back to you soon.
              </p>
            </div>

            <ul className="flex flex-wrap justify-center xl:justify-start gap-x-6 gap-y-3">
              {info.map((item) => (
                <li key={item.title} className="flex items-center gap-2 text-sm">
                  <span aria-hidden="true" className="text-accent">{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} className="text-white/80 hover:text-accent transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-white/80">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-6 xl:p-10 bg-[#27272c] rounded-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  aria-label="First name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  aria-label="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  aria-label="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <Select value={formData.service} onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full" aria-label="Service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                className="h-[150px]"
                placeholder="Type your message here"
                aria-label="Message"
                required
                value={formData.message}
                onChange={handleChange}
              />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Button
                  type="submit"
                  size="md"
                  disabled={status === "sending"}
                  className="max-w-40 flex items-center max-h-[45px] disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </Button>
                <p role="status" aria-live="polite" className="text-sm">
                  {status === "sent" && (
                    <span className="text-accent">Thanks! Your message has been sent.</span>
                  )}
                  {status === "error" && (
                    <span className="text-red-400">
                      Something went wrong. Please email me at {CONTACT_EMAIL}.
                    </span>
                  )}
                </p>
              </div>
            </form>
          </div>

          <div className="hidden md:block">
            <Image
              src={contactImage}
              alt="Illustration of a person at a laptop surrounded by email, chat, and contact icons"
              placeholder="blur"
              sizes="(min-width: 1280px) 50vw, 100vw"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
