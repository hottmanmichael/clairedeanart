'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class Index extends Component {


    render() {
        return (
            <div>
                <h1>Admin Home</h1>
                <hr/>
                <h2>Temp Links</h2>
                <ul>
                    <li>
                        <Link to='/admin/upload'>Upload</Link>
                    </li>
                    <li>
                        <Link to='/admin/gallery'>Gallery</Link>
                    </li>
                </ul>

            </div>
        )
    }


}




export default Index;
