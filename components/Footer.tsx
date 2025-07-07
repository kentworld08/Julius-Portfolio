const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-[#F9FAFB] py-[24px] px-[9px] md:px-[80px] flex items-center justify-center mb-[140px]">
      <h1 className="font-['Century_Gothic'] font-normal text-[14px]">
        @ {year} | <span className="underline ">Designed</span> with ❤️ by
        Julius Adebo
      </h1>
    </footer>
  );
};

export default Footer;
