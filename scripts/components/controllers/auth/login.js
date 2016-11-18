'use strict';

import Login from '../../modules/admin/login';
import { connect } from 'react-redux';
import Ajax from '../ajax';

const mapStateToProps = state => state;

function mapDispatchToProps(dispatch) {
    return {
        handleLogin: function(form) {
            //ui event to show loading

            var ajax = new Ajax('/auth/login');
            console.log("ajax can be private?", ajax);
            ajax.send('post', form).then(function(data) {
                console.log(data);
            }).catch(function(err) {
                console.log("err!", err);
            });

            // request.post(API+'/auth/login')
            //     .send(form)
            //     .end(function(err, res) {
            //         console.log('kasdjf asdkfhj err, res', err, res)
            //     });
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
