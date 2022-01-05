import { useEffect, useState } from 'react'

export const useForm = (initialState, cb = () => { },) => {
  const [fields, setFields] = useState(initialState)

  useEffect(() => {
    cb(fields)
    // eslint-disable-next-line
  }, [fields])

  const handleChange = ({ target }) => {
    var name = target.name
    var value = target.type === 'number' ? +target.value : target.value
    setFields(prevFields => ({ ...prevFields, [name]: value }))
  }

  return [
    fields,
    handleChange,
    setFields
  ]
}