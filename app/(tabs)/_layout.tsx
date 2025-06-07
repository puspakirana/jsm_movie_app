import { Tabs } from "expo-router";
import React from "react";

const _Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: 'Home'
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    headerShown: false,
                    title: 'Search'
                }}
            />
            <Tabs.Screen
                name="save"
                options={{
                    headerShown: false,
                    title: 'Save'
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    title: 'Profile'
                }}
            />
        </Tabs>
    )
}

export default _Layout