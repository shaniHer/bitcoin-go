import { useEffect, useState } from 'react'

export const ContactFilter = ({ onFilter }) => {
    const [term, setTerm] = useState('')

    useEffect(() => {
        onFilter(term)
    }, [term])

    const handleChange = ({ target }) => {
        var name = target.name
        var value = target.type === 'number' ? +target.value : target.value
        setTerm(prevFields => ({ ...prevFields, [name]: value }))
    }

    return (
        <div>
            <label htmlFor="term">
                <input type="text" name="term" onChange={handleChange} placeholder="Search" />
            </label>
        </div>
    )

}
