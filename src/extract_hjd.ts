import * as fs from "fs";
import { RootData } from "../data/interfaces";
const json = fs.readFileSync(
  __dirname + "/../data/HangJeongDong_ver20220309.geojson",
  {
    encoding: "utf-8",
  }
);
const rootData: RootData = JSON.parse(json);
const gg = rootData.features?.filter(
  (f) => f.properties.ELEC_SIDO === "경기도"
);
rootData.features = gg;
fs.writeFileSync(__dirname + "/../data/gg_hjd.geojson", JSON.stringify(rootData), {
  encoding: "utf-8",
});
