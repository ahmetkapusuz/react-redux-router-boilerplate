import React from 'react';

export const List = (props) => {

    return (
        <div>
            <h3>{props.title}</h3>
            <ul>
                {props.items && props.items.map((item) => {
                        return (
                            <li key={item.id}>
                                <span>{item.name} ----- </span>
                                <span>{item.email} ----- </span>
                                <span>{item.website}</span>
                            </li>
                        )
                    }
                )}
            </ul>
        </div>
    );

};