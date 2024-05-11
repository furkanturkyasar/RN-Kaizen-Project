import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Tag } from '../../features/promotions/promotionTypes'

export interface TagsProps {
    tags: Tag[] | null
}

const Tags = ({tags}: TagsProps) => {

    console.log("tags: ", tags);

  return (
    <View style={styles.container}>
        <View style={styles.tags}>
            <Text>Tags</Text>
        </View>
    </View>
  )
}

export default Tags

const styles = StyleSheet.create({
    container: {
        marginTop: 18,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tags: {
    }
});