module.exports = function({ types: t }) {
  return {
    name: 'minify-object-property',
    visitor: {
      MemberExpression(path) {
        const node = path.node;
        if (t.isObjectExpression(node.object) && t.isIdentifier(node.property)) {
          const perpertyName = node.property.name;
          const properties = node.object.properties;
          const targetProperty = properties.find((p) => {
            return p.key.name === perpertyName && (t.isBooleanLiteral(p.value) || t.isUnaryExpression(p.value));
          });

          if (targetProperty) {
            path.replaceWith(targetProperty.value);
          }
        }
      },
    },
  };
};
