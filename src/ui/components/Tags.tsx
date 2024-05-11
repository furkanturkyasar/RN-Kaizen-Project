import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Tag } from '../../features/promotions/promotionTypes'
import SearchIcon from '../../assets/Small_Brand_Logo_1.svg';

export interface TagsProps {
    tags: Tag[] | null
}

const Tags = ({tags}: TagsProps) => {

    if (!tags || tags.length < 1) {
        return null;
    }

  return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} scrollIndicatorInsets={{'bottom': -2}} horizontal style={styles.tags}>
            <TouchableOpacity style={[styles.tag, { borderColor: "#ECEEEF"}]} key={`tags_search`}>
                    <SearchIcon />
                    <Text numberOfLines={1} style={styles.tagText}>
                        Firsat Bul
                   </Text>
            </TouchableOpacity>
            {
                tags.map((tag) => {
                    return (
                        <TouchableOpacity style={[styles.tag, { borderColor: "#ECEEEF"}]} key={`tags_${tag.Id}`}>
                            <Image source={{ uri: tag.IconUrl }} style={styles.image} />
                            <Text numberOfLines={1} style={styles.tagText}>
                                {tag.Name}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    </View>
  )
}

export default Tags

const styles = StyleSheet.create({
    container: {
        margin: 18,
        marginRight: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tags: {
       
    },
    tag: {
        width: 105,
        height: 36,
        borderWidth: 1.5,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 12,
        marginRight: 6
    },
    tagText: {
        color: "#1D1E1C",
        fontSize: 12,
        fontWeight: '400',
        maxWidth: 65
    },
    image: {
        width: 24,
        height: 24,
        borderRadius: 24,
        objectFit: 'contain'
    }
});