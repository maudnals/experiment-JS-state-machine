const machine = {
  // initial state
  // -----------
  state: 'idle',
  // transitions
  // -----------
  transitions: {
  // states as objects
  // possible inputs (transitions) as methods
  // state names just as namespaces
    'idle': {
      click: function () {
        // click
      }
    },
    'fetching': {
      success: function () {
      },
      failure: function () {
      }
    },
    'failed': {
      retry: function () {
      }
    }
  },
  // helper methods
  // -----------
  changeStateTo: function(newState) {
    this.state = newState;
  },
  dispatch: function(actionName) {
    // action as a function
    const action = this.transitions[this.state][actionName];
  }

}