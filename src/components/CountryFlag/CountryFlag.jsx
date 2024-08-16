/* eslint-disable react/prop-types */
import Flag from "react-flagkit";

function CountryFlag({ countryCode, className: clsName }) {
  return <Flag country={countryCode} className={clsName} />;
}

export default CountryFlag;
