import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, Text, View } from 'react-native';

export const SPLASH_GREEN = '#168D3F';

/** Native açılış ekranının hemen ardından oynar: logo yaylanarak büyür, yazı belirir, sonra tüm katman solar. */
export function AnimatedSplash({ onDone }: { onDone: () => void }) {
  const scale = useRef(new Animated.Value(0.6)).current;
  const logoOp = useRef(new Animated.Value(0)).current;
  const wordOp = useRef(new Animated.Value(0)).current;
  const wordY = useRef(new Animated.Value(14)).current;
  const wobble = useRef(new Animated.Value(0)).current;
  const out = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const native = true;
    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoOp, { toValue: 1, duration: 280, useNativeDriver: native }),
        Animated.spring(scale, { toValue: 1, friction: 5, tension: 70, useNativeDriver: native }),
      ]),
      Animated.parallel([
        Animated.timing(wordOp, { toValue: 1, duration: 320, useNativeDriver: native }),
        Animated.timing(wordY, { toValue: 0, duration: 320, easing: Easing.out(Easing.cubic), useNativeDriver: native }),
        Animated.sequence([
          Animated.timing(wobble, { toValue: 1, duration: 140, useNativeDriver: native }),
          Animated.timing(wobble, { toValue: -1, duration: 200, useNativeDriver: native }),
          Animated.timing(wobble, { toValue: 0, duration: 140, useNativeDriver: native }),
        ]),
      ]),
      Animated.delay(450),
      Animated.timing(out, { toValue: 0, duration: 380, useNativeDriver: native }),
    ]).start(({ finished }) => { if (finished) onDone(); });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const rot = wobble.interpolate({ inputRange: [-1, 1], outputRange: ['-4deg', '4deg'] });
  return (
    <Animated.View pointerEvents="auto" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: SPLASH_GREEN, alignItems: 'center', justifyContent: 'center', opacity: out, zIndex: 100 }}>
      <Animated.View style={{ opacity: logoOp, transform: [{ scale }, { rotate: rot }] }}>
        <Image source={require('../../assets/splash-icon.png')} style={{ width: 240, height: 240 }} resizeMode="contain" />
      </Animated.View>
      <Animated.View style={{ opacity: wordOp, transform: [{ translateY: wordY }], marginTop: 8, alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 34, fontWeight: '800', letterSpacing: 0.5 }}>duba</Text>
        <Text style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14, textAlign: 'center', marginTop: 2 }}>Ehliyet sınavına hazırlan</Text>
      </Animated.View>
    </Animated.View>
  );
}
