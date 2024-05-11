import { SafeAreaView, ScrollView, Text, View, StyleSheet, Dimensions } from "react-native";
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from "../ui/components/Header";
import TagsContainer from "../ui/container/Tags";
import { fetchTagsListAction } from "../features/promotions/promotionsActions";

const { width, height } = Dimensions.get('screen')

export default function ExploreScreen() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTagsListAction())
    },[dispatch])

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            {/* <TagsContainer /> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 18,
        marginBottom: 0,
    },
    wrapper: {
    }
});