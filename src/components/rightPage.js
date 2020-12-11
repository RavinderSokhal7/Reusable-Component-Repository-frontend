import React from "react";
import { Link } from "react-router-dom";
import Auxx from "./hoc/Auxx";
import Loading from "./Loading/Loading";
import RightPageCard from "./rightPageCard";
import SearchBox from "./SearchBox/SearchBox";

const rightPage = (props) => {
  let components = <Loading />;
  if (props.components !== null) {
    components = props.components.map((comp) => {
      return (
        <Link to={"/componentDetail/" + comp.id} key={comp.id}>
          <RightPageCard
            id={comp.id}
            techType={comp.techType}
            componentFunction={comp.componentFunction}
            name={comp.name}
            imgUrl={comp.imgUrl}
            isPublic={comp.isPublic}
            componentOs={comp.componentOs}
            version={comp.componentVersion}
            domain={comp.domain}
            input={comp.componentInput}
            output={comp.componentOutput}
            description={comp.description}
          />
        </Link>
      );
    });
  }
  return (
    <Auxx>
      {/* <input
        placeholder="Search Bar"
        style={{
          maxWidth: "700px",
          width: "700px",
          margin: "10px 150px 10px 10px",
        }}
      /> */}
      <div>
        <SearchBox
          onChangeHandler={props.searchBoxChangeHandler}
          onSubmitHandler={props.searchBoxChangeHandler}
        />
      </div>
      <div>{components}</div>

      {/* <RightPageCard />
      <RightPageCard />
      <RightPageCard />
      <RightPageCard />
      <RightPageCard />
      <RightPageCard /> */}
    </Auxx>
  );
};

export default rightPage;
