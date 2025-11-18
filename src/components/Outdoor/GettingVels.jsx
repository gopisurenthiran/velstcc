/* components/GettingToVels.jsx */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

/* Replace with your real files */


const ITEMS = [
  { icon: "/assets/plane.svg", title: "4KM", sub: "from the airport" },
  { icon: "/assets/plane.svg", title: "4KM", sub: "from the upcoming new parandur airport" },
  { icon: "/assets/train.svg", title: "4KM", sub: "from the upcoming new thirumazhisai metro" },
  { icon: "/assets/bus.svg", title: "MTC Buses to VELS City", sub: "Monday – Sunday, from 6 AM – 9 PM" },
  { icon: "/assets/car.svg", title: "Seamlessly navigable", sub: "on all map apps" },
];



/* Animation presets */
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const listParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};

const listItem = {
  hidden: { opacity: 0, x: -25 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45 } }
};

export default function GettingToVels() {
  return (
    <section className="bg-white" id="getting">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="primary-title text-black"
        >
         Plan. Connect. Create.

        </motion.h2>

        {/* Paragraph */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-3 max-w-3xl secondary-description text-black/70"
        >
         Whether you’re envisioning a grand production, a cultural showcase, or a business convention,
          we’re here to make it seamless. Reach out to our team to explore bookings, availability, and
          tailored arrangements for your next event or shoot.
        </motion.p>

        {/* Layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

          <motion.div
  className="relative overflow-hidden shadow-md aspect-square "
  initial={{ opacity: 0, scale: 1.03 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>

            <iframe
              title="VELS City Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990136.8360316637!2d77.74080859375!3d13.036562500000011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528b31c8a9acb9%3A0x6f6093af61250de5!2sVELS%20Film%20City!5e0!3m2!1sen!2sin!4v1763122075154!5m2!1sen!2sin%22"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full "
            ></iframe>
          </motion.div>

          {/* RIGHT: Icon List */}
          <motion.ul
            variants={listParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 md:space-y-7 flex flex-col justify-center"
          >
            {ITEMS.map((it, idx) => (
              <motion.li
                key={idx}
                variants={listItem}
                className="flex items-start gap-4"
              >
                <img src={it.icon} alt="" className="shrink-0 mt-0.5" loading="lazy" />
                <div className="leading-tight">
                  <div className="secondary-subtitle text-black">
                    {it.title}
                  </div>
                  <div className="secondary-description text-black/70">
                    {it.sub}
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
