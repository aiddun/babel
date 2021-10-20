import { declare } from "@babel/helper-plugin-utils";
import { types as t } from "@babel/core";

export default declare(() => {
  return {
    name: "proposal-empty-spread",
    visitor: {
      SpreadElement(path) {
        const node: t.SpreadElement = path.node;
        const { argument } = path.node;

        if (argument === undefined) {
          node.argument = t.arrayExpression([]);
        }
      },
    },
  };
});
