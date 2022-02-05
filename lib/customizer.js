import Dictionary from "./Dictionary";
import { Breakpoints } from "./Breakpoints";
import { getValueTheme } from "./functions";

const customizer = (style) => {
  const dictionary = Dictionary; //OBJECT
  const breakPoints = Breakpoints; //OBJECT

  let output = "";

  //functions
  const getBreak = (key, value) => {
    let subOutput = "";
    subOutput += breakPoints[key] + "{"; //@media (min-width: Npx){
    for (const subProp in value)
      subOutput += addProperties(subProp, value[subProp]);
    subOutput += "}";
    return subOutput;
  };

  const addProperties = (key, value, object) => {
    let subOutput = "";
    if (typeof value === "string") {
      value = getValueTheme(value);
      subOutput += dictionary[key] + value + ";";
    } else {
      let global = "";
      let normal = "";

      Object.entries(value).map((entry) => {
        let [subKey, subValue] = entry;

        if (key === "break") subOutput += getBreak(subKey, subValue);
        else if (key === "global")
          global += dictionary[subKey] + subValue + ";";
        else normal += addProperties(subKey, subValue);
      });

      subOutput += key + "{" + normal + "}";
      subOutput += global +
        ":hover { " + global + "}" +
        ":active { " + global + "}" +
        ":focus { " + global + "}";
    }
    return subOutput;
  };

  Object.entries(style).map((entry) => {
    let [key, value] = entry;

    if (typeof value === "string") {
      value = getValueTheme(value);
      output += dictionary[key] + value + ";";
    } else output += addProperties(key, value, style);
  });

  return output;
};
export default customizer;
