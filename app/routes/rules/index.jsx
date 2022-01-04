import { useLoaderData } from "remix";
import sortedRules from "~/rule";
import rulesStyles from "~/styles/rules.css";

export const links = () => {
  return [{ rel: "stylesheet", href: rulesStyles }];
};

export const loader = () => {
  return sortedRules();
};

export default function Rules() {
  const rules = useLoaderData();
  return (
    <div >
      <h1>Official Munz Fantasy Football League Rules</h1>
      <h2>
        The rules of the Munz Fantasy Football League are as follows:
      </h2>
          {
            rules.map(post => (
              <div key={post.title} className="RuleSet" dangerouslySetInnerHTML={{__html: post.body }}/>
            ))
          }
    </div>
  );
};