import ultra from "ultra";
import importmap from "./importmap.json" assert { type: "json" };

await ultra({
  importmap,
});
