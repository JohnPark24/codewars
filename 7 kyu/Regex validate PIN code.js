function validatePIN (pin) {
    const fourPin = /^[0-9]{4}$/.exec(pin)
    const sixPin = /^[0-9]{6}$/.exec(pin)

    return (pin == fourPin || pin == sixPin ? true : false);
  }