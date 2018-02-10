const machine = {
  // states as objects. their possible inputs as methods
  'idle': {
    click: function() {
      // click
    }
  },
  'fetching': {
    success: function() {
    },
    failure: function() {
    }
  },
  'failed': {
    retry: function() {
    }
  }
}