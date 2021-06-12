import React from "react";
import {connect} from "react-redux";
import Navigation from "./Navigation";

const mapStateToProps = (state) => ({
    NavigationItems: state.Navigation.NavigationItems,
})

const mapDispatchToProps = (dispatch) => ({})

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default NavigationContainer