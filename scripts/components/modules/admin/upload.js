'use strict'

import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class Upload extends Component {

    constructor() {
        super();
        this.state = {
            files: []
        }
    }

    handleDrop = (accepted, rejected, evt) => {
        // console.log("accept", accepted);
        // console.log("reject", rejected);
        // console.log("evt", evt);
        this.setState({
            files: accepted
        });
        // this.props.handleUpload(accepted);
    }

    handleUpload = e => {
        // console.log("this.props?", this.state.files)
        e.preventDefault();
        this.props.handleUpload(this.state.files);
        // console.log("this.refs.form", this.refs.form);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.ui && !nextProps.ui.isUploadingImages) {
            this.clearImagePreview();
        }
    }

    clearImagePreview() {
        this.setState({
            files: []
        });
    }

    isLoading() {
        return (<div className="loading"><i className="icon-loading animate-spin"></i></div>);
    }

    render() {
        return (
            <div className="content">
                {this.props.ui.isUploadingImages ? this.isLoading() : null}
                <h1>Upload</h1>
                <Dropzone onDrop={this.handleDrop}>
                    {this.state.files.length > 0 ? <div><h2>Uploading {this.state.files.length} files...</h2></div> : null}
                </Dropzone>
                <button type='submit' onClick={this.handleUpload}>Submit</button>
            </div>
        )
    }
}

export default Upload;
