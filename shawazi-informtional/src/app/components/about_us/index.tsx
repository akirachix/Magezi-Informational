const About = () => {
  const teamMembers = [
    { name: "Brendah Khamali", role: "Software Developer", imgSrc: "/images/brenda.png" },
    { name: "Maureen Gatweri", role: "Software Developer", imgSrc: "/images/Gatweri.jpg" },
    { name: "Valentine Kinyua", role: "Software Developer", imgSrc: "/images/ValentineN.jpg" },
    { name: "Nakato Musana", role: "Software Developer", imgSrc: "/images/NakatoM.jpg" },
    { name: "Gloria Nyaga", role: "Software Developer", imgSrc: "/images/gloria.jpg" },
  ];

  const firstGroup = teamMembers.slice(0, 3);
  const secondGroup = teamMembers.slice(3); 

  return (
    <div className="mx-2 md:mx-4 lg:mx-8 font-jost">
      <div className="flex items-center justify-center mb-4">
        <div className="w-[500px] h-[2px] bg-primary mr-2 xs:w-[350px] sm:w-[375px]"></div>
        <h1 className="text-center text-[35px] text-primary xs:text-[24px] sm:text-[28px] sm:text-[24px] md:text-[30px] lg:text-[35px] font-bold px-4 whitespace-nowrap">About Us</h1>
        <div className="w-[500px] h-[2px] bg-primary ml-2 xs:w-[350px] sm:w-[375px]"></div>
      </div>
      <h4 className="text-center text-[25px] md:text-[20px]">Learn more about our talented team</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-y-12 gap-x-12 mt-8">
        {firstGroup.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.imgSrc}
              alt={member.name}
              className="h-60 w-60 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-lg object-cover"
            />
            <h1 className="text-[25px] mt-3 md:text-[22px] text-center font-bold">{member.name}</h1>
            <h5 className="text-[25px] md:text-[20px] text-center">{member.role}</h5>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2 gap-y-8 md:gap-y-12 md:gap-x-24 lg:gap-x-16 xl:gap-x-64">
          {secondGroup.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={member.imgSrc}
                alt={member.name}
                className="h-60 w-60 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-lg object-cover"
              />
              <h1 className="text-[25px] mt-3 md:text-[22px] text-center font-bold">{member.name}</h1>
              <h5 className="text-[25px] md:text-[20px] text-center">{member.role}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
