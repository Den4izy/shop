import React, { Component } from 'react'

export class categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'rezistors',
                    name: 'Резистори'
                },
                {
                    key: 'condensators',
                    name: 'Конденсатори'
                },
                {
                    key: 'light',
                    name: 'Освітлення'
                },
                {
                    key: 'tranzistors',
                    name: 'Транзистори'
                }
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}> {el.name}</div>
                ))
                }
            </div>
        )
    }
}

export default categories