// Controllers
import useControllers from "@/controllers";
import useComponents from "@/views/components";

// img
import reactLogo from "@/assets/img/react.svg"

const Home = () => {
  // Components
  const { Typography } = useComponents();

  //controllers
  const { useScreenHooks } = useControllers();
  const { useHome } = useScreenHooks();
  const { handleShowToast, name } = useHome();

  return (
    <div className="p-4 text-center space-y-4">
      <Typography
        variant={"h1"}
        className={"text-red-800"}
      >
        Hello word!
      </Typography>
        <div>
            <img src={reactLogo} alt={"React Logo"} title={"React Logo"} width={"50px"} height={"50px"} className={"mx-auto"}/>
        </div>
      <Typography variant={"p"} className={"text-base text-gray-800 font-semibold"}>
        Example to show name after call API and use Redux, the name is:{" "}
        <b>{name}</b>
      </Typography>
      <button
        onClick={handleShowToast}
        className={"bg-blue-400 rounded-full py-2 px-6 text-white font-black"}
      >
        Click me!
      </button>
    </div>
  );
};

export default Home;
