import React, {  useContext } from 'react'
import { ThemeContext } from './App'
const LanguageContext = React.createContext('Chinese');

function Context() {
    const context = useContext(ThemeContext)
    // const Lang = useContext(LanguageContext)
    return (
        <LanguageContext.Consumer>
            {value => (
                <p>
                    this context is {context} ,but default is light.
                    language is {value}
                </p>
            )}
        </LanguageContext.Consumer>
    )
}

export default Context