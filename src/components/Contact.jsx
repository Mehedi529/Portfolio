import { useState } from "react";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        number:'',
        email: '',
        subject: '',
        message: ''

    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:' , formData);
    };



    return (
        <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">

            <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
                Contact
            </h1>

            <form onSubmit={handleSubmit} action="" method="" encType="multipart/form-data">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">

                    <div className="flex flex-col">
                        <label htmlFor="name" className="uppercase text-sm py-2">Name</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="number" className="uppercase text-sm py-2">Number</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" id="number" name="number" value={formData.number} onChange={handleChange}/>
                    </div>

                    <div className="flex flex-col py-2">
                        <label htmlFor="email" className="uppercase text-sm py-2">Email</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" id="email" name="name" value={formData.email} onChange={handleChange} />
                    </div>

                    <div className="flex flex-col py-2">
                        <label htmlFor="subject" className="uppercase text-sm py-2">Subject</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
                    </div>

                    <div className="flex flex-col py-4">
                        <label htmlFor="message" className="uppercase text-sm py-2">Message</label>
                        <textarea className="border-2 rounded-lg p-3 border-gray-300" rows='10' id="message" name="message" value={formData} onChange={handleChange}></textarea>

                        <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
                        Send Message
                        </button>
                    </div>


                </div>
            </form>
        </div>
    );
};

export default Contact;