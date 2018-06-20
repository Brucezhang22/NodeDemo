import React, { Component } from "react";
import {
    View,
    AsyncStorage,
    KeyboardAvoidingView,
    Text,
    ActivityIndicator
} from "react-native";
import {
    Card,
    Button,
    FormLabel,
    FormInput,
    Icon
} from "react-native-elements";
import { onSignIn } from "../auth";
import { createStackNavigator } from "react-navigation";
import axios from "axios";
//import { Header, Body } from "native-base";

class SignIn extends Component {
    state = {
        username: "vipul",
        password: "123456",
        username: '',
        loading: false
    };

    loginHandler = async () => {
        this.setState({ loading: true });
        try {
            let { data } = await axios
                .post("http://offer.kdamjibhai.com/api/login", {
                    username: this.state.username,
                    password: this.state.password
                })
                .then(response => {
                    //console.log(response.data.data.user_info.user_id);
                    //alert(response.data.data.message)
                    if (response.data.status_code === 200) {
                        if (response.data.data.status === "success") {
                            //alert('came here ')
                            AsyncStorage.setItem("loggedIn", "true");
                            AsyncStorage.setItem('userid', response.data.data.user_info.user_id);

                            this.setState({ loading: false });
                            this.props.navigation.navigate("SignedIn");
                        }
                    } else {
                        alert(response.data.data.message);
                        this.setState({ loading: false });
                    }
                });
        } catch (err) {
            console.log(err);
        }

    };

    render() {
        return (
            <View
                backgroundColor="#2b3643"
                style={{ flex: 1, paddingVertical: "10%" }}
            >
                <Card>
                    <ActivityIndicator animating={this.state.loading} />
                    <FormLabel>Username</FormLabel>
                    <FormInput
                        placeholder="Username address..."
                        onChangeText={username => this.setState({ username })}
                        autoCapitalize="none"
                    />
                    <FormLabel>Password</FormLabel>
                    <FormInput
                        secureTextEntry
                        placeholder="Password..."
                        onChangeText={password => this.setState({ password })}
                    />
                    <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="#03A9F4"
                        title="SIGN IN"
                        onPress={this.loginHandler}
                    />
                </Card>
            </View>
        );
    }
}

export default SignIn;
