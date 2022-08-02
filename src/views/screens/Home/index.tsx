// Controllers
import useControllers from "@/controllers";
import useComponents from "@/views/components";

// Styles
import { StyledGridContent } from "./Home.styles";

// Interfaces
import { CardInterface } from "@/views/components/Card/Card.interface";

const Home = () => {
  // Components
  const { Card } = useComponents();

  //controllers
  const { useScreenHooks } = useControllers();
  const { useHome } = useScreenHooks();
  const { list } = useHome();

  return (
    <div className="p-4 text-center space-y-4">
      <StyledGridContent>
        {list && list.length > 0 && list.map((v: CardInterface, i: number) => (
          <Card
            key={i}
            title={v.title}
            message={v.message}
            hostname={v.hostname}
            time={v.time}
            success={v.success}
          />
        ))}
      </StyledGridContent>
    </div>
  );
};

export default Home;
