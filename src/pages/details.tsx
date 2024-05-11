import { SafeAreaView, ScrollView, Text, View, StyleSheet, Dimensions } from "react-native";
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from "../ui/components/Header";
import TagsContainer from "../ui/container/Tags";
import { fetchPromotionDetailAction, fetchPromotionsListAction, fetchTagsListAction } from "../features/promotions/promotionsActions";
import ExploreCarouselContainer from "../ui/container/ExploreCarousel";

const { width, height } = Dimensions.get('screen')


export default function DetailScreen({route}: any) {
    const dispatch = useDispatch();

    useEffect(() => {
        if (route.params.Id && dispatch) {
            dispatch(fetchPromotionDetailAction(route.params.Id))
        }
    }, [route.params])


    return (
        <SafeAreaView style={styles.container}>
            <Text>
                
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
    }
});