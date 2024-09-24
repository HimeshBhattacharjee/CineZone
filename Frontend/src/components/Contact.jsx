import { useState, useRef, useEffect } from "react";
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      toast.error('Name field is required!');
      return;
    }

    if (!form.message.trim()) {
      toast.error('Message field is required!');
      return;
    }

    setLoading(true);

    setLoading(false);
    toast.success('Thank you for your feedback!');

    setForm({
      name: '',
      message: '',
    });
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-screen-lg mx-auto px-4 md:px-8">
      <h1 className="text-center text-4xl font-bold mb-4 mt-20">Contact</h1>
      <p className="text-center text-lg mb-8">Get in Touch</p>
      <div className="w-full md:w-2/3 lg:w-1/2 bg-gradient-to-r from-violet-500 via-red-500 to-yellow-500 p-8 rounded-2xl shadow-lg">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-slate-800 py-3 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-slate-800 py-3 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-gradient-to-b from-red-500 to-yellow-500 py-3 px-8 outline-none w-fit text-black 
            font-bold shadow-lg rounded-full transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none hover:text-white"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
      <div className="mt-6">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <button className="bg-gradient-to-r from-violet-600 to-red-600 text-white px-6 py-3 rounded-full hover:scale-105 hover:bg-gradient-to-b duration-300 mb-6">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;