import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, FONTS, icons } from "../constants";

const HeaderBar = ({right}) => {

    const navigation = useNavigation();
    
    return (
        <View
            style={{
                paddingHorizontal: SIZES.padding,
                flexDirection: 'row'
            }}
        >
            <View
                style={{
                    flex: 1,
                    alignItems: 'flex-start'
                }}
            >
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back_arrow}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.gray
                        }}
                    />
                    <Text
                        style={{
                            marginLeft: SIZES.base,
                            ...FONTS.h2,
                        }}
                    >
                    Back
                    </Text>
                </TouchableOpacity>
            </View>

            {/* header의 별표표시는 detail view에서만 보여주고 transaction에서는
            안 보여주려고 함
            header componenet는 공통으로 설정하고 right가 true일 때만 보여주도록
            설정하고, transaction에서는 right를 false로 설정해서 별표 component가
            실행되지 않도록 함! */}
            {right &&
                <View
                    style={{
                        flex: 1,
                        alignItems: 'flex-end'
                    }}
                >
                    <TouchableOpacity>
                        <Image
                            source={icons.star}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

export default HeaderBar;