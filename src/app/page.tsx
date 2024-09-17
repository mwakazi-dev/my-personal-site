import About from "@/components/About";
import Bio from "@/components/Bio";
import Desire from "@/components/Desire";
import Profile from "@/components/Profile";
import Salutation from "@/components/Salutation";
import Socials from "@/components/SocialNetwork";

const Home = () => {
  return (
    <div className="bg-background ">
      <Salutation />
      <Profile />
      <About title="About" />
      <Bio title="Bio" />
      <Desire title="I ❤️" />
      <Socials title="On the Web" />
    </div>
  );
};

export default Home;
