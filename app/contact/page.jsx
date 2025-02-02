"use client"
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
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from 'react';

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", value: "+91 9345236199" },
  { icon: <FaEnvelope />, title: "Email", value: "sample@gmail.com" },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    value: "Code Corner, Midway Town 8284",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, service, message } = formData;

    // Construct the mailto link
    const subject = `Inquiry: ${service}`;
    const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:sample@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open mailto popup
    window.location.href = mailtoLink;
  };

  return (
    <motion.section
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
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[50%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Lets Work Together</h3>
              <p className="text-white/60">
                Fill out the form below to get in touch with us.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  name="phone"
                  type="text"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="React JS Developer">
                      React JS Developer
                    </SelectItem>
                    <SelectItem value="MERN Stack Developer">
                      MERN Stack Developer
                    </SelectItem>
                    <SelectItem value="Frontend Engineer">
                      Frontend Engineer
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                className="h-[150px]"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                type="submit"
                size="md"
                className="max-w-40 flex items-center max-h-[45px]"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
