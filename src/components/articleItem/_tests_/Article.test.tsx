import { render, fireEvent } from "@testing-library/react-native";
import ArticleItem from "../ArticleItem";

test("ArticleItem should render", () => {

    const article = {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Igor Bonifacic",
      title:
        "The latest 'Belle' trailer introduces us to the film's dazzling technicolor virtual world",
      description:
        "With Mamoru Hosoda’s latest movie opening in US theaters this Friday, Studio Chizu and the film’s distributor have shared a new trailer for Belle\r\n. The more than three-minute-long clip shows the movie’s opening scene in its entirety, introducing us to U, Bel…",
      url: "https://www.engadget.com/belle-trailer-u-virtual-world-234024067.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-01/c8d44190-7334-11ec-bd7d-84d991cbfb48",
      publishedAt: "2022-01-11T23:40:24Z",
      content:
        "With Mamoru Hosodas latest movie opening in US theaters this Friday, Studio Chizu and the films distributor have shared a new trailer for Belle\r\n. The more than three-minute-long clip shows the movie… [+781 chars]",
    };

  const { toJSON } = render(
    <ArticleItem article={article}/>
  );

  expect(toJSON()).toMatchSnapshot();
});
