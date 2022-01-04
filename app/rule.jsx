import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import { marked } from "marked";


const rulesPath = path.join(__dirname, "../..", "rules");

export async function getRules() {
  const dir = await fs.readdir(rulesPath);
  return Promise.all(
    dir.map(async filename => {
      const file = await fs.readFile(path.join(rulesPath, filename), "utf8");
      const { attributes, body } = parseFrontMatter(file);
      const html = marked(body);
      return {
        ...attributes,
        body: html,
      };
    }
  ));
};

export default function sortedRules() {
  return getRules()
    .then(rules => {
      return rules.sort((a, b) => {
        return a.order - b.order;
      });
    });
}