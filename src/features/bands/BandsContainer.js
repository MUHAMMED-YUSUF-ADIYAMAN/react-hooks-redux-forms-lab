import React from "react";
import {useDispatch, useSelector} from "react-redux";
import BandInput from "./BandInput";
import {bandAdded} from "./bandsSlice";

function BandsContainer() {
  const bands = useSelector((state) => state.bands.entities);
  const dispatch = useDispatch();

  const onBandSubmit = (name) => {
    dispatch(bandAdded(name));
  }

  return (<div>
    BandsContainer
    <BandInput onBandSubmit={onBandSubmit} />
    <ul>
      {bands.map((band,i) => {
        return <li key={i}>{band}</li>
      })}
    </ul>
    </div>);
}

export default BandsContainer;