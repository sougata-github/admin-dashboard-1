const SettingSection = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="section-container max-sm:text-center">
      <div className="flex items-center mb-4 max-sm:justify-center">
        {icon}
        <h2 className="text-heading">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default SettingSection;
