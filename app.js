import React from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import PickImage from "./camera";

export default class App extends React.Component{
    render() {
        return <PickImage/>;
    }
}