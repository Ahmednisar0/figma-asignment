import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-10">
      <div className="flex justify-center gap-6 mb-4">
        <Image 
          src="/images/fb.png"
          alt="Facebook Logo"
          width={20}
          height={10}
        />
        <Image 
          src="/images/insta.png"
          alt="Instagram Logo"
          width={20}
          height={10}
        />
        <Image 
          src="/images/vector.png"
          alt="Twitter Logo"
          width={20}
          height={10}
        />
        <Image 
          src="/images/Linkedin.png"
          alt="LinkedIn Logo"
          width={20}
          height={10}
        />
      </div>
      <p className="text-center font-heebo text-lg font-semibold">
        Copyright &copy; 2020 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
