import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import { Promotion } from '../../features/promotions/promotionTypes';
import moment from 'moment';
import RenderHTML from 'react-native-render-html';
import BackButton from '../../assets/Back_Button.svg';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export interface DetailsProps {
    detail: Promotion | null;
}

const Details = ({detail}: DetailsProps) => {
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation();

    const { loading, error } = useSelector((state: any) => state.promotions);

    if (loading) {
        return (
          <View style={styles.centered}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        );
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }

    if (!detail) {
        return;
    }

    const calculateDaysLeft = (endDate: string) => {
        const today = moment();
        const end = moment(endDate, "DD.MM.YYYY");
        if (!end.isValid()) {
            console.log("Geçersiz tarih:", end);
            return null;
        }
        return end.diff(today, 'days') >= 0 ? "son " + end.diff(today, 'days') + " gün" : null;
    };

    const daysLeft = calculateDaysLeft(detail.RemainingText);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Image style={styles.bigImage} source={{uri: detail.ImageUrl}} />
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <BackButton />
                </TouchableOpacity>
                <View style={styles.brandIconContainer}>
                        <Image style={styles.brandIcon} source={{uri: detail.BrandIconUrl}} />
                    </View>
                    {daysLeft && (
                        <View style={styles.daysLeft}>
                            <Text style={styles.daysLeftText}>{daysLeft}</Text>
                        </View>
                    )}
                <View style={styles.contentContainer}>
                    <RenderHTML baseStyle={{fontSize: 16, fontWeight: '700'}} contentWidth={width} source={{ html: detail.Description}} />
                    {detail.PromotionDetailItemAreas && detail.PromotionDetailItemAreas.map((section, i) => {
                        return <View key={`sect_${i}`} style={styles.section}>
                            <Text style={styles.sectionTitle}>{section.Title}</Text>
                            <RenderHTML contentWidth={width} source={{ html: section.Description}} />
                        </View>
                    })}
                </View>
                
            </ScrollView>
            <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.joinButtonText}>Hemen Katıl</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollView: {
        flex: 1,
    },
    loading: {
        fontSize: 16,
        textAlign: 'center',
        margin: 20,
    },
    contentContainer: {
        paddingBottom: 80,  // Buton yüksekliği kadar veya daha fazla boşluk bırakın,
        margin: 12
    },
    bigImage: {
        width: '100%',
        height: 380,
        borderBottomLeftRadius: 100,
        position: 'relative'
    },
    brandIconContainer: {
        position: 'absolute',
        top: 310,
        left: 5,
        backgroundColor: "#fff",
        borderWidth: 5,
        borderColor: "#FFF",
        borderRadius: 56,
        zIndex: 2
    },
    brandIcon: {
        width: 55,
        height: 55,
        borderRadius: 56,
    },
    daysLeft: {
        position: 'absolute',
        top: 330,
        right: 5,
        backgroundColor: '#1D1E1C',
        width: 98,
        height: 33,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backButton: {
        position: 'absolute',
        top: 40,
        zIndex: 2,
        left: 15
    },
    daysLeftText: {
        color: "#FFF",
        fontSize: 13,
    },
    joinButton: {
        position: 'absolute',
        bottom: 15,
        backgroundColor: '#F40000',
        width: 340,
        height: 56,
        borderRadius: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    joinButtonText: {
        color: "#FFF",
        fontWeight: '700',
        fontSize: 14,
    },
    section: {
        marginTop: 20,
    },
    sectionTitle: {
        fontWeight: '700',
        fontSize: 16,
    }
});

export default Details;
