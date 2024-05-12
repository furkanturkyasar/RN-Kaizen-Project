import React, { useRef, useState } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Promotion } from '../../features/promotions/promotionTypes';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import RenderHtml from 'react-native-render-html';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { fetchPromotionDetailAction } from '../../features/promotions/promotionsActions';


export interface ExploreCarouselProps {
    promotionsList: Promotion[] | null;
}

interface RenderItemProps {
    item: Promotion;
    index: number;
}

const ExploreCarousel = ({ promotionsList }: ExploreCarouselProps) => {

    const { width, height } = Dimensions.get('window');

    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const carouselRef = useRef<ICarouselInstance>(null);

    const navigation = useNavigation<any>();

    if (!promotionsList || promotionsList.length < 1) {
        return null;
    };

    const dispatch = useDispatch()

    const renderPagination = () => {
        return (
            <View style={styles.paginationContainer}>
                {promotionsList.map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.paginationDot,
                            { backgroundColor: activeIndex === index ? _.PromotionCardColor : 'grey' }
                        ]}
                    />
                ))}
            </View>
        );
    };

    const calculateDaysLeft = (endDate: string) => {
        const today = moment();
        const end = moment(endDate, "DD.MM.YYYY");

        if (!end.isValid()) {
            console.log("Geçersiz tarih:", end);
            return null;
        }

        const daysLeft = end.diff(today, 'days');
        return daysLeft >= 0 ? "son " + daysLeft + " gün" : null;
    };

    function modifyHtmlColor(htmlString: string) {
        return htmlString.replace(/color:\s*#[0-9A-Fa-f]{6}/g, 'color: #000000');
    }

    const handleOnPress = (item: Promotion) => {
        dispatch(fetchPromotionDetailAction(item.Id))
        navigation.navigate('Detail', { SeoName: item.SeoName, Id: item.Id });
    };
    

    function renderItem({item, index}: RenderItemProps) {

        const daysLeft = calculateDaysLeft(item.RemainingText) 

        const modifiedTitle = modifyHtmlColor(item.Title);

        return (
            <View key={`crl_item_${item.Id}`} style={styles.wrapper}>
                <View style={[styles.background, { backgroundColor: item.PromotionCardColor }]}></View>
                <View style={styles.inner}>
                        <Image style={styles.bigImage} source={{uri: item.ImageUrl}} />
                        <View style={styles.brandIconContainer}>
                            <Image style={styles.brandIcon} source={{uri: item.BrandIconUrl}} />
                        </View>
                        <View style={styles.title}>
                            <RenderHtml contentWidth={width} source={{ html: modifiedTitle }} />
                        </View>
                        <TouchableOpacity onPress={() => handleOnPress(item)} style={styles.detailButton}>
                             <Text style={{color: item.ListButtonTextBackGroudColor, fontWeight: '700', fontSize: 14}}>Daha Daha</Text>
                        </TouchableOpacity>
                        {
                            daysLeft &&
                            <View style={styles.daysLeft}>
                                <Text style={styles.daysLeftText}>{daysLeft}</Text>
                            </View>
                        }
                </View> 
            </View>
        )
    }


  return (
    <View style={styles.container}>
            <Carousel
                loop
                ref={carouselRef}
                width={width / 1.1}
                height={width / 1}
                data={promotionsList}
                mode='parallax'
                onSnapToItem={(index) => setActiveIndex(index)}
                renderItem={({ item, index }) => (
                    renderItem({item: item, index: index})
                )}
            />
            {renderPagination()}
    </View>
  )
}

export default ExploreCarousel

const styles = StyleSheet.create({
    container: {
        margin: 18,
        alignItems: 'center',
        height: '60%',
    },
    wrapper: {
        flex: 1,
        backgroundColor: 'transparent',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    background: {
        top: 15, right: 5,
        width: '98%', 
        height: "98%", 
        transform: [{skewY: '3 deg'}], 
        borderBottomRightRadius: 32,
        borderBottomLeftRadius: 26,
        position: 'absolute'
    },
    inner: {
        flex: 1,
        width: "100%",
        height: "100%",
        borderWidth: 2,
        borderColor: "#F4F6F5",
        backgroundColor: "#FFF",
        marginBottom: 16,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigImage: {
        width: '98%',
        height: '65%', 
        objectFit: 'cover', 
        borderRadius: 16, 
        position: 'absolute', 
        top: 5,  
        borderBottomLeftRadius: 100
    },
    brandIconContainer: {
        position: 'absolute',
        top: '50%', 
        left: 5,
        backgroundColor: "#fff",
        borderWidth: 5,
        borderColor: "#FFF",
        borderRadius: 56
    },
    brandIcon: {
        width: 55, 
        height: 55, 
        objectFit: 'contain',
        borderRadius: 56
    },
    title: {
        position: 'absolute',
        bottom: '15%'
    },
    detailButton: {
        position: 'absolute',
        bottom: "3%"
    },
    daysLeft: {
        position: 'absolute',
        top: '56%',
        right: 5,
        backgroundColor: '#1D1E1C',
        width: 98,
        height: 33,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    daysLeftText: {
        color: "#FFF",
        fontSize: 13
    },
    paginationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8
    }
});