import Link from "next/link";
export default function Contact(){
    return (
        <div className="max-w-5xl mx-auto px-6 py-12 bg-[#f9f9f9] rounded-xl shadow-lg animate__animated animate__fadeInUp mt-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#41228e] mb-4">Get In Touch</h1>
            <p className="text-lg text-gray-700">I love to hear from you! Whether you have a question, project, or just want to say hello, feel free to reach out.</p>
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#41228e] focus:border-[#41228e] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#41228e] focus:border-[#41228e] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <textarea
                    required
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#41228e] focus:border-[#41228e] transition-all"
                    rows={4}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#41228e] text-white font-semibold rounded-md hover:bg-[#deab7f] focus:ring-2 focus:ring-[#41228e] transition-all"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
    
            <div className="bg-white p-8 rounded-lg  shadow-lg flex flex-col justify-between">
              <h2 className="text-2xl font-semibold text-[#41228e] mb-4">Contact Details</h2>
              <div className="space-y-4">

                <div className="flex items-center space-x-2 2xl:-mt-16">
                  <p className="text-lg text-gray-700">92838781232</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Link href={'mailto:laibanoman135@gmail.com'} className="text-lg text-gray-700">laibanoman135@gmail.com</Link>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-lg text-gray-700">Karachi, Pakistan</p>
                </div>
              </div>
    
              <div className="mt-8">
                <Link href={'https://www.linkedin.com/in/laiba-noman-158663290/'} className="text-xl font-semibold text-[#41228e] mb-4">Follow Me</Link>
               
              </div>
            </div>
          </div>
      </div>
      );
    };