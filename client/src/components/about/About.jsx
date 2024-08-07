import React from "react";
import { useFormik } from "formik";

const AboutPage = () => {
    // Initialize Formik
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        onSubmit: (values, { resetForm }) => {
            resetForm();
        },
    });

    return (
        <div className="min-h-screen relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-75"></div>
            <div className="relative z-10 max-w-4xl mx-auto p-8 text-white">
                <h1 className="text-5xl font-bold text-center mb-6">
                    About Us
                </h1>
                <div className="flex flex-col md:flex-row md:space-x-8">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                        <p className="text-lg mb-4">
                            We'd love to hear from you! Reach out to us through
                            any of the following ways:
                        </p>
                        <ul className="mb-8">
                            <li className="mb-2">Email: support@example.com</li>
                            <li className="mb-2">Phone: (123) 456-7890</li>
                            <li className="mb-2">
                                Address: 123 Main Street, Hometown, USA
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2">
                        <div className="w-full h-64 bg-gray-800">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019248242193!2d-122.40641718468344!3d37.78583497975669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c22f9c291%3A0x4b0e8e8f7e0f8f9e!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2s!4v1603929045142!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <h2 className="text-3xl font-bold mb-4">Contact Form</h2>
                    <form onSubmit={formik.handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-lg mb-1"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full py-2.5 px-4 text-sm text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Your Name"
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-red-500 text-xs mt-1">
                                    {formik.errors.name}
                                </div>
                            ) : null}
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-lg mb-1"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full py-2.5 px-4 text-sm text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Your Email"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500 text-xs mt-1">
                                    {formik.errors.email}
                                </div>
                            ) : null}
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-lg mb-1"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="block w-full py-2.5 px-4 text-sm text-white-900 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Your Message"
                            />
                            {formik.touched.message && formik.errors.message ? (
                                <div className="text-red-500 text-xs mt-1">
                                    {formik.errors.message}
                                </div>
                            ) : null}
                        </div>
                        <button
                            type="submit"
                            className="w-full mb-4 text-lg rounded-lg bg-blue-600 text-white py-2 transition-colors duration-300 hover:bg-blue-700"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
