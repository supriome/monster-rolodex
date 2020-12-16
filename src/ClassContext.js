import React from 'react'


export const ThemeContext1 = React.createContext('color')

class ClassContext extends React.Component {
    static contextType = ThemeContext1
    render() {
        return (
            <ThemeContext1.Provider value="dk">
                <div>
                    context is {this.contextType}
                </div>
            </ThemeContext1.Provider>
        )
    }
}


export default ClassContext