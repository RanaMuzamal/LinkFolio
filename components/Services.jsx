import { IoMdAnalytics, IoMdApps, IoMdCafe } from "react-icons/io";
export const services = [
  {
    title: "Responsive Web Development",
    icon: <IoMdAnalytics />,
    description:
      "Crafting seamless user experiences: With frontend web technologies, and cutting-edge frameworks, I create engaging and responsive web solutions that adapt flawlessly to all devices.",
  },
  {
    title: "Custom Web Solutions",
    icon: <IoMdApps />,
    description:
      "Tailoring precision to your unique needs: From concept to deployment, I build web applications with precision and efficiency, meeting your unique requirements using the latest technologies.",
  },
  {
    title: "User-Centric Web Solutions",
    icon: <IoMdCafe />,
    description:
      "Putting your audience at the heart of it all: I don't just build websites; I craft digital experiences that prioritize your users. Every interaction is intuitive, engaging, and enjoyable, thanks to cutting-edge technologies that bring your vision to life.",
  },
];

function Services() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
          Services
        </h1>
        <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
          Below Services I can provide :)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-4 flex justify-center bg-gray-100 rounded-md mb-4 text-5xl">
                {service.icon}
              </div>
              <h4 className="font-bold text-gray-700 text-lg mb-4">
                {service.title}
              </h4>
              <p className="font-normal text-gray-500 text-md">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
