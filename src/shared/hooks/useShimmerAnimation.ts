import { useEffect, useRef } from "react"
import { Animated } from "react-native";

export const useShimmerAnimation = (isLoading:boolean) => {
    const shimmerAnim = useRef(new Animated.Value(0)).current;

    useEffect(()=>{
        if(isLoading){
            const animation = Animated.loop(
                Animated.sequence([
                    Animated.timing(shimmerAnim,{
                        toValue:1,
                        duration:1000,
                        useNativeDriver:true
                    }),
                    Animated.timing(shimmerAnim,{
                        toValue:0,
                        duration:1000,
                        useNativeDriver:true
                    })
                ])
            );
            animation.start();
            return () => animation.stop();
        }else{
            shimmerAnim.stopAnimation();
            shimmerAnim.setValue(0);
        }
    },[isLoading,shimmerAnim]);

    const translateX = shimmerAnim.interpolate({
        inputRange:[0,1],
        outputRange:[-100,100]
    });

    return { translateX };
}