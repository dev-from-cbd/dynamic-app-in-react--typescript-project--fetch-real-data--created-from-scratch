import { MainWrapper } from "./styles.module";

const DisplayWeather = () => {
  return (
    <MainWrapper>
      <div className="container">
        <div className="searchArea">
          <input type="text" placeholder="Enter a City" />
        </div>
        <div className="searchCircle">searchCircle</div>
      </div>
    </MainWrapper>
  );
};

export default DisplayWeather;
