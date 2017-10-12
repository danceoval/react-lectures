import React, {Component} from 'react';
import {connect} from 'react-redux';

import ItemContainer from './ItemContainer'
import {setItem, sendPayment, updateOrder} from '../../redux/action-creators/actions';

const mapState = ({item, books, order, sauces, paymentInfo}) => ({item, books, order, sauces, paymentInfo});
const mapDispatch = { setItem, sendPayment, updateOrder };

export default connect(mapState, mapDispatch)(ItemContainer); 