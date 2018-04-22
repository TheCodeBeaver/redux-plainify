module.exports = function() {
  return function(args) {
    return function(next) {
      return function(action) {
        if (
          typeof action === "object" &&
          action.constructor &&
          action.constructor !== Object
        ) {
          var newAction = {};
          for (var property in action) {
            if (action.hasOwnProperty(property)) {
              newAction[property] = action[property];
            }
          }
          return next(newAction);
        }

        return next(action);
      };
    };
  };
};
