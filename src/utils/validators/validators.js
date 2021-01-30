export const required = value => (value ? undefined : 'Required')

export const maxLengthCreator = (maxLength) => value => (value && value.length < maxLength  ? undefined : `Max length is ${maxLength} symbols`)

export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)