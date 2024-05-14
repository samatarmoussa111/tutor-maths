const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" w-full bg-card py-4 px-6 mt-10">
      <span className="text-muted-foreground text-sm">
        {`Copyright @ ${currentYear} | réalisée par `}{" "}
        <a
          href="mailto:samatarbarkadleh111@gmail.com"
          target="_black"
          className="underline hover:text-primary transition-all duration-300"
        >
          {`Samatar Moussa - Prof de Mathématiques`}
        </a>
      </span>
    </div>
  );
};

export default Footer;
