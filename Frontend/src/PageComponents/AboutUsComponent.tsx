type UserRoute = string;

const AboutUsComponent = () => {
  const PageTitle: UserRoute = `Ever Wanted to Seee 
  Your Calories in Amount You Eat That's What this is what we Do?`;

  return (
    <div className="info">
      <p className="text-center font-bold relative top-60">{PageTitle}</p>
    </div>
  );
};

export default AboutUsComponent;
